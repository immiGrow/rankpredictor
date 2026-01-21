"use client";

import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
import { motion } from "framer-motion";
import { FaArrowRight, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useState } from "react";
import HubPage from "@/components/HubPage";
import ShiftWiseTable from "@/components/ShiftWiseTable";

export default function JeeMainMarksVsRank2026() {
  // FAQ Accordion state
  const [openFaq, setOpenFaq] = useState({});

  const toggleFaq = (i) => {
    setOpenFaq((prev) => ({ ...prev, [i]: !prev[i] }));
  };

  const keyMarks = ["94", "120", "150", "200"];

  const quickTableData = [
    ["300", "1"],
    ["280 – 290", "20 – 60"],
    ["250 – 270", "100 – 400"],
    ["200 – 220", "1,000 – 3,000"],
    ["150 – 180", "5,000 – 15,000"],
    ["120 – 150", "15,000 – 40,000"],
    ["94", "82,000 – 88,000"],
  ];

 

  const faqs = [
    {
      question: "What is Marks vs Rank in JEE Main?",
      answer:
        "Marks vs Rank shows the expected All India Rank based on your JEE Main score and trends from previous years.",
    },
    {
      question: "Can the same marks give different ranks in different shifts?",
      answer:
        "Yes, normalization and shift difficulty can lead to slightly different ranks for the same marks.",
    },
    {
      question: "How is percentile related to rank?",
      answer:
        "Percentile shows the percentage of candidates who scored less than you; higher percentile generally means better rank.",
    },
    {
      question: "How can I estimate my exact rank?",
      answer:
        "Use our interactive JEE Main Rank Predictor tool to input your marks and percentile to get an instant expected rank.",
    },
  ];

  return (
    <>
      <Head>
  {/* Primary Meta Tags */}
  <title>JEE Mains 2026 Shiftwise Marks vs Percentile  – Get into IITs, NITs, IIITs</title>
  <meta
    name="description"
    content="Check expected JEE Main 2026 marks vs rank using 2024 & 2025 trends. Get accurate percentile predictions, expected cutoff analysis, college suggestions as IITs, NITs, IIITs, and FAQs for top engineering institutes."
  />
  <link
    rel="canonical"
    href="https://www.jeerankpredictor.in/jee_main_marks_vs_rank_2026"
  />

  {/* Open Graph / Facebook */}
  <meta property="og:type" content="website" />
  <meta property="og:title" content="JEE Main Marks vs Rank 2026 – Accurate Prediction" />
  <meta
    property="og:description"
    content="Predict your JEE Main 2026 rank and percentile accurately based on previous year trends. Explore expected cutoffs and top college options."
  />
  <meta property="og:url" content="https://www.jeerankpredictor.in/jee_main_marks_vs_rank_2026" />
  <meta property="og:site_name" content="JEE Rank Predictor 2026" />
  <meta property="og:image" content="https://www.jeerankpredictor.in/logo.jpg" />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="JEE Main Marks vs Rank 2026 – Accurate Prediction" />
  <meta
    name="twitter:description"
    content="Check your expected JEE Main 2026 marks vs rank using past year trends. Get percentile predictions, cutoff analysis & college suggestions."
  />
  <meta name="twitter:image" content="https://www.jeerankpredictor.in/logo.jpg" />
  <meta name="twitter:site" content="@jeerankpredictor" />

  {/* Optional: structured data for FAQ can be added here as <script type="application/ld+json"> */}
</Head>


      {/* FAQ Schema */}
      <Script
        id="faq-schema-marks-vs-rank-2026"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.question,
              acceptedAnswer: { "@type": "Answer", text: f.answer },
            })),
          }),
        }}
      />

      <main className="max-w-6xl mx-auto px-4 py-10">
        {/* Hero + CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-10"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            JEE Main Marks vs Rank 2026 – Expected & Accurate Prediction
          </h1>
          <p className="text-gray-700 leading-relaxed mb-4">
            Understanding your expected{" "}
            <strong>JEE Main 2026 marks vs rank</strong> helps set realistic
            targets. Analysis is based on official 2024–2025 trends and NTA
            normalization.
          </p>
          <Link
            href="/"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700"
          >
            Predict Your Rank Now <FaArrowRight className="inline ml-2" />
          </Link>
        </motion.div>

     <HubPage/>

        {/* Quick Table */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="overflow-x-auto mb-10">
          <table className="w-full border text-sm border-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="border px-3 py-2">Marks</th>
                <th className="border px-3 py-2">Expected Rank (2026)</th>
              </tr>
            </thead>
            <tbody>
              {quickTableData.map(([marks, rank]) => (
                <tr key={marks} className={marks === "94" ? "bg-green-50 font-semibold" : ""}>
                  <td className="border px-3 py-2">{marks}</td>
                  <td className="border px-3 py-2">{rank}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Detailed Table */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="overflow-x-auto mb-10">
           {/* SHIFT WISE TABLE */}
<section className="py-16 bg-linear-to-b from-gray-50 to-white">
  <div className="max-w-6xl mx-auto px-6">

    {/* Heading + Badge */}
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
      <div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
          JEE Main 2026 Shift-Wise Marks vs Percentile
        </h2>
        <p className="mt-2 text-gray-600 max-w-2xl">
          Estimated marks required in each shift to achieve a given percentile,
          based on past-year normalization trends.
        </p>
      </div>

      <span className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
        🔴 Live Update
        <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
      </span>
    </div>

    {/* Info Card */}
    <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5 mb-8">
      <ul className="grid md:grid-cols-3 gap-4 text-sm text-blue-900">
        <li>📅 Shift-wise data unlocks automatically after each exam day</li>
        <li>📊 Marks shown as ranges due to normalization</li>
        <li>🎯 Useful for rank & college prediction</li>
      </ul>
    </div>

    {/* Table */}
    <div className="relative">
      <ShiftWiseTable />
    </div>

    {/* Disclaimer */}
    <p className="mt-4 text-xs text-gray-500 leading-relaxed">
      * The above table is prepared using JEE Main 2025 shift-wise normalization
      data mapped to JEE Main 2026 exam dates. Actual percentiles may vary based on
      NTA normalization.
    </p>
  </div>
</section>
{/* COLLEGE PREDICTOR CTA */}
<section className="py-16 md:px-8 bg-linear-to-br from-blue-600 to-blue-800 text-white">
  <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
    
    <div>
      <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
        Predict Your Colleges Based on Your JEE Main 2026 Rank
      </h2>
      <p className="text-blue-100 mb-6 leading-relaxed">
        After checking your estimated percentile and rank, take the next step: find out which NITs, IIITs, and top engineering colleges
        you can realistically get based on JoSAA & CSAB trends.
      </p>

      <Link
        href="/jee-college-predictor"
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
        </motion.div>

        {/* Factors */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Factors Affecting Marks vs Rank</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Total number of candidates appearing for JEE Main 2026</li>
            <li>Difficulty level of different shifts</li>
            <li>Normalization and percentile calculation by NTA</li>
            <li>Score clustering at mid-range marks</li>
            <li>Bonus or dropped questions</li>
          </ul>
        </motion.div>

        {/* Related Internal Links */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-gray-50 border rounded-xl p-6 mb-10">
          <h2 className="text-xl font-semibold mb-3">Related Resources</h2>
          <ul className="list-disc pl-6 space-y-2 text-blue-600">
            <li><Link href="/jee-mains-2026-shift-wise-marks-percentile-analysis">JEE Main Marks vs Percentile Shiftwise Analysis 2026</Link></li>
            <li><Link href="/jee-rank-predictor">JEE Main Rank Predictor 2026</Link></li>
            <li><Link href="/josaa-college-predictor">JoSAA AI College Predictor</Link></li>
            <li><Link href="/jee_main_cutoff_2026">JEE Main Cutoff 2026</Link></li>
            <li><Link href="/jee-mains-marks-analysis-2025">JEE Main Marks vs Percentile Analysis 2025</Link></li>
          </ul>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions (FAQs)</h2>
          {faqs.map((f, i) => (
            <div key={i} className="border-b border-gray-200 mb-2">
              <button
                onClick={() => toggleFaq(i)}
                className="w-full flex justify-between items-center py-3 font-semibold text-gray-800 hover:text-blue-600"
              >
                {f.question}
                {openFaq[i] ? <FaChevronUp /> : <FaChevronDown />}
              </button>
              {openFaq[i] && (
                <p className="text-gray-700 px-4 pb-3">{f.answer}</p>
              )}
            </div>
          ))}
        </motion.div>

        {/* External References */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-10">
          <h2 className="text-xl font-semibold mb-3">External References</h2>
          <ul className="list-disc pl-6 space-y-2 text-blue-600">
            <li>
              <a href="https://engineering.careers360.com/articles/marks-vs-percentile-jee-mains-2025" target="_blank" rel="nofollow">
                Careers360 – Marks vs Percentile Analysis
              </a>
            </li>
            <li>
              <a href="https://nta.ac.in" target="_blank" rel="nofollow">
                NTA Official Website
              </a>
            </li>
          </ul>
        </motion.div>
      </main>
    </>
  );
}
