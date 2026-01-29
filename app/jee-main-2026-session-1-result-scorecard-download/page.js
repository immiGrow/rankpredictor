import React from 'react';
import Head from 'next/head';
import { FaDownload, FaExternalLinkAlt, FaCalculator, FaHistory, FaCheckCircle, FaExclamationTriangle, FaArrowRight, FaLock, FaFileDownload, FaLightbulb, FaTools } from 'react-icons/fa';
import Image from 'next/image';
import OfficialTracker from '@/components/OfficialTracker';
import Link from 'next/link';
import ResultFAQ from '@/components/ResultFAQ';
import Script from 'next/script';


const officialLinks = [
    { name: "Server 1 (Primary)", url: "https://jeemain.nta.nic.in", color: "bg-blue-600" },
    { name: "Server 2 (Results)", url: "https://ntaresults.nic.in", color: "bg-indigo-600" },
    { name: "Server 3 (NTA Exams)", url: "https://exams.nta.ac.in/jee-main", color: "bg-slate-800" },
  ];

  const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Will NTA release the All India Rank (AIR) with Session 1 Results?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. For the January session, NTA only releases your NTA Score (Percentile). Your final All India Rank (AIR) and Category Rank will be calculated only after the Session 2 (April) results are declared, using the best of your two scores."
      }
    },
    {
      "@type": "Question",
      "name": "What is a 'Good Percentile' for NIT Computer Science (CSE) in 2026?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For top-tier NITs like Trichy, Surathkal, or Warangal, a percentile of 99.5+ is usually required for General category students. For other NITs, 98.5+ is a safe target for CSE."
      }
    },
    {
      "@type": "Question",
      "name": "How is the JEE Main Percentile different from Marks?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Marks are your raw score out of 300. Percentile is a normalized score indicating the percentage of candidates who scored equal to or less than you in that specific shift."
      }
    },
    {
      "@type": "Question",
      "name": "What if my Session 2 score is lower than Session 1?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Don't worry. NTA uses the 'Best of Two' rule. Your final rank will be based on whichever session score is higher."
      }
    }
  ]
};
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.jeerankpredictor.in"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "JEE Main 2026",
      "item": "https://www.jeerankpredictor.in/jee-main-2026-marks-vs-rank-vs-college-list"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Session 1 Result",
      "item": "https://www.jeerankpredictor.in/jee-main-2026-session-1-result-scorecard-direct-link"
    }
  ]
};

