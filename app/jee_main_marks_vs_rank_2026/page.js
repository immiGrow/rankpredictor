"use client";

import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
import { motion } from "framer-motion";
import { FaArrowRight, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useState } from "react";
import HubPage from "@/components/HubPage";

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

  const detailedTableData = [
    ["290 – 300", "1 – 10"],
    ["270 – 289", "20 – 60"],
    ["250 – 269", "100 – 350"],
    ["230 – 249", "350 – 900"],
    ["210 – 229", "900 – 1,800"],
    ["190 – 209", "1,800 – 3,200"],
    ["170 – 189", "3,200 – 6,000"],
    ["150 – 169", "6,000 – 12,000"],
    ["130 – 149", "12,000 – 25,000"],
    ["110 – 129", "25,000 – 45,000"],
    ["100 – 109", "45,000 – 65,000"],
    ["90 – 99", "78,000 – 95,000"],
    ["80 – 89", "95,000 – 1,20,000"],
    ["Below 80", "1,20,000+"],
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
        <title>JEE Main Marks vs Rank 2026 – Accurate Prediction</title>
        <meta
          name="description"
          content="Check expected JEE Main 2026 marks vs rank based on 2024 & 2025 trends. Get accurate rank prediction, percentile range, cutoff analysis & FAQs."
        />
        <link
          rel="canonical"
          href="https://jeerankpredictor.in/jee_main_marks_vs_rank_2026"
        />
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
          <h2 className="text-2xl font-semibold mb-4">
            Detailed Marks vs Rank – Trend Analysis
          </h2>
          <table className="w-full border text-sm border-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="border px-3 py-2">Marks Range</th>
                <th className="border px-3 py-2">Expected Rank</th>
              </tr>
            </thead>
            <tbody>
              {detailedTableData.map(([marks, rank]) => (
                <tr key={marks}>
                  <td className="border px-3 py-2">{marks}</td>
                  <td className="border px-3 py-2">{rank}</td>
                </tr>
              ))}
            </tbody>
          </table>
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
            <li><Link href="/jee-rank-predictor">JEE Main Rank Predictor 2026</Link></li>
            <li><Link href="/">JEE Main Percentile Predictor</Link></li>
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
