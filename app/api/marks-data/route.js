import clientPromise from "@/lib/mongodb";



export async function GET() {
  try {
      const client = await clientPromise;
     
    const db = client.db("rank_predictor");

    const today = new Date().toISOString().split("T")[0];

    const docs = await db
      .collection("jee_main_shift_marks_percentile")
      .find({
        exam: "JEE_MAIN",
        session: "JAN",
        date: { $lte: today }
      })
      .sort({
        percentile_min: -1,
        date: 1,
        shift: 1
      })
      .toArray();

    /**
     * Transform for table
     */
    const columns = [];
    const table = {};

    docs.forEach(d => {
      const col = `${new Date(d.date).getDate()} Jan S${d.shift}`;

      if (!columns.includes(col)) columns.push(col);

      const pKey = `${d.percentile_min.toFixed(2)}–${d.percentile_max.toFixed(2)}`;

      if (!table[pKey]) table[pKey] = {};

      table[pKey][col] = `${d.marks_min}–${d.marks_max}`;
    });

    return Response.json({
      success: true,
      columns,
      rows: Object.entries(table).map(([percentile, values]) => ({
        percentile,
        values
      }))
    });

  } catch (e) {
    console.error(e);
    return Response.json({ success: false }, { status: 500 });
  } 
}
