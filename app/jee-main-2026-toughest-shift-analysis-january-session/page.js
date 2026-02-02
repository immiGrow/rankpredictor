import React,{useMemo} from 'react';
import Script from 'next/script';
import { 
  FaFire, FaExclamationCircle, FaCheckCircle, 
  FaInfoCircle, FaFlask, FaAtom, FaSquareRootAlt, FaChartBar, 
  FaChartLine,
  FaBrain,
  FaDownload,
  FaFilePdf,
  FaClock,
  FaExclamationTriangle,
  FaLayerGroup,
  FaArrowRight,
  FaAward,
  FaGraduationCap,
  FaBalanceScale,
  FaQuestionCircle,
  FaExternalLinkAlt,
  FaBell
} from 'react-icons/fa';
import Link from 'next/link';
import OfficialTracker from '@/components/OfficialTracker';
import Session1QuickHub from '@/components/Session1QuickHub';

// Metadata with Social & Search optimization
export const metadata = {
  title: "JEE Main 2026 Toughest Shift Analysis (Jan Session) | Marks vs Percentile",
  description: "Detailed JEE Main 2026 January Session shift-wise difficulty analysis. Compare Jan 24, 23, 22 shifts. Download memory-based papers and see NTA normalization impact.",
  keywords: [
    "toughest shift in JEE Main 2026 January", 
    "JEE Main 2026 Jan 24 Shift 1 analysis", 
    "JEE Main Marks vs Percentile 2026", 
    "NTA normalization formula 2026", 
    "JEE Main paper difficulty ranking 2026"
  ],
  alternates: { canonical: "https://www.jeerankpredictor.in/jee-main-2026-toughest-shift-analysis-january-session" },
  openGraph: {
    title: "JEE Main 2026: Which Shift Was Toughest?",
    description: "Real-time analysis of January session difficulty trends and normalization impact.",
    url: 'https://www.jeerankpredictor.in/jee-main-2026-toughest-shift-analysis-january-session',
    type: 'article',
    images: [{ url: '/logo.jpg' }], // Ensure you have this in public folder
  },
};

// Add this within your Page component
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Was Jan 24 Shift 1 the toughest in JEE Main 2026?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, preliminary data indicates Jan 24 Shift 1 was the most time-consuming due to a lengthy Mathematics section, making it one of the toughest shifts in the January session."
      }
    },
    {
      "@type": "Question",
      "name": "How does NTA calculate percentile for tough shifts?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "NTA uses a normalization formula based on the relative performance of candidates within the same shift to ensure fairness across varying difficulty levels."
      }
    },
    {
      "@type": "Question",
      "name": "What is a safe score for NIT Nagpur (VNIT) in 2026?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Based on 2025-2026 trends, for top branches like CSE at VNIT Nagpur, a 99.2+ percentile is required. For core branches like Mechanical or Civil, a 97.5+ percentile is considered safe for General category students."
      }
    },
    {
      "@type": "Question",
      "name": "How are JEE 2026 trends different from 2025?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "2026 has seen a significant shift toward more conceptual Physics and even lengthier Mathematics. This suggests that the 99 percentile cutoff may drop to around 180-185 marks compared to 192 in 2025."
      }
    }
  ]
};
const articleSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "TechArticle",
      "headline": "JEE Main 2026 Jan 28 Shift 2 Paper Analysis | JEE Main 2026 Toughest Shift Analysis (January Session)",
      "author": { "@type": "Person", "name": "Abhisha Kumar Chittore", "url": "https://www.jeerankpredictor.in/about" },
      "datePublished": "2026-01-21T08:00:00+05:30",
      "dateModified": "2026-01-28T21:00:00+05:30",
      "publisher": { 
        "@type": "Organization", 
        "name": "JEE RankPredictor",
        "logo": { "@type": "ImageObject", "url": "https://www.jeerankpredictor.in/logo.png" }
      },
      "description": "Expert analysis and marks vs percentile for JEE Main 2026 Jan 28 Shift 2 based on students reactions."
    },
   
  ]
};

