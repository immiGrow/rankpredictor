"use client";

import { motion } from "framer-motion";
import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
import {
  FaArrowRight,
  FaCalculator,
  FaExternalLinkAlt,
  FaChartLine
} from "react-icons/fa";

export default function Page() {
  return (
    <>
    <Head>
        {/* Primary Meta Tags */}
        <title>150 Marks in JEE Mains 2025 – Percentile, Rank & Analysis</title>
        <meta
          name="description"
          content="Check expected percentile and rank in JEE Mains 2025 for 150 marks. Includes shift-wise trends, normalization analysis, and detailed rank estimates."
        />
        <link
          rel="canonical"
          href="https://jeerankpredictor.in/jee-mains-150-marks-percentile-2025"
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="150 Marks in JEE Mains 2025 – Percentile, Rank & Analysis" />
        <meta property="og:description" content="Check expected percentile and rank in JEE Mains 2025 for 150 marks. Includes shift-wise trends, normalization analysis, and detailed rank estimates." />
        <meta property="og:url" content="https://jeerankpredictor.in/jee-mains-150-marks-percentile-2025" />
        <meta property="og:site_name" content="JEERankPredictor.in" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="150 Marks in JEE Mains 2025 – Percentile, Rank & Analysis" />
        <meta name="twitter:description" content="Check expected percentile and rank in JEE Mains 2025 for 150 marks. Includes shift-wise trends, normalization analysis, and detailed rank estimates." />
      </Head>
      {/* FAQ SCHEMA */}
      <Script
        id="faq-schema-150-marks"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How much percentile is 150 marks in JEE Mains 2025?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "150 marks in JEE Main 2025 usually corresponds to a percentile range of about 98.7 to 99.1 depending on shift difficulty."
                }
              },
              {
                "@type": "Question",
                "name": "Is 150 marks a good score in JEE Mains?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, 150 marks is a very good score and often places candidates among the top 1 percent."
                }
              }
            ]
          }),
        }}
      />

      <div className="bg-linear-to-b from-gray-50 to-white">

        {/* HERO */}
        <section className="max-w-5xl mx-auto px-4 py-14">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold"
          >
            150 Marks in JEE Mains 2025 – Percentile, Rank & College Chances
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-6 bg-white shadow-xl rounded-2xl p-6"
          >
            <p className="text-gray-600 text-lg">Expected Percentile</p>
            <p className="text-4xl font-bold text-green-600 mt-2">
              98.7 – 99.1 Percentile
            </p>

            <p className="mt-4 text-gray-700">
              If you scored <strong>150 marks in JEE Main 2025</strong>, you are
              likely among the <strong>top 1%</strong> of candidates. Exact
              percentile depends on shift difficulty and normalization.
            </p>

            {/* PRIMARY CTA */}
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/"
                className="bg-blue-600 text-white px-5 py-2 rounded-lg font-semibold flex items-center gap-2 hover:bg-blue-700"
              >
                <FaCalculator /> Predict Exact Rank
              </Link>

              <Link
                href="/jee-rank-predictor"
                className="bg-gray-900 text-white px-5 py-2 rounded-lg font-semibold flex items-center gap-2 hover:bg-black"
              >
                <FaChartLine /> Rank Predictor Tool
              </Link>
            </div>
          </motion.div>
        </section>

        {/* WHY */}
        <section className="max-w-5xl mx-auto px-4 py-10">
          <h2 className="text-2xl font-bold mb-3">
            Why Does 150 Marks Give ~99 Percentile?
          </h2>
          <p className="text-gray-700">
            At 150 marks, candidates perform significantly better than most test
            takers. After normalization across sessions, this score typically
            falls near the 99 percentile range.
          </p>

          {/* INLINE CTA */}
          <Link
            href="/jee-main-marks-vs-percentile-2025"
            className="inline-block mt-4 text-blue-600 font-semibold"
          >
            View Complete Marks vs Percentile Table →
          </Link>
        </section>

        {/* TABLE */}
        <section className="max-w-5xl mx-auto px-4 py-10">
          <h2 className="text-xl font-bold mb-4">
            Marks vs Percentile (Top Range)
          </h2>

          <div className="overflow-hidden rounded-xl shadow">
            <table className="w-full bg-white text-sm">
              <thead className="bg-gray-900 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Marks</th>
                  <th className="px-4 py-3 text-left">Expected Percentile</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b font-semibold bg-green-50">
                  <td className="px-4 py-3">150</td>
                  <td className="px-4 py-3">98.7 – 99.1</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-3">140</td>
                  <td className="px-4 py-3">98 – 98.6</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">160</td>
                  <td className="px-4 py-3">99.2 – 99.4</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* BUTTON BELOW TABLE */}
          <div className="mt-5">
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-5 py-2 rounded-lg font-semibold"
            >
              Check Your Rank Now <FaArrowRight />
            </Link>
          </div>
        </section>

        {/* RANK */}
        <section className="bg-green-50 py-10">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-xl font-bold mb-3">
              Expected Rank at 150 Marks
            </h2>
            <p className="text-gray-700">
              With ~99 percentile, your expected All India Rank may lie between
              <strong> 12,000 and 18,000</strong>. College options improve
              significantly at this score.
            </p>

            {/* CTA */}
            <Link
              href="/jee-rank-predictor"
              className="inline-flex items-center gap-2 mt-4 bg-gray-900 text-white px-5 py-2 rounded-lg font-semibold"
            >
              Explore College Chances <FaArrowRight />
            </Link>
          </div>
        </section>

        {/* LINKS */}
        <section className="max-w-5xl mx-auto px-4 py-12">
          <h2 className="text-xl font-bold mb-4">
            Useful Links
          </h2>

          <ul className="space-y-2">
            <li>
              <Link href="/jee-main-marks-vs-percentile-2025" className="text-blue-600">
                JEE Main Marks vs Percentile 2025
              </Link>
            </li>
            <li>
              <Link href="/jee-mains-120-marks-percentile-2025" className="text-blue-600">
                120 Marks in JEE Mains – Analysis
              </Link>
            </li>
            <li>
              <a
                href="https://engineering.careers360.com/articles/marks-vs-percentile-jee-mains-2025"
                target="_blank"
                rel="nofollow"
                className="text-blue-600 inline-flex items-center gap-1"
              >
                Careers360 Official Analysis <FaExternalLinkAlt />
              </a>
            </li>
          </ul>
        </section>

        {/* FAQ UI */}
        <section className="max-w-5xl mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold mb-6">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            <div className="bg-white shadow rounded-xl p-5">
              <h3 className="font-semibold text-lg">
                How much percentile is 150 marks in JEE Mains 2025?
              </h3>
              <p className="text-gray-700 mt-2">
                150 marks usually corresponds to a percentile between
                <strong> 98.7 and 99.1</strong>, depending on normalization.
              </p>
            </div>

            <div className="bg-white shadow rounded-xl p-5">
              <h3 className="font-semibold text-lg">
                Is 150 marks a good score in JEE Mains?
              </h3>
              <p className="text-gray-700 mt-2">
                Yes, it is considered an excellent score and places candidates
                among the top performers nationwide.
              </p>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
