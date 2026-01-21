"use client";

import RankGapSection from "@/components/RankGapSection";
import { motion } from "framer-motion";
import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
import {
  FaUniversity,
  FaRobot,
  FaChartLine,
  FaFilter,
  FaLock,
  FaArrowRight,
  FaCheckCircle,
  FaQuestionCircle,
  FaUsers
} from "react-icons/fa";
const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is this JoSAA predictor accurate?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. It uses past JoSAA cutoffs with intelligent rank‑distance filtering to provide realistic predictions."
        }
      },
      {
        "@type": "Question",
        "name": "Does it support category & quota?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. AI, HS, OS, category and gender filters are fully supported."
        }
      },
      {
        "@type": "Question",
        "name": "Is it free to use?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Top predictions are free. You can optionally unlock a detailed full report."
        }
      }
    ]
  };
export default function JosaaCollegePredictorPage() {
  return (
    <>
    <Head>
      {/* Primary Meta Tags */}
     <title>JoSAA AI College Predictor 2026 – Predict IITs, NITs, GFTIs & Other JEE College Options</title>
<meta
  name="description"
  content="Use your JEE Main/Advanced rank to predict admission chances in IITs, NITs, GFTIs & other top engineering colleges through our free JoSAA 2026 College Predictor. Plan choice filling smartly based on rank, category, quota & gender."
/>
      <link rel="canonical" href="https://www.jeerankpredictor.in/josaa-college-predictor" />
      <meta name="robots" content="index, follow" />

      {/* Open Graph / Facebook */}
      <meta property="og:title" content="JoSAA College Predictor 2026 – Predict Your Realistic JEE College Options" />
      <meta property="og:description" content="Predict your JoSAA 2026 college options instantly using your JEE rank, category, quota & gender. Maximize admission chances with our free tool." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.jeerankpredictor.in/josaa-college-predictor" />
      <meta property="og:site_name" content="JEERankPredictor" />
      <meta property="og:image" content="https://www.jeerankpredictor.in/logo.jpg" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="JoSAA College Predictor 2026 – Predict Your Realistic JEE College Options" />
      <meta name="twitter:description" content="Predict your realistic JoSAA college options instantly with your JEE rank, category & quota. Free and accurate predictions." />
      <meta name="twitter:image" content="https://www.jeerankpredictor.in/logo.jpg" />

      {/* JSON-LD FAQ Schema */}
     
    </Head>
     <Script
      id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    <main className="bg-gray-50 text-gray-900">
      {/* HERO */}
     <section className="max-w-7xl mx-auto px-6 py-20">
  {/* MAIN HEADING */}
  <motion.h1
    initial={{ opacity: 0, y: 24 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="text-4xl md:text-5xl font-bold text-center leading-tight"
  >
    JoSAA AI College Predictor 2026  
    <span className="block text-blue-600 mt-2 text-3xl md:text-4xl">
      Predict IIT, NIT, IIIT & GFTI Admissions with Rank Accuracy
    </span>
  </motion.h1>

  {/* SUBTITLE / DESCRIPTION */}
  <motion.p
    initial={{ opacity: 0, y: 12 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.15 }}
    className="mt-6 text-center text-gray-600 max-w-4xl mx-auto text-base md:text-lg leading-relaxed"
  >
    The <strong>JoSAA College Predictor 2026</strong> helps JEE Main and JEE Advanced
    aspirants estimate their admission chances in
    <strong> IITs, NITs, IIITs, and GFTIs</strong> using
    <span className="text-blue-600 font-semibold">
      {" "}AI-assisted cutoff analysis
    </span>.
    <br /><br />
    Our prediction engine evaluates your
    <strong> rank, category, gender, quota (AI/HS/OS), counselling round</strong>,
    and historical JoSAA data from multiple years to provide
    <strong> realistic, probability-based college recommendations</strong>,
    not random lists.
  </motion.p>

  {/* TRUST SIGNALS */}
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.25 }}
    className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-gray-500"
  >
    <span className="bg-gray-100 px-4 py-2 rounded-full">
      ✔ Based on official JoSAA cutoff data
    </span>
    <span className="bg-gray-100 px-4 py-2 rounded-full">
      ✔ Rank-gap & round-aware prediction logic
    </span>
    <span className="bg-gray-100 px-4 py-2 rounded-full">
      ✔ Updated for JoSAA 2026 counselling
    </span>
    <span className="bg-gray-100 px-4 py-2 rounded-full">
      ✔ Category & quota specific results
    </span>
  </motion.div>

  {/* CTA */}
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.35 }}
    className="mt-10 flex justify-center"
  >
    <Link
      href="/jee-college-predictor"
      className="inline-flex items-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-700 transition shadow-lg"
    >
      Start College Prediction
      <FaArrowRight />
    </Link>
  </motion.div>

  {/* DISCLAIMER */}
  <p className="mt-6 text-center text-xs text-gray-400 max-w-3xl mx-auto">
    Disclaimer: Predictions are based on historical JoSAA counselling data and
    algorithmic analysis. Actual cutoffs may vary each year.
  </p>
