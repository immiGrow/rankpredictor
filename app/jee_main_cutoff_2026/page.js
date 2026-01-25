"use client";
import Head from "next/head";
import Link from "next/link";
import { FaChartLine, FaCalculator, FaQuestionCircle, FaShieldAlt, FaTools, FaUniversity } from "react-icons/fa";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the expected JEE Main 2026 qualifying cutoff?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Based on previous years’ trends, the expected JEE Main 2026 qualifying percentile is approximately 93–95 for General, 80–82 for EWS, 79–81 for OBC-NCL, 60–63 for SC, and 48–51 for ST. These percentiles help determine eligibility for JEE Advanced and JoSAA counselling."
      }
    },
    {
      "@type": "Question",
      "name": "When will NTA release the official JEE Main 2026 cutoff?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The National Testing Agency (NTA) releases official cutoff percentiles a few days after each session’s results are declared on the official JEE Main website."
      }
    },
    {
      "@type": "Question",
      "name": "What’s the difference between qualifying cutoff and admission cutoff?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Qualifying cutoff is the minimum percentile needed to pass JEE Main and become eligible for JEE Advanced and JoSAA counselling, while admission cutoff is the actual rank/percentile required to secure admission into a specific college and branch, depending on seat availability and category."
      }
    },
    {
      "@type": "Question",
      "name": "How are JEE Main percentiles calculated?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "JEE Main uses percentile scoring to normalize marks across multiple shifts. Percentile shows the percentage of candidates a student has outperformed in their session, adjusted for difficulty."
      }
    },
    {
      "@type": "Question",
      "name": "How many marks do I need to safely qualify JEE Main 2026?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "There is no fixed marks requirement because NTA publishes cutoffs in percentiles. Trend data suggests approximately 90–100+ marks for the General category may correspond to the qualifying percentile. Higher marks improve chances for better colleges."
      }
    },
    {
      "@type": "Question",
      "name": "Does JEE Main 2026 cutoff vary by shift (Session 1 vs Session 2)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Although difficulty varies across shifts, NTA uses normalization so percentiles remain comparable. The final cutoff after both sessions reflects overall performance."
      }
    },
    {
      "@type": "Question",
      "name": "Does scoring above qualifying cutoff guarantee college admission?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Clearing the qualifying cutoff makes you eligible for JEE Advanced and JoSAA counselling. To secure a seat in top NITs, IIITs, or GFTIs, you typically need a higher percentile/rank depending on category, branch, and college demand."
      }
    }
  ]
};