const newsSchema={
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  "headline": "JEE Main 2026 Session 1 Result (LIVE): NTA Declares January Scorecard",
  "image": [
    "https://www.jeerankpredictor.in/images/jee-2026-result-live-banner.jpg"
  ],
  "datePublished": "2026-01-29T10:00:00+05:30",
  "dateModified": new Date().toISOString(),
  "author": {
    "@type": "Organization",
    "name": "JEE Rank Predictor Team",
    "url": "https://www.jeerankpredictor.in/about"
  },
  "publisher": {
    "@type": "Organization",
    "name": "JEE Rank Predictor",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.jeerankpredictor.in/logo.jpg"
    }
  },
  "description": "NTA has officially released the JEE Main 2026 Session 1 scorecard. Students can now check their percentile scores across all January shifts."
};
const JEEJanResultPage = () => {
  return (
<>

<Head>
  {/* --- PRIMARY META --- */}
  <title>JEE Main 2026 Session 1 Result (LIVE): Direct Link & Scorecard</title>
  <meta name="description" content="Official NTA JEE Main 2026 Session 1 Result direct link. Download Jan Session Scorecard, check shift-wise percentile calculation, and qualifying cutoffs for JEE Advanced." />
  <link rel="canonical" href="https://www.jeerankpredictor.in/jee-main-2026-session-1-result-scorecard-download" />
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />

  {/* --- OPEN GRAPH (Social Media) --- */}
  <meta property="og:type" content="article" />
  <meta property="og:url" content="https://www.jeerankpredictor.in/jee-main-2026-session-1-result-scorecard-download" />
  <meta property="og:title" content="🔴 JEE Main 2026 Session 1 Result OUT: Check Your Percentile Here!" />
  <meta property="og:description" content="The NTA has released the Jan Session results. Use our direct link to download your scorecard and predict your AIR instantly." />
  <meta property="og:image" content="https://www.jeerankpredictor.in/images/jee-2026-result-live-banner.jpg" />
  <meta property="og:site_name" content="JEE Rank Predictor" />

  {/* --- TWITTER --- */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="JEE Main 2026 Result (Jan Session): Direct Download Link" />
  <meta name="twitter:description" content="Download your JEE 2026 Scorecard and check marks vs percentile analysis for all shifts." />
  <meta name="twitter:image" content="https://www.jeerankpredictor.in/images/jee-2026-result-live-banner.jpg" />

  {/* --- CRAWLER SIGNALS --- */}
  <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />
  <meta name="googlebot" content="index, follow" />
  <meta name="theme-color" content="#2563eb" />
</Head>

    <Script

        id="jee-result-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    <Script

        id="jee-result-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    <Script

        id="jee-result-news-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(newsSchema) }}
      />

    <div className="bg-[#fcfdfe] min-h-screen">
      <Head>
        <title>JEE Main 2026 Session 1 Result (LIVE): Download Scorecard & Link</title>
        <meta name="description" content="NTA JEE Main 2026 January Session Result Direct Link. Check your NTA Scorecard, qualifying cutoff, and Session 1 toppers list here." />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta property="og:title" content="🔴 JEE Main 2026 Session 1 Result: Direct Download Link" />
        <meta property="og:image" content="https://www.jeerankpredictor.in/images/jee-result-2026-dashboard.jpg" />
      </Head>

      {/* 1. URGENT ALERT BAR (Moves users to action) */}
      <div className="bg-red-600 text-white py-3 px-4 text-center font-bold animate-pulse">
        Status: Session 1 Results are expected by Feb 12, 2026. Stay Tuned! (🔴 LIVE )
      </div>

      <main className="max-w-6xl mx-auto px-4 py-12">
        
        {/* 2. HERO SECTION */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-[950] text-slate-900 leading-tight mb-6">
            JEE Main 2026 <span className="text-blue-600">Session 1 Result</span> & Scorecard
          </h1>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto mb-10">
            Official NTA Result portal for the January attempt. Enter your application number and DOB to access your percentile score.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="#how-to-download">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-black flex items-center gap-2 hover:bg-blue-700 shadow-xl shadow-blue-200 transition-all">
                <FaDownload /> Download Scorecard (Link 1)
              </button>
            </Link>
            <Link href="#result-links">
              <button className="bg-white border-2 border-slate-200 text-slate-700 px-8 py-4 rounded-2xl font-black flex items-center gap-2 hover:border-blue-600 transition-all">
                <FaExternalLinkAlt /> NTA Official Portal
              </button>
            </Link>
          </div>
        </section>

        {/* 3. RESULT TRACKER TABLE (E-E-A-T Signal) */}
        <section className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="md:col-span-2 bg-white rounded-[2.5rem] border border-slate-100 shadow-2xl p-8">
            <h2 className="text-2xl font-black mb-6 flex items-center gap-2">
              <FaHistory className="text-blue-600" /> Result Timeline & Important Dates
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <tbody className="divide-y divide-slate-100">
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-4 font-bold text-slate-600">Session 1 Exam Dates</td>
                    <td className="py-4 text-slate-900">Jan 21 – Jan 29, 2026</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-4 font-bold text-slate-600">Provisional Answer Key</td>
                    <td className="py-4 text-slate-900">Expected: Feb 2, 2026</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-4 font-bold text-slate-600">Final Answer Key</td>
                    <td className="py-4 text-slate-900">Expected: Feb 10, 2026</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-4 font-bold text-blue-600 italic underline">Result Declaration</td>
                    <td className="py-4 text-blue-600 font-black">By Feb 12, 2026</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-blue-900 rounded-[2.5rem] p-8 text-white flex flex-col justify-center">
            <h3 className="text-xl font-black mb-4">Quick Recovery</h3>
            <p className="text-blue-100 text-sm mb-6">Lost your Application Number? Don&apos;t panic. Use the NTA Forgot tool to recover it via your registered mobile number.</p>
            <a href="#" className="bg-blue-500 text-center py-3 rounded-xl font-bold hover:bg-blue-400 transition-colors">Recover Application ID</a>
          </div>
        </section>
<div className="mb-12">
<OfficialTracker/>
</div>
<section className="my-16 px-4 max-w-5xl mx-auto">
      {/* 1. DIRECT LINK HUB */}
      <div id="result-links" className="bg-white border-2 border-blue-100 rounded-[2.5rem] p-8 shadow-2xl shadow-blue-100/50 mb-10">
        <div className="flex items-center gap-3 mb-8">
          <div className="bg-blue-100 p-3 rounded-2xl">
            <FaExternalLinkAlt className="text-blue-600 text-xl" />
          </div>
          <div>
            <h2 className="text-2xl font-black text-slate-900">Direct Official Links</h2>
            <p className="text-sm text-slate-500 font-medium italic">Try different servers if one is slow or unresponsive.</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {officialLinks.map((link, idx) => (
            <a 
              key={idx}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`${link.color} text-white p-5 rounded-2xl flex flex-col items-center justify-center gap-2 hover:scale-[1.03] transition-transform active:scale-95 shadow-lg`}
            >
              <span className="font-bold text-lg">{link.name}</span>
              <span className="text-[10px] uppercase tracking-widest opacity-80">Click to Open Portal</span>
            </a>
          ))}
        </div>
      </div>

      <div id="how-to-download" className="grid md:grid-cols-2 gap-8">
        {/* 2. STEP-BY-STEP INSTRUCTIONS */}
        <div className="bg-slate-50 rounded-[2.5rem] p-8 border border-slate-200">
          <h3 className="text-xl font-black mb-6 flex items-center gap-2">
            <FaFileDownload className="text-blue-600" /> How to Download
          </h3>
          <ul className="space-y-6">
            {[
              { step: "01", text: "Visit any of the official NTA result links provided above." },
              { step: "02", text: "Click on the 'JEE Main 2026 Session 1 Score Card' link." },
              { step: "03", text: "Enter your Application Number and Date of Birth (DOB)." },
              { step: "04", text: "Fill the Security Pin (Captcha) exactly as shown." },
              { step: "05", text: "Download and print the PDF for your records." }
            ].map((item, i) => (
              <li key={i} className="flex gap-4">
                <span className="text-blue-600 font-black text-sm">{item.step}</span>
                <p className="text-slate-700 text-sm font-medium leading-relaxed">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* 3. PRO-TIPS & TROUBLESHOOTING */}
        <div className="flex flex-col gap-6">
          <div className="bg-green-50 rounded-[2rem] p-6 border border-green-100">
            <h4 className="font-bold text-green-800 flex items-center gap-2 mb-3">
              <FaLightbulb /> Verification Checklist
            </h4>
            <ul className="text-xs text-green-700 space-y-2 list-disc pl-4">
              <li>Ensure your <strong>Category</strong> matches your application.</li>
              <li>Check if the <strong>State Code of Eligibility</strong> is correct.</li>
              <li>Confirm the 7-decimal subject-wise NTA scores are visible.</li>
            </ul>
          </div>

          <div className="bg-amber-50 rounded-[2rem] p-6 border border-amber-100">
            <h4 className="font-bold text-amber-800 flex items-center gap-2 mb-3">
              <FaTools /> Site Crashing? Try This:
            </h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <FaLock className="text-amber-600 mt-1 shrink-0" />
                <p className="text-xs text-amber-800">Use <strong>Incognito Mode (Ctrl+Shift+N)</strong> to bypass browser cache that might hold old Result Awaited pages.</p>
              </div>
              <div className="p-3 bg-white/50 rounded-xl border border-amber-200 text-[10px] text-amber-900 font-bold uppercase tracking-tighter">
                TIP: If server is down, check via Mobile Data instead of WiFi.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
       {/* 4. THE "PERCENTILE" EXPLAINER (Technical Authority) */}
<section className="bg-slate-900 rounded-[3rem] p-10 text-white mb-20 overflow-hidden relative">
  <div className="relative z-10">
    <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-12">
      <div className="max-w-2xl">
        <h2 className="text-3xl font-black mb-4 flex items-center gap-3">
          <FaCalculator className="text-green-400" /> NTA Normalization Methodology 2026
        </h2>
        <p className="text-slate-400 leading-relaxed">
          Because JEE Main is conducted in multiple shifts, the difficulty level varies. NTA uses 
          Normalization to ensure a student in a tough shift isn&apos;t at a disadvantage. 
          Your Scorecard reflects an <strong>NTA Score (Percentile)</strong>, not raw marks.
        </p>
      </div>
      <a href="/blog/nta_percentile_calculation" className="bg-white/10 hover:bg-white/20 border border-white/20 px-6 py-3 rounded-2xl text-sm font-bold transition-all flex items-center gap-2">
        Read Full Calculation Guide <FaExternalLinkAlt className="text-xs" />
      </a>
    </div>

    <div className="grid lg:grid-cols-3 gap-8">
      {/* Formula Card */}
      <div className="lg:col-span-2 bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-white/10 p-8 rounded-[2rem]">
         <h2 className="text-2xl md:text-3xl font-extrabold mb-6 text-blue-400">
      How This JEE Main 2026 Shift-Wise Analysis Is Prepared
    </h2>

    <p className="text-gray-400 leading-relaxed max-w-4xl mb-6">
      Since JEE Main papers are conducted across multiple days and shifts, the
      difficulty level varies slightly for each shift. To ensure fairness, NTA
      uses a percentile-based normalization system instead of raw marks. Our
      shift-wise analysis follows the same principle using historical trends.
    </p>
        <p className="text-slate-400 text-sm mt-4 italic text-center">Note: Scores are calculated to 7 decimal places to eliminate bundle ties.</p>
      </div>

      {/* Internal Link Sidebar */}
      <div className="space-y-4">
        <h4 className="font-bold text-lg text-green-400">Shift Impact Analysis</h4>
        <p className="text-xs text-slate-400">How did your shift difficulty affect your result?</p>
        <div className="grid gap-3">
          <a href="/jee-main-2026-toughest-shift-analysis-january-session" className="block p-4 bg-white/5 rounded-xl border border-white/5 hover:border-blue-500 transition-all">
            <span className="text-sm font-bold block">Toughest Shift Analysis</span>
            <span className="text-xs text-slate-500">Jan 24 Shift 2 remains the hardest...</span>
          </a>
          <a href="/jee-mains-2026-shift-wise-marks-percentile-analysis" className="block p-4 bg-white/5 rounded-xl border border-white/5 hover:border-blue-500 transition-all">
            <span className="text-sm font-bold block">Marks vs Percentile Per Shift</span>
            <span className="text-xs text-slate-500">Compare your shift data here →</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

        {/* 5. SCORECARD SAMPLE SECTION (Google Images Signal) */}
        <section className="text-center pb-20">
          <h2 className="text-3xl font-black mb-12">What Your Scorecard Will Look Like</h2>
          <div className="max-w-4xl mx-auto rounded-3xl border-8 border-slate-100 overflow-hidden shadow-xl">
             {/* Replace with actual image tag later */}
             <div className="bg-slate-200 aspect-[16/9] flex items-center justify-center text-slate-400 italic">
                <Image src={"/jee-scorecard.jpg"} width={8000} height={4500} alt="JEE Scorecard Sample" />
             </div>
          </div>
        </section>

{/* 5. PREDICTOR HUB (Strategic Interlinking) */}
<section className="mb-20">
  <div className="text-center mb-12">
    <h2 className="text-3xl font-black text-slate-900">What&apos;s Next? Predict Your Future</h2>
    <p className="text-slate-500">Use your Session 1 Percentile to explore NIT, IIIT, and GFTI options.</p>
  </div>

  <div className="grid md:grid-cols-3 gap-6">
    {[
      { 
        title: "JEE Rank Predictor", 
        desc: "Convert your percentile into an All India Rank (AIR).", 
        link: "/jee-rank-predictor",
        icon: "🎯",
        color: "blue"
      },
      { 
        title: "College Predictor", 
        desc: "Find which NITs/IIITs match your Session 1 score.", 
        link: "/jee-college-predictor",
        icon: "🏛️",
        color: "purple"
      },
      { 
        title: "JoSAA Predictor", 
        desc: "Simulate seat allotment based on category & quota.", 
        link: "/josaa-college-predictor",
        icon: "⚙️",
        color: "green"
      }
    ].map((tool, i) => (
      <a key={i} href={tool.link} className="group p-8 bg-white border border-slate-100 rounded-[2.5rem] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all">
        <div className="text-4xl mb-4">{tool.icon}</div>
        <h3 className="text-xl font-black mb-2 group-hover:text-blue-600 transition-colors">{tool.title}</h3>
        <p className="text-slate-500 text-sm leading-relaxed mb-6">{tool.desc}</p>
        <span className="text-blue-600 font-bold text-sm flex items-center gap-2">
          Start Predicting <FaArrowRight />
        </span>
      </a>
    ))}
  </div>
</section>

{/* 6. COLLEGE-SPECIFIC ANALYSIS (Entity Linking) */}
<section className="bg-blue-50 rounded-[3rem] p-10 mb-20">
  <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
    <div>
      <h2 className="text-3xl font-black text-slate-900 mb-4">Targeting Top NITs?</h2>
      <p className="text-slate-600">Check the 2026 expected closing ranks for the most popular campuses.</p>
    </div>
    <a href="/top-nits-for-computer-science-cse-cutoff-2026" className="text-blue-600 font-bold flex items-center gap-2 hover:underline">
      View Top 10 NIT CSE Cutoffs <FaExternalLinkAlt />
    </a>
  </div>

  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
    {[
      { name: "NIT Trichy", slug: "nit-trichy" },
      { name: "NIT Warangal", slug: "nit-warangal" },
      { name: "NIT Surathkal", slug: "nit-karnataka" },
      { name: "NIT Rourkela", slug: "nit-rourkela" },
      { name: "MNIT Allahabad", slug: "mnit-allahabad" },
      { name: "NIT Calicut", slug: "nit-calicut" },
      { name: "VNIT Nagpur", slug: "vnit-nagpur" },
      { name: "NIT Kurukshetra", slug: "nit-kurukshetra" }
    ].map((nit, i) => (
      <a 
        key={i} 
        href={`/josaa-opening-closing-rank-2026-nit-iiit-cutoff/${nit.slug}`}
        className="bg-white p-4 rounded-2xl text-center font-bold text-slate-700 border border-slate-200 hover:border-blue-600 hover:text-blue-600 transition-all shadow-sm"
      >
        {nit.name}
      </a>
    ))}
  </div>
</section>

<ResultFAQ/>

      </main>
    </div>

    </>
  );
};

export default JEEJanResultPage;