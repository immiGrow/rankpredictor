import Link from "next/link";

export const metadata = {
  title: "Contact RankPredictor – Get in Touch",
  description:
    "Contact RankPredictor for feedback, corrections, or general queries related to JEE Main rank and percentile predictions.",
};

export default function ContactPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-12 text-gray-800">

      {/* ================= HERO ================= */}
      <section className="text-center mb-14">
        <h1 className="text-4xl font-bold mb-4">
          Contact  <span className="">
            <span className="text-blue-500 ">JEE</span>
            <span className="text-gray-900">RankPredictor</span>
          </span>
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Have a question, suggestion, or found something that needs correction?
          We’d love to hear from you.
        </p>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="grid md:grid-cols-2 gap-10">

        {/* LEFT – INFO */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">How Can We Help?</h2>

          <ul className="space-y-3 text-gray-700 leading-relaxed">
            <li>• Questions about rank or percentile predictions</li>
            <li>• Reporting incorrect or outdated data</li>
            <li>• Feedback to improve our tools</li>
            <li>• General queries related to JEE Main analysis</li>
          </ul>

          <p className="mt-6 text-gray-700">
            RankPredictor is an independent educational platform. While we cannot
            provide official exam results, we aim to respond to genuine queries
            as quickly as possible.
          </p>
        </div>

        {/* RIGHT – CONTACT BOX */}
        <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
          <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>

          <p className="text-gray-700 mb-4">
            For all communication, please reach us via email:
          </p>

          <p className="text-lg font-medium text-blue-600 mb-6">
            📧 support@rankpredictor.in
          </p>

          <p className="text-sm text-gray-600">
            We usually respond within <strong>24–48 hours</strong> on working days.
          </p>
        </div>
      </section>

      {/* ================= DISCLAIMER ================= */}
      <section className="mt-14 border border-gray-200 p-6 rounded-xl">
        <h2 className="text-xl font-semibold mb-3">Note</h2>
        <p className="text-gray-700 leading-relaxed">
          RankPredictor is not affiliated with the National Testing Agency (NTA)
          or any coaching institute. We do not provide counseling or admission
          services.
        </p>
      </section>

      {/* ================= CTA ================= */}
      <section className="text-center mt-16">
        <p className="text-gray-600 mb-4">
          Looking for predictions or exam insights?
        </p>
        <div className="flex justify-center gap-4">
          <Link
            href="/"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500"
          >
            Rank Predictor Tool
          </Link>
          <Link
            href="/jee_main_marks_vs_rank_2026"
            className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700"
          >
            JEE Main Analysis
          </Link>
        </div>
      </section>

    </main>
  );
}
