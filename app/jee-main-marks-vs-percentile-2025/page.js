

import HubPage from "@/components/HubPage";
import { motion } from "framer-motion";

import Link from "next/link";
import Script from "next/script";
import { FaCheckCircle, FaExternalLinkAlt } from "react-icons/fa";

/* ============================
   SEO METADATA
   /jee-main-marks-vs-percentile-2025
============================ */
export const metadata = {
  title:
    "JEE Main Marks vs Percentile 2025 (Shift-wise & Accurate Analysis)",

  description:
    "Check JEE Main 2025 marks vs percentile with accurate shift-wise analysis, expected rank ranges, normalization logic, FAQs, and expert insights.",

  alternates: {
    canonical:
      "https://jeerankpredictor.in/jee-main-marks-vs-percentile-2025",
  },

  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
  },

  openGraph: {
    type: "article",
    title:
      "JEE Main Marks vs Percentile 2025 – Shift-wise Analysis",
    description:
      "Accurate JEE Main 2025 marks vs percentile table with expected ranks, shift-wise difficulty impact, and normalization explained.",
    url:
      "https://jeerankpredictor.in/jee-main-marks-vs-percentile-2025",
    siteName: "JEERankPredictor.in",
    locale: "en_IN",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "JEE Main Marks vs Percentile 2025 – Complete Analysis",
    description:
      "Know how marks convert to percentile in JEE Main 2025. Includes shift-wise impact, rank estimates, and FAQs.",
  },

  category: "Education",
};


