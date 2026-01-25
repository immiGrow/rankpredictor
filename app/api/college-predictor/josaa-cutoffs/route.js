import clientPromise from "@/lib/mongodb";

const DB_NAME = "rank_predictor";
const COLLECTION = "jee_cutoffs";

export async function POST(req) {
  try {
    const { type, category, gender, quota, instituteName } = await req.json();

    const client = await clientPromise;
    const col = client.db(DB_NAME).collection(COLLECTION);

    const query = {};

    // 1. Strict Category/Gender/Quota Filters
    if (category && category !== "ALL") query.category = category;
    if (gender && gender !== "ALL") query.gender = gender;
    if (quota && quota !== "ALL") query.quota = quota;

    // 2. Strict Type Filter (NIT, IIIT, GFTI, IIT)
    if (type && type !== "ALL") {
      query.type = type;
    } else {
      query.type = { $in: ["NIT", "IIIT", "GFTI", "IIT"] };
    }

    // 3. Fuzzy Institute Search (The "VNIT" Fix)
    if (instituteName && instituteName.trim() !== "") {
      // Matches partial names, case-insensitive
      query.institute = { $regex: instituteName, $options: "i" };
    }

    // Fetch data (limiting to 50 for performance and SEO relevance)
    const docs = await col.find(query).limit(50).toArray();

    // Map the results to a flat structure for the UI
   // ... inside your POST function ...
const formattedResults = docs.map(doc => {
  // Use Optional Chaining (?.) to avoid the "undefined" crash
  const round1 = doc.rounds?.['5'] || {}; 

  return {
    id: doc._id,
    institute: doc.institute,
    program: doc.program,
    type: doc.type,
    quota: doc.quota,
    category: doc.category,
    gender: doc.gender,
    // Provide a fallback "N/A" if rank is missing
    closingRank: round1.crank || "N/A",
    openingRank: round1.orank || "N/A"
  };
});
    // Return a direct Array so .slice() works on frontend
    return Response.json(formattedResults);

  } catch (error) {
    console.error("Cutoff API Error:", error);
    return Response.json({ error: "Failed to fetch data" }, { status: 500 });
  }
}