const faqs = [
    {
      q: "Was Jan 24 Shift 1 the toughest in JEE Main 2026?",
      a: "Yes, preliminary data indicates Jan 24 Shift 1 was the most time-consuming due to a lengthy Mathematics section, making it one of the toughest shifts in the January session."
    },
    {
      q: "How does NTA calculate percentile for tough shifts?",
      a: "NTA uses a normalization formula based on the relative performance of candidates within the same shift to ensure fairness across varying difficulty levels."
    },
    {
      q: "What is a safe score for NIT Nagpur (VNIT) in 2026?",
      a: "Based on 2025-2026 trends, for top branches like CSE at VNIT Nagpur, a 99.2+ percentile is required. For core branches like Mechanical or Civil, a 97.5+ percentile is considered safe for General category students."
    },
    {
      q: "How are JEE 2026 trends different from 2025?",
      a: "2026 has seen a significant shift toward more conceptual Physics and even lengthier Mathematics. This suggests that the 99 percentile cutoff may drop to around 180-185 marks compared to 192 in 2025."
    }
  ];





export default function ToughestShiftPage() {
  const lastUpdated = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  const shifts = [
    { 
      date: "Jan 24, 2026", 
      status: "Live", 
      s1: "Very Tough", 
      s2: "Moderate-Tough", 
      link: "https://www.vedantu.com/jee-main/2026-question-paper-24-january-shift-1" 
    },
    { 
      date: "Jan 23, 2026", 
      status: "Available", 
      s1: "Tough (Lengthy)", 
      s2: "Moderate (Lengthy)", 
      link: "https://www.shiksha.com/engineering/articles/jee-main-2026-january-23-shift-1-question-paper-with-answer-key-solutions-pdf-blogId-219972" 
    },
    { 
      date: "Jan 22, 2026", 
      status: "Available", 
      s1: "Moderate", 
      s2: "Moderate", 
      link: "https://www.aakash.ac.in/jee-main-2026-january-22-shift-1-shift-2-question-paper-solutions-download-pdf" 
    },
    { 
      date: "Jan 21, 2026", 
      status: "Available", 
      s1: "Easy-Moderate", 
      s2: "Moderate-Hard", 
      link: "https://www.shiksha.com/engineering/articles/jee-main-2026-january-21-shift-1-question-paper-with-answer-key-solutions-pdf-blogId-219632" 
    },
  ];

  const shiftData = [
    { shift: "Jan 28 Shift 2", difficulty: "Moderate", physics: "Moderate", chemistry: "Easy", maths: "Hard", target99: "183-188" },
    { shift: "Jan 28 Shift 1", difficulty: "Moderate-Hard", physics: "Moderate", chemistry: "Easy", maths: "Hard", target99: "182-186" },
    { shift: "Jan 24 Shift 1", difficulty: "Hard", physics: "Moderate", chemistry: "Easy-Mod", maths: "Very Hard", target99: "178-182" },
    { shift: "Jan 23 Shift 2", difficulty: "Moderate-Hard", physics: "Moderate", chemistry: "Moderate", maths: "Hard", target99: "185-190" },
    { shift: "Jan 22 Shift 1", difficulty: "Moderate", physics: "Easy", chemistry: "Easy", maths: "Moderate-Hard", target99: "195-202" },
    { shift: "Jan 21 Shift 2", difficulty: "Easy-Moderate", physics: "Easy", chemistry: "Easy", maths: "Moderate", target99: "205-212" },
  ];

  return (
    <>
    {/* 1. SEO & SCHEMA */}
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify(articleSchema)
      }} />

      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify(faqSchema)
      }} />


    <main className="max-w-5xl mx-auto px-6 py-12 text-gray-800 leading-relaxed">
      

      {/* 2. HERO SECTION */}
      <section className="mb-12 border-b pb-10">
        <div className="flex items-center gap-2 text-red-600 font-bold mb-4 uppercase tracking-widest text-sm">
          <FaFire className="animate-bounce" /> Live Session 1 Report
        </div>
        <h1 className="text-4xl md:text-6xl font-black mb-6 text-gray-900 tracking-tight">
          JEE Main 2026: <span className="text-blue-600">Which Shift was the Toughest?</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl">
          A deep-dive analysis into shift-wise difficulty levels, subject-specific hurdles, and the impact of NTA&apos;s normalization on your final AIR.
        </p>
        <div className="mt-8 flex items-center gap-4">
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center font-bold text-blue-600">AKC</div>
          <div>
            <p className="font-bold text-gray-900">Analysis by Abhisha Kumar</p>
            <p className="text-sm text-gray-500">B.Tech CSE, VNIT Nagpur · Updated {lastUpdated}</p>
          </div>
        </div>
      </section>
   <Session1QuickHub/>

          
   {/*Shiftwise Comparision Analysis */}
