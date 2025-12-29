import { MongoClient } from "mongodb";

const uri = process.env.MONGO_URI;
const client = new MongoClient(uri);

export async function POST(req) {
  try {
    const { marks } = await req.json();

    // ------------------ BASIC VALIDATION ------------------
    if (marks === undefined || marks < 0 || marks > 300) {
      return new Response(
        JSON.stringify({ error: "Marks must be between 0 and 300" }),
        { status: 400 }
      );
    }

    await client.connect();
    const db = client.db("rank_predictor");

    // ------------------ FETCH HISTORICAL DATA ------------------
    const years = [2024, 2025];
    const percentiles = [];

    for (const year of years) {
      const docs = await db
        .collection("jee_main_marks_percentile")
        .find({ exam: "JEE_MAIN", year })
        .sort({ marks_min: 1 })
        .toArray();

      let range =
        docs.find(d => marks >= d.marks_min && marks <= d.marks_max);

      // 🛟 If marks exceed historical max → clamp to top range
      if (!range && marks > docs[docs.length - 1].marks_max) {
        range = docs[docs.length - 1];
      }

      // 🛟 If marks below historical min → clamp to lowest range
      if (!range && marks < docs[0].marks_min) {
        range = docs[0];
      }

      const interpolated =
        range.percentile_min +
        ((marks - range.marks_min) /
          (range.marks_max - range.marks_min)) *
          (range.percentile_max - range.percentile_min);

      percentiles.push(interpolated);
    }

    const p2024 = percentiles[0];
    const p2025 = percentiles[1];

    // ------------------ TREND LOGIC (SOFT) ------------------
    let predictedPercentile =
      p2025 + 0.5 * (p2025 - p2024);

    // ------------------ HARD CLAMP ------------------
    predictedPercentile = Number(predictedPercentile.toFixed(3));
    predictedPercentile = Math.min(99.999, Math.max(0.001, predictedPercentile));

    // ------------------ TOTAL CANDIDATES ------------------
    const meta = await db
      .collection("jee_main_meta")
      .findOne({ exam: "JEE_MAIN", year: 2026 });

    const totalCandidates = meta?.total_candidates || 1545000;

    // ------------------ 🏆 TOPPER OVERRIDE ------------------
    if (marks >= 295) {
      return new Response(
        JSON.stringify({
          marks,
          year: 2026,
          predicted_percentile: "99.999",
          predicted_percentile_range: ["99.995", "99.999"],
          predicted_rank_range: [1, 20],
          total_candidates: totalCandidates
        }),
        { status: 200 }
      );
    }

    // ------------------ UNCERTAINTY MODEL ------------------
    let delta;
if (predictedPercentile >= 99.995) delta = 0.001;
else if (predictedPercentile >= 99.99) delta = 0.002;
else if (predictedPercentile >= 99.9) delta = 0.004;
else if (predictedPercentile >= 99) delta = 0.02;
else if (predictedPercentile >= 95) delta = 0.05;
else delta = 0.1;


  let pMin = Math.max(0.001, predictedPercentile - delta);
let pMax = Math.min(99.999, predictedPercentile + delta);

// 🚨 CRITICAL: prevent touching 100 unless full marks
if (marks < 300 && pMax >= 99.999) {
  pMax = 99.995;
}

    // ------------------ RANK CALCULATION ------------------
    let rankLow = Math.round((100 - pMax) * totalCandidates / 100);
    let rankHigh = Math.round((100 - pMin) * totalCandidates / 100);

    // ------------------ SAFETY GUARDS ------------------
    rankLow = Math.max(1, rankLow);
    rankHigh = Math.max(rankLow + 5, rankHigh);

    // ------------------ FINAL RESPONSE ------------------
    return new Response(
      JSON.stringify({
        marks,
        year: 2026,
        predicted_percentile: predictedPercentile.toFixed(3),
        predicted_percentile_range: [
          pMin.toFixed(3),
          pMax.toFixed(3)
        ],
        predicted_rank_range: [rankLow, rankHigh],
        total_candidates: totalCandidates
      }),
      { status: 200 }
    );

  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      { status: 500 }
    );
  } finally {
    await client.close();
  }
}