</section>


      {/* WHY */}
   <section className="bg-white py-20">
  <div className="max-w-7xl mx-auto px-6">

    {/* SECTION HEADING */}
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-3xl md:text-4xl font-bold text-center"
    >
      Why Use Our JoSAA AI College Predictor?
    </motion.h2>

    <motion.p
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 }}
      className="mt-4 text-center text-gray-600 max-w-4xl mx-auto leading-relaxed"
    >
      Most online college predictors show long, misleading lists without
      understanding whether a student actually has a realistic chance.
      Our JoSAA Predictor is designed to think like a counsellor —
      prioritizing *possibility*, *safety*, and *accuracy* over false hope.
    </motion.p>

    {/* FEATURE GRID */}
    <div className="mt-14 grid md:grid-cols-3 gap-8">

      {/* CARD 1 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="bg-gray-50 p-7 rounded-2xl shadow-sm hover:shadow-md transition"
      >
       <div className="text-blue-600 text-3xl flex justify-center">
          <FaRobot />
        </div>
        <h3 className="mt-4 font-semibold text-xl">
          AI-Assisted Cutoff Intelligence
        </h3>
        <p className="mt-3 text-gray-600 text-sm leading-relaxed">
          Instead of blindly matching your rank with past cutoffs, our system
          analyzes <strong>rank gaps, institute tiers, branch demand, and counselling rounds</strong>
          using multi-year JoSAA data.  
          This allows us to estimate how realistic each option actually is.
        </p>
      </motion.div>

      {/* CARD 2 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="bg-gray-50 p-7 rounded-2xl shadow-sm hover:shadow-md transition"
      >
       <div className="text-blue-600 text-3xl flex justify-center">
          <FaFilter />
        </div>
        <h3 className="mt-4 font-semibold text-xl">
          Quota, Category & Gender Aware
        </h3>
        <p className="mt-3 text-gray-600 text-sm leading-relaxed">
          JoSAA counselling behaves very differently across
          <strong> AI / HS / OS quotas, categories, and gender pools</strong>.
          Our predictor applies these rules strictly, ensuring that
          IIT predictions follow AI quota only, while NITs and IIITs
          respect HS/OS allocations.
        </p>
      </motion.div>

      {/* CARD 3 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="bg-gray-50 p-7 rounded-2xl shadow-sm hover:shadow-md transition"
      >
       <div className="text-blue-600 text-3xl flex justify-center">
          <FaChartLine />
        </div>
        <h3 className="mt-4 font-semibold text-xl">
          Human-Like Shortlisting Logic
        </h3>
        <p className="mt-3 text-gray-600 text-sm leading-relaxed">
          Unrealistic colleges with very low chances are filtered out early.
          The remaining options are ranked using a
          <strong> counsellor-style scoring system</strong> that balances
          institute quality, branch preference, round behavior,
          and rank safety.
        </p>
      </motion.div>
    </div>

    {/* COMPARISON NOTE */}
    <div className="mt-14 bg-blue-50 border border-blue-100 rounded-xl p-6 text-center">
      <p className="text-sm text-blue-800 leading-relaxed">
        Unlike traditional predictors that dump hundreds of colleges,
        our JoSAA AI Predictor focuses on
        <strong> realistic, decision-ready recommendations</strong>
        to help students make confident counselling choices.
      </p>
    </div>

  </div>
