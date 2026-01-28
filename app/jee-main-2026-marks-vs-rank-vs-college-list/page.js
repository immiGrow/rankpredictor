import React from 'react';
import Link from 'next/link';
import { 
  FaRocket, FaDatabase, FaUniversity, FaArrowRight, 
  FaFire, FaChartPie, FaExternalLinkAlt, FaCheckCircle,
    FaShieldAlt, FaMapMarkedAlt, FaLightbulb, FaHistory, 
  FaBalanceScale, FaUserSecret, FaArrowUp, FaDownload  
} from 'react-icons/fa';
import { MdOutlineAnalytics, MdUpdate } from 'react-icons/md';
import { BiTargetLock } from 'react-icons/bi';
import { RiMicroscopeLine } from 'react-icons/ri';
import Script from 'next/script';

const JEEMasterAuthorityPage = () => {
  return (
    <div className="bg-[#f8fafc] min-h-screen pb-20">
      
      {/* SECTION 5: SUBJECT-WISE PRECISION (Google Loves Technical Depth) */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-[950] text-slate-900 tracking-tight">
            Subject-Wise <span className="text-blue-600">99 Percentile</span> Benchmarks
          </h2>
          <p className="text-slate-500 mt-4">Average marks needed per subject based on Jan 21-28 Shift Difficulty.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { sub: "Mathematics", marks: "65-72", level: "Hard/Lengthy", color: "red", detail: "Focus on Vectors, 3D, and Calculus. 12 questions = 98%ile." },
            { sub: "Physics", marks: "82-88", level: "Easy-Moderate", color: "blue", detail: "Formula based. 2026 shifts are 80% NCERT direct questions." },
            { sub: "Chemistry", marks: "78-84", level: "Moderate", color: "green", detail: "Organic dominates Jan 28 shifts. Physical Chemistry is integer-only." },
          ].map((item, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl border-b-4 border-blue-600 shadow-xl hover:-translate-y-2 transition-all">
              <div className={`text-${item.color}-600 bg-${item.color}-50 w-12 h-12 rounded-xl flex items-center justify-center mb-6`}>
                <RiMicroscopeLine size={24} />
              </div>
              <h3 className="text-2xl font-black mb-2">{item.sub}</h3>
              <div className="flex items-center gap-2 mb-4 text-sm font-bold">
                <span className="text-slate-400">Target Score:</span>
                <span className="text-blue-600 bg-blue-50 px-3 py-1 rounded-md">{item.marks}</span>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">{item.detail}</p>
              <div className="flex items-center gap-2 text-xs font-black uppercase text-slate-400 tracking-widest">
                Difficulty: <span className={`text-${item.color}-500`}>{item.level}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 6: THE "HOME STATE" CALCULATOR (High Search Volume) */}
      <section className="max-w-7xl mx-auto px-4 py-16 bg-slate-900 rounded-[3rem] text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 opacity-10"><FaMapMarkedAlt size={400} /></div>
        
        <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-black mb-6 italic">The Home State Advantage 2026</h2>
            <p className="text-slate-400 mb-8 leading-relaxed text-lg">
              Did you know a General candidate from <strong>Home State</strong> can get NIT Trichy at 20,000 rank, while Other State closes at 5,000? We&apos;ve mapped the 2026 expected benefit for top states.
            </p>
            <div className="space-y-4">
              <Link href="/josaa-opening-closing-rank-2026-nit-iiit-cutoff/nit-trichy" className="flex items-center justify-between p-4 bg-white/5 rounded-2xl hover:bg-white/10 border border-white/10 group">
                <span className="font-bold uppercase tracking-wider text-sm">Tamil Nadu (NIT Trichy)</span>
                <span className="text-blue-400 group-hover:translate-x-2 transition-all italic underline">Check HS Cutoff →</span>
              </Link>
              <Link href="/josaa-opening-closing-rank-2026-nit-iiit-cutoff/vnit-nagpur" className="flex items-center justify-between p-4 bg-white/5 rounded-2xl hover:bg-white/10 border border-white/10 group">
                <span className="font-bold uppercase tracking-wider text-sm">Maharashtra (VNIT Nagpur)</span>
                <span className="text-blue-400 group-hover:translate-x-2 transition-all italic underline">Check HS Cutoff →</span>
              </Link>
              <Link href="/josaa-opening-closing-rank-2026-nit-iiit-cutoff/mnit-allahabad" className="flex items-center justify-between p-4 bg-white/5 rounded-2xl hover:bg-white/10 border border-white/10 group">
                <span className="font-bold uppercase tracking-wider text-sm">Uttar Pradesh (MNNIT)</span>
                <span className="text-blue-400 group-hover:translate-x-2 transition-all italic underline">Check HS Cutoff →</span>
              </Link>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-[2rem] border border-white/20">
            <h4 className="text-xl font-bold mb-4 flex items-center gap-2"><FaShieldAlt className="text-green-400" /> 2026 Prediction: NIT Safety</h4>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="text-slate-400 border-b border-white/10">
                  <tr><th className="pb-4">State</th><th className="pb-4">Safe %ile (HS)</th><th className="pb-4">Branch Chance</th></tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  <tr><td className="py-4 font-bold">Delhi (DTU/NSUT)</td><td className="py-4">92.5+</td><td className="py-4 text-green-400 text-xs font-black italic">High Benefit</td></tr>
                  <tr><td className="py-4 font-bold">Telangana/AP</td><td className="py-4">97.8+</td><td className="py-4 text-red-400 text-xs font-black italic">Low Benefit (High Comp)</td></tr>
                  <tr><td className="py-4 font-bold">North East (NITs)</td><td className="py-4">78.0+</td><td className="py-4 text-green-400 text-xs font-black italic">Huge Benefit</td></tr>
                  <tr><td className="py-4 font-bold">Maharashtra</td><td className="py-4">94.5+</td><td className="py-4 text-blue-400 text-xs font-black italic">Moderate Benefit</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: THE "SPOILER" - JAN VS APRIL (Behavioral SEO) */}
      <section className="max-w-5xl mx-auto px-4 py-20 text-center">
        <div className="inline-flex items-center gap-2 text-blue-600 font-black mb-4 uppercase tracking-[0.2em]">
          <FaBalanceScale /> Strategy Analysis
        </div>
        <h2 className="text-4xl md:text-5xl font-[950] text-slate-900 mb-8 leading-tight">
          Why Jan Session is Your Best Chance <br/><span className="text-blue-600 underline decoration-wavy underline-offset-8">To Get 99%ile</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-8 text-left">
          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-lg">
            <h4 className="font-black text-xl mb-4 flex items-center gap-2"><FaArrowUp className="text-green-500" /> Jan Session (14.5L Candidates)</h4>
            <p className="text-slate-600 text-sm leading-relaxed">
              Many students haven&apos;t finished the syllabus. In 2026 Jan shifts, students are scoring <strong>99 percentile at 180 marks</strong>.
            </p>
          </div>
          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-lg">
            <h4 className="font-black text-xl mb-4 flex items-center gap-2"><FaHistory className="text-red-500" /> April Session Prediction</h4>
            <p className="text-slate-600 text-sm leading-relaxed">
              Competition will spike. Expect 99 percentile to jump to <strong>205+ marks</strong> as dropters and 12thies finish the full syllabus.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 8: THE "HIDDEN" DATA - CSAB VS JOSAA (User Retention) */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="bg-gradient-to-r from-blue-700 to-indigo-900 rounded-[3rem] p-10 text-white flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/3">
            <BiTargetLock size={80} className="text-blue-300 opacity-50 mb-6" />
            <h3 className="text-3xl font-black mb-4 leading-tight">Last Seat In NIT: The CSAB Secret</h3>
            <p className="text-blue-100 text-sm opacity-80 mb-6">
              Big brands don&apos;t show you the <strong>CSAB Round 2</strong> data because it&apos;s hard to track. We have the 2026 expected vacancy ranks.
            </p>
            <Link href="/jee-college-predictor" className="bg-white text-blue-900 px-8 py-4 rounded-2xl font-black hover:scale-105 transition-all inline-block shadow-2xl">
              Predict CSAB Spot Round
            </Link>
          </div>
          <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4">
             <div className="bg-white/10 p-6 rounded-2xl border border-white/20">
                <h5 className="font-black mb-2 flex items-center gap-2"><FaUserSecret /> Low Rank Entry?</h5>
                <p className="text-xs opacity-70 leading-normal">Mechanical in NIT Jalandhar or Civil in NIT Hamirpur often goes up to 1.5 Lakh rank in Special Rounds. Don&apos;t quit after Jan results!</p>
             </div>
             <div className="bg-white/10 p-6 rounded-2xl border border-white/20">
                <h5 className="font-black mb-2 flex items-center gap-2"><FaLightbulb /> New IIITs 2026</h5>
                <p className="text-xs opacity-70 leading-normal">IIIT Nagpur and IIIT Pune are showing Placement Inflation. Secure these at 96+ percentile for high ROI.</p>
             </div>
          </div>
        </div>
      </section>

      {/* SECTION 9: DOWNLOADABLE PDF SECTION (Google Push Secret) */}
      <section className="max-w-4xl mx-auto px-4 py-16 text-center">
        <div className="bg-white p-10 rounded-[2.5rem] border-2 border-dashed border-blue-200">
           <FaDownload size={40} className="mx-auto text-blue-600 mb-4" />
           <h3 className="text-2xl font-black mb-2 text-slate-900">Download Jan 28 Official PDF Summary</h3>
           <p className="text-slate-500 mb-8 text-sm italic underline underline-offset-4 decoration-blue-500 font-bold">Shift 1 & 2 Question Paper + Expert Solution (Memory Based)</p>
           <Link href="/jee-main-2026-official-answer-key-pdf-shiftwise-download" className="bg-slate-900 text-white px-10 py-5 rounded-2xl font-black hover:bg-blue-600 transition-colors shadow-xl">
             Download Jan 28 PDF (Free)
           </Link>
        </div>
      </section>

    </div>
  );
};

