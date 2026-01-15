"use client";
import { motion } from "framer-motion";
import { AiOutlineCheckCircle, AiOutlineLink, AiOutlineClockCircle } from "react-icons/ai";
import Link from "next/link";

export const metadata = {
  title: "How NTA Calculates JEE Main Percentile Score (Step-by-Step)",

  description:
    "Understand how NTA calculates JEE Main percentile score with a clear step-by-step explanation. Learn the normalization formula, shift-wise calculation, examples, and common misconceptions.",

  keywords: [
    "NTA percentile calculation",
    "How NTA calculates percentile",
    "JEE Main percentile calculation",
    "JEE percentile normalization",
    "NTA normalization formula",
    "JEE Main percentile explained",
    "Percentile vs marks JEE",
    "NTA score calculation",
  ],

  alternates: {
    canonical:
      "https://jeerankpredictor.in/blog/nta_percentile_calculation",
  },

  openGraph: {
    title: "How NTA Calculates JEE Main Percentile Score",
    description:
      "Step-by-step guide to NTA’s JEE Main percentile calculation method, including normalization across shifts and real examples.",
    url: "https://jeerankpredictor.in/blog/nta_percentile_calculation",
    siteName: "JEERankPredictor",
    locale: "en_IN",
    type: "article",
  },

  twitter: {
    card: "summary_large_image",
    title: "How NTA Calculates JEE Main Percentile",
    description:
      "Complete explanation of NTA percentile calculation for JEE Main with normalization and examples.",
  },

  robots: {
    index: true,
    follow: true,
  },

  category: "Education",
};

export default function page() {
  const featureFade = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="max-w-6xl mx-auto px-4 py-16 space-y-12">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-4"
      >
        <p className="text-blue-600 font-semibold uppercase">NTA Percentile Explained</p>
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
          How <span className="text-blue-600">JEE Main Percentile</span> is Calculated
        </h1>
        <p className="text-gray-700 text-lg max-w-3xl mx-auto">
          Learn how the NTA normalizes JEE Main marks to calculate percentiles and why it matters for your 
          <strong> All India Rank (AIR)</strong> and college admission chances.
        </p>
      </motion.div>

      {/* Key Features / Highlights */}
      <motion.div
        className="grid md:grid-cols-3 gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.2 }}
      >
        {[
          { icon: <AiOutlineCheckCircle size={24} />, title: "Fair Ranking", desc: "Percentile normalizes marks across sessions for fairness." },
          { icon: <AiOutlineClockCircle size={24} />, title: "Instant Insights", desc: "Quickly understand how your marks translate to percentile." },
          { icon: <AiOutlineLink size={24} />, title: "Trusted Data", desc: "Based on previous year trends and official NTA statistics." },
        ].map((item, idx) => (
          <motion.div
            key={idx}
            variants={featureFade}
            className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition cursor-pointer"
          >
            <div className="flex items-center gap-3 mb-3 text-blue-600">
              {item.icon}
              <h3 className="font-semibold text-lg">{item.title}</h3>
            </div>
            <p className="text-gray-600">{item.desc}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Main Content */}
      <article className="space-y-10">
        {/* Section: What is Percentile */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What is JEE Main Percentile?</h2>
          <p className="text-gray-700 text-lg">
            Percentile shows the percentage of students who scored less than or equal to you. For instance, a percentile of 95 means you performed better than 95% of candidates. It is <strong>not</strong> the same as marks.
          </p>
          <p className="text-gray-700 mt-2">
            Use our <Link href="/percentile-predictor" className="text-blue-600 underline">Percentile Predictor</Link> to instantly calculate your percentile.
          </p>
        </motion.div>

        {/* Section: How NTA Calculates */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How NTA Calculates Percentiles</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Raw scores are collected from each session.</li>
            <li>Scores are normalized across sessions to adjust for difficulty.</li>
            <li>Percentile is calculated as: <code className="bg-gray-100 px-2 py-1 rounded">100 * (candidates scoring ≤ you) / total candidates in session</code></li>
            <li>Final percentile determines ranking across sessions.</li>
          </ul>
          <p className="mt-2">
            Official info: <a href="https://www.nta.ac.in" target="_blank" className="text-indigo-600 font-semibold underline">NTA Website</a>
          </p>
        </motion.div>

        {/* Section: Marks vs Percentile Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Marks vs Percentile – Quick Reference</h2>
          <div className="overflow-x-auto rounded-xl shadow-lg">
            <table className="min-w-full text-left border border-gray-200">
              <thead className="bg-blue-500 text-white">
                <tr>
                  <th className="px-4 py-2 border">Marks Range</th>
                  <th className="px-4 py-2 border">Expected Percentile</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["81 – 100", "93 – 96"],
                  ["71 – 80", "91 – 93"],
                  ["61 – 70", "87 – 91"],
                  ["51 – 60", "78 – 86"],
                  ["36 – 45", "58 – 68"],
                  ["31 – 35", "47 – 58"],
                  ["21 – 30", "32 – 48"],
                  ["11 – 20", "17 – 31"],
                  ["0 – 10", "0 – 16"]
                ].map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? "bg-gray-50" : ""}>
                    <td className="px-4 py-2 border">{row[0]}</td>
                    <td className="px-4 py-2 border">{row[1]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-gray-700">
            You can also try our <Link href="/" className="text-blue-600 underline">Rank Predictor</Link> to see estimated AIR ranges.
          </p>
        </motion.div>

        {/* Section: Why Percentile Matters */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Understanding Percentile Matters</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Helps estimate your All India Rank (AIR).</li>
            <li>Enables strategic planning for <strong>JOSAA counselling</strong>.</li>
            <li>Fair comparison across sessions.</li>
          </ul>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/" className="inline-block bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:bg-blue-700 transition">
            Try Percentile Predictor Now
          </Link>
        </motion.div>
      </article>
    </section>
  );
}
