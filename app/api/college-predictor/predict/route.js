import clientPromise from "@/lib/mongodb";
import { INSTITUTE_TIER } from "@/lib/instituteTier";
import { branchGroup } from "@/lib/branchGroup";

const DB_NAME = "rank_predictor";
const COLLECTION = "jee_cutoffs";

/* ---------------- HARD HUMAN GATE ---------------- */
// 🚫 NOTHING passes this unless it is reasonably close
function isReasonablyClose(userRank, closingRank, rankType) {
  // ❌ Impossible — seat already closed
  if (userRank > closingRank) return false;

  const diff = closingRank - userRank;

  // Extra tight for IIT
  if (rankType === "advanced") return diff <= 1200;

  if (userRank <= 2000) return diff <= 2500;
  if (userRank <= 5000) return diff <= 5000;
  if (userRank <= 15000) return diff <= 10000;

  return diff <= 15000;
}

/* ---------------- USER CONFIDENCE SCORE (0–100) ---------------- */
function confidenceScore({ userRank, closingRank, institute, program, round }) {
  // ❌ Impossible = 0 confidence
  if (userRank > closingRank) return 0;

  const diff = closingRank - userRank;

  const closeness = Math.min(1, diff / closingRank);

  const instituteScore =
    (INSTITUTE_TIER[institute] ?? INSTITUTE_TIER["OTHER"] ?? 5) / 10;

  const branchScore = (10 - branchGroup(program)) / 10;

  const roundScore = Math.max(0, 1 - (round - 1) * 0.12);

  return Math.round(
    closeness * 50 +
    instituteScore * 25 +
    branchScore * 20 +
    roundScore * 5
  );
}


/* ---------------- HUMAN SCORE ---------------- */
// LOWER = BETTER
function humanScore({ institute, program, round, userRank }) {
  const diff = round.crank - userRank;

  if (diff < 0) return 9999; // ❌ impossible seats never rank

  const tier = INSTITUTE_TIER[institute] ?? INSTITUTE_TIER["OTHER"] ?? 5;
  const branch = branchGroup(program);

  const closenessBonus = diff / 1200;
  const roundPenalty = round.round * 0.4;
  const dualPenalty = program.toLowerCase().includes("dual") ? 1 : 0;

  return (
    tier * 3 +
    branch * 2 +
    roundPenalty +
    dualPenalty +
    closenessBonus
  );
}


/* ---------------- API ---------------- */

export async function POST(req) {
  const { rank, rankType, category, gender, quota } = await req.json();

  if (!rank || !rankType) {
    return Response.json({ high: [], medium: [], low: [] });
  }

  const client = await clientPromise;
  const col = client.db(DB_NAME).collection(COLLECTION);

  /* -------- STRICT FILTERS -------- */

  const query = {};

  if (rankType === "advanced") {
    query.type = "IIT";
    query.quota = "AI"; // IIT always AI
  } else {
    query.type = { $in: ["NIT", "IIIT", "GFTI"] };
    if (quota && quota !== "ALL") query.quota = quota;
  }

  if (category && category !== "ALL") query.category = category;
  if (gender && gender !== "ALL") query.gender = gender;

  const docs = await col.find(query).toArray();

  const allResults = [];

  /* -------- BEST ROUND PER PROGRAM -------- */

  for (const doc of docs) {
    let bestOption = null;

    const rounds = Object.entries(doc.rounds)
      .map(([r, v]) => ({ round: Number(r), ...v }))
      .sort((a, b) => a.round - b.round);

    for (const r of rounds) {
      // 🚫 HARD GATE FIRST (MOST IMPORTANT)
      if (!isReasonablyClose(rank, r.crank, rankType)) continue;

      const internalScore = humanScore({
  institute: doc.institute,
  program: doc.program,
  round: r,
  userRank: rank,
});

const confidence = confidenceScore({
  userRank: rank,
  closingRank: r.crank,
  institute: doc.institute,
  program: doc.program,
  round: r.round,
});


      if (!bestOption || internalScore < bestOption.internalScore) {
        bestOption = {
          institute: doc.institute,
          program: doc.program,
          round: r.round,
          orank: r.orank,
          crank: r.crank,
          quota: doc.quota,
          category: doc.category,
          gender: doc.gender,
          type: doc.type,
        internalScore: Number(internalScore.toFixed(2)), // sorting only
score: confidence, // UI score (0–100)


        };
      }
    }

    if (bestOption) allResults.push(bestOption);
  }

  /* -------- COUNSELLOR SORT -------- */
 allResults.sort((a, b) => a.internalScore - b.internalScore);


  /* -------- HUMAN LIMITS -------- */
  const low = allResults.slice(0, 6);
  const medium = allResults.slice(7, 16);
  const high = allResults.slice(16, 28);

  return Response.json({ high, medium, low });
}