</section>


      
<section className="bg-gray-50 py-20">
  <div className="max-w-7xl mx-auto px-6">

    {/* HEADING */}
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-3xl md:text-4xl font-bold text-center"
    >
      How the JoSAA AI College Predictor Works
    </motion.h2>

    <motion.p
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 }}
      className="mt-4 text-center text-gray-600 max-w-4xl mx-auto leading-relaxed"
    >
      Our predictor follows a structured, counselling-style evaluation
      instead of simple cutoff matching. Each step filters, evaluates,
      and ranks colleges based on real JoSAA behaviour.
    </motion.p>

    {/* STEPS */}
    <div className="mt-14 grid md:grid-cols-4 gap-8">

      {/* STEP 1 */}
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 30 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="bg-white p-7 rounded-2xl shadow-sm hover:shadow-md transition"
      >
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 font-bold">
          1
        </div>
        <h3 className="mt-4 font-semibold text-lg">
          Enter Rank & Counselling Filters
        </h3>
        <p className="mt-3 text-sm text-gray-600 leading-relaxed">
          You enter your <strong>JEE Main or JEE Advanced rank</strong> along with
          category, gender, and quota preferences.
          The system automatically enforces JoSAA rules such as
          <strong> AI quota for IITs</strong> and
          <strong> HS/OS quotas for NITs, IIITs, and GFTIs</strong>.
        </p>
      </motion.div>

      {/* STEP 2 */}
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 30 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="bg-white p-7 rounded-2xl shadow-sm hover:shadow-md transition"
      >
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 font-bold">
          2
        </div>
        <h3 className="mt-4 font-semibold text-lg">
          JoSAA Cutoff & Rank Gap Analysis
        </h3>
        <p className="mt-3 text-sm text-gray-600 leading-relaxed">
          For every eligible institute and program, the system compares
          your rank with <strong>previous years’ closing ranks</strong>
          across counselling rounds. Large negative rank gaps are
          discarded early to remove impossible options.
        </p>
      </motion.div>

      {/* STEP 3 */}
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 30 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="bg-white p-7 rounded-2xl shadow-sm hover:shadow-md transition"
      >
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 font-bold">
          3
        </div>
        <h3 className="mt-4 font-semibold text-lg">
          Counsellor-Style Scoring
        </h3>
        <p className="mt-3 text-sm text-gray-600 leading-relaxed">
          Each remaining option is scored using multiple factors:
          <strong> institute tier, branch demand, counselling round,
          and rank safety</strong>. Unsafe options are penalized,
          while realistic choices move up.
        </p>
      </motion.div>

      {/* STEP 4 */}
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 30 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="bg-white p-7 rounded-2xl shadow-sm hover:shadow-md transition"
      >
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 font-bold">
          4
        </div>
        <h3 className="mt-4 font-semibold text-lg">
          Ranked, Action-Ready Results
        </h3>
        <p className="mt-3 text-sm text-gray-600 leading-relaxed">
          You receive a ranked list grouped into
          <strong> High, Medium, and Low probability</strong> options.
          Each recommendation includes round data, cutoff context,
          and a confidence indicator to guide your JoSAA choice filling.
        </p>
      </motion.div>

    </div>

    {/* TRUST NOTE */}
    <div className="mt-16 text-center max-w-4xl mx-auto">
      <p className="text-sm text-gray-600 leading-relaxed">
        This step-by-step approach mirrors how experienced counsellors
        shortlist colleges during JoSAA counselling —
        reducing noise and increasing decision confidence.
      </p>
    </div>

  </div>
</section>


      
    {/* TRUST */}
