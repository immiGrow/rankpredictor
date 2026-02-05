"use client";

import { motion } from "framer-motion";

import Link from "next/link";
import Script from "next/script";
import { FaArrowRight, FaCheckCircle, FaInfoCircle, FaUniversity, FaChartLine } from "react-icons/fa";

export default function Marks120Page() {

  // CONFIGURATION: Easily change these for 150 or 200 marks pages
  const DATA = {
    marks: 120,
    percentile: "97.2 – 98.1",
    rank: "32,000 – 44,000",
    session: "January 2026",
    color: "indigo"
  };

  return (
    <>


<Script
  id="dataset-schema"
  type="application/ld+json"
  strategy="afterInteractive"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Dataset",
      "name": `JEE Main 2026 Marks vs Percentile Analysis - ${DATA.marks} Marks`,
      "description": `Official-style data analysis of percentile and rank for ${DATA.marks} marks in JEE Main 2026 January Session.`,
      "url": `https://www.jeerankpredictor.in/jee-mains-${DATA.marks}-marks-percentile-2025`,
      "variableMeasured": ["Percentile", "All India Rank", "NIT Cutoffs"],
      "keywords": "JEE Main 2026, Marks vs Percentile, Rank Predictor, NTA Normalization",
      "creator": {
        "@type": "Organization",
        "name": "JEE Rank Predictor"
      }
    }),
  }}
/>

<Script
  id="breadcrumb-schema"
  type="application/ld+json"
  strategy="afterInteractive"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
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
          "name": "Marks vs Percentile 2026",
          "item": "https://www.jeerankpredictor.in/jee-main-marks-vs-percentile-2025"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": `${DATA.marks} Marks Analysis`,
          "item": `https://www.jeerankpredictor.in/jee-mains-${DATA.marks}-marks-percentile-2025`
        }
      ]
    }),
  }}
/>

<Script
  id="howto-rank-schema"
  type="application/ld+json"
  strategy="afterInteractive"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": `How to Predict Rank for ${DATA.marks} Marks in JEE Main 2026`,
      "step": [
        {
          "@type": "HowToStep",
          "name": "Check Shift Difficulty",
          "text": "Determine if your shift was Hard, Moderate, or Easy using our 2026 Difficulty Heatmap."
        },
        {
          "@type": "HowToStep",
          "name": "Apply Normalization",
          "text": `Compare ${DATA.marks} marks against the session average to find your percentile.`
        },
        {
          "@type": "HowToStep",
          "name": "Estimate AIR",
          "text": "Use the total number of unique candidates to calculate your final All India Rank."
        }
      ]
    }),
  }}
/>

<Script
  id="article-schema"
  type="application/ld+json"
  strategy="afterInteractive"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": `${DATA.marks} Marks in JEE Mains 2026 – Percentile, Rank & Analysis`,
      "image": "https://www.jeerankpredictor.in/logo.jpg", // Replace with your actual OG image
      "author": {
        "@type": "Organization",
        "name": "JEE Rank Predictor Team"
      },
      "publisher": {
        "@type": "Organization",
        "name": "JEE Rank Predictor",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.jeerankpredictor.in/logo.jpg"
        }
      },
      "datePublished": "2026-01-20T08:00:00+05:30",
      "dateModified": new Date().toISOString()
    }),
  }}