<section className="my-20">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2 underline decoration-blue-500 decoration-4 underline-offset-8">
        Shift-Wise Difficulty vs 99%ile Target
      </h2>
      <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm">
        <table className="w-full text-left">
          <thead className="bg-slate-900 text-white">
            <tr>
              <th className="px-6 py-4 font-bold text-sm">Shift</th>
              <th className="px-6 py-4 font-bold text-sm">Overall Difficulty</th>
              <th className="px-6 py-4 font-bold text-sm">Physics/Math/Chem</th>
              <th className="px-6 py-4 font-bold text-sm">99%ile Projection</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 font-medium">
            {shiftData.map((d, i) => (
              <tr key={i} className="hover:bg-blue-50/50 transition">
                <td className="px-6 py-4 text-slate-900">{d.shift}</td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase ${
                    d.difficulty === 'Hard' ? 'bg-red-100 text-red-600' : 
                    d.difficulty === 'Moderate-Hard' ? 'bg-orange-100 text-orange-600' : 'bg-green-100 text-green-600'
                  }`}>
                    {d.difficulty}
                  </span>
                </td>
                <td className="px-6 py-4 text-xs text-slate-500">
                  {d.physics} / {d.maths} / {d.chemistry}
                </td>
                <td className="px-6 py-4 text-blue-600 font-black font-mono">
                  {d.target99} Marks
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>

{/* PLACE THIS AFTER THE SHIFT RANKING SECTION */}
<section className="my-12">
  <div className="max-w-5xl mx-auto bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 rounded-[2.5rem] p-8 md:p-12 shadow-2xl relative overflow-hidden border border-blue-500/30">
    
    {/* Decorative Background Element */}
    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400/10 rounded-full blur-[80px] -mr-20 -mt-20"></div>

    <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
      <div className="flex-1 text-center md:text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-[10px] font-black uppercase tracking-widest mb-4">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          Next Step: Calculate Your Percentile
        </div>
        
        <h2 className="text-2xl md:text-4xl font-black text-white mb-4 leading-tight">
          Hard Shift? <span className="text-blue-400">See Your Adjusted Percentile</span>
        </h2>
        
        <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-6">
          Knowing which shift was tough is only half the battle. Use our <strong>Shift-Wise Normalization Data</strong> to see exactly how many marks you need for a 99+ percentile in your specific session.
        </p>
      </div>

      <div className="w-full md:w-auto shrink-0">
        <a 
          href="/jee-mains-2026-shift-wise-marks-percentile-analysis" 
          className="group flex items-center justify-center gap-3 w-full md:w-64 py-5 bg-white text-slate-900 rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl hover:bg-blue-50 hover:scale-[1.02] transition-all"
        >
          Check Marks vs Percentile
          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </a>
      </div>
    </div>
  </div>
</section>

{/* Subject Wise Analysis */}
{/* Jan 28 Shift 1 Detailed Verdict */}
        <section className="my-16 space-y-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black text-gray-900">Jan 28 Shift 1: Subject-Wise Verdict</h2>
            <div className="flex justify-center gap-4 mt-4 font-bold text-sm">
              <span className="text-red-600 uppercase tracking-widest">Maths: Lengthy</span>
              <span className="text-gray-400">|</span>
              <span className="text-blue-600 uppercase tracking-widest">Physics: Concept-Rich</span>
              <span className="text-gray-400">|</span>
              <span className="text-green-600 uppercase tracking-widest">Chem: Balanced</span>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* MATHS */}
            <div className="bg-white rounded-3xl p-8 border-t-8 border-red-500 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10"><FaSquareRootAlt size={80}/></div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Mathematics</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                Followed the 2026 trend: **Time-consuming**. High weightage on Calculus (Integration) and 3D Geometry. Statistics question was a bit calculative.
              </p>
              <div className="bg-slate-50 p-4 rounded-xl">
                <p className="text-xs font-bold text-slate-500 uppercase mb-2">Key Focus</p>
                <div className="flex flex-wrap gap-2">
                  {['Definite Integrals', '3D-Lines', 'Probability'].map(t => (
                    <span key={t} className="text-[10px] bg-white border border-slate-200 px-2 py-1 rounded-md font-bold">{t}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* PHYSICS */}
            <div className="bg-white rounded-3xl p-8 border-t-8 border-blue-500 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10"><FaAtom size={80}/></div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Physics</h3>
              <ul className="text-xs space-y-2 text-gray-600">
                <li className="flex gap-2 items-start"><FaCheckCircle className="text-green-500 mt-1 shrink-0"/> Current Electricity (2-3 Qs).</li>
                <li className="flex gap-2 items-start"><FaExclamationTriangle className="text-orange-500 mt-1 shrink-0"/> Tricky question on Magnetic Effects.</li>
                <li className="flex gap-2 items-start"><FaInfoCircle className="text-blue-500 mt-1 shrink-0"/> Formula based but required unit conversions.</li>
              </ul>
            </div>

            {/* CHEMISTRY */}
            <div className="bg-white rounded-3xl p-8 border-t-8 border-green-500 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10"><FaFlask size={80}/></div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Chemistry</h3>
              <p className="text-sm text-gray-600">
                NCERT is King. Inorganic was easy; Organic saw questions on Biomolecules and Name reactions. Physical was restricted to integers.
              </p>
            </div>
          </div>
        </section>
<section className="my-16 space-y-8">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-black text-gray-900">Jan 24 Shift 1: Detailed Subject Verdict</h2>
        <div className="flex justify-center gap-4 mt-4 font-bold text-sm">
          <span className="text-red-600 uppercase tracking-widest">Maths (Toughest)</span>
          <span className="text-gray-400">|</span>
          <span className="text-blue-600 uppercase tracking-widest">Physics (Moderate)</span>
          <span className="text-gray-400">|</span>
          <span className="text-green-600 uppercase tracking-widest">Chemistry (Easy)</span>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* MATHS */}
        <div className="bg-white rounded-3xl p-8 border-t-8 border-red-500 shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10"><FaSquareRootAlt size={80}/></div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Mathematics</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-500 font-medium">Difficulty:</span>
              <span className="text-red-600 font-bold bg-red-50 px-3 py-1 rounded-lg italic">Moderate-Tough</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-500 font-medium">Time Required:</span>
              <span className="text-red-600 font-bold">Very High</span>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              <strong>Verdict:</strong> Not conceptually impossible, but extremely <strong>lengthy</strong>. Students struggled to complete even 15+ questions due to multi-step calculations.
            </p>
            <div className="bg-slate-50 p-4 rounded-xl">
              <p className="text-xs font-bold text-slate-500 uppercase mb-2">High Weightage</p>
              <div className="flex flex-wrap gap-2">
                {['Conics', 'Vectors/3D', 'Coordinate'].map(t => (
                  <span key={t} className="text-[10px] bg-white border border-slate-200 px-2 py-1 rounded-md font-bold">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* PHYSICS */}
        <div className="bg-white rounded-3xl p-8 border-t-8 border-blue-500 shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10"><FaAtom size={80}/></div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Physics</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-500 font-medium">Difficulty:</span>
              <span className="text-blue-600 font-bold bg-blue-50 px-3 py-1 rounded-lg italic">Moderate</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-500 font-medium">Time Required:</span>
              <span className="text-blue-600 font-bold">High</span>
            </div>
            <ul className="text-xs space-y-2 text-gray-600">
              <li className="flex gap-2 items-start"><FaCheckCircle className="text-green-500 mt-1 shrink-0"/> Ray Optics dominated (2-3 Qs).</li>
              <li className="flex gap-2 items-start"><FaExclamationTriangle className="text-orange-500 mt-1 shrink-0"/> No Capacitor / Centre of Mass / Sound Waves.</li>
              <li className="flex gap-2 items-start"><FaInfoCircle className="text-blue-500 mt-1 shrink-0"/> Multi-step application based.</li>
            </ul>
          </div>
        </div>

        {/* CHEMISTRY */}
        <div className="bg-white rounded-3xl p-8 border-t-8 border-green-500 shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10"><FaFlask size={80}/></div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Chemistry</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-500 font-medium">Difficulty:</span>
              <span className="text-green-600 font-bold bg-green-50 px-3 py-1 rounded-lg italic">Easy (Overall)</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-500 font-medium">Nature:</span>
              <span className="text-green-600 font-bold">Mixed Physical</span>
            </div>
            <p className="text-sm text-gray-600">
              <strong>Observation:</strong> Coordination Compounds had a high presence with statement-based questions. Physical chemistry was more prominent than usual for Session 1.
            </p>
          </div>
        </div>
      </div>
    </section>

      {/* 4. SUBJECT-WISE DEEP DIVE (HIGH VALUE CONTENT) */}
      <section className="mb-16 space-y-12">
        <h2 className="text-3xl font-bold text-gray-900 italic underline decoration-blue-500">Subject-Wise Difficulty Analysis</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-2xl border-t-4 border-blue-500 shadow-sm">
            <FaSquareRootAlt className="text-3xl text-blue-500 mb-4" />
            <h3 className="text-xl font-bold mb-2">Mathematics</h3>
            <p className="text-sm text-gray-600">Continuously the most challenging section. The <strong>Jan 24 Shift 1</strong> paper saw 12+ questions from Vector-3D and Calculus that required high computation time.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border-t-4 border-orange-500 shadow-sm">
            <FaAtom className="text-3xl text-orange-500 mb-4" />
            <h3 className="text-xl font-bold mb-2">Physics</h3>
            <p className="text-sm text-gray-600">Largely formula-based, but 2026 shifts are introducing more multi-concept MCQ questions from Electrodynamics and Modern Physics.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border-t-4 border-green-500 shadow-sm">
            <FaFlask className="text-3xl text-green-500 mb-4" />
            <h3 className="text-xl font-bold mb-2">Chemistry</h3>
            <p className="text-sm text-gray-600">Inorganic Chemistry (NCERT) dominated Jan 21 and 22. Organic saw a difficulty spike in Jan 24 Shift 1 with complex mechanism questions.</p>
          </div>
        </div>
      </section>

 {/* 7. CTA BUTTON */}
      <section className="text-center bg-blue-600 p-12 rounded-3xl text-white">
        <h2 className="text-3xl font-bold mb-4">Check Your Own Prediction</h2>
        <p className="mb-8 opacity-90">Our AI algorithm has been updated with Jan 24 Shift 1 data.</p>
        <button className="bg-white text-blue-600 cursor-pointer px-10 py-4 rounded-full font-black hover:scale-105 transition shadow-2xl">
          CALCULATE MY 2026 RANK
        </button>
      </section>

 {/* 2. PDF DOWNLOAD HUB (High Retention Section) */}
  <section className="my-20 px-4">
      <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
        <div>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 flex items-center gap-3">
            <FaFilePdf className="text-red-600 animate-pulse" /> 
            2026 Shift-Wise PDF Hub
          </h2>
          <p className="text-slate-500 mt-2 font-medium">Verified memory-based questions & expert solutions.</p>
        </div>
        <span className="bg-green-100 text-green-700 px-4 py-1.5 rounded-full text-sm font-bold flex items-center gap-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-ping" /> Updated 10m ago
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {shifts.map((item, idx) => (
          <div key={idx} className="flex flex-col bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden group">
            {/* Card Header */}
            <div className="p-6 pb-0">
              <div className="flex justify-between items-start mb-4">
                <div className="bg-slate-100 p-3 rounded-2xl group-hover:bg-blue-50 transition-colors">
                  <FaFilePdf size={24} className="text-slate-400 group-hover:text-blue-600" />
                </div>
                {item.status === "Live" ? (
                  <span className="flex items-center gap-1 text-[10px] font-black tracking-widest uppercase bg-red-600 text-white px-2 py-1 rounded-md">
                    <FaClock /> New
                  </span>
                ) : (
                  <FaCheckCircle className="text-green-500" />
                )}
              </div>
              <h3 className="text-xl font-bold text-slate-800">{item.date}</h3>
              <p className="text-xs font-bold text-blue-600 uppercase mt-1 tracking-wider">Session 1</p>
            </div>

            {/* Shift Details (The meat of the card) */}
            <div className="p-6 space-y-3 grow">
              <div className="flex justify-between items-center py-2 border-b border-slate-50">
                <span className="text-sm text-slate-500 font-medium">Shift 1</span>
                <span className="text-sm font-bold text-slate-700 bg-slate-50 px-2 py-0.5 rounded-lg">{item.s1}</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-sm text-slate-500 font-medium">Shift 2</span>
                <span className={`text-sm font-bold px-2 py-0.5 rounded-lg ${item.s2 === 'Available Soon' ? 'text-orange-500 italic' : 'text-slate-700 bg-slate-50'}`}>
                  {item.s2}
                </span>
              </div>
            </div>

            {/* Action Footer */}
            <div className="p-4 bg-slate-50 group-hover:bg-blue-600 transition-colors">
              <a 
                href={item.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl bg-white border border-slate-200 text-slate-800 font-bold flex items-center justify-center gap-2 group-hover:bg-blue-600 group-hover:text-white group-hover:border-transparent transition-all shadow-sm"
              >
                <FaDownload size={14} className="group-hover:animate-bounce" /> Get PDF Paper
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>

      {/* 3. TRENDS ANALYSIS: THE "WHY" BEHIND THE TOUGHNESS */}
      <section className="grid lg:grid-cols-3 gap-8 mb-16">
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white p-8 rounded-3xl border border-slate-200">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <FaBrain className="text-purple-600" /> Toughest Shift: Jan 24 Shift 1
            </h2>
            <p className="text-slate-600 mb-4">
              Experts and student polls agree: **January 24 Shift 1** was the most grueling session. While Physics touched **JEE Advanced levels** with complex multi-step mechanics, Chemistry was surprisingly calculation-heavy in the Physical section.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-700">
              <li><strong>Physics:</strong> Focus on Ray Optics and Rotational Dynamics (Calculative).</li>
              <li><strong>Maths:</strong> Lengthy Vector-3D and Coordinate Geometry questions.</li>
              <li><strong>Chemistry:</strong> Shift towards Statement-Based questions from Coordination Compounds.</li>
            </ul>
          </div>
          
          {/* TOPIC WEIGHTAGE TABLE */}
          <div className="bg-slate-900 text-white p-8 rounded-3xl">
            <h3 className="text-2xl font-bold mb-6">Subject-Wise High Weightage Chapters (2026 Trend)</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-700 text-blue-400">
                    <th className="py-3 text-left">Subject</th>
                    <th className="py-3 text-left">High-Weightage Topics</th>
                    <th className="py-3 text-left">Avg. Questions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  <tr>
                    <td className="py-4 font-bold flex items-center gap-2"><FaSquareRootAlt/> Maths</td>
                    <td>Vector-3D, Sequence & Series, Calculus</td>
                    <td className="text-center">12-14</td>
                  </tr>
                  <tr>
                    <td className="py-4 font-bold flex items-center gap-2"><FaAtom/> Physics</td>
                    <td>Modern Physics, Current Electricity, Optics</td>
                    <td className="text-center">10-12</td>
                  </tr>
                  <tr>
                    <td className="py-4 font-bold flex items-center gap-2"><FaFlask/> Chemistry</td>
                    <td>Coordination Comp, GOC, Chemical Bonding</td>
                    <td className="text-center">11-13</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* 4. SIDEBAR: MARKS VS PERCENTILE SNAPSHOT */}
        <div className="bg-blue-600 text-white p-8 rounded-3xl shadow-lg h-fit sticky top-4">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <FaChartLine /> Projected 99%ile
          </h3>
          <p className="text-blue-100 text-sm mb-6 italic">Based on difficulty index of Jan 21-24 shifts.</p>
          <div className="space-y-4">
            <div className="flex justify-between border-b border-blue-500 pb-2">
              <span>Toughest Shift</span>
              <span className="font-mono font-bold">178 - 182</span>
            </div>
            <div className="flex justify-between border-b border-blue-500 pb-2">
              <span>Moderate Shift</span>
              <span className="font-mono font-bold">185 - 190</span>
            </div>
            <div className="flex justify-between border-b border-blue-500 pb-2">
              <span>Easiest Shift</span>
              <span className="font-mono font-bold">205 - 212</span>
            </div>
          </div>
          <Link href={"/"}><button className="mt-8 w-full bg-white cursor-pointer hover:scale-105 transition-all duration-200 text-blue-600 font-bold py-3 rounded-xl hover:bg-blue-50">
            Check My Percentile
          </button>
          </Link>
        </div>
      </section>

{/* TREND Analysis */}
<section className="my-16 bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
      <h2 className="text-3xl font-black text-slate-900 mb-6 flex items-center gap-3">
        <FaLayerGroup className="text-blue-600" /> 
        Jan 2026 Trend Analysis: High-Yield Chapters
      </h2>
      <p className="text-slate-600 mb-8">
        Based on the first 4 days of testing, these chapters have appeared in <strong>every single shift</strong>. If your exam is in the coming days, prioritize these:
      </p>
      
      <div className="grid md:grid-cols-2 gap-4">
        <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
          <div className="text-2xl">📐</div>
          <div>
            <h4 className="font-bold text-slate-800">Vector & 3D Geometry</h4>
            <p className="text-xs text-slate-500">Avg. 3-4 Qs per shift. Focus on Shortest Distance & Image of a Point.</p>
          </div>
        </div>
        <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
          <div className="text-2xl">🧪</div>
          <div>
            <h4 className="font-bold text-slate-800">Coordination Compounds</h4>
            <p className="text-xs text-slate-500">High weightage in Jan 24. Focus on CFT and Magnetic Moments.</p>
          </div>
        </div>
        <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
          <div className="text-2xl">⚡</div>
          <div>
            <h4 className="font-bold text-slate-800">Modern Physics</h4>
            <p className="text-xs text-slate-500">Guaranteed 3 Qs. Focus on Photoelectric Effect & De-Broglie Wavelength.</p>
          </div>
        </div>
        <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
          <div className="text-2xl">📊</div>
          <div>
            <h4 className="font-bold text-slate-800">Sequences & Series</h4>
            <p className="text-xs text-slate-500">Arithmetico-Geometric progressions are appearing frequently.</p>
          </div>
        </div>
      </div>
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
      {/* 5. NORMALIZATION EXPLAINED */}
      <section className="mb-16 bg-gray-900 text-white p-10 rounded-3xl">
        <h2 className="text-3xl font-bold mb-6">The Normalization Factor: Why you shouldn&apos;t panic</h2>
        <p className="text-gray-400 mb-6 text-lg">
          NTA uses the Percentile Score to ensure that students in tougher shifts are not at a disadvantage. If you scored 160 in a &quot;Hard&quot; shift, your percentile might be higher than someone who scored 190 in an &quot;Easy&quot; shift.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 mt-8">
          <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
            <h4 className="font-bold text-blue-400 mb-2">Hard Shift Advantage</h4>
            <p className="text-sm italic">Rank is calculated based on relative performance. Fewer students score high, so your rank jumps even at lower raw marks.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
            <h4 className="font-bold text-green-400 mb-2">Easy Shift Caution</h4>
            <p className="text-sm italic">Negative marking is your biggest enemy here. A single mistake can push your rank back by thousands because many students will score high.</p>
          </div>
        </div>
      </section>

{/* Normalization deep dive */}
<section className="my-16 p-8 bg-slate-900 rounded-3xl text-white shadow-2xl">
      <h2 className="text-3xl font-black mb-6 italic text-blue-400">
        The Math Behind the Ranking: NTA Normalization 2026
      </h2>
      <div className="grid md:grid-cols-2 gap-10">
        <div className="space-y-4">
          <p className="text-slate-300 leading-relaxed">
            Many students ask: <strong>Why did my friend get a better percentile with fewer marks?</strong>
          </p>
          <p className="text-slate-400 text-sm">
            The answer lies in the <em>NTA Score</em> calculation. It is not a percentage; it is a relative position. 
            For the <strong>Jan 24 Shift 1</strong>, if the highest score is 265, that student gets 100 percentile. 
            In the <strong>Jan 21 Shift 2</strong> (easier), the highest score might be 290. Both are 100 percentile.
          </p>
        </div>
        <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
          <h4 className="text-blue-400 font-bold mb-3 uppercase tracking-widest text-xs">Normalization Formula</h4>
          <code className="text-xs sm:text-sm text-green-400 block wrap-break-word">
            Percentile = (100 * Number of candidates with raw score ≤ Candidate) / Total candidates in the shift
          </code>
          <p className="mt-4 text-xs text-slate-500 italic">
            This ensures that Hard Shift students are not penalized for lower raw scores.
          </p>
        </div>
      </div>
    </section>

<div className="space-y-16 my-20">
      
      {/* 2026 vs 2025 COMPARISON TABLE */}
      <section className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
        <div className="bg-slate-900 p-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-3">
            <FaBalanceScale className="text-blue-400" /> 
            Was JEE 2026 Tougher than 2025?
          </h2>
          <p className="text-slate-400 text-sm mt-2">Comparative analysis of January Session trends.</p>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-100">
                <th className="px-6 py-4 text-slate-600 font-bold uppercase text-xs">Feature</th>
                <th className="px-6 py-4 text-slate-600 font-bold uppercase text-xs">JEE Main 2025 (Jan)</th>
                <th className="px-6 py-4 text-blue-600 font-bold uppercase text-xs">JEE Main 2026 (Jan)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {[
                { f: "Maths Difficulty", v25: "Moderate & Lengthy", v26: "Hard & Extremely Lengthy", bold: true },
                { f: "Physics Style", v25: "Formula Based", v26: "Conceptual & Multi-step" },
                { f: "Chemistry Trend", v25: "NCERT Direct", v26: "Mixed (Physical Heavy)" },
                { f: "99%ile Cutoff (Avg)", v25: "~192 Marks", v26: "~185 Marks (Expected)", highlight: true },
              ].map((row, i) => (
                <tr key={i} className="hover:bg-blue-50/30 transition">
                  <td className="px-6 py-5 font-bold text-slate-700">{row.f}</td>
                  <td className="px-6 py-5 text-slate-500">{row.v25}</td>
                  <td className={`px-6 py-5 font-semibold ${row.highlight ? 'text-blue-600' : 'text-slate-900'}`}>
                    {row.v26}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* VNIT SENIOR ADVICE SECTION */}
      <section className="relative bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 border border-blue-100">
        <div className="absolute -top-6 right-10 bg-blue-600 text-white p-4 rounded-2xl shadow-lg">
          <FaGraduationCap size={32} />
        </div>
        
        <h3 className="text-2xl font-black text-slate-900 mb-4 flex items-center gap-2">
          <FaAward className="text-blue-600" /> VNIT Senior Advice
        </h3>
        
        <div className="space-y-4 text-slate-700 leading-relaxed">
          <p>
            As someone who has been through the counseling process at <strong>VNIT Nagpur</strong>, I’ve analyzed the Jan 24 Shift 1 data very closely. The math lengthiness in 2026 is a <strong>blessing in disguise</strong> for students with high accuracy.
          </p>
          <p className="bg-white/60 p-4 rounded-xl border border-blue-200/50 italic font-medium">
            If you attempted 45+ questions with 90% accuracy in the tough Jan 24 shift, you are comfortably crossing the 98.5 percentile mark. Don&apos;t let the raw score discourage you; normalization will bridge the gap.
          </p>
          <p className="text-sm font-bold text-blue-800">
            Pro Tip: Start looking at JoSAA opening/closing ranks for NITs now to plan your April attempt targets.
          </p>
        </div>
      </section>

      {/* STRATEGIC COLLEGE PREDICTOR CTA */}
      <section className="bg-blue-600 rounded-3xl p-1 text-center shadow-2xl shadow-blue-200">
        <div className="bg-blue-600 border-2 border-white/20 rounded-[1.4rem] p-10">
          <h2 className="text-3xl font-black text-white mb-4">
            Which NIT/IIIT can you get with these marks?
          </h2>
          <p className="text-blue-100 mb-8 max-w-xl mx-auto">
            Based on the 2026 Shift Difficulty and 2025 JoSAA Closing Ranks, see your realistic college options in seconds.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href={"/josaa-college-predictor"}><button className="bg-white cursor-pointer hover:scale-105 transition-all duration-200 text-blue-600 px-8 py-4 rounded-2xl font-black flex items-center justify-center gap-2 hover:bg-blue-50  shadow-xl">
              Open JoSAA College Predictor <FaArrowRight />
            </button>
            </Link>
            <Link href={"/josaa-opening-closing-rank-2026-nit-iiit-cutoff/vnit-nagpur"}><button className="bg-blue-700 text-white px-8 py-4 hover:scale-105 transition-all duration-200 rounded-2xl font-black border border-blue-400 hover:bg-blue-800 cursor-pointer">
              View NIT Nagpur Cutoffs
            </button>
            </Link>
          </div>
        </div>
      </section>

    </div>

      {/* 6. DETAILED FAQ SECTION */}
     <section className="py-16 px-4 max-w-4xl mx-auto">
      <h2 className="text-4xl font-black text-slate-900 mb-12 flex items-center gap-4">
        <FaQuestionCircle className="text-blue-600" />
        Frequently Asked Questions
      </h2>
      
      <div className="space-y-6">
        {faqs.map((faq, i) => (
          <div key={i} className="group border-b border-slate-200 pb-8 hover:border-blue-500 transition-colors">
            <h4 className="text-xl font-bold text-slate-800 mb-4 flex gap-4 items-start">
              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-lg text-sm font-black mt-1">
                Q{i+1}
              </span>
              <span className="group-hover:text-blue-700 transition-colors">{faq.q}</span>
            </h4>
            <div className="flex gap-4 pl-14">
              <FaCheckCircle className="text-green-500 mt-1 shrink-0" />
              <p className="text-slate-600 leading-relaxed text-lg">
                {faq.a}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>

     
    </main>
    </>
  );
}