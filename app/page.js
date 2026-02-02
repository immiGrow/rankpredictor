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
import Session1QuickHub from "@/components/Session1QuickHub";



export default function Home() {
  const [prediction, setPrediction] = useState(null);
  return (
    <>
    
{/* =======================
   SEO METADATA (HOMEPAGE)
======================= */}
    <Head>
        {/* Primary SEO */}
        <title>JEE Main Rank Predictor 2026: Marks vs Percentile (LIVE Jan Session Updated)</title>
        <meta
          name="description"
          content="Calculate your JEE Main 2026 AIR and Percentile in 3 seconds. Verified Marks vs Rank data for the Jan 2026 Session. Trusted by 1.2 Lakh+ students. No login required—Check your rank now!
"
        />
        <meta
          name="keywords"
          content="JEE Main Rank Predictor 2026, JEE Main Marks vs Rank, JEE Main Percentile Predictor, JEE Rank Calculator, JEE Main Rank Estimator, JEE Main 2026 Rank Prediction, JEE Main Analysis Tool, College Predictor JEE Main, Free JEE Rank Tool, IIT NIT IIIT Rank Predictor"
        />

        {/* Canonical */}
        <link rel="canonical" href="https://www.jeerankpredictor.in" />

        {/* Open Graph (Facebook, LinkedIn, Bing, etc.) */}
       <meta property="og:title" content="JEE Main Rank Predictor 2026: Calculate AIR & Percentile Instantly (LIVE)" />
    <meta
      property="og:description"
      content="The most accurate Rank Predictor for JEE 2026. Get shift-wise analysis and NIT/IIIT admission chances. Join 1.2 Lakh+ students today."
    />
        <meta property="og:url" content="https://www.jeerankpredictor.in" />
        {/* THE IMAGE: Use a high-quality dashboard preview card */}
    <meta property="og:image" content="https://www.jeerankpredictor.in/jrp-og-img.png" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:alt" content="JEE Main 2026 Rank Predictor Dashboard Preview" />
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
        {/* CRITICAL FOR GOOGLE DISCOVER: This enables the large image preview */}
<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      </Head>

     {/* SOFTWARE APPLICATION WITH RATINGS */}
<Script
  id="software-application-schema"
  type="application/ld+json"
  strategy="afterInteractive"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "JEE Main Rank Predictor 2026",
      "operatingSystem": "Web",
      "applicationCategory": "EducationalApplication",
      "description": "Real-time JEE Main Rank and Percentile predictor for Jan 2026 Session.",
      "url": "https://www.jeerankpredictor.in",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "124050"
      },
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "INR"
      }
    }),
  }}
/>

{/* Howto Schema */}
<Script
  id="howto-schema"
  type="application/ld+json"
  strategy="afterInteractive"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": "How to Predict Your JEE Main 2026 Rank",
      "description": "Follow these 3 steps to get your expected AIR and Percentile instantly.",
      "step": [
        {
          "@type": "HowToStep",
          "text": "Enter your total marks out of 300 obtained in the JEE Jan session.",
          "name": "Enter Marks"
        },
        {
          "@type": "HowToStep",
          "text": "Select your specific Exam Date and Shift (Morning or Evening) for normalization.",
          "name": "Select Shift"
        },
        {
          "@type": "HowToStep",
          "text": "Click 'Analyze Performance' to view your predicted Rank Range and NIT eligibility.",
          "name": "View Results"
        }
      ]
    }),
  }}
/>

{/* dataset schema */}
<Script
  id="dataset-schema"
  type="application/ld+json"
  strategy="afterInteractive"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Dataset",
      "name": "JEE Main 2026 Shift Difficulty & Marks vs Percentile Data",
      "description": "Comprehensive dataset of normalization trends and shift-wise difficulty levels for JEE Main January 2026.",
      "creator": {
        "@type": "Organization",
        "name": "JEE Rank Predictor"
      },
      "variableMeasured": ["Shift Difficulty", "Marks vs Percentile", "Rank Range"]
    }),
  }}
/>