<section className="bg-white py-16">
  <div className="max-w-7xl mx-auto px-6">

    <h2 className="text-4xl font-bold text-center">
      Built for Real JoSAA Aspirants
    </h2>

    <p className="mt-3 text-center text-sm text-gray-600 max-w-3xl mx-auto">
      This tool is designed to help students make safer and more informed
      JoSAA choice-filling decisions using transparent logic and verified data.
    </p>

    <div className="mt-10 grid md:grid-cols-4 gap-6 text-center">

      <div className="p-6 text-center">
       <div className="text-blue-600 text-3xl flex justify-center"><FaUniversity /></div>
        <h3 className="mt-3 font-semibold">100+ Institutes Covered</h3>
        <p className="mt-1 text-sm text-gray-600">
          IITs, NITs, IIITs & GFTIs across JoSAA counselling.
        </p>
      </div>

      <div className="p-6 text-center">
       <div className="text-blue-600 text-3xl flex justify-center"><FaChartLine /></div>
        <h3 className="mt-3 font-semibold">Multi-Year Data Analysis</h3>
        <p className="mt-1 text-sm text-gray-600">
          Predictions based on previous JoSAA rounds and closing ranks.
        </p>
      </div>

      <div className="p-6 text-center">
       <div className="text-blue-600 text-3xl flex justify-center"><FaUsers /></div>
        <h3 className="mt-3 font-semibold">Student-First Design</h3>
        <p className="mt-1 text-sm text-gray-600">
          Built to assist aspirants during real counselling decisions.
        </p>
      </div>

      <div className="p-6 text-center">
       <div className="text-blue-600 text-3xl flex justify-center"><FaLock /></div>
        <h3 className="mt-3 font-semibold">Privacy Friendly</h3>
        <p className="mt-1 text-sm text-gray-600">
          No login. No data selling. No spam.
        </p>
      </div>

    </div>
  </div>
</section>

