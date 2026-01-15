"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Script from "next/script";
import { FaCalculator, FaArrowRight } from "react-icons/fa";
import Head from "next/head";

export default function Page() {
  return (
    <>


     <Head>
        {/* Primary Meta Tags */}
        <title>JEE Mains Marks Analysis 2025 – Percentile & Rank Insights</title>
        <meta
          name="description"
          content="Check JEE Mains 2025 marks analysis with expected percentile and rank estimates. Understand trends, shift difficulty, and normalization for smarter preparation."
        />
        <link
          rel="canonical"
          href="https://jeerankpredictor.in/jee-mains-marks-analysis-2025"
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="JEE Mains Marks Analysis 2025 – Percentile & Rank Insights" />
        <meta property="og:description" content="Check JEE Mains 2025 marks analysis with expected percentile and rank estimates. Understand trends, shift difficulty, and normalization for smarter preparation." />
        <meta property="og:url" content="https://jeerankpredictor.in/jee-mains-marks-analysis-2025" />
        <meta property="og:site_name" content="JEERankPredictor.in" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="JEE Mains Marks Analysis 2025 – Percentile & Rank Insights" />
        <meta name="twitter:description" content="Check JEE Mains 2025 marks analysis with expected percentile and rank estimates. Understand trends, shift difficulty, and normalization for smarter preparation." />
      </Head>

      {/* FAQ SCHEMA */}
      <Script
        id="faq-schema-hub"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How are JEE Main marks converted to percentile?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "JEE Main uses a normalization method where a candidate’s percentile reflects the percentage of candidates scoring equal to or below them in the same session."
                }
              },
              {
                "@type": "Question",
                "name": "Why does the same marks give different percentile in different shifts?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Different shifts have different difficulty levels. Normalization ensures fairness across sessions."
                }
              }
            ]
          }),
        }}
      />

      <div className="bg-linear-to-b from-gray-50 to-white">

        {/* HERO */}
        <section className="max-w-6xl mx-auto px-4 py-14">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold"
          >
            JEE Mains Marks Analysis 2025 – Percentile, Rank & Score Insights
          </motion.h1>

          <p className="mt-4 text-gray-700 max-w-3xl">
            Confused about what your JEE Main marks mean? This page helps you
            understand expected percentile, rank range, and score significance
            for different marks in JEE Main 2025.
          </p>

          {/* MAIN CTA */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold"
          >
            <FaCalculator /> Use JEE Rank Predictor
          </Link>
        </section>

        {/* MICRO PAGE CARDS */}
        <section className="max-w-6xl mx-auto px-4 py-10">
          <h2 className="text-2xl font-bold mb-6">
            Popular JEE Main Marks Queries
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                marks: "120 Marks",
                link: "/jee-mains-120-marks-percentile-2025",
                desc: "Good score, top 3% range"
              },
              {
                marks: "150 Marks",
                link: "/jee-mains-150-marks-percentile-2025",
                desc: "Very good score, ~99 percentile"
              },
              {
                marks: "200 Marks",
                link: "/jee-mains-200-marks-percentile-2025",
                desc: "Excellent score, top 0.5%"
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="bg-white shadow-xl rounded-2xl p-6"
              >
                <h3 className="text-xl font-bold">{item.marks}</h3>
                <p className="text-gray-600 mt-2">{item.desc}</p>

                <Link
                  href={item.link}
                  className="inline-flex items-center gap-2 mt-4 text-blue-600 font-semibold"
                >
                  View Detailed Analysis <FaArrowRight />
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        {/* SUMMARY TABLE */}
        <section className="max-w-6xl mx-auto px-4 py-10">
          <h2 className="text-xl font-bold mb-4">
            Marks vs Percentile & Rank (Quick View)
          </h2>

          <div className="overflow-hidden rounded-xl shadow">
            <table className="w-full bg-white text-sm">
              <thead className="bg-gray-900 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Marks</th>
                  <th className="px-4 py-3 text-left">Percentile</th>
                  <th className="px-4 py-3 text-left">Expected Rank</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="px-4 py-3">120</td>
                  <td className="px-4 py-3">97 – 98</td>
                  <td className="px-4 py-3">30k – 45k</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-3">150</td>
                  <td className="px-4 py-3">98.7 – 99.1</td>
                  <td className="px-4 py-3">12k – 18k</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">200</td>
                  <td className="px-4 py-3">99.6 – 99.8</td>
                  <td className="px-4 py-3">2k – 4k</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* FAQ UI */}
        <section className="max-w-6xl mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold mb-6">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            <div className="bg-white shadow rounded-xl p-5">
              <h3 className="font-semibold text-lg">
                How are JEE Main percentiles calculated?
              </h3>
              <p className="text-gray-700 mt-2">
                Percentiles are calculated using normalization to ensure fairness
                across different exam shifts.
              </p>
            </div>

            <div className="bg-white shadow rounded-xl p-5">
              <h3 className="font-semibold text-lg">
                Which marks are considered good in JEE Mains?
              </h3>
              <p className="text-gray-700 mt-2">
                Scores above 150 marks are considered very good, while 200+
                marks are considered excellent.
              </p>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