export default function Page() {
  return (
    <>
      <Head>
        <title>JEE Main 2026 Cutoff – Category-wise (General/OBC/SC/ST/EWS) Expected Percentile & Marks</title>
        <meta
          name="description"
          content="Check the expected JEE Main 2026 cutoff for General, OBC, SC, ST, EWS & PwD categories. View qualifying percentile, cutoff marks, previous year trends (2024 & 2025), and expert analysis to estimate your chances."
        />
        <meta
          name="keywords"
          content="JEE Main 2026 Cutoff, JEE Main Cutoff 2026 Category Wise, JEE Main Qualifying Percentile 2026, JEE Main Cutoff Marks 2026, JEE Main Expected Cutoff, JEE Main Cutoff Trends, JEE Main 2026 Minimum Marks, JEE Main Cutoff for JEE Advanced"
        />
        <link rel="canonical" href="https://www.jeerankpredictor.in/jee_main_cutoff_2026" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="JEE Main 2026 Cutoff – Expected Category-wise Percentile & Marks" />
        <meta property="og:description" content="Expected JEE Main 2026 cutoff with category-wise qualifying percentile, cutoff marks, and past year trend analysis. Updated for JEE Advanced eligibility." />
        <meta property="og:url" content="https://www.jeerankpredictor.in/jee_main_cutoff_2026" />
        <meta property="og:site_name" content="JEERankPredictor" />
        <meta property="og:locale" content="en_IN" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="JEE Main 2026 Cutoff – Expected Category-wise Percentile" />
        <meta name="twitter:description" content="Know the expected JEE Main 2026 cutoff marks & qualifying percentile category-wise. Based on 2024–2025 trends." />
      </Head>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="px-6 py-10 max-w-7xl mx-auto">

       {/* Hero Section */}
<section className="text-center mb-12 bg-gradient-to-r from-blue-50 to-purple-50 p-12 rounded-2xl shadow-lg">
  <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">
    JEE Main 2026 <span className="text-blue-600">Expected Cutoff</span>
  </h1>
  <p className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto mb-6">
    Check the <strong>expected qualifying scores, percentile ranges, and marks cutoffs</strong> for JEE Main 2026 based on past trends and expert predictions. Plan your preparation smartly and know where you stand before the official results.
  </p>

  <div className="flex flex-wrap justify-center gap-4 mb-4">
    <Link
      href="/jee-rank-predictor"
      className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl flex items-center gap-2 transition-transform transform hover:-translate-y-1 shadow-md"
    >
      <FaChartLine /> Rank Predictor
    </Link>
    <Link
      href="/college-predictor"
      className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-xl flex items-center gap-2 transition-transform transform hover:-translate-y-1 shadow-md"
    >
      <FaUniversity /> College Predictor
    </Link>
  </div>

  <p className="text-gray-600 text-sm max-w-3xl mx-auto">
    <strong>Pro Tip:</strong> Use the Rank Predictor to estimate your percentile in each 2026 shift and the College Predictor to check your admission chances in top NITs, IIITs, and other institutes.
  </p>
</section>

        {/* What is Cutoff */}
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

        {/* Historical Cutoff Trends */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <FaChartLine /> Historical Cutoff Trends (2019–2025)
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse border">
              <thead className="bg-gray-200">
                <tr>
                  <th className="px-4 py-2 border">Year</th>
                  <th className="pl-4 py-2 border">GENERAL (UR)</th>
                  <th className="px-4 py-2 border">EWS</th>
                  <th className="px-4 py-2 border">OBC‑NCL</th>
                  <th className="px-4 py-2 border">SC</th>
                  <th className="px-4 py-2 border">ST</th>
                  <th className="px-4 py-2 border">PwD</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="px-4 py-2 border">2025</td>
                  <td className="px-4 py-2 border">93.10</td>
                  <td className="px-4 py-2 border">80.38</td>
                  <td className="px-4 py-2 border">79.43</td>
                  <td className="px-4 py-2 border">61.15</td>
                  <td className="px-4 py-2 border">47.90</td>
                  <td className="px-4 py-2 border">0.0079</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-2 border">2024</td>
                  <td className="px-4 py-2 border">93.24</td>
                  <td className="px-4 py-2 border">81.33</td>
                  <td className="px-4 py-2 border">79.68</td>
                  <td className="px-4 py-2 border">60.09</td>
                  <td className="px-4 py-2 border">46.70</td>
                  <td className="px-4 py-2 border">0.0019</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-2 border">2023</td>
                  <td className="px-4 py-2 border">90.78</td>
                  <td className="px-4 py-2 border">75.62</td>
                  <td className="px-4 py-2 border">73.61</td>
                  <td className="px-4 py-2 border">51.98</td>
                  <td className="px-4 py-2 border">37.23</td>
                  <td className="px-4 py-2 border">0.0013</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-2 border">2022</td>
                  <td className="px-4 py-2 border">88.41</td>
                  <td className="px-4 py-2 border">63.11</td>
                  <td className="px-4 py-2 border">67.00</td>
                  <td className="px-4 py-2 border">43.08</td>
                  <td className="px-4 py-2 border">26.78</td>
                  <td className="px-4 py-2 border">0.0031</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-2 border">2021</td>
                  <td className="px-4 py-2 border">87.89</td>
                  <td className="px-4 py-2 border">68.02</td>
                  <td className="px-4 py-2 border">68.02</td>
                  <td className="px-4 py-2 border">46.88</td>
                  <td className="px-4 py-2 border">34.67</td>
                  <td className="px-4 py-2 border">0.0096</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-600 mt-2">
            Data based on past JEE Main trends. Cutoffs can change depending on difficulty, number of candidates, and normalization.
          </p>
        </section>



        {/* Why Cutoffs Change */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Why Cutoffs Change Every Year
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Number of registered and appeared candidates.</li>
            <li>Difficulty level of the exam.</li>
            <li>Normalization across multiple shifts.</li>
            <li>Reservation and category-wise seat distribution.</li>
            <li>Overall performance distribution of candidates.</li>
          </ul>
        </section>

        {/* Expected Category-Wise Cutoff */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            JEE Main 2026 Expected Qualifying Cutoff (Category-Wise)
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse border">
              <thead className="bg-gray-200">
                <tr>
                  <th className="px-4 py-2 border">Category</th>
                  <th className="px-4 py-2 border">Expected Percentile</th>
                  <th className="px-4 py-2 border">Expected Marks Range</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="px-4 py-2 border">General (UR)</td>
                  <td className="px-4 py-2 border">93.3 – 95</td>
                  <td className="px-4 py-2 border">~88 – 95</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-2 border">EWS</td>
                  <td className="px-4 py-2 border">81 – 83</td>
                  <td className="px-4 py-2 border">~70 – 75</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-2 border">OBC-NCL</td>
                  <td className="px-4 py-2 border">80 – 82</td>
                  <td className="px-4 py-2 border">~70 – 74</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-2 border">SC</td>
                  <td className="px-4 py-2 border">61 – 63</td>
                  <td className="px-4 py-2 border">~40 – 50</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-2 border">ST</td>
                  <td className="px-4 py-2 border">48 – 50</td>
                  <td className="px-4 py-2 border">~35 – 45</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-2 border">PwD</td>
                  <td className="px-4 py-2 border">0.001 – 0.01</td>
                  <td className="px-4 py-2 border">0 – 10</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-600 mt-2">
            These are projections based on past trends; official cutoffs will be announced by NTA.
          </p>
        </section>

     
     {/* Marks vs Percentile */}
<section className="mb-10">
  <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center gap-3">
    <FaCalculator className="text-blue-500" /> JEE Main 2026 Marks vs Percentile (Updated)
  </h2>

  <p className="text-gray-700 mb-4">
    Based on <strong>JEE Main 2025 trends</strong>, here is an approximate mapping of marks to percentile for the <strong>General category</strong>. Percentiles normalize across shifts, so small differences in marks at the top scores can lead to large percentile jumps.
  </p>

  <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
    <table className="w-full text-left border-collapse">
      <thead className="bg-gray-100">
        <tr>
          <th className="px-4 py-3 border-b text-gray-700">Marks Range (out of 300)</th>
          <th className="px-4 py-3 border-b text-gray-700">Approx. Percentile (General)</th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        <tr>
          <td className="px-4 py-2">290 – 300</td>
          <td className="px-4 py-2">99.998 – 100</td>
        </tr>
        <tr>
          <td className="px-4 py-2">280 – 289</td>
          <td className="px-4 py-2">99.995 – 99.997</td>
        </tr>
        <tr>
          <td className="px-4 py-2">270 – 279</td>
          <td className="px-4 py-2">99.990 – 99.994</td>
        </tr>
        <tr>
          <td className="px-4 py-2">250 – 269</td>
          <td className="px-4 py-2">99.950 – 99.989</td>
        </tr>
        <tr>
          <td className="px-4 py-2">220 – 249</td>
          <td className="px-4 py-2">99.870 – 99.949</td>
        </tr>
        <tr>
          <td className="px-4 py-2">200 – 219</td>
          <td className="px-4 py-2">99.740 – 99.869</td>
        </tr>
        <tr>
          <td className="px-4 py-2">180 – 199</td>
          <td className="px-4 py-2">99.560 – 99.739</td>
        </tr>
        <tr>
          <td className="px-4 py-2">160 – 179</td>
          <td className="px-4 py-2">99.000 – 99.559</td>
        </tr>
        <tr>
          <td className="px-4 py-2">140 – 159</td>
          <td className="px-4 py-2">98.500 – 98.999</td>
        </tr>
        <tr>
          <td className="px-4 py-2">120 – 139</td>
          <td className="px-4 py-2">97.500 – 98.499</td>
        </tr>
        <tr>
          <td className="px-4 py-2">100 – 119</td>
          <td className="px-4 py-2">96.000 – 97.499</td>
        </tr>
        <tr>
          <td className="px-4 py-2">80 – 99</td>
          <td className="px-4 py-2">93.000 – 95.999</td>
        </tr>
        <tr>
          <td className="px-4 py-2">60 – 79</td>
          <td className="px-4 py-2">90.000 – 92.999</td>
        </tr>
        <tr>
          <td className="px-4 py-2">40 – 59</td>
          <td className="px-4 py-2">84.000 – 89.999</td>
        </tr>
        <tr>
          <td className="px-4 py-2">20 – 39</td>
          <td className="px-4 py-2">70.000 – 83.999</td>
        </tr>
        <tr>
          <td className="px-4 py-2">0 – 19</td>
          <td className="px-4 py-2">Below 70</td>
        </tr>
      </tbody>
    </table>
  </div>

  <p className="text-sm text-gray-600 mt-3">
    <strong>Tip:</strong> Aim for 240+ marks (~94+ percentile) to safely qualify for JEE Advanced. Percentiles are normalized across shifts, so small differences in marks at top scores result in large percentile differences.
  </p>
</section>
{/* PLACE THIS DIRECTLY BELOW YOUR MAIN MARKS/PERCENTILE TABLE */}
<div className="my-10 p-6 bg-gradient-to-r  from-blue-600 to-indigo-600 rounded-3xl shadow-2xl">
  <div className="bg-white rounded-[calc(1.5rem-1px)] p-6 md:p-8">
    <div className="flex flex-col md:flex-row items-center gap-6">
      <div className="flex-1 text-center md:text-left">
        <span className="bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
          Next Step: College Selection
        </span>
        <h3 className="text-2xl font-black text-slate-900 mt-3 mb-2">
          Found your expected percentile?
        </h3>
        <p className="text-slate-600 text-sm md:text-base leading-relaxed">
          Don&apos;t stop at numbers. Check which <strong>NITs, IIITs, and GFTIs</strong> match your predicted percentile for the 2026 session.
        </p>
      </div>
      <div className="flex flex-col gap-3 w-full md:w-auto">
        <Link 
          href="/josaa-opening-closing-rank-2026-nit-iiit-cutoff/nit-warangal" 
          className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold text-center hover:bg-slate-800 transition-all shadow-lg hover:shadow-blue-200"
        >
          View All College Cutoffs →
        </Link>
      </div>
    </div>
  </div>
</div>

        {/* Safe Scores */}
    {/* Safe Scores */}
<section className="mb-10">
  <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
    <FaShieldAlt className="text-green-500" /> Safe Score Targets (Category-wise)
  </h2>

  <p className="text-gray-700 mb-4">
    Based on <strong>JEE Main 2025 trends</strong>, these are <strong>safe score ranges</strong> you should aim for to have a good chance of admission in NITs, IIITs, and other institutes.  
    <strong>Qualifying marks</strong> are the minimum required to appear for JEE Advanced, but aiming for these safe scores increases your chances for competitive branches.
  </p>

  <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
    <table className="w-full text-left border-collapse">
      <thead className="bg-gray-100">
        <tr>
          <th className="px-4 py-3 border-b text-gray-700">Category</th>
          <th className="px-4 py-3 border-b text-gray-700">Qualifying Marks (Approx)</th>
          <th className="px-4 py-3 border-b text-gray-700">Safe Score Target</th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        <tr>
          <td className="px-4 py-2">General (UR)</td>
          <td className="px-4 py-2">~90–95</td>
          <td className="px-4 py-2">150 – 180+</td>
        </tr>
        <tr>
          <td className="px-4 py-2">EWS</td>
          <td className="px-4 py-2">~75–78</td>
          <td className="px-4 py-2">130 – 160+</td>
        </tr>
        <tr>
          <td className="px-4 py-2">OBC-NCL</td>
          <td className="px-4 py-2">~68–78</td>
          <td className="px-4 py-2">130 – 160+</td>
        </tr>
        <tr>
          <td className="px-4 py-2">SC</td>
          <td className="px-4 py-2">~45–55</td>
          <td className="px-4 py-2">100 – 130+</td>
        </tr>
        <tr>
          <td className="px-4 py-2">ST</td>
          <td className="px-4 py-2">~35–45</td>
          <td className="px-4 py-2">90 – 110+</td>
        </tr>
        <tr>
          <td className="px-4 py-2">PwD</td>
          <td className="px-4 py-2">~0.5–2</td>
          <td className="px-4 py-2">30 – 50+</td>
        </tr>
      </tbody>
    </table>
  </div>

  <p className="text-sm text-gray-600 mt-3">
    <strong>Note:</strong> Qualifying marks are the minimum needed to be eligible for JEE Advanced, whereas safe score targets are suggested to secure better chances for admissions in competitive branches. These numbers are based on latest expert analyses and trends from 2025.
  </p>
</section>


      {/* Tools CTA */}
<section className="mb-12 bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-2xl text-center shadow-lg">
  <h2 className="text-3xl font-extrabold text-gray-900 mb-4 flex justify-center items-center gap-3">
    <FaTools className="text-blue-500" /> Key Tools for JEE Main 2026
  </h2>
  <p className="text-gray-700 mb-6 max-w-3xl mx-auto">
    Predict your <strong>rank</strong> and see your <strong>college chances</strong> with our expert tools. Access the <strong>2026 shift-wise analysis</strong> to plan your strategy effectively and target the best colleges based on your score.
  </p>

  <div className="flex flex-wrap justify-center gap-4">
    <Link
      href="/jee-rank-predictor"
      className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl flex items-center gap-2 transition-transform transform hover:-translate-y-1 shadow-md"
    >
      <FaChartLine /> Rank Predictor
    </Link>

    <Link
      href="/josaa-college-predictor"
      className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-xl flex items-center gap-2 transition-transform transform hover:-translate-y-1 shadow-md"
    >
      <FaUniversity /> College Predictor
    </Link>
  </div>

  <p className="text-gray-600 text-sm mt-6 max-w-3xl mx-auto">
    <strong>Pro Tip:</strong> Start with the Rank Predictor to know your expected rank in each 2026 shift, then check the College Predictor to explore admission possibilities in NITs, IIITs, and other top institutes.
  </p>
</section>


       {/* FAQ */}
<section className="mb-12">
  <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
    <FaQuestionCircle /> Frequently Asked Questions (FAQs)
  </h2>
  <div className="space-y-4">

    <details className="border border-gray-300 rounded-lg p-4">
      <summary className="font-medium cursor-pointer">
        What is the expected JEE Main 2026 qualifying cutoff?
      </summary>
      <p className="mt-2 text-gray-700">
        Based on trend analysis from previous years, the expected JEE Main 2026 qualifying cutoff percentile is approximately <strong>93–95 for General</strong>, ~80–82 for EWS, ~79–81 for OBC-NCL, ~60–63 for SC, and ~48–51 for ST. These represent the percentiles students typically need to qualify for JEE Advanced and JoSAA counselling. 
      </p>
    </details>

    <details className="border border-gray-300 rounded-lg p-4">
      <summary className="font-medium cursor-pointer">
        When will NTA release the official JEE Main 2026 cutoff?
      </summary>
      <p className="mt-2 text-gray-700">
        The National Testing Agency (NTA) releases official cutoff percentiles after each session’s results are declared on the official JEE Main website. Cutoffs are typically published a few days after Session 1 results and then after Session 2. 
      </p>
    </details>

    <details className="border border-gray-300 rounded-lg p-4">
      <summary className="font-medium cursor-pointer">
        What’s the difference between qualifying cutoff and admission cutoff?
      </summary>
      <p className="mt-2 text-gray-700">
        <strong>Qualifying cutoff</strong> is the minimum percentile needed to pass JEE Main 2026 and become eligible for JEE Advanced and JoSAA counselling. <strong>Admission cutoff</strong>, however, is the actual rank/percentile required to secure admission into a specific college and branch — it depends on seat availability, category, and institute demand.
      </p>
    </details>

    <details className="border border-gray-300 rounded-lg p-4">
      <summary className="font-medium cursor-pointer">
        How are JEE Main percentiles calculated?
      </summary>
      <p className="mt-2 text-gray-700">
        JEE Main uses a percentile scoring system to normalize scores across multiple shifts. Percentile reflects the percentage of candidates that a student has outperformed in their session and is calculated relative to overall performance and session difficulty. 
      </p>
    </details>

    <details className="border border-gray-300 rounded-lg p-4">
      <summary className="font-medium cursor-pointer">
        How many marks do I need to safely qualify JEE Main 2026?
      </summary>
      <p className="mt-2 text-gray-700">
        There is no official “fixed” marks requirement because NTA publishes cutoffs in percentiles. However, trend data suggests that approximately <strong>90–100+ marks</strong> may correspond to the qualifying percentile for the General category. Higher marks improve your chances significantly for better colleges.
      </p>
    </details>

    <details className="border border-gray-300 rounded-lg p-4">
      <summary className="font-medium cursor-pointer">
        Does JEE Main 2026 cutoff vary by shift (Session 1 vs Session 2)?
      </summary>
      <p className="mt-2 text-gray-700">
        Although each shift’s difficulty may vary, NTA uses normalization so that cutoff percentiles remain comparable across shifts. The final cutoff after both sessions is unified and reflects overall performance. 
      </p>
    </details>

    <details className="border border-gray-300 rounded-lg p-4">
      <summary className="font-medium cursor-pointer">
        Does scoring above qualifying cutoff guarantee college admission?
      </summary>
      <p className="mt-2 text-gray-700">
        No — clearing the qualifying cutoff only makes you eligible for Advanced and JoSAA counselling. To secure a seat in top NITs, IIITs, or GFTIs, you typically need a much higher percentile/rank depending on category, branch, and college demand.
      </p>
    </details>

  </div>
</section>


      </main>
    </>
  );
}
