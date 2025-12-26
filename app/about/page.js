import Link from "next/link";

export const metadata = {
  title: "About RankPredictor – JEE Main Rank & Percentile Prediction Platform",
  description:
    "Learn about RankPredictor, a data-driven platform helping JEE aspirants estimate rank, percentile, and cutoffs using historical trends and public exam data.",
};

export default function page() {
  return (

    <main className="max-w-6xl mx-auto px-6 py-12 text-gray-800">

      {/* ================= HERO ================= */}
      <section className="text-center mb-14">
        <h1 className="text-4xl font-bold mb-4">
          About <span className="text-blue-600">Rank</span>
          <span className="text-green-600">Predictor</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          A transparent, data-driven platform built to help JEE aspirants
          understand their performance beyond raw marks.
        </p>
      </section>

      {/* ================= WHO WE ARE ================= */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-3">Who We Are</h2>
        <p className="leading-relaxed text-gray-700">
          RankPredictor is an independent educational platform designed to help
          students preparing for competitive exams like <strong>JEE Main</strong>.
          Our goal is to simplify complex exam metrics such as marks, percentile,
          and rank using clear explanations and realistic estimates.
        </p>
      </section>

      {/* ================= WHY BUILT ================= */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-3">Why RankPredictor Exists</h2>
        <p className="leading-relaxed text-gray-700">
          Many students focus only on marks, but competitive exams like JEE Main
          are evaluated using percentiles and normalization. This often creates
          confusion and anxiety.
        </p>
        <p className="leading-relaxed text-gray-700 mt-3">
          RankPredictor was built to bridge this gap by providing:
        </p>
        <ul className="list-disc pl-6 mt-3 space-y-2 text-gray-700">
          <li>Marks to percentile understanding</li>
          <li>Realistic rank ranges instead of false precision</li>
          <li>Clear explanation of exam trends</li>
          <li>Student-first, unbiased insights</li>
        </ul>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section className="mb-12 bg-gray-50 p-6 rounded-xl">
        <h2 className="text-2xl font-semibold mb-4">How Our Predictions Work</h2>
        <p className="text-gray-700 leading-relaxed">
          Our prediction tools are based on analysis of historical JEE Main data,
          including:
        </p>

        <ul className="list-disc pl-6 mt-3 space-y-2 text-gray-700">
          <li>Previous year marks vs percentile distributions</li>
          <li>Percentile vs rank trends</li>
          <li>Total candidate statistics</li>
          <li>Observed normalization patterns</li>
        </ul>

        <p className="text-gray-700 leading-relaxed mt-4">
          Since factors like exam difficulty and total candidates change every
          year, we provide <strong>estimated ranges</strong> rather than exact
          ranks. This approach is more honest and closer to real outcomes.
        </p>
      </section>

      {/* ================= DATA SOURCES ================= */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-3">Data Sources & Accuracy</h2>
        <p className="leading-relaxed text-gray-700">
          RankPredictor uses publicly available data from:
        </p>
        <ul className="list-disc pl-6 mt-3 space-y-2 text-gray-700">
          <li>National Testing Agency (NTA) public reports</li>
          <li>Previous year result statistics</li>
          <li>Publicly available academic analyses</li>
        </ul>

        <p className="leading-relaxed text-gray-700 mt-3">
          We do not claim official accuracy. Final results are always declared
          solely by NTA.
        </p>
      </section>

      {/* ================= DISCLAIMER ================= */}
      <section className="mb-12 border border-gray-200 p-6 rounded-xl">
        <h2 className="text-2xl font-semibold mb-3">Important Disclaimer</h2>
        <p className="text-gray-700 leading-relaxed">
          RankPredictor is <strong>not affiliated</strong> with the National
          Testing Agency (NTA) or any coaching institute. All predictions are
          estimates intended for guidance purposes only.
        </p>
      </section>

      {/* ================= TRUST ================= */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-3">Our Commitment to Students</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>No fake guarantees</li>
          <li>No manipulation of results</li>
          <li>No selling of student data</li>
          <li>Clear explanations over hype</li>
        </ul>
      </section>

      {/* ================= CTA ================= */}
      <section className="text-center mt-16">
        <h2 className="text-2xl font-bold mb-4">
          Built for Students. Powered by Data.
        </h2>
        <p className="text-gray-600 mb-6">
          Explore our tools and insights to make informed decisions about your
          JEE Main journey.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            href="/"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500"
          >
            Rank Predictor
          </Link>
          <Link
            href="/jee_main_marks_vs_rank_2026"
            className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700"
          >
            Marks vs Rank Analysis
          </Link>
        </div>
      </section>
    </main>
  );
}
