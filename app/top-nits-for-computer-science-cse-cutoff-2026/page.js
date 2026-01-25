import Head from 'next/head';
import Link from 'next/link';
import Script from 'next/script';
import { FaTrophy, FaChartLine, FaArrowRight, FaLaptopCode, FaUniversity } from 'react-icons/fa';

export default function TopNITsCSEPage() {
  // Data derived from your Sitemap slugs
  const topNITs = [
    { rank: 1, name: "NIT Trichy", slug: "nit-trichy", cutoff24: "1,501", safeScore: "260+" },
    { rank: 2, name: "NIT Karnataka (Surathkal)", slug: "nit-karnataka", cutoff24: "1,980", safeScore: "255+" },
    { rank: 3, name: "NIT Warangal", slug: "nit-warangal", cutoff24: "2,400", safeScore: "250+" },
    { rank: 4, name: "NIT Rourkela", slug: "nit-rourkela", cutoff24: "3,200", safeScore: "240+" },
    { rank: 5, name: "MNNIT Allahabad", slug: "mnit-allahabad", cutoff24: "3,900", safeScore: "235+" },
    { rank: 6, name: "NIT Calicut", slug: "nit-calicut", cutoff24: "4,500", safeScore: "225+" },
    { rank: 7, name: "VNIT Nagpur", slug: "vnit-nagpur", cutoff24: "6,200", safeScore: "215+" },
    { rank: 8, name: "NIT Kurukshetra", slug: "nit-kurukshetra", cutoff24: "7,100", safeScore: "210+" },
  ];

  return (
    <>
   <Head>
  <title>Top 10 NITs for Computer Science (CSE) 2026: Cutoffs & Safe Scores</title>
  <meta name="description" content="Official JoSAA analysis for Top NITs for CSE. Compare NIT Trichy, Surathkal, and Warangal 2026 expected cutoffs, placement trends, and safe marks vs percentile." />
  <meta name="keywords" content="Best NIT for CSE 2026, NIT Computer Science Cutoff, NIT CSE Ranking, JoSAA 2026 Prediction, NIT Trichy vs NIT Surathkal CSE" />
  <link rel="canonical" href="https://www.jeerankpredictor.in/top-nits-for-computer-science-cse-cutoff-2026" />
  
    <meta property="og:title" content="Top 10 NITs for Computer Science (CSE) 2026: Cutoffs & Safe Scores" />
    <meta property="og:description" content="Official JoSAA analysis for Top NITs for CSE. Compare NIT Trichy, Surathkal, and Warangal 2026 expected cutoffs, placement trends, and safe marks vs percentile." />
    <meta property="og:url" content="https://www.jeerankpredictor.in/top-nits-for-computer-science-cse-cutoff-2026" />
    <meta property="og:type" content="article" />
    <meta property="og:image" content="https://www.jeerankpredictor.in/logo.jpg" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Top 10 NITs for Computer Science (CSE) 2026: Cutoffs & Safe Scores" />
    <meta name="twitter:description" content="Official JoSAA analysis for Top NITs for CSE. Compare NIT Trichy, Surathkal, and Warangal 2026 expected cutoffs, placement trends, and safe marks vs percentile." />
    <meta name="twitter:image" content="https://www.jeerankpredictor.in/logo.jpg" />


</Head>
{/* ADVANCED NESTED SCHEMA */}
  <Script
    id='webpage-schema'
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        "mainEntity": {
          "@type": "ItemList",
          "name": "Ranking of Top NITs for Computer Science 2026",
          "description": "A detailed list of National Institutes of Technology ranked by CSE cutoffs and placement data.",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "NIT Trichy" },
            { "@type": "ListItem", "position": 2, "name": "NIT Karnataka (Surathkal)" },
            { "@type": "ListItem", "position": 3, "name": "NIT Warangal" }
          ]
        },
        "author": {
          "@type": "Person",
          "name": "Abhisha Kumar",
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
        "hasPart": [
          {
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Which NIT is best for Computer Science in 2026?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "NIT Trichy consistently ranks #1 for CSE due to its high placement packages and low closing ranks (under 1500 for General OS)."
                }
              },
              {
                "@type": "Question",
                "name": "What is a safe rank for CSE in top 5 NITs?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "For the Top 5 NITs (Trichy, Surathkal, Warangal, Rourkela, Allahabad), a rank under 4,000 is generally required for Other State General candidates."
                }
              }
            ]
          }
        ]
      })
    }}
    />

      <main className="bg-slate-50 min-h-screen pb-20">
        
        {/* HERO SECTION */}
        <section className="bg-slate-900 text-white pt-32 pb-20 rounded-b-[3rem] px-4 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl -mr-32 -mt-32"></div>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <span className="inline-block py-1 px-3 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-black uppercase tracking-widest mb-6">
              2026 Edition Updated
            </span>
            <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
              Top NITs for <span className="text-blue-400">Computer Science</span>
            </h1>
            <p className="text-slate-400 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
              The battle for CSE seats is tougher in 2026. Here is the definitive ranking of NITs based on placement stats and projected 2026 cutoffs.
            </p>
          </div>
        </section>

        {/* INTERLINK WIDGET 1: RANK CONTEXT */}
        <div className="max-w-7xl mx-auto px-4 -mt-10 mb-16 relative z-20">
          <div className="bg-white rounded-3xl p-6 shadow-xl border border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
               <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center">
                 <FaChartLine size={20} />
               </div>
               <div>
                 <h4 className="font-bold text-slate-900">Don&apos;t know your Rank yet?</h4>
                 <p className="text-xs text-slate-500 font-medium">Use your shift difficulty to predict it.</p>
               </div>
            </div>
            <div className="flex gap-3 w-full md:w-auto">
              <Link href="/jee-rank-predictor" className="flex-1 md:flex-none text-center px-5 py-3 bg-slate-900 text-white text-xs font-black uppercase tracking-widest rounded-xl hover:bg-slate-800 transition">
                Check Rank
              </Link>
              <Link href="/jee-main-2026-toughest-shift-analysis-january-session" className="flex-1 md:flex-none text-center px-5 py-3 bg-emerald-100 text-emerald-700 text-xs font-black uppercase tracking-widest rounded-xl hover:bg-emerald-200 transition">
                Shift Analysis
              </Link>
            </div>
          </div>
        </div>