{/* {working explanation} */}
<section className="bg-gray-50 py-24">
  <div className="max-w-7xl mx-auto px-6">

    {/* Heading */}
    <h2 className="text-3xl md:text-4xl font-bold text-center">
      How Our JoSAA AI College Predictor Actually Works
    </h2>

    <p className="mt-5 max-w-4xl mx-auto text-center text-gray-600 leading-relaxed">
      Most online predictors rely on a single comparison —
      <strong> your rank vs last year’s cutoff</strong>.
      That approach ignores counselling dynamics.
      <br />
      Our JoSAA AI Predictor simulates how real counselling outcomes happen
      by analysing multiple interacting factors together.
    </p>

    {/* Main content */}
    <div className="mt-16 grid lg:grid-cols-3 gap-8">

      {/* LEFT: Step-by-step logic */}
      <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">

        {[
          {
            title: "Rank Gap Intelligence",
            desc:
              "Instead of binary pass/fail, we calculate how far your rank is from historical cutoffs to classify colleges as safe, borderline, or risky."
          },
          {
            title: "Round-wise Cutoff Movement",
            desc:
              "JoSAA cutoffs shift across rounds. Our model learns how branches behave from Round 1 to the final round."
          },
          {
            title: "Institute & Branch Demand",
            desc:
              "High-demand branches are weighted differently from low-demand ones, even within the same institute."
          },
          {
            title: "Category, Gender & Quota Normalization",
            desc:
              "Predictions adapt precisely to AI, HS, OS quotas and gender-specific cutoffs instead of using generalized data."
          },
          {
            title: "Volatility & Trend Detection",
            desc:
              "Some branches fluctuate heavily year-to-year. Our system penalizes unstable cutoffs to avoid false optimism."
          },
          {
            title: "Human-like Ranking Logic",
            desc:
              "Unsafe options are pushed down while realistic colleges rise — mimicking how experienced counsellors shortlist."
          }
        ].map((item, i) => (
          <div
            key={i}
            className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition"
          >
            <h3 className="font-semibold text-lg text-gray-900">
              {item.title}
            </h3>
            <p className="mt-2 text-sm text-gray-600 leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>

      {/* RIGHT: Summary box */}
      <div className="bg-white rounded-2xl shadow p-8 flex flex-col justify-center">
        <h3 className="text-xl font-semibold text-gray-900">
          What This Means for You
        </h3>

        <p className="mt-4 text-sm text-gray-600 leading-relaxed">
          Every college–branch combination is scored using a weighted model,
          not a simple cutoff check.
          <br /><br />
          This ensures:
        </p>

        <ul className="mt-4 space-y-2 text-sm text-gray-700">
          <li>✔ Fewer misleading “impossible” options</li>
          <li>✔ Better prioritisation for JoSAA choice filling</li>
          <li>✔ Clear separation between safe, medium & low chances</li>
          <li>✔ Results that reflect real counselling outcomes</li>
        </ul>
      </div>
    </div>

    {/* Bottom note */}
    <p className="mt-14 text-center text-xs text-gray-500 max-w-3xl mx-auto">
      Our predictions are built using historical JoSAA counselling data and
      statistical modelling. Final allotments depend on real-time counselling
      dynamics and candidate preferences.
    </p>

  </div>
</section>


{/* college admission table */}

<section className="py-24 bg-white">
  <div className="max-w-7xl mx-auto px-6">

    {/* Heading */}
    <h2 className="text-3xl md:text-4xl font-bold text-center">
      Understanding College Admission Probability in JoSAA
    </h2>

    <p className="mt-5 max-w-4xl mx-auto text-center text-gray-600 leading-relaxed">
      College admission through JoSAA is not a simple yes-or-no outcome.
      It depends on how your rank compares to historical cutoffs,
      how cutoffs move across rounds, and how competitive a branch is.
      <br />
      Our predictor classifies colleges into probability zones to help you
      fill choices intelligently — not emotionally.
    </p>

    {/* Explanation blocks */}
    <div className="mt-14 grid md:grid-cols-3 gap-6">
      {[
        {
          title: "What is Rank Gap?",
          text:
            "Rank Gap is the difference between your rank and the closing rank of a college–branch combination. A smaller gap means higher chances. Negative gaps indicate unsafe options."
        },
        {
          title: "Why Cutoff Matching Fails",
          text:
            "Many tools only compare last year’s final cutoff. This ignores round-wise movement, demand changes, and quota effects — leading to misleading optimism."
        },
        {
          title: "Why Probability Matters",
          text:
            "JoSAA counselling is competitive and dynamic. Probability-based grouping helps you balance ambition with safety during choice filling."
        }
      ].map((b, i) => (
        <div key={i} className="bg-gray-50 p-6 rounded-xl">
          <h3 className="font-semibold text-lg">{b.title}</h3>
          <p className="mt-2 text-sm text-gray-600 leading-relaxed">
            {b.text}
          </p>
        </div>
      ))}
    </div>

    {/* Table */}
    <div className="mt-16 overflow-x-auto">
      <table className="w-full border text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="border p-4 text-left">Chance Level</th>
            <th className="border p-4 text-left">Rank Gap Interpretation</th>
            <th className="border p-4 text-left">JoSAA Strategy</th>
            <th className="border p-4 text-left">Typical Outcome</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-4 font-semibold text-green-700">
              High Probability
            </td>
            <td className="border p-4">
              Rank comfortably within historical closing ranks
            </td>
            <td className="border p-4">
              Always include early in your choice list
            </td>
            <td className="border p-4">
              Allotment likely by mid rounds
            </td>
          </tr>

          <tr>
            <td className="border p-4 font-semibold text-yellow-600">
              Medium Probability
            </td>
            <td className="border p-4">
              Rank close to cutoff; depends on round movement
            </td>
            <td className="border p-4">
              Place after safe options, before risky ones
            </td>
            <td className="border p-4">
              Allotment possible in later rounds
            </td>
          </tr>

          <tr>
            <td className="border p-4 font-semibold text-red-600">
              Low Probability
            </td>
            <td className="border p-4">
              Rank requires significant cutoff drop
            </td>
            <td className="border p-4">
              Include only as aspirational choices
            </td>
            <td className="border p-4">
              Allotment rare, not impossible
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Strategy Note */}
    <div className="mt-14 bg-blue-50 border border-blue-100 rounded-xl p-6 max-w-5xl mx-auto">
      <h3 className="font-semibold text-blue-800">
        Important Counselling Insight
      </h3>
      <p className="mt-2 text-sm text-blue-700 leading-relaxed">
        Successful JoSAA candidates do not fill choices based only on dreams.
        They use a layered strategy — combining safe, medium, and aspirational
        options — to maximize allotment chances without missing better upgrades.
        <br /><br />
        Our AI predictor is designed to support this exact decision-making
        approach.
      </p>
    </div>

  </div>
</section>


{/* rank vs admission graph */}
<RankGapSection/>
{/* josaa strategy  */}
<section className="py-20 bg-gray-50">
  <div className="max-w-7xl mx-auto px-6">
    {/* Heading */}
    <h2 className="text-4xl md:text-5xl font-extrabold text-center text-gray-900">
      Smart JoSAA Choice Filling Strategy
    </h2>
    <p className="mt-4 text-center text-gray-600 max-w-3xl mx-auto text-lg">
      Optimize your college choices with a strategic approach to increase admission chances.
    </p>

    {/* Grid of tips */}
    <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-2 gap-8">
      {/* Tip 1 */}
      <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 border-t-4 border-blue-500">
        <div className="flex items-center mb-4">
          <div className="shrink-0">
            <span className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 text-blue-600 text-xl font-bold">
              1
            </span>
          </div>
          <h3 className="ml-4 text-lg md:text-xl font-semibold text-gray-900">
            Include Safe Options First
          </h3>
        </div>
        <p className="text-gray-700">
          Always place high-probability colleges above borderline choices to avoid missing guaranteed seats.
        </p>
      </div>

      {/* Tip 2 */}
      <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 border-t-4 border-green-500">
        <div className="flex items-center mb-4">
          <div className="shrink-0">
            <span className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-green-100 text-green-600 text-xl font-bold">
              2
            </span>
          </div>
          <h3 className="ml-4 text-lg md:text-xl font-semibold text-gray-900">
            Do Not Ignore Lower Branches
          </h3>
        </div>
        <p className="text-gray-700">
          Lower-demand branches in top institutes often provide better long-term opportunities.
        </p>
      </div>

      {/* Tip 3 */}
      <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 border-t-4 border-yellow-500">
        <div className="flex items-center mb-4">
          <div className="shrink-0">
            <span className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-yellow-100 text-yellow-600 text-xl font-bold">
              3
            </span>
          </div>
          <h3 className="ml-4 text-lg md:text-xl font-semibold text-gray-900">
            Use Medium Chances Strategically
          </h3>
        </div>
        <p className="text-gray-700">
          Medium chance colleges work best in mid-order during choice filling.
        </p>
      </div>

      {/* Tip 4 */}
      <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 border-t-4 border-red-500">
        <div className="flex items-center mb-4">
          <div className="shrink-0">
            <span className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-red-100 text-red-600 text-xl font-bold">
              4
            </span>
          </div>
          <h3 className="ml-4 text-lg md:text-xl font-semibold text-gray-900">
            Rounds Matter
          </h3>
        </div>
        <p className="text-gray-700">
          Cutoffs often relax in later rounds; our predictor factors this in to help you plan wisely.
        </p>
      </div>
    </div>
  </div>
</section>


{/* common mistakes */}
<section className="bg-red-50 py-16">
  <div className="max-w-7xl mx-auto px-6">
    {/* Heading */}
    <h2 className="text-3xl md:text-4xl font-extrabold text-center text-red-700">
      Common Mistakes Students Make During JoSAA Counselling
    </h2>
    <p className="mt-3 text-center text-gray-600 max-w-2xl mx-auto text-lg">
      Avoid these pitfalls to improve your chances and make smarter choices.
    </p>

    {/* Mistakes list */}
    <div className="mt-10 grid sm:grid-cols-1 md:grid-cols-2 gap-6">
      {/* Mistake 1 */}
      <div className="bg-white p-5 rounded-xl shadow-md flex items-start space-x-4 hover:shadow-xl transition-shadow duration-300">
        <span className="shrink-0 h-10 w-10 flex items-center justify-center rounded-full bg-red-100 text-red-600 text-lg font-bold">
          1
        </span>
        <p className="text-gray-700 font-medium">
          Only checking last round cutoffs
        </p>
      </div>

      {/* Mistake 2 */}
      <div className="bg-white p-5 rounded-xl shadow-md flex items-start space-x-4 hover:shadow-xl transition-shadow duration-300">
        <span className="shrink-0 h-10 w-10 flex items-center justify-center rounded-full bg-red-100 text-red-600 text-lg font-bold">
          2
        </span>
        <p className="text-gray-700 font-medium">
          Ignoring quota & gender filters
        </p>
      </div>

      {/* Mistake 3 */}
      <div className="bg-white p-5 rounded-xl shadow-md flex items-start space-x-4 hover:shadow-xl transition-shadow duration-300">
        <span className="shrink-0 h-10 w-10 flex items-center justify-center rounded-full bg-red-100 text-red-600 text-lg font-bold">
          3
        </span>
        <p className="text-gray-700 font-medium">
          Overestimating rank improvement chances
        </p>
      </div>

      {/* Mistake 4 */}
      <div className="bg-white p-5 rounded-xl shadow-md flex items-start space-x-4 hover:shadow-xl transition-shadow duration-300">
        <span className="shrink-0 h-10 w-10 flex items-center justify-center rounded-full bg-red-100 text-red-600 text-lg font-bold">
          4
        </span>
        <p className="text-gray-700 font-medium">
          Skipping safe backup options
        </p>
      </div>
    </div>
  </div>
</section>



     

      {/* FINAL CTA */}
<section className="relative bg-blue-600 py-20 text-white text-center overflow-hidden">
  {/* Decorative blurred circles */}
  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-blue-400 opacity-20 rounded-full blur-3xl"></div>
  <div className="absolute bottom-0 right-1/4 w-125 h-125 bg-blue-500 opacity-20 rounded-full blur-2xl"></div>

  <div className="relative max-w-3xl mx-auto px-6">
    {/* Heading */}
    <h2 className="text-4xl md:text-5xl font-extrabold">
      Ready to Predict Your College?
    </h2>

    {/* Subtext */}
    <p className="mt-4 text-blue-100 text-lg md:text-2xl">
      Find your realistic JoSAA options instantly and plan smartly.
    </p>

    {/* Button */}
    <div className="mt-10">
      <Link
        href="/jee-college-predictor"
        className="inline-flex items-center gap-3 px-8 py-4 bg-white text-blue-600 font-semibold text-lg rounded-full shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300"
      >
        Predict Now <FaArrowRight className="text-blue-600 text-lg" />
      </Link>
    </div>
  </div>

  {/* Optional fade-in animation */}
  <style jsx>{`
    h2, p {
      opacity: 0;
      transform: translateY(10px);
      animation: fadeIn 0.6s forwards;
    }
    p {
      animation-delay: 0.2s;
    }
    @keyframes fadeIn {
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `}</style>
</section>
 {/* FAQ */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-900">
          FAQs
        </h2>
        <p className="mt-2 text-center text-gray-600 max-w-2xl mx-auto text-lg">
          Find answers to common questions about using the JoSAA Predictor.
        </p>

          <div className="mt-8 space-y-4">
            {[{
              q: "Is this JoSAA predictor accurate?",
              a: "Yes. It uses past JoSAA cutoffs with intelligent rank‑distance filtering."
            },{
              q: "Does it support category & quota?",
              a: "Yes. AI, HS, OS, category and gender filters are fully supported."
            },{
              q: "Is it free to use?",
              a: "Yes. Top predictions are free. Full report can be unlocked optionally."
            }].map((f, i) => (
              <div key={i} className="bg-white p-5 rounded-lg shadow">
                <p className="font-semibold flex items-center gap-2">
                  <FaQuestionCircle className="text-blue-600" /> {f.q}
                </p>
                <p className="mt-2 text-sm text-gray-600">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
    </>
  );
}