export default function Page() {
  return (
    <>
   
      {/* FAQ SCHEMA */}
     <Script
  id="faq-schema-marks-vs-percentile"
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the difference between marks and percentile in JEE Main?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Marks are the raw score obtained out of 300 in JEE Main, while percentile indicates the percentage of candidates who scored equal to or below a particular candidate in a specific session."
          }
        },
        {
          "@type": "Question",
          "name": "Can the same marks give different percentiles in different shifts?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. JEE Main uses a normalization process to adjust for variations in difficulty across shifts, so the same marks can result in different percentiles in different sessions."
          }
        },
        {
          "@type": "Question",
          "name": "How much percentile is 120 marks in JEE Mains 2025?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Scoring around 120 marks in JEE Main 2025 generally corresponds to a percentile range of approximately 97 to 98, depending on shift difficulty and overall performance of candidates."
          }
        },
        {
          "@type": "Question",
          "name": "What percentile can I expect at 150 marks in JEE Main 2025?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Candidates scoring around 150 marks in JEE Main 2025 usually get a percentile between 98.7 and 99.1. The exact percentile may vary slightly based on normalization."
          }
        },
        {
          "@type": "Question",
          "name": "Is 99 percentile possible below 200 marks in JEE Main?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "In some tougher shifts, candidates have achieved 99 percentile with marks between 180 and 195. However, in relatively easier shifts, 200 or more marks are generally required."
          }
        },
        {
          "@type": "Question",
          "name": "Which marks are considered good in JEE Main 2025?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A score above 150 marks is generally considered good in JEE Main 2025, as it places candidates among the top 1–2 percent. Scores above 200 marks are considered excellent."
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
            JEE Main 2025 Marks vs Percentile
          </motion.h1>

          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            Understand how your <strong>JEE Main 2025 marks</strong> translate into
            <strong> percentile scores</strong> using official NTA normalization trends,
            real student data, and expert analysis.
          </p>

          <div className="mt-6 flex justify-center gap-4 flex-wrap">
            <Link
              href="/jee-rank-predictor"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700"
            >
              Predict Rank from Percentile
            </Link>
            <Link
              href="/"
              className="bg-white border px-6 py-3 rounded-lg font-semibold hover:bg-gray-100"
            >
              Use Rank Predictor Tool
            </Link>
          </div>
        </section>

        {/* INFO CARDS */}
        <section className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Marks ≠ Percentile",
              text: "Same marks can give different percentile in different shifts due to normalization."
            },
            {
              title: "Percentile is Relative",
              text: "Percentile shows how many candidates scored below you, not your raw marks."
            },
            {
              title: "Shift Difficulty Matters",
              text: "Tougher shifts usually give higher percentile at the same marks."
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="bg-white shadow rounded-xl p-5"
            >
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.text}</p>
            </motion.div>
          ))}
        </section>

        {/* TABLE */}
        <section className="max-w-6xl mx-auto px-4 py-14">
          <h2 className="text-2xl font-bold mb-4">
            Official JEE Main 2025 Marks vs Percentile Table
          </h2>

          <div className="overflow-x-auto rounded-xl shadow">
            <table className="min-w-full text-sm bg-white">
              <thead className="bg-gray-900 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Marks Range</th>
                  <th className="px-4 py-3 text-left">Expected Percentile</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["300 – 281", "100 – 99.9998"],
                  ["271 – 280", "99.99 – 99.997"],
                  ["250 – 270", "99.95 – 99.99"],
                  ["231 – 249", "99.93 – 99.97"],
                  ["201 – 230", "99.78 – 99.92"],
                  ["181 – 200", "99.60 – 99.77"],
                  ["151 – 180", "98.7 – 99.5"],
                  ["121 – 150", "97.8 – 98.6"],
                  ["91 – 120", "95 – 97.7"],
                  ["61 – 90", "87 – 94"],
                  ["31 – 60", "58 – 86"],
                  ["0 – 30", "Below 57"],
                ].map((row, i) => (
                  <tr key={i} className="border-b">
                    <td className="px-4 py-3">{row[0]}</td>
                    <td className="px-4 py-3 font-medium">{row[1]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* SHIFT INSIGHTS */}
        <section className="bg-gray-50 py-14">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-2xl font-bold mb-4">
              Shift-Wise & Date-Wise Observations
            </h2>

            <ul className="space-y-3">
              {[
                "170–180 marks in tough shifts often reached 98.5–99 percentile",
                "200+ marks generally ensured 99+ percentile across most shifts",
                "January sessions showed higher competition than April"
              ].map((item, i) => (
                <li key={i} className="flex gap-2">
                  <FaCheckCircle className="text-green-600 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

<HubPage/>
      

{/* QUESTIONS & ANSWERS */}
<section className="max-w-6xl mx-auto px-4 py-14">
  <h2 className="text-2xl font-bold mb-6">
    Questions & Answers – JEE Main Marks vs Percentile 2025
  </h2>

  <div className="space-y-5">
    
    {/* Q1 */}
    <div className="bg-white border rounded-xl p-5 shadow-sm">
      <p className="font-semibold text-lg text-gray-900">
        Q. How much percentile is 120 marks in JEE Mains 2025?
      </p>
      <p className="mt-3 text-gray-700">
        <strong>Ans:</strong> Scoring <strong>120 marks in JEE Main 2025</strong> generally
        corresponds to a percentile range of approximately
        <strong> 97 to 98 percentile</strong>. However, the exact percentile may vary
        depending on the difficulty level of your shift and overall candidate performance.
      </p>
    </div>

    {/* Q2 */}
    <div className="bg-white border rounded-xl p-5 shadow-sm">
      <p className="font-semibold text-lg text-gray-900">
        Q. What percentile can I expect at 150 marks in JEE Main?
      </p>
      <p className="mt-3 text-gray-700">
        <strong>Ans:</strong> Candidates scoring around <strong>150 marks</strong> in JEE Main
        usually get a percentile between <strong>98.7 and 99.1</strong>. In tougher shifts,
        this percentile can be slightly higher due to normalization.
      </p>
    </div>

    {/* Q3 */}
    <div className="bg-white border rounded-xl p-5 shadow-sm">
      <p className="font-semibold text-lg text-gray-900">
        Q. Is 99 percentile possible with less than 200 marks?
      </p>
      <p className="mt-3 text-gray-700">
        <strong>Ans:</strong> Yes, in some tougher shifts, candidates have achieved
        <strong> 99 percentile</strong> with marks in the range of
        <strong> 180–195</strong>. However, in easier shifts, 200+ marks are generally
        required.
      </p>
    </div>

    {/* Q4 */}
    <div className="bg-white border rounded-xl p-5 shadow-sm">
      <p className="font-semibold text-lg text-gray-900">
        Q. Do the same marks give the same percentile in all shifts?
      </p>
      <p className="mt-3 text-gray-700">
        <strong>Ans:</strong> No. JEE Main uses a normalization process to account for
        variations in shift difficulty. As a result, the same marks may lead to different
        percentiles across different shifts.
      </p>
    </div>

    {/* Q5 */}
    <div className="bg-white border rounded-xl p-5 shadow-sm">
      <p className="font-semibold text-lg text-gray-900">
        Q. Which marks are considered good in JEE Main 2025?
      </p>
      <p className="mt-3 text-gray-700">
        <strong>Ans:</strong> A score above <strong>150 marks</strong> is generally considered
        good, as it places candidates in the <strong>top 1–2%</strong>. Scores above
        <strong> 200 marks</strong> are considered excellent and usually ensure a very high
        percentile.
      </p>
    </div>

  </div>
</section>

  {/* TRUST LINKS */}
        <section className="max-w-6xl mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold mb-4">
            Trusted Sources & References
          </h2>

          <ul className="space-y-2 text-blue-600">
            <li>
              <a
                href="https://nta.ac.in"
                target="_blank"
                rel="nofollow"
                className="flex items-center gap-2"
              >
                NTA Official Website <FaExternalLinkAlt />
              </a>
            </li>
            <li>
              <a
                href="https://engineering.careers360.com/articles/marks-vs-percentile-jee-mains-2025"
                target="_blank"
                rel="nofollow"
                className="flex items-center gap-2"
              >
                Careers360 Marks vs Percentile Analysis <FaExternalLinkAlt />
              </a>
            </li>
          </ul>
        </section>

      </div>
    </>
  );
}
