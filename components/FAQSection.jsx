"use client";
import { useState } from "react";
import Script from "next/script";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import Link from "next/link";

const faqData = [
  {
    question: "How is the JEE Main 2026 percentile calculated for Jan Session?",
    answer: (
      <span>
        The JEE Main 2026 percentile is calculated using <strong>NTA’s multi-session normalization method</strong>.
        Our tool evaluates the relative difficulty of January shifts (Jan 21 to Jan 28) to estimate accurate
        Marks vs Percentile. You can explore it using our{" "}
        <Link href="/" className="text-blue-600 underline">
          JEE Main Rank Predictor
        </Link>.
      </span>
    )
  },
  {
    question: "What marks are required for 99 percentile in JEE Main 2026?",
    answer: (
      <span>
        Based on our <strong>January 2026 shift-wise difficulty analysis</strong>, scoring around{" "}
        <strong>185–195 marks</strong> in tougher shifts and <strong>210+ marks</strong> in easier shifts
        can fetch a 99 percentile. For exact estimates, check our{" "}
        <Link href="/jee-mains-2026-shift-wise-marks-percentile-analysis" className="text-blue-600 underline">
          Marks vs Percentile analysis
        </Link>.
      </span>
    )
  },
  {
    question: "Can I predict my NIT seat with this JEE rank tool?",
    answer: (
      <span>
        Yes. After getting your predicted <strong>All India Rank (AIR)</strong>, you can use our{" "}
        <Link
          href="/josaa-opening-closing-rank-2026-nit-iiit-cutoff/nit-trichy"
          className="text-blue-600 underline"
        >
          JOSAA College Predictor
        </Link>{" "}
        to check expected closing ranks for NIT Trichy, Warangal, and other top NITs & IIITs across branches.
      </span>
    )
  },
  {
    question: "Does this rank predictor account for Jan 2026 shift difficulty?",
    answer: (
      <span>
        Absolutely. Unlike generic calculators, our <strong>Intelligence Engine</strong> applies
        normalization factors based on real student feedback and shift-level difficulty from the
        January 2026 session, resulting in a highly reliable rank range.
      </span>
    )
  }
];


export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-6xl mx-auto px-4 py-16 bg-gray-50">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-6 text-gray-900">
        Frequently Asked Questions
      </h2>
      <p className="text-center text-gray-700 mb-12 text-lg">
        Answers to common queries about JEE Main rank prediction, percentile, and college chances.
      </p>

      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow hover:shadow-lg transition-shadow duration-200 overflow-hidden"
          >
            <button
              onClick={() => toggleIndex(index)}
              className="w-full flex justify-between items-center p-5 focus:outline-none"
            >
              <span className="text-gray-900 font-semibold text-lg">{faq.question}</span>
              {openIndex === index ? (
                <AiOutlineMinus size={24} className="text-blue-500" />
              ) : (
                <AiOutlinePlus size={24} className="text-blue-500" />
              )}
            </button>
            <div
              className={`px-5 pb-5 text-gray-700 transition-all duration-300 ${
                openIndex === index ? "block" : "hidden"
              }`}
            >
              {faq.answer}
            </div>
          </div>
        ))}
      </div>

     
    </section>
  );
}