/>

      {/* FAQ SCHEMA */}
      <Script
  id="faq-schema-120-marks-v2"
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": `Can I get a top NIT with ${DATA.marks} marks in JEE Main 2026?`,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": `With ${DATA.marks} marks, you can secure seats in Mid-tier NITs like NIT Silchar or Patna. Top-tier NITs are possible for core branches like Civil or Mechanical.`
          }
        },
        {
          "@type": "Question",
          "name": `Will ${DATA.marks} marks clear the JEE Advanced 2026 cutoff?`,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": `Yes, ${DATA.marks} marks typically results in a 97+ percentile, which is well above the 90-91 percentile required to qualify for JEE Advanced.`
          }
        },
        {
          "@type": "Question",
          "name": "How much rank inflation is expected for this score?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Rank inflation is expected due to more candidates in 2026. A score of 120 marks may result in a rank between 32,000 and 44,000 depending on shift difficulty."
          }
        },
        {
          "@type": "Question",
          "name": `Which shift had the highest percentile for ${DATA.marks} marks?`,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": `Based on student data, the Jan 23rd and Jan 27th Shifts were tougher. Scoring ${DATA.marks} marks in these shifts could result in a percentile as high as 98.2+. Easier shifts might see the same score drop to 96.5.`
          }
        },
        {
          "@type": "Question",
          "name": `Is ${DATA.marks} marks enough for NIT Trichy CSE for OBC/SC category?`,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": `For SC/ST candidates, ${DATA.marks} marks is an excellent score and provides a very high chance for CSE in top-5 NITs. For OBC, it usually secures a top-20 NIT for branches like ECE or Electrical.`
          }
        }
      ]
    }),
  }}
/>

      <>

      <div className="bg-slate-50 min-h-screen pb-20">
        {/* HERO SECTION: The "Instant Answer" */}
        <section className="bg-gradient-to-br from-indigo-900 via-blue-900 to-slate-900 text-white pt-16 pb-24 px-4">
          <div className="max-w-5xl mx-auto text-center">
            <motion.span 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="bg-indigo-500/20 text-indigo-300 px-4 py-1 rounded-full text-sm font-bold tracking-widest uppercase"
            >
              Post-Exam Intelligence Report
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-black mt-4 mb-8 tracking-tight"
            >
              {DATA.marks} Marks in JEE Mains
            </motion.h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <motion.div whileHover={{ y: -5 }} className="bg-white/10 backdrop-blur-md border border-white/10 p-8 rounded-3xl">
                <p className="text-indigo-200 font-medium uppercase text-sm tracking-wider">Expected Percentile</p>
                <p className="text-5xl font-black mt-2 text-white">{DATA.percentile}</p>
              </motion.div>
              <motion.div whileHover={{ y: -5 }} className="bg-white/10 backdrop-blur-md border border-white/10 p-8 rounded-3xl">
                <p className="text-indigo-200 font-medium uppercase text-sm tracking-wider">Estimated AIR Rank</p>
                <p className="text-5xl font-black mt-2 text-white">~{DATA.rank.split('–')[0]}</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* QUICK ACTION: Predictor Link */}
        <div className="max-w-4xl mx-auto px-4 -mt-10">
          <Link href="/">
            <div className="bg-white p-4 rounded-2xl shadow-xl flex items-center justify-between border border-indigo-100 hover:border-indigo-500 transition-all group">
              <div className="flex items-center gap-4">
                <div className="bg-indigo-600 p-3 rounded-xl text-white">
                  <FaChartLine />
                </div>
                <div>
                  <p className="font-bold text-slate-800 leading-tight">Want a precise calculation?</p>
                  <p className="text-xs text-slate-500">Enter your specific shift for a 100% normalized result.</p>
                </div>
              </div>
              <FaArrowRight className="text-indigo-600 group-hover:translate-x-2 transition-transform" />
            </div>
          </Link>
        </div>

        {/* SHIFT VARIANCE ANALYSIS */}
        <section className="max-w-5xl mx-auto px-4 py-16">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1">
              <h2 className="text-3xl font-black text-slate-900 mb-6 flex items-center gap-3">
                <FaInfoCircle className="text-indigo-600" /> Shift-Wise Impact
              </h2>
              <p className="text-slate-600 leading-relaxed text-lg">
                For <strong>{DATA.marks} marks</strong>, the percentile varies significantly based on the paper difficulty. Our <Link href="/jee-main-2026-toughest-shift-analysis-january-session" className="text-indigo-600 font-bold underline">Jan 2026 Shift Analysis</Link> shows:
              </p>
              
              <div className="mt-8 space-y-4">
                <div className="flex items-center justify-between bg-white p-4 rounded-xl border-l-4 border-red-500 shadow-sm">
                  <span className="font-bold text-slate-700">Toughest Shift (Jan 23/28)</span>
                  <span className="bg-red-100 text-red-700 px-3 py-1 rounded-lg font-bold">98.4%ile</span>
                </div>
                <div className="flex items-center justify-between bg-white p-4 rounded-xl border-l-4 border-green-500 shadow-sm">
                  <span className="font-bold text-slate-700">Easiest Shift (Jan 21/24)</span>
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-lg font-bold">96.8%ile</span>
                </div>
              </div>
            </div>
            
            <div className="flex-1 bg-indigo-900 rounded-3xl p-8 text-white relative overflow-hidden">
                <div className="relative z-10">
                   <h3 className="text-xl font-bold mb-4">Pro Insight</h3>
                   <p className="text-indigo-100 text-sm leading-relaxed">
                     At the 120-130 marks bracket, the Normalization Jump is massive. A difference of just 2 questions can move your rank by 15,000 positions.
                   </p>
                   <Link href="/jee-mains-2026-shift-wise-marks-percentile-analysis" className="inline-block mt-6 text-sm font-bold bg-white text-indigo-900 px-6 py-2 rounded-full hover:bg-indigo-50 transition-colors">
                     View Full 2026 Marks Table
                   </Link>
                </div>
                <div className="absolute -bottom-10 -right-10 text-white/5 text-[120px] font-black italic">120</div>
            </div>
          </div>
        </section>