// For Next.js Metadata API or standard HTML head
export const metadata = {
  title: "JEE Main 2026 Marks vs Percentile vs Rank (Jan 28 Live) | What Can You Get with 80-99 Percentile? (NIT & IIIT List)",
  description: "Check Jan 28 Shift 1 & 2 analysis. Get the most accurate JEE Main 2026 Marks vs Percentile table. 14.5L candidate data analyzed. See your NIT/IIIT chances now! Low Percentile in JEE Main 2026? Top Govt Colleges for 70-90 Percentile (JAC, HSTES, MP DTE)",
  keywords: [
    "JEE Main 2026 Marks vs Percentile", 
    "JEE Main Jan 28 Shift 1 Analysis", 
    "Jan 28 Shift 2 Marks vs Percentile", 
    "JEE Main Rank Predictor 2026", 
    "NIT Trichy CSE Cutoff 2026", 
    "JEE Main 150 marks percentile 2026",
    "JoSAA 2026 Opening and Closing Rank"
  ],
  alternates: {
    canonical: "https://www.jeerankpredictor.in/jee-main-2026-marks-vs-rank-vs-college-list",
  },
  openGraph: {
    title: "JEE Main 2026 Master Hub: Marks vs Percentile (Jan 28 Updated)",
    description: "Deep data analysis of Jan 2026 shifts. Calculate your rank and college prospects instantly.",
    url: "https://www.jeerankpredictor.in/jee-main-2026-marks-vs-rank-vs-college-list",
    siteName: "JEE Rank Predictor",
    images: [
      {
        url: "/og-image-jan28.jpg", // Create a high-quality preview image
        width: 1200,
        height: 630,
        alt: "JEE Main 2026 Marks vs Percentile Graph",
      },
    ],
    locale: "en_IN",
    type: "article",
  },
};

