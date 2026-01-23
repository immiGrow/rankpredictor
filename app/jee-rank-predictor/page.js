"use client";

import { motion } from "framer-motion";
import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
import { FaArrowCircleRight, FaArrowRight, FaChartLine, FaCheckCircle, FaGraduationCap, FaHistory, FaUniversity, FaUsers } from "react-icons/fa";

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
  id="faq-schema-jee-rank-predictor"
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How can I check marks vs percentile for JEE Main 2026?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can check marks vs percentile for JEE Main 2026 using shift-wise data. Our predictor uses previous year trends to estimate percentile for any given marks in each JEE Main session."
          }
        },
        {
          "@type": "Question",
          "name": "What is the shift-wise marks vs percentile for JEE Main?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "JEE Main exams are conducted in multiple shifts, and percentiles may slightly vary across shifts. Our shift-wise marks vs percentile predictor gives an estimated percentile for each session based on NTA methodology and past data."
          }
        },
        {
          "@type": "Question",
          "name": "How to use the marks vs percentile predictor?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Enter your JEE Main marks for each subject and total marks in the predictor tool. The system estimates your percentile and rank using normalized data from previous years and NTA logic."
          }
        },
        {
          "@type": "Question",
          "name": "Can I predict my rank using marks vs percentile?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Once you know your percentile, you can estimate your All India Rank (AIR) using the JEE Rank Predictor. Shift-wise percentile adjustments and category factors are also considered."
          }
        },
        {
          "@type": "Question",
          "name": "Is the marks vs percentile predictor accurate?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The marks vs percentile predictor provides an estimated range. Accuracy depends on total candidates, normalization across shifts, and previous years’ trends. Results should be treated as approximate guidance."
          }
        }
      ]
    }),
  }}
/>


      <div className="bg-linear-to-b from-gray-50 to-white">

      {/* Hero Section */}
<section className="text-center mb-12 bg-gradient-to-r from-blue-50 to-purple-50 p-12 rounded-2xl shadow-lg relative overflow-hidden">
  {/* Decorative background shapes */}
  <div className="absolute top-0 right-0 -mt-16 -mr-16 text-blue-100 text-8xl opacity-20 select-none pointer-events-none">
    <FaGraduationCap />
  </div>
  <div className="absolute bottom-0 left-0 -mb-16 -ml-16 text-purple-100 text-8xl opacity-20 select-none pointer-events-none">
    <FaChartLine />
  </div>

  {/* Heading */}
  <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">
    JEE Main 2026 <span className="text-blue-600">Rank Predictor</span>
  </h1>

  {/* Subheading / Description */}
  <p className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto mb-8">
    Estimate your <strong>All India Rank (AIR) for JEE Main 2026</strong> from percentile, category, and shift-wise marks. Plan your IIT, NIT & GFTI admissions confidently with data-based predictions.
  </p>

  {/* CTA Buttons */}
  <div className="flex flex-wrap justify-center gap-4 mb-6">
    <Link
      href="/"
      className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl flex items-center gap-2 transition-all duration-200 hover:scale-105 shadow-md"
    >
      <FaChartLine /> Use Rank Predictor
    </Link>
   
  </div>

  {/* Mini Tips */}
  <p className="text-gray-600 text-sm max-w-3xl mx-auto">
    <strong>Pro Tip:</strong> Check your percentile in each shift using the Rank Predictor, and use the College Predictor to see which IITs, NITs, and GFTIs you can get based on your expected rank.
  </p>
</section>



{/* HOW TO USE THE JEE RANK PREDICTOR */}
<section className="max-w-7xl mx-auto px-4 py-16">
  <h2 className="text-3xl font-bold mb-6 text-center">How to Use the JEE Rank Predictor</h2>

  <p className="text-gray-700 text-center max-w-3xl mx-auto mb-8">
    Our tool is designed to give you an accurate estimate of your All India Rank (AIR) and college chances. Follow the steps below for best results:
  </p>

  <ol className="list-decimal list-inside space-y-4 text-gray-700 md:max-w-3xl mx-auto">
    <li className="flex gap-2 items-start">
      <FaArrowCircleRight className="text-blue-600 mt-1" />
      Enter your <strong>JEE Main percentile</strong> for each subject and total marks.
    </li>
    <li className="flex gap-2 items-start">
      <FaArrowCircleRight className="text-blue-600 mt-1" />
      Select your <strong>category</strong> (General, OBC, SC, ST) and <strong>gender</strong> if applicable.
    </li>
    <li className="flex gap-2 items-start">
      <FaArrowCircleRight className="text-blue-600 mt-1" />
      Click <strong>“Predict Rank”</strong> to get an estimated All India Rank (AIR).
    </li>
    <li className="flex gap-2 items-start">
      <FaArrowCircleRight className="text-blue-600 mt-1" />
      Review <strong>probable colleges & branches</strong> based on previous years’ cutoff trends.
    </li>
    <li className="flex gap-2 items-start">
      <FaArrowCircleRight className="text-blue-600 mt-1" />
      If you appeared in multiple sessions, use all scores to get a <strong>more accurate predicted rank</strong>.
    </li>
  </ol>

  <div className="mt-8 bg-blue-50 border-l-4 border-blue-600 p-4 rounded-lg text-gray-700">
    <strong>Tip:</strong> Always check the shift-wise percentile for better accuracy. Your predicted rank may vary slightly based on total candidates and normalization.
  </div>