<section className="max-w-5xl mx-auto px-4 py-16 border-t border-slate-200">
  <div className="text-center mb-10">
    <h2 className="text-3xl font-black text-slate-900">Historical Comparison</h2>
    <p className="text-slate-500">How 120 marks has performed over the last 3 years</p>
  </div>
  
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {[
      { year: "2024", percentile: "96.4 - 97.2", status: "Moderate" },
      { year: "2025", percentile: "95.8 - 96.5", status: "High Competition" },
      { year: "2026 (Est)", percentile: "97.2 - 98.1", status: "Optimized", current: true },
    ].map((item, idx) => (
      <div key={idx} className={`p-6 rounded-3xl border-2 ${item.current ? 'border-indigo-500 bg-indigo-50' : 'border-slate-100 bg-white'}`}>
        <p className="text-sm font-bold text-slate-400 uppercase">{item.year} Results</p>
        <p className={`text-2xl font-black mt-2 ${item.current ? 'text-indigo-600' : 'text-slate-700'}`}>{item.percentile}</p>
        <p className="text-xs mt-1 text-slate-500">{item.status}</p>
      </div>
    ))}
  </div>
</section>


<section className="max-w-5xl mx-auto p-16 bg-slate-900 rounded-[3rem] my-12 text-white overflow-hidden relative">
  <div className="relative z-10">
    <h2 className="text-3xl font-black mb-8">Branch Eligibility Heatmap</h2>
    <div className="space-y-6">
      {[
        { branch: "Computer Science (CSE)", chance: "20%", color: "bg-red-500", note: "Possible in New IIITs / GFTIs" },
        { branch: "Electronics (ECE)", chance: "55%", color: "bg-yellow-500", note: "Strong chance in Mid-tier NITs" },
        { branch: "Mechanical / Civil", chance: "90%", color: "bg-green-500", note: "Safe bet for Top 15 NITs" },
      ].map((item, i) => (
        <div key={i} className="space-y-2">
          <div className="flex justify-between text-sm font-bold">
            <span>{item.branch}</span>
            <span className="text-indigo-400">{item.chance} Probability</span>
          </div>
          <div className="w-full bg-white/10 h-3 rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: item.chance }}
              transition={{ duration: 1, delay: i * 0.2 }}
              className={`h-full ${item.color}`} 
            />
          </div>
          <p className="text-[10px] text-slate-400 italic">{item.note}</p>
        </div>
      ))}
    </div>
  </div>
