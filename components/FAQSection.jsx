"use client";
import { useState } from "react";
import Script from "next/script";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import Link from "next/link";

const faqData = [
  // Existing FAQs
  {
    question: "How does the JEE Main Rank Predictor work?",
    answer: (
      <span>
        The predictor estimates your <strong>All India Rank (AIR)</strong> based on your marks and historical trends.
        It converts marks → percentile → rank using statistical analysis. 
        You can try it with our <Link href="/" className="text-blue-600 underline">JEE Main Percentile Predictor</Link>.
      </span>
    )
  },
  {
    question: "Is the JEE Main percentile calculation accurate?",
    answer: (
      <span>
        Our percentile calculation uses <strong>NTA normalization patterns</strong> and past year trends. 
        For more information, check <a href="https://www.nta.ac.in" target="_blank" className="text-blue-600 underline">NTA official site</a>.
      </span>
    )
  },
  {
    question: "Can I predict my college chances?",
    answer: (
      <span>
        Yes! Use our <a href="https://collegedunia.com/college-predictor" target="_blank" className="text-blue-600 underline">College Predictor</a> to see which IITs, NITs, or IIITs you may get based on your estimated rank.
      </span>
    )
  },
  {
    question: "Do I need to signup to use these tools?",
    answer: "No, all our prediction tools are completely free and require no signup, protecting your privacy."
  },
  {
    question: "How often is the data updated?",
    answer: "We update our database regularly based on the latest JEE trends, cutoffs, and closing ranks."
  },
  {
    question: "Where can I read more about JEE rank trends?",
    answer: (
      <span>
        You can check <a href="https://www.quora.com/What-is-the-expected-cutoff-for-JEE-Main" target="_blank" className="text-red-600 underline">Quora discussions</a> or official JEE/NTA websites for more insights.
      </span>
    )
  },
  // SEO-critical questions from your schema
  {
    question: "How accurate is JEE Main Rank Predictor 2026?",
    answer: "The JEE Main Rank Predictor 2026 provides an estimated rank range based on previous year trends and public data. Actual ranks may vary due to exam difficulty and total candidates."
  },
  {
    question: "Is this JEE rank predictor official?",
    answer: "No, this tool is not affiliated with NTA. It is an independent educational tool designed to help students estimate their expected rank."
  },
  {
    question: "Can I use this predictor before official results?",
    answer: "Yes. This rank predictor is meant for pre-result estimation to help students understand their approximate standing."
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

      {/* Structured Data for SEO */}
      <Script
        id="faq-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "How accurate is JEE Main Rank Predictor 2026?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "The JEE Main Rank Predictor 2026 provides an estimated rank range based on previous year trends and public data. Actual ranks may vary due to exam difficulty and total candidates."
                }
              },
              {
                "@type": "Question",
                name: "Is this JEE rank predictor official?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "No, this tool is not affiliated with NTA. It is an independent educational tool designed to help students estimate their expected rank."
                }
              },
              {
                "@type": "Question",
                name: "Can I use this predictor before official results?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Yes. This rank predictor is meant for pre-result estimation to help students understand their approximate standing."
                }
              }
            ]
          })
        }}
      />
    </section>
  );
}
