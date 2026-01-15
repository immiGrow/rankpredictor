
import Link from "next/link";

const  faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "When will the official JEE Main 2026 cutoff be released?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "NTA usually releases the official JEE Main cutoff after the results of each session, typically a few days after the exam."
        }
      },
      {
        "@type": "Question",
        "name": "Is qualifying cutoff same as admission cutoff?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. Qualifying cutoff is the minimum score required to pass JEE Main, while admission cutoffs vary by institute, course, and category."
        }
      },
      {
        "@type": "Question",
        "name": "How should I use JEE Main cutoff predictions?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Expected cutoffs help students set realistic preparation targets and evaluate their chances before official cutoffs are announced."
        }
      }
    ]
  }
export const metadata = {
  title: "JEE Main 2026 Cutoff – Category-wise Expected Percentile & Marks",
  
  description:
    "Check the expected JEE Main 2026 cutoff for General, OBC, SC, ST, EWS & PwD categories. View qualifying percentile, cutoff marks, previous year trends (2024 & 2025), and expert analysis to estimate your chances.",

  keywords: [
    "JEE Main 2026 Cutoff",
    "JEE Main Cutoff 2026 Category Wise",
    "JEE Main Qualifying Percentile 2026",
    "JEE Main Cutoff Marks 2026",
    "JEE Main Expected Cutoff",
    "JEE Main Cutoff Trends",
    "JEE Main 2026 Minimum Marks",
    "JEE Main Cutoff for JEE Advanced",
  ],
   

  alternates: {
    canonical: "https://jeerankpredictor.in/jee_main_cutoff_2026",
  },

  openGraph: {
    title: "JEE Main 2026 Cutoff – Expected Category-wise Percentile & Marks",
    description:
      "Expected JEE Main 2026 cutoff with category-wise qualifying percentile, cutoff marks, and past year trend analysis. Updated for JEE Advanced eligibility.",
    url: "https://jeerankpredictor.in/jee_main_cutoff_2026",
    siteName: "JEERankPredictor",
    type: "article",
    locale: "en_IN",
  },

  twitter: {
    card: "summary_large_image",
    title: "JEE Main 2026 Cutoff – Expected Category-wise Percentile",
    description:
      "Know the expected JEE Main 2026 cutoff marks & qualifying percentile category-wise. Based on 2024–2025 trends.",
  },
};



export default function page() {
  return (
    <>
  <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    <main className="px-6 py-10 max-w-7xl mx-auto">
      {/* Hero Section */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          JEE Main 2026 Expected Cutoff
        </h1>
        <p className="text-gray-700 text-lg mx-auto max-w-3xl">
          Know the expected qualifying scores, percentile ranges, and marks cut-offs
          for JEE Main 2026 based on past trends and expert predictions. These
          projections help you set realistic goals before official results are out.
        </p>
      </section>

      {/* Qualifying Cutoff Explained */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          What is JEE Main Cutoff?
        </h2>
        <p className="text-gray-700 leading-relaxed">
          The <strong>JEE Main cutoff</strong> refers to the minimum score or percentile
          you must achieve to qualify the exam and become eligible for further rounds
          such as <strong>JEE Advanced</strong> or JoSAA counselling for admissions.
          Cutoffs are released by the <strong>NTA</strong> after each session and
          vary based on difficulty level, number of candidates, and overall performance.
        </p>
      </section>

      {/* Expected Category-Wise Cutoff Table */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          JEE Main 2026 Expected Qualifying Cutoff (Category-Wise)
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-gray-200">
              <tr>
                <th className="px-4 py-2 font-medium">Category</th>
                <th className="px-4 py-2 font-medium">Expected Percentile</th>
                <th className="px-4 py-2 font-medium">Expected Marks Range</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="px-4 py-2">General (UR)</td>
                <td className="px-4 py-2">93% – 95%</td>
                <td className="px-4 py-2">~88 – 95</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">EWS</td>
                <td className="px-4 py-2">80% – 82%</td>
                <td className="px-4 py-2">~70 – 75</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">OBC-NCL</td>
                <td className="px-4 py-2">79% – 81%</td>
                <td className="px-4 py-2">~70 – 74</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">SC</td>
                <td className="px-4 py-2">60% – 63%</td>
                <td className="px-4 py-2">~40 – 50</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">ST</td>
                <td className="px-4 py-2">47% – 50%</td>
                <td className="px-4 py-2">~35 – 45</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">PwD</td>
                <td className="px-4 py-2">~0.001 – 0.02%</td>
                <td className="px-4 py-2">0 – 10</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-gray-600 mt-2">
          These are projections based on cutoff trends from past years; official cutoffs
          will be released by NTA after the JEE Main 2026 results.
        </p>
      </section>

      {/* Trend & Analysis */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Why Cutoffs Change Yearly
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Difficulty level of the exam varies every session.</li>
          <li>Total number of registered and appeared candidates affects distribution.</li>
          <li>Normalization between shifts alters final percentile and marks mapping.</li>
          <li>Reservation and category-wise seat distribution influence cutoff marks. :contentReference[oaicite:1]</li>
        </ul>
      </section>

      {/* Call to Action / Tools */}
      <section className="mb-12 bg-gray-100 p-6 rounded-lg text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Tools & Resources for JEE Main 2026
        </h2>
        <div className="flex flex-wrap font-semibold justify-center gap-4">
          <Link href="/jee-rank-predictor" className="bg-blue-500 py-2 px-3 text-white rounded-lg hover:bg-blue-600">
            Rank Predictor
          </Link>
          <Link href="/jee_main_marks_vs_rank_2026" className="bg-gray-400 py-2 px-3 text-black rounded-lg hover:bg-gray-500">
            Marks vs Percentile
            </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Frequently Asked Questions (FAQs)
        </h2>

        <div className="space-y-4">
          <details className="border border-gray-300 rounded-lg p-4">
            <summary className="font-medium cursor-pointer">
              When will the official JEE Main 2026 cutoff be released?
            </summary>
            <p className="mt-2 text-gray-700">
              NTA typically releases official cutoff values after each session’s results — usually days after Session 1 and Session 2 exams.
            </p>
          </details>

          <details className="border border-gray-300 rounded-lg p-4">
            <summary className="font-medium cursor-pointer">
              Is qualifying cutoff same as admission cutoff?
            </summary>
            <p className="mt-2 text-gray-700">
              No — qualifying cutoff is the minimum required to pass the exam; admission cutoff varies by institute, category, course, and seat availability.
            </p>
          </details>

          <details className="border border-gray-300 rounded-lg p-4">
            <summary className="font-medium cursor-pointer">
              How should I use cutoff predictions?
            </summary>
            <p className="mt-2 text-gray-700">
              Use expected cutoffs to benchmark your prep targets, plan mock test goals, and stay realistic before official data is released.
            </p>
          </details>
        </div>
      </section>
    </main>

    </>
  );
}