const JEEUltimateHub = () => {
  // Navigation Links from your Sitemap
  const quickLinks = [
    { name: "Rank Predictor", href: "/jee-rank-predictor" },
    { name: "College Predictor", href: "/josaa-college-predictor" },
    { name: "Jan Shift Analysis", href: "/jee-mains-2026-shift-wise-marks-percentile-analysis" },
    { name: "Answer Key PDF", href: "/jee-main-2026-official-answer-key-pdf-shiftwise-download" },
    { name: "Toughest Shift 2026", href: "/jee-main-2026-toughest-shift-analysis-january-session" },
    { name: "Top 10 NITs CSE Cutoffs 2026", href: "/top-nits-for-computer-science-cse-cutoff-2026" },
  ];

  const nitLinks = [
    { name: "NIT Trichy", href: "/josaa-opening-closing-rank-2026-nit-iiit-cutoff/nit-trichy" },
    { name: "NIT Warangal", href: "/josaa-opening-closing-rank-2026-nit-iiit-cutoff/nit-warangal" },
    { name: "MNIT Allahabad", href: "/josaa-opening-closing-rank-2026-nit-iiit-cutoff/mnit-allahabad" },
    { name: "NIT Rourkela", href: "/josaa-opening-closing-rank-2026-nit-iiit-cutoff/nit-rourkela" },
  ];


  return (
    <>

<Script
  id={`webpage-schema`}
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": ` JEE Main 2026: Marks vs Rank vs College - What Can You Get with 80-99 Percentile? (NIT & IIIT List)
`,
      "description": "200 Marks in JEE Main 2026: Percentile, Rank & NIT CSE Cutoffs Aiming for 99.2+ Percentile? See the rank and college options for 200 marks in JEE Main 2026. Analysis of top-tier NIT Computer Science (CSE) chances and shift difficulty impact.",
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.jeerankpredictor.in/" },
          { "@type": "ListItem", "position": 2, "name": "JEE Main 2026 Analysis", "item": `https://www.jeerankpredictor.in/jee-main-2026-marks-vs-rank-vs-college-list` }
        ]
      }
    })
  }}