{/* FAQs Schema */}
     <Script
  id="faq-schema"
  type="application/ld+json"
  strategy="afterInteractive"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How is the JEE Main 2026 percentile calculated for Jan Session?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The 2026 percentile is calculated using NTA's multi-session normalization. Our tool analyzes the relative difficulty of January shifts (Jan 21 to Jan 28) to provide an accurate Marks vs Percentile estimate."
          }
        },
        {
          "@type": "Question",
          "name": "What marks are required for 99 percentile in JEE Main 2026?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Based on our Jan 2026 shift analysis, 99 percentile generally requires 185-195 marks in tougher shifts and 210+ in easier shifts. Check our shift-wise difficulty heatmap for precise data."
          }
        },
        {
          "@type": "Question",
          "name": "Can I predict my NIT seat with this JEE rank tool?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Once you get your predicted AIR, you can instantly use our JOSAA College Predictor to see closing ranks for NIT Trichy, Warangal, and other top IIITs for CSE and other branches."
          }
        },
        {
          "@type": "Question",
          "name": "Does this rank predictor account for Jan 2026 shift difficulty?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely. Unlike generic tools, our 'Intelligence Engine' applies normalization factors based on student feedback from the January 2026 session to ensure the rank range is highly accurate."
          }
        }
      ]
    }),
  }}
/>
      {/* =======================
          PAGE CONTENT
      ======================= */}
    <main id="main-content" className="bg-slate-50 min-h-screen font-sans">
    {/* DARK HERO SECTION */}
  <section className="relative pt-16 pb-48 bg-[#0A0E17] overflow-hidden">
    {/* Background Grid - Enhanced */}
    <div className="absolute inset-0 opacity-[0.15]" 
         style={{ backgroundImage: 'linear-gradient(#4F46E5 1px, transparent 1px), linear-gradient(90deg, #4F46E5 1px, transparent 1px)', backgroundSize: '45px 45px' }}>
    </div>
    
    <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
       <h1 className="text-4xl md:text-7xl font-black text-white mb-6 tracking-tighter">
        JEE Main 2026 <span className="text-indigo-500">Intelligence Engine</span>
      </h1>
      <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto">
        Predict your rank with shift-wise normalization analysis used by toppers. 
        Access AIR projections based on 5 Lakh+ historical data points.
      </p>
    </div>
  </section>

  {/* THE TOOL SECTION - This overlaps the dark/light divide properly */}
  <section className="relative z-30 px-4 -mt-32">
     <Rank prediction={prediction} setPrediction={setPrediction} />
  </section>

  {/* LIGHT CONTENT SECTION */}
  <section className="pt-20 pb-2 bg-white">
     {/* Your SEO Content, Key Features, and Tables go here */}
     <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-slate-900 text-2xl font-bold mb-4 italic">The most accurate tool for Jan 2026 Session</h2>
        <div className="flex justify-center gap-8 opacity-50 grayscale">
           {/* Add tiny logos of IITs/NITs or Trust Badges here */}
        </div>
     </div>
  </section>

      {/* TRUST + PERSONALIZATION STRIP */}

      {/* NEW: QUICK ANALYTICS STRIP (Links to your internal pages) */}
  <section className="max-w-6xl mx-auto px-4 py-6 grid grid-cols-2 md:grid-cols-4 gap-4">
      <Link href="/jee-main-2026-toughest-shift-analysis-january-session" className="p-4 bg-white rounded-xl shadow-sm border border-slate-200 hover:border-indigo-500 transition-all group">
        <p className="text-xs text-slate-500 uppercase font-bold">Shift Analytics</p>
        <p className="text-slate-900 font-semibold group-hover:text-indigo-600">Which shift was toughest? →</p>
      </Link>
      
      <Link href="/top-nits-for-computer-science-cse-cutoff-2026" className="p-4 bg-white rounded-xl shadow-sm border border-slate-200 hover:border-indigo-500 transition-all group">
        <p className="text-xs text-slate-500 uppercase font-bold">CSE Cutoffs 2026</p>
        <p className="text-slate-900 font-semibold group-hover:text-indigo-600">NIT Trichy vs Surathkal →</p>
      </Link>
      <Link href="/jee-main-2026-toughest-shift-analysis-january-session" className="p-4 bg-white rounded-xl shadow-sm border border-slate-200 hover:border-indigo-500 transition-all group">
        <p className="text-xs text-slate-500 uppercase font-bold">Shiftwise Marks vs Percentile</p>
        <p className="text-slate-900 font-semibold group-hover:text-indigo-600">Check your shift analysis? →</p>
      </Link>
      {/* ... Add more links to your NIT-CSE and Josaa pages ... */}
  </section>
{/* {prediction && <RankResult prediction={prediction}/>} */}
<Session1QuickHub/>
       





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
