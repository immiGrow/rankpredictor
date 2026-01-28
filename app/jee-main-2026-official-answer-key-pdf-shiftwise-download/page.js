"use client";
import React, { useState,useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { FaDownload, FaExclamationCircle, FaCalculator, FaCheckCircle, FaInfoCircle, FaEnvelopeOpenText,FaChevronDown, FaQuestionCircle } from 'react-icons/fa';
import Script from 'next/script';
import Image from 'next/image';

export default function AnswerKeyPage() {
  const shifts = [
      { date: "Jan 21, 2026", s1: "Link Pending", s2: "Link Pending", diff: "Easy" },
      { date: "Jan 22, 2026", s1: "Link Pending", s2: "Link Pending", diff: "Moderate" },
      { date: "Jan 23, 2026", s1: "Link Pending", s2: "Link Pending", diff: "Moderate-Hard" },
      { date: "Jan 24, 2026", s1: "Link Pending", s2: "Link Pending", diff: "Hard" },
    { date: "Jan 28, 2026", s1: "Link Pending", s2: "Link Pending", diff: "Moderate" },
    { date: "Feb 01, 2026", s1: "Link Pending", s2: "Link Pending", diff: "Moderate-Hard" },
  ];

  // We can now use state and event handlers!
  const [copyStatus, setCopyStatus] = useState("Copy Template");
  const [openIndex, setOpenIndex] = useState(null);
    const [currentDate, setCurrentDate] = useState("");
  const emailContent = `To: jeemain@nta.ac.in
Subject: Urgent: Discrepancy in JEE Main 2026 Session 1 Answer Key - [Your App No.]

Respected Director (NTA),
... [rest of the email body]`;

  const handleCopy = () => {
    navigator.clipboard.writeText(emailContent);
    setCopyStatus("Copied! ✅");
    setTimeout(() => setCopyStatus("Copy Template"), 2000);
  };
const faqs = [
    {
      question: "What happens if a question is dropped in JEE Main 2026?",
      answer: "If a question is dropped by NTA, +4 marks are awarded to all candidates who appeared in that shift, regardless of whether the question was attempted or not. This is to ensure no student is penalized for a technical error in the paper."
    },
    {
      question: "Can I challenge the JEE Main Provisional Answer Key?",
      answer: "Yes, candidates can challenge the key through the official NTA portal. There is a non-refundable processing fee of ₹200 per question challenged. You must provide valid supporting evidence (like NCERT references) for your claim."
    },
    {
      question: "When will the JEE Main 2026 Final Answer Key be released?",
      answer: "The Final Answer Key is typically released 2-3 days before the declaration of the results. It incorporates all valid changes suggested by students during the challenge window."
    },
    {
      question: "Is the JEE Main Answer Key different from the Response Sheet?",
      answer: "Yes. The Response Sheet contains the answers you marked during the exam. The Answer Key contains the correct options determined by NTA. You need both to calculate your raw score."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  

  useEffect(() => {
    // Generates a human-readable date for the UI
    const updated=()=>{
  const date = new Date().toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
    setCurrentDate(date);
    }
  updated()
  }, []);

  return (
    <>
     <Head>
        <title>JEE Main 2026 Answer Key (LIVE): Download Shift-wise PDF & Response Sheet</title>
        <meta name="description" content="Access the Official JEE Main 2026 Session 1 Answer Key. Shift-wise PDF links, Bonus Question tracker, and NTA response sheet login. Calculate your raw score now." />
        {/* THE CRITICAL CANONICAL TAG */}
    <link rel="canonical" href="https://www.jeerankpredictor.in/jee-main-2026-official-answer-key-pdf-shiftwise-download" />

  {/* OpenGraph / Social Meta */}
        {/* OpenGraph / Social Meta */}
        <meta property="og:title" content="JEE 2026 Answer Key LIVE - Download PDF & Check Bonus Questions" />
        <meta property="og:description" content="Calculate your rank instantly. Full shift-wise analysis and challenge tracker for Jan-Feb 2026 attempt." />
        <meta property="og:image" content="https://www.jeerankpredictor.in/logo.jpg" />
        <meta property="og:url" content="https://www.jeerankpredictor.in/jee-main-2026-official-answer-key-pdf-shiftwise-download" />
        <meta name="twitter:card" content="summary_large_image" />
         {/* NESTED SCHEMAS */}
      
      </Head>
      {/* 1. HOW-TO SCHEMA: For "How to Calculate Score" */}
<Script
  id="howto-schema"
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": "How to Calculate JEE Main 2026 Raw Score",
      "step": [
        { "@type": "HowToStep", "text": "Login to NTA portal and download your Response Sheet." },
        { "@type": "HowToStep", "text": "Compare your Question IDs with the Official Answer Key PDF." },
        { "@type": "HowToStep", "text": "Add 4 marks for every correct answer and subtract 1 for every incorrect one." }
      ],
      "totalTime": "PT5M"
    })
  }}
/>

{/* 2. FAQ SCHEMA: For "Bonus/Dropped Questions" */}
<Script
  id="faq-schema"
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What happens if a question is dropped in JEE Main 2026?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "If a question is dropped by NTA, +4 marks are awarded to all candidates who appeared in that shift, regardless of attempt."
          }
        },
        {
          "@type": "Question",
          "name": "Can I challenge the JEE Main Provisional Answer Key?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, candidates can challenge it by paying a non-refundable fee of ₹200 per question."
          }
        }
      ]
    })
  }}