/>

<Script
  id="structured-data"
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify([
      {
        "@context": "https://schema.org",
        "@type": "Dataset",
        "name": "JEE Main 2026 Marks vs Percentile Data - January Session",
        "description": "Comprehensive data mapping of raw marks to percentile scores for the JEE Main 2026 January session, including shift-wise difficulty normalization.",
        "license": "https://www.jeerankpredictor.in/terms-and-conditions",
        "isAccessibleForFree": true,
        "creator": {
          "@type": "Organization",
          "name": "JEE Rank Predictor"
        }
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the expected marks for 99 percentile in JEE Main 2026 Jan 28 Shift?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "For the Jan 28 Shift 2 (Moderate), the 99 percentile is expected at 185-190 marks. For Shift 1, which was slightly tougher in Mathematics, it may drop to 175-182 marks."
            }
          },
          {
            "@type": "Question",
            "name": "How much rank can I expect with 95 percentile in 2026?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "With 14.5 lakh unique candidates, 95 percentile will result in an All India Rank (AIR) of approximately 72,000 to 75,000."
            }
          },
          {
            "@type": "Question",
            "name": "Can I get an NIT with 90 percentile in JEE Main 2026?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "While difficult for General category in JoSAA rounds, 90 percentile students can secure seats in North-East NITs or GFTIs through CSAB Special Rounds and State Government colleges like DTU or NSUT (Home State)."
            }
          }
        ]
      }
    ])
  }}
