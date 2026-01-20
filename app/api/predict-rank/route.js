import { MongoClient } from "mongodb";

const uri = process.env.MONGO_URI;
const client = new MongoClient(uri);

export async function POST(req) {
  try {
    const { marks, date, shift } = await req.json();
    console.log("Received prediction request:", {
      marks,
      date,
      shift
    });
    // ------------------ BASIC VALIDATION ------------------
    if (
      marks === undefined ||
      marks < 0 ||
      marks > 300 ||
      !date ||
      !shift
    ) {
      return new Response(
        JSON.stringify({
          error: "Marks (0-300), date and shift are required"
        }),
        { status: 400 }
      );
    }

    await client.connect();
    const db = client.db("rank_predictor");

    // ------------------ FETCH SHIFT-WISE DATA ------------------
    const docs = await db
      .collection("jee_main_shift_marks_percentile")
      .find({
        exam: "JEE_MAIN",
        year: 2025,
        session: "JAN",
        date,
        shift
      })
      .sort({ marks_min: 1 })
      .toArray();

    if (!docs.length) {
      return new Response(
        JSON.stringify({
          error: "Shift data not available yet"
        }),
        { status: 404 }
      );
    }

    // ------------------ FIND RANGE ------------------
    let range = docs.find(
      d => marks >= d.marks_min && marks <= d.marks_max
    );

    // Clamp safety
    if (!range && marks > docs.at(-1).marks_max) {
      range = docs.at(-1);
    }
    if (!range && marks < docs[0].marks_min) {
      range = docs[0];
    }

    // ------------------ INTERPOLATION ------------------
    let predictedPercentile =
      range.percentile_min +
      ((marks - range.marks_min) /
        (range.marks_max - range.marks_min)) *
        (range.percentile_max - range.percentile_min);

    // ------------------ HARD CLAMP ------------------
    predictedPercentile = Number(predictedPercentile.toFixed(3));
    predictedPercentile = Math.min(
      99.999,
      Math.max(0.001, predictedPercentile)
    );

    // ------------------ TOTAL CANDIDATES ------------------
    // 15.35 lakh (as per your data)
    const totalCandidates = 1535096;

    // ------------------ 🏆 TOPPER OVERRIDE ------------------
    if (marks >= 295) {
      return new Response(
        JSON.stringify({
          marks,
          year: 2026,
          session: "JAN",
          date,
          shift,
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
    else if (predictedPercentile >= 99.9) delta = 0.01;
    else if (predictedPercentile >= 99) delta = 0.04;
    else if (predictedPercentile >= 95) delta = 0.08;
    else delta = 0.12;

    let pMin = Math.max(0.001, predictedPercentile - delta);
    let pMax = Math.min(99.999, predictedPercentile + delta);

    // 🚨 Prevent accidental 100 percentile
    if (marks < 300 && pMax >= 99.999) {
      pMax = 99.995;
    }

    // ------------------ RANK CALCULATION ------------------
    let rankLow = Math.round(
      ((100 - pMax) * totalCandidates) / 100
    );
    let rankHigh = Math.round(
      ((100 - pMin) * totalCandidates) / 100
    );

    // ------------------ SAFETY GUARDS ------------------
    rankLow = Math.max(1, rankLow);
    rankHigh = Math.max(rankLow + 5, rankHigh);

    // ------------------ FINAL RESPONSE ------------------
    return new Response(
      JSON.stringify({
        marks,
        year: 2026,
        session: "JAN",
        date,
        shift,
        predicted_percentile: predictedPercentile.toFixed(3),
        predicted_percentile_range: [
          pMin.toFixed(3),
          pMax.toFixed(3)
        ],
        predicted_rank_range: [rankLow, rankHigh],
        total_candidates: totalCandidates,
        data_note:
          "Prediction based on 2025 shift-wise difficulty normalization"
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