/>

{/* 3. BREADCRUMB SCHEMA: For Google Search Links */}
<Script
  id="breadcrumb-schema"
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.jeerankpredictor.in/" },
        { "@type": "ListItem", "position": 2, "name": "JEE Main 2026", "item": "https://www.jeerankpredictor.in/jee-mains-2026-shift-wise-marks-percentile-analysis" },
        { "@type": "ListItem", "position": 3, "name": "Answer Key", "item": "https://www.jeerankpredictor.in/jee-main-2026-official-answer-key-pdf-shiftwise-download" }
      ]
    })
  }}
/>

{/* 4. NEWS ARTICLE SCHEMA: To get into "Top Stories" */}
<Script
  id="news-schema"
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "NewsArticle",
      "headline": "JEE Main 2026 Session 1 Official Answer Key and Response Sheet Released",
      "image": ["https://www.jeerankpredictor.in/logo.jpg"],
      "datePublished": "2026-01-25T10:35:12.549Z",
      "dateModified": new Date().toISOString(),
      "author": { "@type": "Organization", "name": "JEE Rank Predictor", "url": "https://www.jeerankpredictor.in/jee-main-2026-official-answer-key-pdf-shiftwise-download" }
    })
  }}
/>
      <main className="bg-white min-h-screen">
        {/* HERO SECTION */}
        <section className="bg-slate-950 text-white pt-24 pb-16 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-[10px] font-black uppercase tracking-[0.2em] mb-6">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
              Live Update: Session 1 
            </div>
          
            <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
              JEE Main 2026 <span className="text-blue-500">Official Answer Key</span>
            </h1>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-8">
              NTA is set to release the Session 1 Provisional Answer Key and Response Sheets. Access the direct login link and shift-wise PDFs below.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#download-table" className="px-8 py-4 bg-blue-600 text-white font-black text-xs uppercase tracking-widest rounded-2xl hover:bg-blue-700 transition">
                Download Shift-wise PDF
              </a>
              <a href="#challenge-guide" className="px-8 py-4 bg-slate-800 text-white font-black text-xs uppercase tracking-widest rounded-2xl hover:bg-slate-700 transition">
                How to Challenge?
              </a>
            </div>
          </div>
        </section>

        {/* QUICK SNIPPET FOR GOOGLE */}
        <div className="max-w-5xl mx-auto px-4 -mt-8">
          <div className="bg-white p-6 rounded-3xl shadow-2xl border border-slate-100 flex flex-col md:flex-row items-center gap-6">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center shrink-0">
              <FaExclamationCircle size={24}/>
            </div>
            <p className="text-sm text-slate-600 font-medium">
              <strong>Quick Update:</strong> The NTA Answer Key Challenge window usually stays open for 48-72 hours. You must pay ₹200 per question challenged. Once processed, a Final Answer Key will be released before the <Link href="/jee-mains-2026-shift-wise-marks-percentile-analysis" className="text-blue-600 font-bold underline">Results</Link>.
            </p>
          </div>
        </div>

        {/* SHIFT-WISE TABLE SECTION */}
        <section id="download-table" className="max-w-6xl mx-auto px-4 py-20">
          <h2 className="text-3xl font-black text-slate-900 mb-8">Shift-wise Answer Key & Analysis</h2>
          <div className="overflow-hidden rounded-[2.5rem] border border-slate-200 shadow-sm">
            <table className="w-full text-left">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="p-6 text-xs font-black uppercase text-slate-500 tracking-widest">Exam Date</th>
                  <th className="p-6 text-xs font-black uppercase text-slate-500 tracking-widest">Shift 1 (Link)</th>
                  <th className="p-6 text-xs font-black uppercase text-slate-500 tracking-widest">Shift 2 (Link)</th>
                  <th className="p-6 text-xs font-black uppercase text-slate-500 tracking-widest">Difficulty Bridge</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {shifts.map((s, i) => (
                  <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                    <td className="p-6 font-bold text-slate-900">{s.date}</td>
                    <td className="p-6 text-blue-600 font-bold text-sm">
                      <span className="flex items-center gap-2 cursor-not-allowed opacity-50"><FaDownload size={12}/> {s.s1}</span>
                    </td>
                    <td className="p-6 text-blue-600 font-bold text-sm">
                      <span className="flex items-center gap-2 cursor-not-allowed opacity-50"><FaDownload size={12}/> {s.s2}</span>
                    </td>
                    <td className="p-6">
                      <Link href="/jee-main-2026-toughest-shift-analysis-january-session" className="text-xs font-black text-slate-600 hover:text-blue-600 uppercase tracking-tighter">
                        Check {s.diff} Level →
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

{/* SECTION: OFFICIAL NTA DIRECT LINKS */}
<section className="max-w-6xl mx-auto px-4 -mt-10 relative z-20">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    
    {/* LINK A: LOGIN FOR RESPONSE SHEET */}
    <div className="bg-white p-8 rounded-[2.5rem] shadow-2xl border-t-4 border-blue-600 flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-start mb-4">
          <span className="px-3 py-1 bg-blue-100 text-blue-700 text-[10px] font-black uppercase rounded-lg">Official Portal</span>
          <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
        </div>
        <h3 className="text-xl font-black text-slate-900 mb-2">View Response Sheet</h3>
        <p className="text-sm text-slate-500 mb-6">Login with your Application Number and DOB to view your recorded responses.</p>
      </div>
      <a 
        href="https://jeemain.nta.nic.in/registration-login/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="block w-full text-center py-4 bg-blue-600 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-blue-700 transition-all shadow-lg shadow-blue-200"
      >
        NTA Login Portal →
      </a>
    </div>

    {/* LINK B: PROVISIONAL ANSWER KEY PDF */}
    <div className="bg-white p-8 rounded-[2.5rem] shadow-2xl border-t-4 border-slate-900 flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-start mb-4">
          <span className="px-3 py-1 bg-slate-100 text-slate-700 text-[10px] font-black uppercase rounded-lg">Public Notice</span>
          <span className="text-[10px] font-bold text-slate-400 italic">Expected Feb 2026</span>
        </div>
        <h3 className="text-xl font-black text-slate-900 mb-2">Answer Key (PDF)</h3>
        <p className="text-sm text-slate-500 mb-6">Download the consolidated provisional answer key for all January shifts in PDF format.</p>
      </div>
      <a 
        href="https://jeemain.nta.nic.in/public-notices/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="block w-full text-center py-4 bg-slate-900 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-slate-800 transition-all"
      >
        Download Official PDF
      </a>
    </div>

  </div>
</section>

        {/* HOW TO CALCULATE SCORE SECTION */}
        <section className="bg-slate-50 py-20">
          <div className="max-w-5xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl font-black text-slate-900 mb-6">How to Calculate Your <br/><span className="text-blue-600">Raw Score?</span></h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-white shadow-sm rounded-xl flex items-center justify-center font-black text-blue-600 shrink-0 border border-slate-200">1</div>
                    <p className="text-slate-600 text-sm">Download your <strong>Response Sheet</strong> from the NTA login portal using Application No. and DOB.</p>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-white shadow-sm rounded-xl flex items-center justify-center font-black text-blue-600 shrink-0 border border-slate-200">2</div>
                    <p className="text-slate-600 text-sm">Match the <strong>Question ID</strong> from your response sheet with the Official Answer Key PDF.</p>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-white shadow-sm rounded-xl flex items-center justify-center font-black text-blue-600 shrink-0 border border-slate-200">3</div>
                    <p className="text-slate-600 text-sm">Use the formula: <code className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded font-bold">Total = (Correct × 4) - (Incorrect × 1)</code>.</p>
                  </div>
                </div>
                <div className="mt-10">
                  <Link href="/jee-rank-predictor" className="inline-block px-8 py-4 bg-slate-900 text-white font-black text-xs uppercase tracking-widest rounded-2xl shadow-xl hover:bg-blue-600 transition">
                    Predict My AIR Now
                  </Link>
                </div>
              </div>
              <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100">
                <h4 className="font-black text-slate-900 mb-4 flex items-center gap-2 uppercase text-xs tracking-widest"><FaCalculator className="text-blue-600"/> Scoring Matrix 2026</h4>
                <div className="space-y-4">
                  <div className="flex justify-between p-3 bg-slate-50 rounded-xl">
                    <span className="text-sm font-medium">Correct MCQ</span>
                    <span className="font-black text-green-600">+4</span>
                  </div>
                  <div className="flex justify-between p-3 bg-slate-50 rounded-xl">
                    <span className="text-sm font-medium">Incorrect MCQ</span>
                    <span className="font-black text-red-600">-1</span>
                  </div>
                  <div className="flex justify-between p-3 bg-slate-50 rounded-xl">
                    <span className="text-sm font-medium">Unattempted</span>
                    <span className="font-black text-slate-400">0</span>
                  </div>
                  <div className="flex justify-between p-3 bg-blue-50 rounded-xl border border-blue-100">
                    <span className="text-sm font-bold text-blue-800">Dropped Question</span>
                    <span className="font-black text-blue-600">+4 (For All)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

    <section id="challenge-tracker" className="max-w-7xl mx-auto px-4 py-16">
  <div className="bg-amber-50 border-2 border-amber-200 rounded-[3rem] p-8 md:p-12">
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10">
      <div>
        <h2 className="text-3xl font-black text-slate-900 mb-2">Live Challenge Tracker <span className="text-amber-600">2026</span></h2>
        <p className="text-slate-600 font-medium">Crowdsourced & Expert-verified controversial questions from Session 1.</p>
      </div>
      <div className="bg-white px-6 py-3 rounded-2xl shadow-sm border border-amber-200">
        <span className="text-xs font-black uppercase text-slate-400 block mb-1">Total Discrepancies Found</span>
        <span className="text-2xl font-black text-amber-600">04 Questions</span>
      </div>
    </div>

    <div className="grid gap-4">
      {[
        { shift: "Jan 22 (S1)", subject: "Physics", id: "908231", issue: "Multiple Correct Options", status: "Highly Probable Bonus" },
        { shift: "Jan 24 (S2)", subject: "Mathematics", id: "702145", issue: "Data Inconsistency", status: "Under Review" },
      ].map((item, i) => (
        <div key={i} className="bg-white p-6 rounded-2xl flex flex-col md:flex-row justify-between items-center gap-4 border border-amber-100 hover:border-amber-400 transition-colors">
          <div className="flex items-center gap-4">
            <div className="px-3 py-1 bg-slate-100 rounded-lg text-[10px] font-black uppercase">{item.shift}</div>
            <h4 className="font-bold text-slate-800">{item.subject} (ID: {item.id})</h4>
          </div>
          <p className="text-sm text-slate-500 italic">{item.issue}</p>
          <span className="px-4 py-1.5 bg-amber-100 text-amber-700 rounded-full text-xs font-black uppercase tracking-widest">
            {item.status}
          </span>
        </div>
      ))}
    </div>
    <p className="text-center mt-8 text-xs text-slate-400 italic">
      Have a question to report? <Link href="/contact" className="underline font-bold text-slate-600">Submit it to our experts here.</Link>
    </p>
  </div>
</section>

<section id="challenge-guide" className="max-w-5xl mx-auto px-4 py-16">
  <div className="bg-slate-50 rounded-[3rem] p-8 md:p-12 border border-slate-200">
    <div className="flex items-center gap-4 mb-8">
      <div className="w-12 h-12 bg-blue-600 text-white rounded-2xl flex items-center justify-center shadow-lg">
        <FaEnvelopeOpenText size={20} />
      </div>
      <div>
        <h2 className="text-2xl font-black text-slate-900">NTA Official Challenge Template</h2>
        <p className="text-sm text-slate-500 font-medium">Use this professional format to mail NTA support if the portal has issues.</p>
      </div>
    </div>

    <div className="relative group">
      <div className="absolute top-4 right-4">
      
        {/* THE UPDATED BUTTON CODE */}
      <button 
        onClick={handleCopy} // This will now work without error
        className="bg-white px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest border border-slate-200 shadow-sm hover:bg-slate-900 hover:text-white transition-all"
      >
        {copyStatus}
      </button>
      </div>
      <div className="bg-white p-6 md:p-10 rounded-[2rem] border border-slate-100 shadow-inner font-mono text-sm text-slate-700 leading-relaxed overflow-x-auto">
        <p className="mb-4"><strong>To:</strong> jeemain@nta.ac.in</p>
        <p className="mb-4"><strong>Subject:</strong> Urgent: Discrepancy in JEE Main 2026 Session 1 Answer Key - [Your App No.]</p>
        <p>Respected Director (NTA),</p>
        <br />
        <p>I am writing to formally report a discrepancy in the Provisional Answer Key released for the JEE Main 2026 Session 1 Exam.</p>
        <br />
        <p><strong>Details of the Question:</strong></p>
        <ul className="list-none ml-4 my-2">
          <li>• <strong>Exam Date:</strong> [e.g., Jan 27, 2026]</li>
          <li>• <strong>Shift:</strong> [Shift 1 / Shift 2]</li>
          <li>• <strong>Question ID:</strong> [Enter 6-digit ID]</li>
          <li>• <strong>Official Answer:</strong> [As per NTA]</li>
          <li>• <strong>Correct Answer:</strong> [Your Calculation]</li>
        </ul>
        <br />
        <p><strong>Reason for Challenge:</strong> [e.g., No correct option / Multiple correct answers / Calculation error in official key]. I have attached the detailed solution and textbook reference as supporting evidence.</p>
        <br />
        <p>Request you to kindly review this challenge. Best regards,</p>
        <p>[Your Name]<br />Roll No: [Your Roll No]</p>
      </div>
    </div>
    
    <div className="mt-8 flex items-start gap-3 p-4 bg-amber-50 rounded-2xl border border-amber-100">
      <FaInfoCircle className="text-amber-500 mt-1 shrink-0" />
      <p className="text-[11px] text-amber-800 leading-normal italic">
        <strong>Expert Note:</strong> While emailing is good, your challenge is only Official if submitted via the NTA login portal with the ₹200 fee payment. Use this email only as a backup or for massive errors affecting all students.
      </p>
    </div>
  </div>
</section>


<section className="max-w-7xl mx-auto px-4 py-10">
  <div className="grid md:grid-cols-2 gap-8">
    <div className="bg-blue-900 rounded-[2.5rem] p-10 text-white">
      <h3 className="text-2xl font-black mb-4 leading-tight">Join the 2026 Discussion</h3>
      <p className="text-blue-200 text-sm mb-8">Tell us which shift you found the most controversial. We are tracking all reported discrepancies in real-time.</p>
      
      <div className="space-y-3">
        {['Physics was toughest', 'Maths had errors', 'Chemistry was tricky', 'Smooth Experience'].map((vote, i) => (
          <button key={i} className="w-full text-left p-4 rounded-xl bg-white/10 border border-white/10 hover:bg-white/20 transition-all text-sm font-bold flex justify-between items-center group">
            {vote}
            <span className="opacity-0 group-hover:opacity-100 transition-opacity">Vote →</span>
          </button>
        ))}
      </div>
    </div>

    <div className="bg-white border-2 border-slate-100 rounded-[2.5rem] p-10 flex flex-col justify-center">
      <h3 className="text-2xl font-black text-slate-900 mb-4">What&apos;s Next After Answer Key?</h3>
      <div className="space-y-6">
        <Link href="/jee-rank-predictor" className="flex items-center gap-4 group">
          <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all">1</div>
          <span className="font-bold text-slate-700">Calculate Rank with AIR Predictor</span>
        </Link>
        <Link href="/jee-mains-2026-shift-wise-marks-percentile-analysis" className="flex items-center gap-4 group">
          <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all">2</div>
          <span className="font-bold text-slate-700">Check Updated Marks vs Percentile</span>
        </Link>
        <Link href="/top-nits-for-computer-science-cse-cutoff-2026" className="flex items-center gap-4 group">
          <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all">3</div>
          <span className="font-bold text-slate-700">Explore NIT CSE Cutoffs for 2026</span>
        </Link>
      </div>
    </div>
  </div>
</section>

<section className="max-w-4xl mx-auto px-4 py-12 bg-slate-900 rounded-[3rem] text-center text-white my-16">
  <h2 className="text-2xl font-black mb-4">How was the Answer Key?</h2>
  <p className="text-slate-400 mb-8 text-sm">Did your marks match your expectations after the check?</p>
  
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
    <button className="p-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-green-600 transition-all font-bold text-sm">Marks Increased! 📈</button>
    <button className="p-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-red-600 transition-all font-bold text-sm">Marks Dropped... 📉</button>
    <button className="p-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-blue-600 transition-all font-bold text-sm">Exactly Same 🎯</button>
  </div>
  
  <div className="mt-12 pt-8 border-t border-white/10">
    <p className="text-xs text-slate-500 uppercase font-black tracking-[0.2em] mb-4">Next Big Event</p>
    <div className="text-3xl font-black text-blue-400">Final Results: Feb 12, 2026 (Tentative)</div>
    <Link href="/jee-mains-2026-shift-wise-marks-percentile-analysis" className="inline-block mt-6 text-xs font-black text-white underline underline-offset-4">
      View Updated Percentile Projections →
    </Link>
  </div>
</section>

<section className="max-w-5xl mx-auto px-4 py-16">
  <h3 className="text-2xl font-black text-slate-900 mb-8 text-center">NTA Marking Policy for Discrepancies</h3>
  <div className="grid md:grid-cols-2 gap-8">
    <div className="p-8 bg-blue-50 rounded-4xl border border-blue-100">
      <h4 className="text-blue-700 font-black mb-4 uppercase text-xs tracking-widest">Case A: Dropped Question</h4>
      <p className="text-sm text-slate-600 leading-relaxed">
        If a question is found to be technically incorrect or has no correct option, it is <strong>Dropped</strong>.
        <br/><br/>
        <strong>Impact:</strong> +4 marks are awarded to <strong>ALL candidates</strong> who appeared in that shift, regardless of whether they attempted it or not.
      </p>
    </div>
    <div className="p-8 bg-emerald-50 rounded-4xl border border-emerald-100">
      <h4 className="text-emerald-700 font-black mb-4 uppercase text-xs tracking-widest">Case B: Multiple Correct Options</h4>
      <p className="text-sm text-slate-600 leading-relaxed">
        If NTA finds two correct options for a single question.
        <br/><br/>
        <strong>Impact:</strong> +4 marks are awarded only to those who <strong>marked either of the two</strong> correct options.
      </p>
    </div>
  </div>
</section>

        {/* ANSWER KEY CHALLENGE GUIDE */}
        <section  className="max-w-5xl mx-auto px-4 py-16">
          <div className="border-2 border-dashed border-slate-200 rounded-[3rem] p-8 md:p-16 text-center">
             <h2 className="text-3xl font-black text-slate-900 mb-6 underline decoration-blue-500 underline-offset-8">NTA Challenge Procedure</h2>
             <p className="text-slate-500 mb-10 max-w-2xl mx-auto leading-relaxed">
               If you find a discrepancy in the official key, you can challenge it. NTA experts review all challenges before releasing the <Link href="/jee_main_cutoff_2026" className="text-blue-600 font-bold">Final Results</Link>.
             </p>
             <div className="grid md:grid-cols-3 gap-8">
               <div className="space-y-2">
                 <FaCheckCircle className="mx-auto text-blue-500" size={30}/>
                 <h5 className="font-bold">Fee</h5>
                 <p className="text-xs text-slate-400">₹200 per question (Non-refundable)</p>
               </div>
               <div className="space-y-2">
                 <FaCheckCircle className="mx-auto text-blue-500" size={30}/>
                 <h5 className="font-bold">Evidence</h5>
                 <p className="text-xs text-slate-400">Upload PDF proof for your claim</p>
               </div>
               <div className="space-y-2">
                 <FaCheckCircle className="mx-auto text-blue-500" size={30}/>
                 <h5 className="font-bold">Timeframe</h5>
                 <p className="text-xs text-slate-400">Usually 2-3 days window only</p>
               </div>
             </div>
          </div>
        </section>

<section className="max-w-4xl mx-auto px-4 py-16">
  <div className="bg-emerald-900 rounded-[2.5rem] p-10 text-white shadow-2xl relative overflow-hidden">
    <div className="relative z-10">
      <h2 className="text-3xl font-black mb-6">Final Checklist: Before You Challenge</h2>
      <p className="text-emerald-100 mb-8 font-medium italic">
        Don&apos;t waste ₹200 blindly. Cross-verify with these 4 checks first.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
        {[
          "Check if the Question ID matches exactly (don't rely on serial numbers).",
          "Ensure your textbook reference is from an NCERT or standard source.",
          "Verify the Shift and Date again (many students check the wrong PDF).",
          "Calculate your Final Score only after accounting for negative marking."
        ].map((check, i) => (
          <div key={i} className="flex gap-4 p-4 bg-white/10 rounded-2xl border border-white/10">
            <div className="w-6 h-6 rounded-full bg-emerald-400 text-emerald-900 flex items-center justify-center font-bold text-xs shrink-0">
              {i + 1}
            </div>
            <p className="text-sm font-bold text-emerald-50 leading-tight">{check}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 pt-8 border-t border-white/10 flex flex-col md:flex-row gap-6 items-center justify-between">
        <p className="text-xs text-emerald-300 font-bold uppercase tracking-widest">Done checking?</p>
        <Link href="/jee-rank-predictor" className="px-8 py-4 bg-white text-emerald-900 font-black text-xs uppercase tracking-widest rounded-xl hover:bg-emerald-100 transition-all">
          Predict My Final Percentile →
        </Link>
      </div>
    </div>
  </div>
</section>

<section className="max-w-4xl mx-auto px-4 py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-black text-slate-900 mb-4 flex items-center justify-center gap-3">
          <FaQuestionCircle className="text-blue-600" size={28} />
          Frequently Asked Questions
        </h2>
        <p className="text-slate-500 font-medium italic">Quick answers to your most common doubts regarding the 2026 Answer Key.</p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className={`border rounded-3xl overflow-hidden transition-all duration-300 ${
              openIndex === index ? 'border-blue-500 bg-blue-50/30' : 'border-slate-100 bg-white'
            }`}
          >
            <button 
              onClick={() => toggleFAQ(index)}
              className="w-full p-6 text-left flex justify-between items-center group"
            >
              <span className={`font-bold text-sm md:text-base ${
                openIndex === index ? 'text-blue-700' : 'text-slate-800'
              }`}>
                {faq.question}
              </span>
              <FaChevronDown 
                className={`transition-transform duration-300 shrink-0 ${
                  openIndex === index ? 'rotate-180 text-blue-600' : 'text-slate-400'
                }`} 
              />
            </button>
            
            <div 
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="p-6 pt-0 text-sm text-slate-600 leading-relaxed border-t border-slate-100/50">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>

<div className="max-w-5xl mx-auto px-4 my-12">
  <div className="flex flex-col md:flex-row items-center gap-6 p-6 bg-white border border-slate-200 rounded-4xl shadow-sm">
    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
      <Image width={400} height={400} src="/founder.jpg" alt="Expert" className="rounded-full w-16 h-16 object-cover object-top-left" />
    </div>
    <div>
      <h4 className="font-bold text-slate-900 mb-1 italic">The 2026 Normalization Paradox</h4>
      <p className="text-xs text-slate-500 leading-relaxed">
        <strong>Expert Insight:</strong> With 1.5M+ students, even a 1-mark shift due to a challenged question can change your rank by 5,000 positions. Ensure you check the <Link href="#challenge-tracker" className="text-blue-600 font-bold">Live Tracker</Link> before assuming your final percentile.
      </p>
    </div>
  </div>
</div>
        {/* BOTTOM SEMANTIC LINKS */}
        <section className="max-w-7xl mx-auto px-4 pb-20">
          <h3 className="text-xs font-black uppercase text-slate-400 tracking-widest mb-6">Related 2026 Resources</h3>
          <div className="flex flex-wrap gap-3">
             <Link href="/jee-mains-2026-shift-wise-marks-percentile-analysis" className="px-5 py-2.5 bg-slate-100 rounded-full text-xs font-bold text-slate-600 hover:bg-blue-600 hover:text-white transition">Expected Percentile Analysis</Link>
             <Link href="/blog/nta_percentile_calculation" className="px-5 py-2.5 bg-slate-100 rounded-full text-xs font-bold text-slate-600 hover:bg-blue-600 hover:text-white transition">Normalization Method</Link>
             <Link href="/jee_main_marks_vs_rank_2026" className="px-5 py-2.5 bg-slate-100 rounded-full text-xs font-bold text-slate-600 hover:bg-blue-600 hover:text-white transition">Predicted Marks vs Rank</Link>
          </div>
        </section>



      </main>
    </>
  );
}