/>


   
    <div className="min-h-screen bg-[#fafafa] text-[#1a202c]">
      
      {/* 1. SEO FLOATING NAV (Internal Link Booster) */}
      <div className="bg-white border-b sticky top-16 z-50 py-3 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between overflow-x-auto">
          <div className="flex gap-6 whitespace-nowrap">
            {quickLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-xs font-bold uppercase tracking-wider text-gray-500 hover:text-blue-600 border-b-2 border-transparent hover:border-blue-600 transition-all">
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* 2. PREMIUM HERO SECTION */}
      <header className="bg-gradient-to-b from-white to-gray-50 pt-16 pb-20 px-4 border-b">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-4 py-1 rounded-full text-xs font-black mb-6 uppercase tracking-widest">
            <FaFire /> Analysis Live: Jan 28, 2026
          </div>
          <h1 className="text-4xl md:text-7xl font-black tracking-tighter text-slate-900 mb-6">
            JEE Main 2026 <span className="text-blue-600">Marks vs Percentile</span> vs College Matrix
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            The most accurate data-driven analysis for the January Session. See where your marks land you in the 2026 JoSAA Counseling.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
              <p className="text-gray-400 text-xs font-bold uppercase">Expected Candidates</p>
              <p className="text-2xl font-black">14.52L</p>
            </div>
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
              <p className="text-gray-400 text-xs font-bold uppercase">99%ile Marks</p>
              <p className="text-2xl font-black text-blue-600">178-192</p>
            </div>
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
              <p className="text-gray-400 text-xs font-bold uppercase">Toughest Shift</p>
              <p className="text-2xl font-black text-red-600">Jan 24 S2</p>
            </div>
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
              <p className="text-gray-400 text-xs font-bold uppercase">Safety Score</p>
              <p className="text-2xl font-black text-green-600">145+</p>
            </div>
          </div>
        </div>
      </header>

      {/* 3. THE MASTER DATA MATRIX (What students search for) */}
      <section className="max-w-7xl mx-auto px-4 -mt-10 mb-20">
        <div className="bg-white rounded-[2rem] shadow-2xl border border-gray-100 overflow-hidden">
          <div className="p-8 bg-slate-900 text-white flex flex-col md:flex-row justify-between items-center">
            <h2 className="text-2xl font-bold flex items-center gap-3">
              <FaDatabase className="text-blue-400" /> Marks vs Percentile vs NIT Chances
            </h2>
            <Link href="/jee-rank-predictor" className="mt-4 md:mt-0 flex items-center gap-2 bg-blue-600 px-6 py-2 rounded-xl font-bold hover:bg-blue-500 transition-all">
              Launch Predictor <FaArrowRight />
            </Link>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-gray-50 text-gray-400 text-xs uppercase font-bold border-b">
                <tr>
                  <th className="p-6 text-gray-900">Percentile Range</th>
                  <th className="p-6">Jan 28 (Moderate)</th>
                  <th className="p-6">Jan 24 (Tough)</th>
                  <th className="p-6">Expected AIR Rank</th>
                  <th className="p-6">College Admission Goal</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                <tr className="hover:bg-blue-50/30 transition-all">
                  <td className="p-6 font-black text-blue-600">99.5 - 99.9</td>
                  <td className="p-6 font-bold">215 - 245</td>
                  <td className="p-6 font-bold">195 - 220</td>
                  <td className="p-6">1 – 7,500</td>
                  <td className="p-6"><span className="bg-green-100 text-green-700 px-3 py-1 rounded-lg text-xs font-black italic">NIT Trichy CSE / IIT Entry</span></td>
                </tr>
                <tr className="hover:bg-blue-50/30 transition-all">
                  <td className="p-6 font-black text-blue-600">98.0 - 99.0</td>
                  <td className="p-6 font-bold">165 - 185</td>
                  <td className="p-6 font-bold">145 - 165</td>
                  <td className="p-6">15,000 – 30,000</td>
                  <td className="p-6"><span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-lg text-xs font-black italic">Top 10 NITs (Core Branches)</span></td>
                </tr>
                <tr className="hover:bg-blue-50/30 transition-all">
                  <td className="p-6 font-black text-blue-600">95.0 - 97.0</td>
                  <td className="p-6 font-bold">125 - 145</td>
                  <td className="p-6 font-bold">110 - 130</td>
                  <td className="p-6">45,000 – 75,000</td>
                  <td className="p-6"><span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-lg text-xs font-black italic">New NITs / IIITs (IT/Mech)</span></td>
                </tr>
                <tr className="hover:bg-blue-50/30 transition-all">
                  <td className="p-6 font-black text-blue-600">90.0 - 93.0</td>
                  <td className="p-6 font-bold">95 - 110</td>
                  <td className="p-6 font-bold">80 - 95</td>
                  <td className="p-6">1.2L – 1.5L</td>
                  <td className="p-6"><span className="bg-red-50 text-red-600 px-3 py-1 rounded-lg text-xs font-black italic">GFTIs / State Spot Rounds</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 4. SILO INTERLINKING SECTION (The Google "Push" Secret) */}
      <section className="max-w-7xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-8">
        
        {/* Deep Dive into NITs */}
        <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-xl">
          <div className="flex items-center gap-3 mb-6">
            <FaUniversity className="text-2xl text-blue-600" />
            <h3 className="text-xl font-black">Top NIT Analysis</h3>
          </div>
          <p className="text-gray-500 text-sm mb-6 leading-relaxed">Detailed shift-wise opening & closing ranks for 2026. Updated today for Jan 28 shifts.</p>
          <div className="grid gap-3 text-sm">
            {nitLinks.map((nit) => (
              <Link key={nit.href} href={nit.href} className="flex justify-between items-center p-3 bg-gray-50 rounded-xl hover:bg-blue-600 hover:text-white transition-all group font-bold">
                {nit.name} <FaExternalLinkAlt className="text-[10px] opacity-30 group-hover:opacity-100" />
              </Link>
            ))}
          </div>
        </div>

        {/* Dynamic Shift Analytics */}
        <div className="md:col-span-2 bg-white p-8 rounded-[2rem] border border-gray-100 shadow-xl">
          <div className="flex items-center gap-3 mb-6">
            <MdOutlineAnalytics className="text-2xl text-purple-600" />
            <h3 className="text-xl font-black">Jan 28 Shift Analysis & Difficulty Level</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="p-4 bg-orange-50 rounded-2xl border border-orange-100">
                <h4 className="font-black text-orange-800 flex items-center gap-2 mb-2">
                  <MdUpdate /> Shift 1: Moderate-Tough
                </h4>
                <p className="text-xs text-orange-700">Maths was lengthy. Physics & Chemistry were formula-based. Expected 99%ile at 182 marks.</p>
              </div>
              <div className="p-4 bg-green-50 rounded-2xl border border-green-100">
                <h4 className="font-black text-green-800 flex items-center gap-2 mb-2">
                  <MdUpdate /> Shift 2: Moderate
                </h4>
                <p className="text-xs text-green-700">Chemistry was very easy (NCERT). Physics was balanced. Expected 99%ile at 188 marks.</p>
              </div>
            </div>
            <div className="bg-gray-900 rounded-3xl p-6 text-white">
              <h4 className="font-bold mb-4 flex items-center gap-2 text-blue-400 underline underline-offset-4">
                <FaChartPie /> Category-wise Safety
              </h4>
              <ul className="space-y-3 text-xs opacity-90 font-mono">
                <li className="flex justify-between"><span>General:</span> <span className="text-blue-400 font-bold">93.4+ %ile</span></li>
                <li className="flex justify-between"><span>OBC-NCL:</span> <span className="text-blue-400 font-bold">78.2+ %ile</span></li>
                <li className="flex justify-between"><span>EWS:</span> <span className="text-blue-400 font-bold">81.1+ %ile</span></li>
                <li className="flex justify-between"><span>SC / ST:</span> <span className="text-blue-400 font-bold">59 / 47+ %ile</span></li>
              </ul>
              <Link href="/jee_main_cutoff_2026" className="mt-6 block text-center bg-white text-black py-2 rounded-xl text-xs font-black uppercase hover:bg-blue-400 hover:text-white transition-all">
                View Full Cutoff History
              </Link>
            </div>
          </div>
        </div>

      </section>
