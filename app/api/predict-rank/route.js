import { MongoClient } from "mongodb";

const uri = process.env.MONGO_URI;
const client = new MongoClient(uri);

export async function POST(req) {
  try {
    const { marks } = await req.json();
    if (!marks) {
      return new Response(JSON.stringify({ error: "Marks required" }), { status: 400 });
    }

    await client.connect();
    const db = client.db("rank_predictor");

    // Fetch 2024 and 2025 percentile data
    const dataYears = [2024, 2025];
    const percentileData = await Promise.all(
      dataYears.map(async (year) => {
        const docs = await db
          .collection("jee_main_marks_percentile")
          .find({ exam: "JEE_MAIN", year })
          .sort({ marks_min: 1 })
          .toArray();

        // Find the range where marks fall
        const doc = docs.find(d => marks >= d.marks_min && marks <= d.marks_max);
        if (!doc) return null;

        // Linear interpolation within the range
        const percentile =
          doc.percentile_min +
          ((marks - doc.marks_min) / (doc.marks_max - doc.marks_min)) *
            (doc.percentile_max - doc.percentile_min);

        return { year, percentile };
      })
    );

    if (percentileData.includes(null)) {
      return new Response(JSON.stringify({ error: "No historical data found for these marks" }), { status: 404 });
    }

    const [p2024, p2025] = percentileData;

    // Trend-based extrapolation for 2026
    const trend = p2025.percentile - p2024.percentile;
    let predicted_percentile_2026 = p2025.percentile + trend;

    // Clamp percentile between 0 and 100
    predicted_percentile_2026 = Math.min(100, Math.max(0, predicted_percentile_2026));

    // Fetch total candidates for 2026
    const meta2026 = await db.collection("jee_main_meta").findOne({ exam: "JEE_MAIN", year: 2026 });
    if (!meta2026) {
      return new Response(JSON.stringify({ error: "Meta data for 2026 not found" }), { status: 404 });
    }

    const totalCandidates = meta2026.total_candidates;

    // Apply smaller candidate buffer ±1.5% for realistic rank range
    const totalMin = totalCandidates * 0.985;
    const totalMax = totalCandidates * 1.015;

    // Apply tiny percentile buffer ±0.05 for uncertainty
    const percentileMin = predicted_percentile_2026 - 0.05;
    const percentileMax = predicted_percentile_2026 + 0.05;

    // Calculate rank range
    const rank_min = Math.round(totalMin * (100 - percentileMax) / 100);
    const rank_max = Math.round(totalMax * (100 - percentileMin) / 100);

    return new Response(
      JSON.stringify({
        marks,
        year: 2026,
        predicted_percentile: predicted_percentile_2026.toFixed(3),
        predicted_rank_range: [rank_min, rank_max]
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: "Server error" }), { status: 500 });
  } finally {
    await client.close();
  }
}