</section>

{/* HOW JEE RANK IS CALCULATED */}
<section className="max-w-7xl mx-auto px-4 py-16">
  <h2 className="text-3xl font-bold mb-6 text-center">How JEE Rank is Calculated from Percentile</h2>

  <p className="text-gray-700 mb-6 max-w-3xl mx-auto text-center">
    NTA uses percentile scores to normalize marks across multiple shifts. A percentile indicates the percentage of candidates who scored equal to or below a student.
    This is the primary basis for estimating your All India Rank (AIR).
  </p>

  <div className="grid md:grid-cols-2 gap-8 items-start">
    <div className="bg-gray-100 p-6 rounded-xl shadow-sm">
      <h3 className="font-semibold text-lg mb-2">Approximation Formula</h3>
      <p className="text-gray-800">
        Estimated Rank ≈ ((100 − Percentile) × Total Candidates) ÷ 100
      </p>
      <p className="mt-2 text-gray-600 text-sm">
        Note: This is an approximation. Exact rank depends on total candidates appearing in your shift and session normalization.
      </p>
    </div>

    <div className="bg-gray-100 p-6 rounded-xl shadow-sm">
      <h3 className="font-semibold text-lg mb-2">Key Points to Remember</h3>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>Percentile normalizes marks across shifts.</li>
        <li>Higher percentile always means better rank.</li>
        <li>Category and gender can slightly affect rank in reserved quotas.</li>
        <li>Use previous years’ data to understand trends and expected AIR.</li>
      </ul>
    </div>
  </div>
</section>

{/* JEE RANK PREDICTION EXAMPLES */}
<section className="bg-gray-50 py-16">
  <div className="max-w-7xl mx-auto px-4">
    <h2 className="text-3xl font-bold mb-8 text-center">JEE Rank Prediction Examples (2025)</h2>

    <p className="text-gray-700 text-center max-w-3xl mx-auto mb-8">
      These examples are based on previous years’ data and trends. They give you a realistic expectation of your rank for different percentiles.
    </p>

    <div className="grid md:grid-cols-3 gap-6">
      {[
        { percentile: "99+", rank: "Under 15,000", note: "Top IIT & NIT branches likely" },
        { percentile: "95", rank: "Around 70,000", note: "Good NITs & IIITs possible" },
        { percentile: "90", rank: "Around 1,40,000", note: "GFTIs & state colleges likely" },
      ].map((item, index) => (
        <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2 text-blue-600">{item.percentile} Percentile</h3>
          <p className="text-gray-800 mb-2">Estimated Rank: <strong>{item.rank}</strong></p>
          <p className="text-gray-600 text-sm">{item.note}</p>
        </div>
      ))}
    </div>

    <div className="mt-8 bg-green-50 border-l-4 border-green-600 p-4 rounded-lg text-gray-700 text-center">
      <FaCheckCircle className="inline mr-2 text-green-600" /> 
      Always remember: These are <strong>estimates</strong>. Actual rank may vary slightly depending on session difficulty and normalization.
    </div>
  </div>
</section>


{/* college prediction */}
<section className="bg-gray-50 py-12">
  <div className="max-w-6xl mx-auto px-4">
    <h2 className="text-2xl font-bold mb-4">Estimate Your College Chances</h2>
    <p className="text-gray-700 mb-4">
      Based on your predicted rank, you can gauge which IITs, NITs, and GFTIs
      you are likely to get. Here’s a simplified probability guide using
      previous year trends:
    </p>

    <ul className="space-y-2 text-gray-700">
      <li><strong>Top 5000 AIR:</strong> High chances for top IITs (B.Tech in CS, EE, ME)</li>
      <li><strong>5000–15000 AIR:</strong> Likely IIT branches like Civil, Chemical, or NITs in prime locations</li>
      <li><strong>15000–50000 AIR:</strong> NITs, IIITs, and GFTIs with good placements</li>
      <li><strong>50,000+ AIR:</strong> GFTIs and state-level colleges, consider home-state preference</li>
    </ul>

    <p className="mt-4 text-gray-600">
      Using this insight, you can plan JoSAA counselling and backup options smartly.
    </p>
  </div>
</section>