<JEEMasterAuthorityPage/>
      {/* 5. HIGH-VALUE FAQ (Structured Data for Google Snippets) */}
<section className="max-w-4xl mx-auto px-4 pb-24">
  <h3 className="text-3xl font-black text-center mb-12">Students Frequently Ask (Jan 2026)</h3>
  <div className="grid gap-6">
    {[
      { 
        q: "What rank is 98 percentile in JEE Main 2026?", 
        a: "With 14.5 lakh candidates, a 98 percentile will land your All India Rank (AIR) between 29,000 and 31,000." 
      },
      { 
        q: "Is 150 marks enough for NIT?", 
        a: "Yes, 150 marks in a moderate shift roughly equals 97.5 percentile, which is enough to get Core branches in Mid-tier NITs like NIT Silchar or NIT Hamirpur." 
      },
      { 
        q: "Which was the toughest shift in JEE Main 2026 Jan?", 
        a: "Based on our student survey and expert analysis, Jan 24 Shift 2 remains the toughest shift due to its complex Integration and Vector questions." 
      }
    ].map((item, i) => (
      <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-lg hover:shadow-xl transition-shadow">
        <h4 className="font-black text-lg mb-3 flex items-center gap-2 text-slate-900">
          <FaCheckCircle className="text-blue-600 flex-shrink-0" /> {item.q}
        </h4>
        <p className="text-slate-600 text-base leading-relaxed pl-7">{item.a}</p>
      </div>
    ))}
  </div>
</section>

    </div>
     </>
  );
};

export default JEEUltimateHub;