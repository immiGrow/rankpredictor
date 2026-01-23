"use client";
import { useState } from "react";
import Script from "next/script";
import Rank from "@/components/Rank";
import Link from "next/link";
import TrustSection from "@/components/TrustSection";
import HowItWorks from "@/components/HowItWorks";
import KeyFeatures from "@/components/KeyFeatures";
import WhyChooseRP from "@/components/WhyChooseRP";
import PercentileRankTable from "@/components/PercentileRankTable";
import MarksPercentileTable from "@/components/MarksPercentileTable";
import EssentialResources from "@/components/EssentialResources";
import FAQSection from "@/components/FAQSection";
import HubPage from "@/components/HubPage";
import ShiftWiseTable from "@/components/ShiftWiseTable";


import RankResult from "@/components/RankResult";
import Head from "next/head";
import { pre } from "framer-motion/client";



export default function Home() {
  const [prediction, setPrediction] = useState(null);
  return (
    <>
    
{/* =======================
   SEO METADATA (HOMEPAGE)
======================= */}
    <Head>
        {/* Primary SEO */}
        <title>JEE Main Rank Predictor 2026 – Free Accurate Rank & Percentile Calculator by Marks</title>
        <meta
          name="description"
          content="Estimate your expected JEE Main 2026 All India Rank (AIR), percentile & marks-vs-rank instantly with our free and accurate JEE Main Rank Predictor. No login, updated with latest normalization trends and past year data to help you plan college options like IIT, NIT & IIIT smartly.
"
        />
        <meta
          name="keywords"
          content="JEE Main Rank Predictor 2026, JEE Main Marks vs Rank, JEE Main Percentile Predictor, JEE Rank Calculator, JEE Main Rank Estimator, JEE Main 2026 Rank Prediction, JEE Main Analysis Tool, College Predictor JEE Main, Free JEE Rank Tool, IIT NIT IIIT Rank Predictor"
        />

        {/* Canonical */}
        <link rel="canonical" href="https://www.jeerankpredictor.in" />

        {/* Open Graph (Facebook, LinkedIn, Bing, etc.) */}
        <meta property="og:title" content="JEE Main Rank Predictor 2026 – Free Marks vs Rank Tool" />
        <meta
          property="og:description"
          content="Predict your JEE Main 2026 rank & percentile using marks. Based on previous year trends and official data patterns."
        />
        <meta property="og:url" content="https://www.jeerankpredictor.in" />
        <meta property="og:site_name" content="JEERankPredictor" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="JEE Main Rank Predictor 2026" />
        <meta
          name="twitter:description"
          content="Estimate your JEE Main 2026 rank and percentile instantly using marks."
        />
      </Head>

      {/* =======================
          SOFTWARE APPLICATION SCHEMA
      ======================= */}
      <Script
        id="software-application-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "JEE Main Rank Predictor 2026",
            operatingSystem: "Web",
            applicationCategory: "EducationalApplication",
            description:
              "Free JEE Main Rank Predictor 2026 to estimate expected rank and percentile using previous year trends.",
            url: "https://jeerankpredictor.in",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "INR",
            },
            author: {
              "@type": "Organization",
              name: "RankPredictor",
            },
          }),
        }}
      />

      {/* =======================
          FAQ SCHEMA (VERY IMPORTANT)
      ======================= */}
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
                    "The JEE Main Rank Predictor 2026 provides an estimated rank range based on previous year trends and public data. Actual ranks may vary due to exam difficulty and total candidates.",
                },
              },
              {
                "@type": "Question",
                name: "Is this JEE rank predictor official?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "No, this tool is not affiliated with NTA. It is an independent educational tool designed to help students estimate their expected rank.",
                },
              },
              {
                "@type": "Question",
                name: "Can I use this predictor before official results?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Yes. This rank predictor is meant for pre-result estimation to help students understand their approximate standing.",
                },
              },
            ],
          }),
        }}
      />

      {/* =======================
          PAGE CONTENT
      ======================= */}
    <main id="main-content" className="bg-linear-to-b from-blue-50 to-white">
        {/* HERO SECTION */}
        <section className="bg-indigo-50">
      <div className="max-w-6xl mx-auto px-4 py-16 lg:flex lg:items-center lg:justify-between gap-12">
        {/* Left: Hero Text */}
        <div className="lg:w-1/2">
        <div className="flex flex-wrap gap-3 mb-4">
  <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
    ✔ Free & Accurate
  </span>
  <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
    📊 Based on 2021–2026 Data
  </span>
  <span className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-semibold">
    ⏱ 3-second prediction
  </span>
</div>

         
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
            JEE Main Rank Predictor 2026 – <span className="text-blue-600">Predict Rank & Percentile</span>
          </h1>
          <p className="text-gray-700 text-lg mb-8">
            Use our free <strong>JEE Main Rank Predictor 2026</strong> to estimate your expected All India Rank (AIR) 
            and percentile based on marks. Calculations are based on previous year JEE Main data, normalization trends, 
            and official NTA statistics. No signup required.
          </p>
          <div className="flex flex-wrap gap-5 text-sm text-gray-600 mb-6">
  <span>🔒 No login • No signup</span>
  <span>🧮 Shift-wise normalization applied</span>
  <span>📈 Matches real AIR trends</span>
</div>
<p className="text-sm text-gray-500 italic">
  👉 Enter your marks on the right to get your predicted rank instantly
</p>

        </div>

        {/* Right: Rank Tool */}
        <div className="lg:w-1/2 flex justify-center">
          {/* Use your Rank component directly */}
          <Rank prediction={prediction} setPrediction={setPrediction} />
        </div>
      </div>

    </section>
      {/* TRUST + PERSONALIZATION STRIP */}
{/* {prediction && <RankResult prediction={prediction}/>} */}

       





        {/* TRUST SIGNALS */}
       <TrustSection/>

        {/* HOW IT WORKS */}
      <HowItWorks/>

      {/* Key Features of JEE Main Rank Predictor 2026 */}
      <KeyFeatures/>

      {/* Why Choose JEE Rank Predictor 2026 */}
      <WhyChooseRP/>

        {/* MARKS VS PERCENTILE TABLE  2026*/}
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
<section className="py-16 bg-linear-to-br from-blue-600 to-blue-800 text-white">
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



{/* Essential Resources Section */}
<EssentialResources/>

{/* JEE MAINS 120 150 200 marks pages links */}
<HubPage/>
        {/* FAQ */}
        <FAQSection/>
      </main>
    </>
  );
}