</section>

        {/* COLLEGE PREDICTION SECTION */}
        <section className="bg-white py-20 border-y border-slate-200">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl font-black text-slate-900 text-center mb-12 flex items-center justify-center gap-3">
              <FaUniversity className="text-indigo-600" /> College Admissions at {DATA.marks} Marks
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Category 1 */}
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center text-xl mb-4 font-bold">A</div>
                <h4 className="font-bold text-slate-800 text-xl mb-2">Top Tier NITs</h4>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Possible for <strong>Core Branches</strong> (Mechanical, Civil, Chemical) in NIT Jamshedpur, Durgapur, or Hamirpur.
                </p>
              </div>

              {/* Category 2 */}
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center text-xl mb-4 font-bold">B</div>
                <h4 className="font-bold text-slate-800 text-xl mb-2">IIITs (CSE/ECE)</h4>
                <p className="text-sm text-slate-500 leading-relaxed">
                  High probability for <strong>Computer Science</strong> in newer IIITs like IIIT Bhagalpur, IIIT Manipur, or IIIT Una.
                </p>
              </div>

              {/* Category 3 */}
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center text-xl mb-4 font-bold">C</div>
                <h4 className="font-bold text-slate-800 text-xl mb-2">Best for CSE</h4>
                <p className="text-sm text-slate-500 leading-relaxed">
                   Looking for CSE? Our <Link href="/top-nits-for-computer-science-cse-cutoff-2026" className="text-indigo-600 font-bold underline">NIT CSE Cutoff Page</Link> shows you exactly where 98%ile closes.
                </p>
              </div>
            </div>
            
            <div className="mt-12 text-center">
               <Link href="/josaa-college-predictor" className="bg-indigo-600 text-white px-8 py-4 rounded-2xl font-black shadow-lg shadow-indigo-200 hover:scale-105 transition-transform inline-flex items-center gap-3">
                 Open Full College Predictor <FaArrowRight />
               </Link>
            </div>
          </div>
        </section>

<section className="max-w-5xl mx-auto px-4 py-8">
  <div className="bg-amber-50 border border-amber-200 rounded-3xl p-8">
    <h3 className="text-xl font-black text-amber-900 mb-4 flex items-center gap-2">
      🚀 Expert Strategy for {DATA.marks} Scorers
    </h3>
    <div className="grid md:grid-cols-2 gap-8">
      <div>
        <p className="font-bold text-amber-800 text-sm mb-2 underline">What to do in Session 2?</p>
        <p className="text-amber-700 text-sm leading-relaxed">
          You are currently at the borderline for Top NIT CSE. To jump from 97 to 99 percentile, focus purely on <strong>Chemistry NCERT</strong> and <strong>Physics formula application</strong>. A 30-mark increase will put you in the top 10,000 ranks.
        </p>
      </div>
      <div>
        <p className="font-bold text-amber-800 text-sm mb-2 underline">State Quota Advantage</p>
        <p className="text-amber-700 text-sm leading-relaxed">
          Don&apos;t forget your Home State quota! With 120 marks, you might get a better branch in your state&apos;s NIT than through the All India quota. Check our <Link href="/josaa-opening-closing-rank-2026-nit-iiit-cutoff" className="font-bold underline">State Quota Eligibility</Link> guide.
        </p>
      </div>
    </div>
  </div>
</section>

        {/* DETAILED CATEGORY DATA TABLE */}
        <section className="max-w-4xl mx-auto px-4 py-8 text-center">
            <h3 className="text-2xl font-bold mb-8">Category-wise Cutoff Impact</h3>
            
            <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-sm bg-white">
                <table className="w-full text-left">
                    <thead className="bg-slate-900 text-white">
                        <tr>
                            <th className="p-4 uppercase text-[10px] tracking-widest">Category</th>
                            <th className="p-4 uppercase text-[10px] tracking-widest">Est. Percentile</th>
                            <th className="p-4 uppercase text-[10px] tracking-widest">NIT Chance</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                        <tr><td className="p-4 font-bold">General</td><td className="p-4 font-mono">97.8</td><td className="p-4 text-xs font-bold text-green-600">Mid NITs</td></tr>
                        <tr><td className="p-4 font-bold">OBC-NCL</td><td className="p-4 font-mono">97.8</td><td className="p-4 text-xs font-bold text-indigo-600">Top NITs (Core)</td></tr>
                        <tr><td className="p-4 font-bold">SC/ST</td><td className="p-4 font-mono">97.8</td><td className="p-4 text-xs font-bold text-purple-600">NIT Trichy/Surathkal</td></tr>
                    </tbody>
                </table>
            </div>
        </section>
      </div>
      <div className="max-w-5xl mx-auto px-4 py-8 border-t border-slate-200 ">
  <p className="text-xs font-bold text-slate-400 uppercase mb-4">Compare Other Score Ranges</p>
  <div className="flex flex-wrap gap-3">
    {[120, 150, 200].map((m) => (
      <Link 
        key={m} 
        href={`/jee-mains-${m}-marks-percentile-2025`}
        className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-xs font-bold text-slate-600 hover:border-indigo-500 hover:text-indigo-600 transition-all"
      >
        {m} Marks Analysis →
      </Link>
    ))}
  </div>