{/* COLLEGE PREDICTOR CTA */}
<section className="py-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
  <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

    <div>
      <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
        Predict Your Colleges Based on JEE Main 2026 Rank
      </h2>
      <p className="text-blue-100 mb-6 leading-relaxed">
        Once you estimate your percentile and rank using the shift-wise data,
        take the next step. Find out which NITs, IIITs, and top engineering
        colleges you can realistically get based on JoSAA trends.
      </p>

      <Link
        href="/josaa-college-predictor"
        className="inline-block bg-white text-blue-700 px-8 py-3 rounded-xl font-semibold shadow hover:scale-105 transition"
      >
        Check College Predictor →
      </Link>
    </div>

    <div className="bg-white/10 rounded-2xl p-6 text-sm text-blue-100">
      <ul className="space-y-3">
        <li>✔ Branch-wise cutoffs (CSE, ECE, EE, ME)</li>
        <li>✔ Category-wise predictions</li>
        <li>✔ JoSAA & CSAB trend-based logic</li>
        <li>✔ Free & instant results</li>
      </ul>
    </div>

  </div>
</section>

{/* percentile vs Rank Table 2025 */}
<section className="bg-gray-100 py-12">
  <div className="max-w-6xl mx-auto px-4 overflow-x-auto">
    <h2 className="text-2xl font-bold mb-4">Percentile vs Estimated Rank (2025)</h2>
    <table className="w-full table-auto border-collapse border border-gray-300 text-sm">
      <thead className="bg-blue-50">
        <tr>
          <th className="border px-4 py-2">Percentile</th>
          <th className="border px-4 py-2">Estimated Rank</th>
          <th className="border px-4 py-2">Likely College</th>
        </tr>
      </thead>
      <tbody>
        {[
          ["99.9+", "Under 5,000", "Top IITs"],
          ["99", "Around 15,000", "IITs & NITs"],
          ["95", "Around 70,000", "NITs & GFTIs"],
          ["90", "Around 1,40,000", "GFTIs & State Colleges"],
        ].map(([percentile, rank, college], index) => (
          <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
            <td className="border px-4 py-2">{percentile}</td>
            <td className="border px-4 py-2">{rank}</td>
            <td className="border px-4 py-2">{college}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</section>

      

        {/* INTERNAL LINKS */}
        <section className="bg-blue-50 py-10">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <p className="mb-4 font-bold text-xl">
              Explore more JEE Main analysis:
            </p>

            <div className="flex justify-center font-semibold gap-4 flex-wrap">
              <Link
                href="/jee-mains-marks-analysis-2025"
                className="bg-blue-600 px-4 py-2 text-white rounded-lg shadow hover:scale-105 transition-all duration-200"
              >
                JEE Main 2025 Complete Guide
              </Link>

              <Link
                href="/jee-mains-2026-shift-wise-marks-percentile-analysis"
                className="bg-indigo-600 px-4 py-2 text-white rounded-lg shadow hover:scale-105 transition-all duration-200"
              >
                Shiftwise Marks vs Percentile 2026
              </Link>
            </div>
          </div>
        </section>

{/* FAQ Section */}
<section className="max-w-6xl mx-auto px-4 py-16">
  <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>

  <div className="space-y-6">
    <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition">
      <h3 className="font-semibold text-lg">How can I check marks vs percentile for JEE Main 2026?</h3>
      <p className="mt-2 text-gray-700">
        You can check marks vs percentile using shift-wise data. Our predictor uses previous year trends to estimate percentile for any given marks in each JEE Main session.
      </p>
    </div>

    <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition">
      <h3 className="font-semibold text-lg">What is the shift-wise marks vs percentile for JEE Main?</h3>
      <p className="mt-2 text-gray-700">
        JEE Main exams are conducted in multiple shifts. Percentiles may slightly vary across shifts. Our shift-wise marks vs percentile predictor gives an estimated percentile for each session based on NTA methodology and past data.
      </p>
    </div>

    <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition">
      <h3 className="font-semibold text-lg">How to use the marks vs percentile predictor?</h3>
      <p className="mt-2 text-gray-700">
        Enter your JEE Main marks for each subject and total marks in our predictor tool. The system estimates your percentile and rank using normalized data from previous years and NTA logic.
      </p>
    </div>

    <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition">
      <h3 className="font-semibold text-lg">Can I predict my rank using marks vs percentile?</h3>
      <p className="mt-2 text-gray-700">
        Yes. Once you know your percentile, you can estimate your All India Rank (AIR) using our JEE Rank Predictor. Shift-wise percentile adjustments and category factors are also considered.
      </p>
    </div>

    <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition">
      <h3 className="font-semibold text-lg">Is the marks vs percentile predictor accurate?</h3>
      <p className="mt-2 text-gray-700">
        The predictor provides an estimated range. Accuracy depends on total candidates, normalization across shifts, and previous years’ trends. Always treat results as approximate guidance.
      </p>
    </div>
  </div>
</section>


      </div>
    </>
  );
}
