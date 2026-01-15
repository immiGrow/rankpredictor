"use client";

import { motion } from "framer-motion";
import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
import {
  FaArrowRight,
  FaCalculator,
  FaExternalLinkAlt,
  FaTrophy,
  FaUniversity
} from "react-icons/fa";

export default function Page() {
  return (
    <>
     <Head>
        {/* Primary Meta Tags */}
        <title>200 Marks in JEE Mains 2025 – Percentile, Rank & Analysis</title>
        <meta
          name="description"
          content="Check what percentile and expected rank you can get in JEE Mains 2025 with 200 marks. Includes shift-wise analysis, trends, and rank estimates."
        />
        <link
          rel="canonical"
          href="https://jeerankpredictor.in/jee-mains-200-marks-percentile-2025"
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="200 Marks in JEE Mains 2025 – Percentile, Rank & Analysis" />
        <meta property="og:description" content="Check what percentile and expected rank you can get in JEE Mains 2025 with 200 marks. Includes shift-wise analysis, trends, and rank estimates." />
        <meta property="og:url" content="https://jeerankpredictor.in/jee-mains-200-marks-percentile-2025" />
        <meta property="og:site_name" content="JEERankPredictor.in" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="200 Marks in JEE Mains 2025 – Percentile, Rank & Analysis" />
        <meta name="twitter:description" content="Check what percentile and expected rank you can get in JEE Mains 2025 with 200 marks. Includes shift-wise analysis, trends, and rank estimates." />
      </Head>

      {/* FAQ SCHEMA */}
      <Script
        id="faq-schema-200-marks"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How much percentile is 200 marks in JEE Mains 2025?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Scoring 200 marks in JEE Main 2025 generally corresponds to a percentile range of about 99.6 to 99.8, depending on shift difficulty and normalization."
                }
              },
              {
                "@type": "Question",
                "name": "Is 200 marks a very good score in JEE Mains?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, 200 marks is an excellent score and usually places candidates among the top 0.5 percent of all test takers."
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
            200 Marks in JEE Mains 2025 – Percentile, Rank & Top College Chances
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-6 bg-white shadow-xl rounded-2xl p-6"
          >
            <p className="text-gray-600 text-lg">Expected Percentile</p>
            <p className="text-4xl font-bold text-emerald-600 mt-2">
              99.6 – 99.8 Percentile
            </p>

            <p className="mt-4 text-gray-700">
              If you scored <strong>200 marks in JEE Main 2025</strong>, you are
              among the <strong>top 0.5%</strong> of candidates nationwide.
              This score opens doors to top NITs, IIITs, and elite branches.
            </p>

            {/* PRIMARY CTAs */}
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
                <FaTrophy /> Rank Predictor Tool
              </Link>
            </div>
          </motion.div>
        </section>

        {/* WHY */}
        <section className="max-w-5xl mx-auto px-4 py-10">
          <h2 className="text-2xl font-bold mb-3">
            Why Does 200 Marks Reach 99.7+ Percentile?
          </h2>
          <p className="text-gray-700">
            Very few candidates cross the 200-mark barrier. After normalization,
            this score consistently places candidates in the extreme top
            percentile band, making it one of the safest scores for top colleges.
          </p>

          <Link
            href="/jee-main-marks-vs-percentile-2025"
            className="inline-block mt-4 text-blue-600 font-semibold"
          >
            Check Complete Marks vs Percentile →
          </Link>
        </section>

        {/* TABLE */}
        <section className="max-w-5xl mx-auto px-4 py-10">
          <h2 className="text-xl font-bold mb-4">
            Marks vs Percentile (Elite Range)
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
                <tr className="border-b font-semibold bg-emerald-50">
                  <td className="px-4 py-3">200</td>
                  <td className="px-4 py-3">99.6 – 99.8</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-3">190</td>
                  <td className="px-4 py-3">99.3 – 99.5</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">210</td>
                  <td className="px-4 py-3">99.85+</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* CTA */}
          <div className="mt-5">
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-5 py-2 rounded-lg font-semibold"
            >
              Calculate Your AIR <FaArrowRight />
            </Link>
          </div>
        </section>

        {/* RANK + COLLEGES */}
        <section className="bg-emerald-50 py-10">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-xl font-bold mb-3">
              Expected Rank & College Opportunities
            </h2>
            <p className="text-gray-700">
              With ~99.7 percentile, your expected AIR may fall between
              <strong> 2,000 and 4,000</strong>. This score gives strong chances
              for CSE, ECE, and Mechanical at top NITs and IIITs.
            </p>

            <div className="flex flex-wrap gap-3 mt-4">
              <Link
                href="/jee-rank-predictor"
                className="bg-gray-900 text-white px-5 py-2 rounded-lg font-semibold flex items-center gap-2"
              >
                <FaUniversity /> Explore Colleges
              </Link>

              <Link
                href="/jee-mains-150-marks-percentile-2025"
                className="bg-white border px-5 py-2 rounded-lg font-semibold"
              >
                Compare with 150 Marks
              </Link>
            </div>
          </div>
        </section>

        {/* LINKS */}
        <section className="max-w-5xl mx-auto px-4 py-12">
          <h2 className="text-xl font-bold mb-4">
            Related Resources
          </h2>

          <ul className="space-y-2">
            <li>
              <Link href="/jee-main-marks-vs-percentile-2025" className="text-blue-600">
                JEE Main Marks vs Percentile 2025
              </Link>
            </li>
            <li>
              <Link href="/jee-mains-150-marks-percentile-2025" className="text-blue-600">
                150 Marks Analysis
              </Link>
            </li>
            <li>
              <a
                href="https://nta.ac.in"
                target="_blank"
                rel="nofollow"
                className="text-blue-600 inline-flex items-center gap-1"
              >
                NTA Official Website <FaExternalLinkAlt />
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
                How much percentile is 200 marks in JEE Mains 2025?
              </h3>
              <p className="text-gray-700 mt-2">
                200 marks usually corresponds to a percentile between
                <strong> 99.6 and 99.8</strong>, depending on shift difficulty.
              </p>
            </div>

            <div className="bg-white shadow rounded-xl p-5">
              <h3 className="font-semibold text-lg">
                Is 200 marks a very good score in JEE Mains?
              </h3>
              <p className="text-gray-700 mt-2">
                Yes, it is an outstanding score and places candidates in the
                top 0.5 percent nationwide.
              </p>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