</div>

{/* FAQ SECTION: Optimized for Long-Tail Search Traffic */}
<section className="max-w-5xl mx-auto px-4 py-16 border-t border-slate-100">
  <h2 className="text-3xl font-black text-slate-900 mb-8">
    Common Doubts for {DATA.marks} Marks Scorers
  </h2>

  <div className="grid gap-6">
    <div className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-md transition-shadow">
      <h3 className="font-bold text-lg text-indigo-900">
        Can I get a top NIT with {DATA.marks} marks in JEE Main 2026?
      </h3>
      <p className="text-slate-600 mt-3 leading-relaxed">
        With <strong>{DATA.marks} marks</strong> (approx. {DATA.percentile.split('–')[0]} percentile), you have a high chance of securing a seat in <strong>Mid-tier NITs</strong> like NIT Silchar, NIT Patna, or NIT Agartala. For top-tier NITs like Trichy or Warangal, you might get branches like Civil or Metallurgy. Check our <Link href="/josaa-college-predictor" className="text-indigo-600 underline">College Predictor</Link> for shift-wise details.
      </p>
    </div>

    <div className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-md transition-shadow">
      <h3 className="font-bold text-lg text-indigo-900">
        Will {DATA.marks} marks clear the JEE Advanced 2026 cutoff?
      </h3>
      <p className="text-slate-600 mt-3 leading-relaxed">
        <strong>Absolutely.</strong> The qualifying cutoff for JEE Advanced usually stays between 90-91 percentile for General category. At {DATA.marks} marks, you are well above the safety margin, typically placing you in the top 3% of candidates.
      </p>
    </div>

    <div className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-md transition-shadow">
      <h3 className="font-bold text-lg text-indigo-900">
        How much rank inflation is expected for {DATA.marks} marks this year?
      </h3>
      <p className="text-slate-600 mt-3 leading-relaxed">
        Due to the increased number of unique candidates in 2026, a slight <strong>rank inflation</strong> is expected. While 120 marks previously fetched a rank around 35k, this year it might shift towards 40k. However, if your shift was Hard, your percentile will still be high enough to secure a good college.
      </p>
    </div>

    <div className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-md transition-shadow">
      <h3 className="font-bold text-lg text-indigo-900">
        Which shift had the highest percentile for {DATA.marks} marks?
      </h3>
      <p className="text-slate-600 mt-3 leading-relaxed">
        Based on student data, the <strong>Jan 23rd and Jan 27th Shifts</strong> were tougher. Scoring {DATA.marks} marks in these shifts could result in a percentile as high as <strong>98.2+</strong>. Easier shifts might see the same score drop to 96.5.
      </p>
    </div>
    <div className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-md transition-shadow">
      <h3 className="font-bold text-lg text-indigo-900">
       Is {DATA.marks} marks enough for NIT Trichy CSE for OBC/SC category?
      </h3>
      <p className="text-slate-600 mt-3 leading-relaxed">
       For SC/ST candidates, {DATA.marks} marks is an excellent score and provides a very high chance for CSE in top-5 NITs. For OBC, it usually secures a top-20 NIT for branches like ECE or Electrical.
      </p>
    </div>
  </div>
</section>
      </>
    </>
  );
}