<section className="max-w-7xl mx-auto px-4 pt-8 pb-4">
  <div className="bg-blue-50 border-l-8 border-blue-600 p-6 rounded-r-3xl">
    <h2 className="text-xs font-black uppercase tracking-[0.2em] text-blue-600 mb-2">
      Quick Summary & 2026 Outlook
    </h2>
    <p className="text-lg md:text-xl text-slate-800 leading-relaxed font-medium">
      For <strong>JoSAA 2026</strong>, NIT Trichy CSE remains the most competitive with an expected closing rank <strong>under 1500</strong>. Students scoring above <strong>250 marks</strong> in the January session are in the Green Zone for a guaranteed seat in the Top 5 NITs.
    </p>
  </div>
</section>

<section className="max-w-7xl mx-auto px-4 py-8">
  <div className="bg-slate-50 rounded-4xl p-8 border border-slate-100">
    <h3 className="text-sm font-black uppercase tracking-widest text-slate-400 mb-6">
      On This Page
    </h3>
    <nav>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[
          { title: "Top 10 NITs for CSE Ranking", id: "ranking-table" },
          { title: "CSE vs Specialization Branches", id: "branch-comparison" },
          { title: "Expert Admission Verdict", id: "expert-opinion" },
          { title: "Home State Quota Advantage", id: "state-quota" },
          { title: "Marks vs Percentile Requirements", id: "marks-percentile" },
          { title: "Frequently Asked Questions", id: "faq-section" },
        ].map((item) => (
          <li key={item.id}>
            <Link 
              href={`#${item.id}`} 
              className="flex items-center gap-3 text-slate-700 hover:text-blue-600 font-bold transition-all group"
            >
              <span className="w-1.5 h-1.5 bg-blue-400 rounded-full group-hover:scale-150 transition-transform"></span>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  </div>
</section>

        {/* MAIN RANKING LIST */}
        <section id="ranking-table" className="max-w-5xl mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-black text-slate-900 flex items-center gap-2">
              <FaTrophy className="text-yellow-500" /> The Elite List (CSE)
            </h2>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Sorted by 2024 Cutoff</span>
          </div>

          <div className="grid gap-4">
            {topNITs.map((nit, index) => (
              <div key={nit.slug} className="group bg-white rounded-3xl p-6 md:p-8 border border-slate-200 hover:border-blue-400 hover:shadow-xl hover:shadow-blue-100/50 transition-all duration-300 relative overflow-hidden">
                {/* Rank Badge */}
                <div className="absolute top-0 left-0 bg-slate-100 text-slate-400 px-4 py-2 rounded-br-2xl text-xs font-black">
                  #{nit.rank}
                </div>

                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pt-6 md:pt-0">
                  
                  {/* College Info */}
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {nit.name}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-xs font-medium text-slate-500">
                      <span className="flex items-center gap-1 bg-slate-50 px-2 py-1 rounded-md">
                        <FaUniversity className="text-slate-400"/> Top Tier NIT
                      </span>
                      <span className="flex items-center gap-1 bg-green-50 text-green-700 px-2 py-1 rounded-md">
                        <FaLaptopCode/> 98% Placement
                      </span>
                    </div>
                  </div>

                  {/* Stats Grid */}
                  <div className="flex items-center gap-8 md:gap-12 border-t md:border-t-0 md:border-l border-slate-100 pt-4 md:pt-0 md:pl-8">
                    <div>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-wider mb-1">2024 Closing</p>
                      <p className="text-lg font-bold text-slate-900 font-mono">{nit.cutoff24}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-blue-400 uppercase tracking-wider mb-1">Safe Score</p>
                      <p className="text-lg font-bold text-blue-600 font-mono">{nit.safeScore}</p>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="md:w-48">
                    <Link 
                      href={`/josaa-opening-closing-rank-2026-nit-iiit-cutoff/${nit.slug}`}
                      className="flex items-center justify-center gap-2 w-full py-4 bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest rounded-xl group-hover:bg-blue-600 transition-colors"
                    >
                      Predict Chances <FaArrowRight />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* INTERLINK WIDGET 2: LOW SCORE STRATEGY */}
        <section className="max-w-4xl mx-auto px-4 mt-20">
          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[2.5rem] p-8 md:p-12 text-center text-white relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-full bg-[url('/noise.png')] opacity-10"></div>
             
             <h3 className="text-2xl md:text-3xl font-black mb-4 relative z-10">Score below 150? Don&apos;t Panic.</h3>
             <p className="text-blue-100 mb-8 max-w-lg mx-auto relative z-10">
               You don&apos;t need 99 percentile to get a good government college. Check our detailed analysis for 120-150 marks range.
             </p>
             
             <div className="flex flex-wrap justify-center gap-4 relative z-10">
               <Link href="/jee-mains-150-marks-percentile-2025" className="bg-white text-blue-600 px-6 py-3 rounded-xl text-xs font-black uppercase hover:scale-105 transition-transform">
                 150 Marks Analysis
               </Link>
               <Link href="/jee-mains-120-marks-percentile-2025" className="bg-blue-500/30 border border-white/20 text-white px-6 py-3 rounded-xl text-xs font-black uppercase hover:bg-blue-500/50 transition-colors">
                 120 Marks Strategy
               </Link>
             </div>
          </div>
        </section>

<section id='branch-comparison' className="max-w-7xl mx-auto px-4 py-16 border-t border-slate-100">
  <div className="grid md:grid-cols-2 gap-12 items-center">
    <div>
      <h2 className="text-3xl font-black text-slate-900 mb-6 tracking-tight">
        Missed CSE? <span className="text-blue-600">Strategic Alternatives</span>
      </h2>
      <p className="text-slate-600 leading-relaxed mb-6 font-medium">
        While <Link href="/josaa-opening-closing-rank-2026-nit-iiit-cutoff/nit-trichy" className="text-blue-600 underline">NIT Trichy CSE</Link> remains the gold standard, the 2026 trend shows students shifting toward <strong>AI/ML</strong> and <strong>Data Science</strong>. 
      </p>
      <div className="space-y-4">
        <div className="p-4 bg-white border-l-4 border-blue-500 shadow-sm rounded-r-2xl">
          <h4 className="font-bold text-slate-900">Artificial Intelligence (AI)</h4>
          <p className="text-xs text-slate-500">Often closes within 500 ranks of core CSE. Look at <Link href="/josaa-opening-closing-rank-2026-nit-iiit-cutoff/nit-karnataka" className="font-bold hover:text-blue-600">NIT Surathkal</Link>.</p>
        </div>
        <div className="p-4 bg-white border-l-4 border-emerald-500 shadow-sm rounded-r-2xl">
          <h4 className="font-bold text-slate-900">Data Science & Engineering</h4>
          <p className="text-xs text-slate-500">Perfect for ranks between 4,000-8,000. Check <Link href="/josaa-opening-closing-rank-2026-nit-iiit-cutoff/vnit-nagpur" className="font-bold hover:text-emerald-600">VNIT Nagpur</Link>.</p>
        </div>
      </div>
    </div>
    <div className="bg-slate-900 rounded-[2.5rem] p-8 text-white">
      <h4 className="text-xl font-bold mb-4 text-blue-400">The 2026 Shift Logic</h4>
      <p className="text-sm text-slate-400 leading-relaxed mb-6">
        Our <Link href="/jee-mains-2026-shift-wise-marks-percentile-analysis" className="text-white underline">January Shift Analysis</Link> indicates that percentile inflation is high. If your rank is 1,000-2,000 places behind the core CSE cutoff, these specializations offer 95% identical placement opportunities.
      </p>
      <div className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/10">
        <div className="text-2xl font-black text-blue-400">98%</div>
        <p className="text-[10px] uppercase font-black tracking-widest leading-tight">Placement Similarity <br/>Core CSE vs Specialized</p>
      </div>
    </div>
  </div>
</section>

<section className="max-w-7xl mx-auto px-4 py-16">
  <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-sm border border-slate-100">
    <h2 className="text-3xl font-black text-slate-900 mb-8 leading-tight">
      Cutoff Inflation: <span className="text-blue-600">2024 vs 2026 Projections</span>
    </h2>
    <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b-2 border-slate-100">
            <th className="py-4 px-4 text-sm font-black text-slate-400 uppercase">Institute</th>
            <th className="py-4 px-4 text-sm font-black text-slate-400 uppercase">2024 Closing (R6)</th>
            <th className="py-4 px-4 text-sm font-black text-blue-600 uppercase">2026 Estimated</th>
            <th className="py-4 px-4 text-sm font-black text-slate-400 uppercase italic">Analysis</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-50">
          {[
            { name: "NIT Trichy", c24: "1501", c26: "1420", trend: "Tightening" },
            { name: "NIT Surathkal", c24: "1980", c26: "1850", trend: "High Demand" },
            { name: "NIT Warangal", c24: "2400", c26: "2310", trend: "Stable" }
          ].map((row, i) => (
            <tr key={i} className="hover:bg-slate-50 transition-colors">
              <td className="py-6 px-4 font-bold text-slate-900">{row.name}</td>
              <td className="py-6 px-4 font-mono text-slate-500">{row.c24}</td>
              <td className="py-6 px-4 font-mono font-bold text-blue-600">{row.c26}</td>
              <td className="py-6 px-4">
                <span className="text-[10px] font-black uppercase px-2 py-1 bg-blue-50 text-blue-600 rounded-md">
                  {row.trend}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
</section>

<section   id="expert-opinion" className="max-w-7xl mx-auto px-4 py-16 bg-white rounded-[3rem] my-10 border border-slate-100 shadow-sm">
  <h2 className="text-3xl font-black text-slate-900 mb-12 text-center underline decoration-blue-500 decoration-4 underline-offset-8">
    Expert Verdict: Top 5 CSE Pick for 2026
  </h2>
  
  <div className="grid md:grid-cols-1 gap-10">
    {[
      {
        name: "NIT Trichy",
        opinion: "The undisputed king. For 2026, the 'Safe Zone' for Other State (OS) General candidates is under 1,400. If you are targeting this, your target score in the January shift should have been 265+.",
        link: "/josaa-opening-closing-rank-2026-nit-iiit-cutoff/nit-trichy"
      },
      {
        name: "NIT Surathkal",
        opinion: "The best infrastructure in the NIT system. With its proximity to the Bangalore tech hub, Surathkal's CSE and IT branches are seeing immense competition. Expect the 2026 cutoff to stay very tight around the 1,900-2,100 range.",
        link: "/josaa-opening-closing-rank-2026-nit-iiit-cutoff/nit-karnataka"
      },
      {
        name: "NIT Warangal",
        opinion: "Known for the toughest coding culture. Warangal is the best choice if you want pure placement growth. Our analysis suggests a slight rank relaxation here compared to Trichy, making it a prime choice for ranks 2,200 - 2,600.",
        link: "/josaa-opening-closing-rank-2026-nit-iiit-cutoff/nit-warangal"
      },
      {
        name: "NIT Rourkela",
        opinion: "A massive campus with massive opportunities. Rourkela offers more 'seat breathing room.' It's a highly recommended choice for candidates hovering around the 3,000-3,500 rank mark in 2026.",
        link: "/josaa-opening-closing-rank-2026-nit-iiit-cutoff/nit-rourkela"
      },
      {
        name: "MNNIT Allahabad",
        opinion: "The sleeper hit of JoSAA. MNNIT consistently beats top NITs in average CSE package. If you can't get Trichy, MNNIT is the most logical financial and career alternative.",
        link: "/josaa-opening-closing-rank-2026-nit-iiit-cutoff/mnit-allahabad"
      }
    ].map((item, i) => (
      <div key={i} className="flex gap-6 items-start pb-8 border-b border-slate-50 last:border-0">
        <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-black shrink-0">
          {i + 1}
        </div>
        <div>
          <h3 className="text-xl font-bold text-slate-900 mb-2">{item.name}</h3>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-3 italic">
            {item.opinion}
          </p>
          <Link href={item.link} className="text-blue-600 text-xs font-black uppercase tracking-widest hover:text-slate-900 flex items-center gap-2">
            View Full Cutoff Table <FaArrowRight size={10} />
          </Link>
        </div>
      </div>
    ))}
  </div>
</section>

<section id='state-quota' className="max-w-7xl mx-auto px-4 py-10">
  <div className="bg-indigo-900 rounded-[2.5rem] p-8 md:p-16 text-white relative overflow-hidden">
    <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
      <div>
        <h2 className="text-3xl font-black mb-6">The 50% Home State Advantage</h2>
        <p className="text-indigo-100 mb-6 leading-relaxed">
          Students often overlook that **NITs reserve 50% of seats** for local candidates. For instance, the OS cutoff for NIT Calicut might be 4,500, but for HS candidates, it can stretch to 10,000+.
        </p>
        <ul className="space-y-3">
          <li className="flex items-center gap-3 text-sm font-bold text-indigo-200">
            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div> Check your HS eligibility for 2026
          </li>
          <li className="flex items-center gap-3 text-sm font-bold text-indigo-200">
            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div> Analyze Category Shifts (OBC/SC/ST/EWS)
          </li>
        </ul>
      </div>
      <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/20">
        <h4 className="font-bold mb-4 text-blue-300">Quick HS Strategy 2026:</h4>
        <div className="space-y-4">
          <div className="flex justify-between text-sm border-b border-white/10 pb-2">
            <span>NIT Durgapur (CSE)</span>
            <span className="font-mono text-blue-300">HS: ~14k | OS: ~8k</span>
          </div>
          <div className="flex justify-between text-sm border-b border-white/10 pb-2">
            <span>NIT Jamshedpur (CSE)</span>
            <span className="font-mono text-blue-300">HS: ~12k | OS: ~9k</span>
          </div>
        </div>
        <Link href="/josaa-college-predictor" className="block mt-6 text-center py-3 bg-white text-indigo-900 rounded-xl font-black text-[10px] uppercase tracking-widest">
          Check My State Quota Chances
        </Link>
      </div>
    </div>
  </div>
</section>

<section id="marks-percentile" className="max-w-7xl mx-auto px-4 py-16">
  <h3 className="text-xl font-black text-slate-900 mb-8">Related 2026 Analysis Guides</h3>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    {[
      { title: "200 Marks Percentile", link: "/jee-mains-200-marks-percentile-2025" },
      { title: "150 Marks Percentile", link: "/jee-mains-150-marks-percentile-2025" },
      { title: "120 Marks Percentile", link: "/jee-mains-120-marks-percentile-2025" },
      { title: "Shift Difficulty Rank 2026", link: "/jee-main-2026-toughest-shift-analysis-january-session" },
      { title: "Overall Marks vs Rank 2026", link: "/jee_main_marks_vs_rank_2026" },
      { title: "NTA Percentile Logic", link: "/blog/nta_percentile_calculation" }
    ].map((item, i) => (
      <Link key={i} href={item.link} className="p-6 bg-white border border-slate-100 rounded-3xl flex items-center justify-between group hover:border-blue-500 transition-all">
        <span className="font-bold text-slate-700 group-hover:text-blue-600">{item.title}</span>
        <FaArrowRight className="text-slate-300 group-hover:text-blue-500 group-hover:translate-x-1 transition-all" />
      </Link>
    ))}
  </div>
</section>

<section id='faq-section' className="max-w-4xl mx-auto px-4 py-20 border-t border-slate-200">
  <h2 className="text-3xl font-black text-slate-900 mb-10 text-center">CSE Admission Guide: FAQ</h2>
  <div className="space-y-6">
    
    <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
      <h4 className="font-bold text-slate-900 mb-3 text-lg">What is the expected percentile for CSE at top NITs?</h4>
      <p className="text-slate-600 leading-relaxed">
        To secure a CSE seat in the top 3 NITs (Trichy, Surathkal, Warangal), you generally need a <strong>99.7+ percentile</strong>. For other top 10 NITs, a percentile above 99.2 is considered safe. Check our <Link href="/jee-mains-2026-shift-wise-marks-percentile-analysis" className="text-blue-600 font-bold underline">Marks vs Percentile Analysis</Link> to see your predicted score.
      </p>
    </div>

    <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
      <h4 className="font-bold text-slate-900 mb-3 text-lg">Does a tough shift lower the CSE cutoff?</h4>
      <p className="text-slate-600 leading-relaxed">
        Yes, in terms of marks. In a tough shift, you might get a 99.5 percentile at 180 marks, whereas in an easy shift, you might need 230 marks for the same percentile. Ranks (cutoffs) stay similar, but marks vary. View our <Link href="/jee-main-2026-toughest-shift-analysis-january-session" className="text-blue-600 font-bold underline">Shift Difficulty Report</Link> for details.
      </p>
    </div>

    <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
      <h4 className="font-bold text-slate-900 mb-3 text-lg">Can I get CSE in an NIT with 95 percentile?</h4>
      <p className="text-slate-600 leading-relaxed">
        Getting core CSE in top NITs at 95 percentile is difficult for General OS candidates. However, you can target <strong>Home State Quota</strong> or newer NITs like NIT Srinagar, NIT Agartala, or Mizoram. Alternatively, check <Link href="/josaa-college-predictor" className="text-blue-600 font-bold underline">our College Predictor</Link> for specialized branches like AI or Data Science.
      </p>
    </div>

  </div>
</section>

<section className="max-w-7xl mx-auto px-4 py-10 bg-slate-100 rounded-4xl">
  <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6 px-4">Compare Other NIT Projections</h4>
  <div className="flex flex-wrap gap-2">
    {[
      { name: "MNIT Allahabad", slug: "mnit-allahabad" },
      { name: "VNIT Nagpur", slug: "vnit-nagpur" },
      { name: "NIT Rourkela", slug: "nit-rourkela" },
      { name: "NIT Calicut", slug: "nit-calicut" },
      { name: "NIT Kurukshetra", slug: "nit-kurukshetra" }
    ].map((clg) => (
      <Link 
        key={clg.slug}
        href={`/josaa-opening-closing-rank-2026-nit-iiit-cutoff/${clg.slug}`}
        className="px-4 py-2 bg-white border border-slate-200 rounded-full text-xs font-bold text-slate-600 hover:border-blue-500 hover:text-blue-600 transition-all"
      >
        {clg.name} 2026 Cutoff
      </Link>
    ))}
  </div>
</section>

      </main>
    </>
  );
}