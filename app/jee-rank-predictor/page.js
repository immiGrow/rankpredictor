"use client";

import { motion } from "framer-motion";
import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";

export default function JeeRankPredictorPage() {
  return (
    <>

   <Head>
  {/* Primary Meta Tags */}
  <title>JEE Rank Predictor 2026 – Estimate Your AIR for IITs, NITs & GFTIs</title>
  <meta
    name="description"
    content="Use our free JEE Rank Predictor 2026 to accurately estimate your All India Rank (AIR) from your percentile. Plan your IIT, NIT & GFTI admissions smartly with category, quota & gender support."
  />
  <link rel="canonical" href="https://www.jeerankpredictor.in/jee-rank-predictor" />
  <meta name="robots" content="index, follow" />

  {/* Open Graph / Facebook */}
  <meta property="og:title" content="JEE Rank Predictor 2026 – Estimate Your AIR for IITs, NITs & GFTIs" />
  <meta property="og:description" content="Accurately predict your JEE Main/Advanced All India Rank (AIR) from your percentile. Free and student-friendly tool for IIT, NIT & GFTI planning." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://www.jeerankpredictor.in/jee-rank-predictor" />
  <meta property="og:site_name" content="JEERankPredictor" />
  <meta property="og:image" content="https://www.jeerankpredictor.in/logo.jpg" />

  {/* Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="JEE Rank Predictor 2026 – Estimate Your AIR for IITs, NITs & GFTIs" />
  <meta name="twitter:description" content="Use our free JEE Rank Predictor to estimate your AIR from percentile. Plan IIT, NIT & GFTI admissions accurately with category & quota support." />
  <meta name="twitter:image" content="https://www.jeerankpredictor.in/logo.jpg" />
</Head>

      {/* FAQ SCHEMA */}
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How is JEE Main rank predicted from percentile?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "JEE Main rank is predicted using NTA percentile methodology. Rank is estimated based on the percentage of candidates scoring below a particular percentile."
                }
              },
              {
                "@type": "Question",
                "name": "Is JEE rank predictor accurate?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Rank predictors provide an estimated range, not an exact rank. Accuracy depends on total candidates, session normalization, and year-wise trends."
                }
              },
              {
                "@type": "Question",
                "name": "Does NTA release exact rank calculation formula?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "NTA releases the percentile calculation method. Exact rank depends on total candidates appearing in JEE Main."
                }
              }
            ]
          }),
        }}
      />

      <div className="bg-linear-to-b from-gray-50 to-white">

        {/* HERO */}
        <section className="max-w-6xl mx-auto px-4 py-16 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-bold"
          >
            JEE Rank Predictor 2026
          </motion.h1>

          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            Estimate your <strong>JEE Main 2026 rank from percentile</strong> using
            trusted NTA-based logic. Designed for students preparing for JoSAA
            counselling and college prediction.
          </p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mt-10 bg-white shadow-xl rounded-2xl p-8 max-w-xl mx-auto"
          >
            <h2 className="text-2xl font-semibold mb-3">
              Predict Your Rank Instantly
            </h2>
            <p className="text-gray-600 mb-6">
              Use our advanced JEE Rank Predictor tool available on the homepage.
            </p>

            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Use Rank Predictor Tool <FaArrowRight />
            </Link>
          </motion.div>
        </section>

        {/* LOGIC */}
        <section className="max-w-6xl mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold mb-4">
            How JEE Rank is Calculated from Percentile
          </h2>

          <p className="text-gray-700">
            NTA uses percentile scores instead of raw marks to normalize difficulty
            across multiple sessions. A percentile reflects the percentage of
            candidates who scored equal to or below a candidate.
          </p>

          <div className="mt-4 bg-gray-100 p-4 rounded-lg">
            <p className="font-semibold">Approximation Formula:</p>
            <p className="mt-1 text-gray-800">
              Estimated Rank ≈ ((100 − Percentile) × Total Candidates) ÷ 100
            </p>
          </div>
        </section>

        {/* EXAMPLES */}
        <section className="bg-gray-50 py-12">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6">
              JEE Rank Prediction Examples (2025)
            </h2>

            <ul className="space-y-3">
              {[
                "99 Percentile → Rank under 15,000",
                "95 Percentile → Rank around 70,000",
                "90 Percentile → Rank around 1,40,000",
              ].map((item, index) => (
                <li key={index} className="flex gap-2">
                  <FaCheckCircle className="text-green-600 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* TRUST */}
        <section className="max-w-6xl mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold mb-4">
            Trusted References & Student Discussions
          </h2>

          <ul className="list-disc ml-6 text-blue-600 space-y-2">
            <li>
              <a
                href="https://quora.com/How-is-JEE-Main-rank-calculated-from-percentile"
                target="_blank"
                rel="nofollow ugc"
              >
                Quora: How is JEE Main rank calculated from percentile?
              </a>
            </li>
            <li>
              <a
                href="https://nta.ac.in"
                target="_blank"
                rel="nofollow"
              >
                National Testing Agency (NTA) – Official Website
              </a>
            </li>
          </ul>
        </section>

        {/* INTERNAL LINKS */}
        <section className="bg-blue-50 py-10">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <p className="mb-4 font-medium">
              Explore more JEE Main analysis:
            </p>

            <div className="flex justify-center font-semibold gap-4 flex-wrap">
              <Link
                href="/blog/jee_main_2025"
                className="bg-blue-500 px-4 py-2 text-white rounded-lg shadow hover:bg-blue-600"
              >
                JEE Main 2025 Complete Guide
              </Link>

              <Link
                href="/jee-main-marks-vs-percentile-2025"
                className="bg-white px-4 py-2 rounded-lg shadow hover:bg-gray-100"
              >
                Marks vs Percentile 2025
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
