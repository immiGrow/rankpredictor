
import Link from "next/link";

export const metadata = {
  title: "JEE Main 2025 Marks vs Percentile vs Rank – Complete Analysis",
  description:
    "Check detailed JEE Main 2025 marks vs percentile vs rank analysis. Understand score ranges, percentile mapping, rank trends, cutoff insights, and preparation guidance based on official data patterns.",
};

export default function page() {
  return (
    <>
   
    <main className="max-w-7xl mx-auto px-6 py-10">
      
      {/* ================= HERO ================= */}
      <section className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          JEE Main 2025 Marks vs Percentile vs Rank
        </h1>
        <p className="text-gray-700 max-w-3xl mx-auto text-lg">
          Understand how JEE Main 2025 marks translate into percentile and rank.
          This detailed analysis is based on previous year trends, normalization
          patterns, and official NTA scoring methodology.
        </p>
      </section>

      {/* ================= INTRO ================= */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Understanding JEE Main 2025 Result Metrics
        </h2>
        <p className="text-gray-700 leading-relaxed">
          In JEE Main, <strong>marks</strong> indicate your raw score, while
          <strong> percentile</strong> reflects your performance relative to
          other candidates. The <strong>rank</strong> is calculated based on
          percentile and total number of students across all sessions.
        </p>
      </section>

      {/* ================= MARKS VS PERCENTILE ================= */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          JEE Main 2025 Marks vs Percentile (Expected Range)
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left">
            <thead className="bg-gray-200">
              <tr>
                <th className="px-4 py-2">Marks Range</th>
                <th className="px-4 py-2">Expected Percentile</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["300 – 281", "99.99 – 100"],
                ["280 – 261", "99.95 – 99.99"],
                ["260 – 241", "99.85 – 99.94"],
                ["240 – 221", "99.60 – 99.84"],
                ["220 – 201", "99.10 – 99.59"],
                ["200 – 181", "98.50 – 99.09"],
                ["180 – 161", "97.80 – 98.49"],
                ["160 – 141", "96.80 – 97.79"],
                ["140 – 121", "95.50 – 96.79"],
                ["120 – 101", "93.50 – 95.49"],
                ["100 – 81", "90.00 – 93.49"],
                ["80 – 61", "85.00 – 89.99"],
                ["60 – 41", "75.00 – 84.99"],
                ["40 – 21", "55.00 – 74.99"],
                ["20 – 0", "Below 55"],
              ].map(([marks, perc]) => (
                <tr key={marks} className="border-t">
                  <td className="px-4 py-2">{marks}</td>
                  <td className="px-4 py-2">{perc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-sm text-gray-600 mt-3">
          Note: Percentile values may vary slightly due to normalization across sessions.
        </p>
      </section>

      {/* ================= PERCENTILE VS RANK ================= */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          JEE Main 2025 Percentile vs Rank (Approximate)
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead className="bg-gray-200">
              <tr>
                <th className="px-4 py-2">Percentile Range</th>
                <th className="px-4 py-2">Expected Rank Range</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["99.9 – 100", "1 – 2,000"],
                ["99.5 – 99.9", "2,000 – 8,000"],
                ["99.0 – 99.5", "8,000 – 15,000"],
                ["98.0 – 99.0", "15,000 – 30,000"],
                ["97.0 – 98.0", "30,000 – 50,000"],
                ["95.0 – 97.0", "50,000 – 90,000"],
                ["90.0 – 95.0", "90,000 – 2,00,000"],
                ["Below 90", "2,00,000+"],
              ].map(([p, r]) => (
                <tr key={p} className="border-t">
                  <td className="px-4 py-2">{p}</td>
                  <td className="px-4 py-2">{r}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ================= FACTORS ================= */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Factors Affecting Marks, Percentile & Rank
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Total number of candidates appearing in JEE Main 2025</li>
          <li>Difficulty level of different shifts</li>
          <li>Normalization process by NTA</li>
          <li>Overall performance distribution</li>
        </ul>
      </section>

      {/* ================= TOOLS ================= */}
      <section className="mb-14 bg-gray-100 rounded-xl p-6 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Explore Prediction Tools
        </h2>

        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/jee_main_rank_predictor" className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500">
            Rank Predictor
          </Link>
          <Link href="/jee_main_percentile_predictor" className="px-5 py-2 bg-green-600 text-white rounded-lg hover:bg-green-500">
            Percentile Predictor
          </Link>
          <Link href="/jee_main_cutoff_2026" className="px-5 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700">
            JEE Main 2026 Cutoff
          </Link>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          <details className="border p-4 rounded-lg">
            <summary className="font-medium cursor-pointer">
              Is JEE Main rank calculated directly from marks?
            </summary>
            <p className="mt-2 text-gray-700">
              No. Rank is calculated from percentile, not raw marks, after normalization.
            </p>
          </details>

          <details className="border p-4 rounded-lg">
            <summary className="font-medium cursor-pointer">
              Can same marks give different percentiles?
            </summary>
            <p className="mt-2 text-gray-700">
              Yes. Due to multiple shifts and normalization, identical marks can result
              in different percentiles.
            </p>
          </details>

          <details className="border p-4 rounded-lg">
            <summary className="font-medium cursor-pointer">
              Is this data official?
            </summary>
            <p className="mt-2 text-gray-700">
              This analysis is based on historical NTA trends and publicly available data.
              Official values are released only by NTA.
            </p>
          </details>
        </div>
      </section>
    </main>
             
    </>
  );
}
