import { MongoClient } from "mongodb";

const MONGO_URI = process.env.MONGO_URI;
const DB_NAME = "rank_predictor";
const COLLECTION = "jee_cutoffs";

export async function GET() {
  const client = new MongoClient(MONGO_URI);
  await client.connect();

  const col = client.db(DB_NAME).collection(COLLECTION);

  const [types, quotas, categories, genders] = await Promise.all([
    col.distinct("type"),
    col.distinct("quota"),
    col.distinct("category"),
    col.distinct("gender"),
  ]);

  await client.close();

  return new Response(
    JSON.stringify({
      types: types.sort(),
      quotas: quotas.sort(),
      categories: categories.sort(),
      genders: genders.sort(),
    }),
    { headers: { "Content-Type": "application/json" } }
  );
}
