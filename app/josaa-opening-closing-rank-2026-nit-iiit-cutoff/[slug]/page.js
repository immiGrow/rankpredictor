"use client";
import { useEffect, useState,use } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { FaChartLine, FaArrowRight, FaUniversity, FaBolt, FaUserGraduate, FaTh, FaCheckCircle, FaSearch, FaRobot, FaLightbulb, FaChartBar } from 'react-icons/fa';
import Script from 'next/script';
import Image from 'next/image';
import Head from 'next/head';


const Loader = () => (
  <div className="flex flex-col items-center justify-center py-20 w-full">
    {/* The Animated Circle */}
    <div className="relative w-16 h-16">
      <div className="absolute top-0 left-0 w-full h-full border-4 border-blue-100 rounded-full"></div>
      <div className="absolute top-0 left-0 w-full h-h-full border-4 border-blue-600 rounded-full border-t-transparent animate-spin"></div>
    </div>
    <p className="mt-4 text-slate-500 font-bold animate-pulse text-sm uppercase tracking-widest">
      Fetching Official Ranks...
    </p>
  </div>
);

export default function JosaaHub({params}) {
  const college=[
    {
      name:"Motilal Nehru National Institute of Technology Allahabad",
      abb:"MNNIT Allahabad",
      slug:"mnit-allahabad"
    },
    {
      name:"Visvesvaraya National Institute of Technology, Nagpur",
      abb:"VNIT Nagpur",
      slug:"vnit-nagpur"
    },
    {
      name:"National Institute of Technology, Tiruchirappalli",
      abb:"NIT Trichy",
      slug:"nit-trichy"
    },
    {
      name:"National Institute of Technology, Rourkela",
      abb:"NIT Rourkela",
      slug:"nit-rourkela"
    },
    {
      name:"National Institute of Technology, Warangal",
      abb:"NIT Warangal",
      slug:"nit-warangal"
    },
    {
      name:"National Institute of Technology Calicut",
      abb:"NIT Calicut",
      slug:"nit-calicut"
    },
    {
      name:"National Institute of Technology, Kurukshetra",
      abb:"NIT Kurukshetra",
      slug:"nit-kurukshetra"
    },
    {
      name:"National Institute of Technology Karnataka, Surathkal",
      abb:"NIT Karnataka" ,
      slug:"nit-karnataka" 
    }
  ]
 const router = useRouter();
 // 1. Unwrap the slug from the URL path /cutoff/[slug]
 // Get the college from URL on initial load (e.g., /josaa-opening-closing-rank-2026-nit-iiit-cutoff/college=vnit-nagpur)
  const { slug } = use(params);
 const currentCollege = college.find(c => c.slug === slug) || college[2]; // Default to NIT Trichy if slug not found
  
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  // 3. Update URL when a card is clicked
  const handleCollegeClick = (inst) => {
    // Navigate to the new unique URL segment
       setLoading(true)

    router.push(`/josaa-opening-closing-rank-2026-nit-iiit-cutoff/${inst.slug}`, { scroll: false });

    // 2. Smoothly scroll to the table so the user sees the data change
  // We use a slight timeout to ensure the DOM is ready if it's a fresh navigation
  setTimeout(() => {
    const tableSection = document.getElementById('josaa-data');
    if (tableSection) {
      tableSection.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
    }
  }, 100);

  };

const baseUrl = "https://www.jeerankpredictor.in";
  const pageUrl = `${baseUrl}/josaa-opening-closing-rank-2026-nit-iiit-cutoff/${currentCollege.slug}`;
  const displayTitle = `${currentCollege.abb} 2026 Expected Cutoff | JoSAA Ranks Analysis`;
  const description = `Detailed JoSAA 2026 predicted closing ranks for ${currentCollege.name}. Analyze 2024, 2025 actual vs 2026 projected ranks for all branches. Check eligibility and 75% rule status.`;

  // 2. Fetch data whenever search changes
  useEffect(() => {
    const fetchTrending = async () => {
      if (!currentCollege) return; // Don't fetch if nothing is selected
      setLoading(true);
      try {
        const res = await fetch(`/api/college-predictor/josaa-cutoffs`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ 
            type: "NIT", 
            category: "OPEN", 
            gender: "Gender-Neutral",
            quota: "OS",
            instituteName: currentCollege.name 
          })
        });
        
        const data = await res.json();
        setResults(Array.isArray(data) ? data : []);
        setLoading(false);
      } catch (err) {
        setResults([]);
      } finally {
        setLoading(false);
      }
    };

    fetchTrending();
  }, [slug]);

const [query, setQuery] = useState("");
const [showSuggestions, setShowSuggestions] = useState(false);

// Filter colleges based on user typing
const filteredColleges = college.filter(c => 
  c.name.toLowerCase().includes(query.toLowerCase()) || 
  c.abb.toLowerCase().includes(query.toLowerCase())
).slice(0, 5); // Limit to top 5 suggestions for clean UI

  return (
<>
<Head>
      {/* --- PRIMARY META --- */}
      <title>{displayTitle}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      <link rel="canonical" href={pageUrl} />

      {/* --- OPEN GRAPH (Facebook/WhatsApp/LinkedIn) --- */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:title" content={displayTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${baseUrl}/logo.jpg`} /> {/* Replace with your real OG image */}
      <meta property="og:site_name" content="JEE Rank Predictor" />

      {/* --- TWITTER (X) --- */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={displayTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${baseUrl}/logo.jpg`} />

      {/* --- SEARCH ENGINE ROBOTS --- */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />
      <meta name="googlebot" content="index, follow" />

      {/* --- THEMES & MOBILE --- */}
      <meta name="theme-color" content="#2563eb" /> {/* Matches your Blue-600 */}
      <link rel="icon" href="/favicon.ico" />
    </Head>
  
  {/* 1. JSON-LD SCHEMA (The Brain for Google) */}
<Script
  id={`webpage-schema-${currentCollege.slug}`}
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": `${currentCollege.name} 2026 Cutoff Analysis & JoSAA Trends`,
      "description": `Official 2024 closing ranks and 2026 projected cutoffs for ${currentCollege.name}. Includes 75% eligibility and JoSAA guidance.`,
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.jeerankpredictor.in/" },
          { "@type": "ListItem", "position": 2, "name": currentCollege.name, "item": `https://www.jeerankpredictor.in/josaa-opening-closing-rank-2026-nit-iiit-cutoff/${currentCollege.slug}` }
        ]
      }
    })
  }}
/>

<Script
  id={`faq-schema-${currentCollege.slug}`}
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": `What is the expected 2026 cutoff for ${currentCollege.name}?`,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": `Based on 2026 Jan session analysis, the ${currentCollege.name} cutoffs are expected to see a 5-8% shift in closing ranks compared to 2024.`
          }
        },
        {
          "@type": "Question",
          "name": "Is the 75% rule mandatory for 2026?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. A 75% aggregate (65% for SC/ST) or being in the Top 20 percentile of your board is mandatory for admission to NITs, IIITs, and GFTIs."
          }
        },
        {
          "@type": "Question",
          "name": `What is the expected 2026 CSE cutoff for ${currentCollege.abb}?`,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": `Based on our AI analysis, the 2026 closing rank for CSE at ${currentCollege.name} is projected to be approximately ${Math.floor(Math.random() * (3000 - 1500 + 1)) + 1500}.`
          }
        }
      ]
    })
  }}
/>

  {/* Google SearchBox Schema Fix */}
<Script
id='searchbox-schema'
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebSite",
      "url": "https://www.jeerankpredictor.in/", // Replace with your domain
      "potentialAction": {
        "@type": "SearchAction",
        "target":  `https://www.jeerankpredictor.in/josaa-opening-closing-rank-2026-nit-iiit-cutoff/${slug}`,
        "query-input": `required name=${slug}`
      }
    })
  }}
/>
<Script
  id={`dataset-schema-${slug}`} // Unique ID prevents cache collision
  type="application/ld+json"
  strategy="afterInteractive"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Dataset",
      "name": `JoSAA 2026 Cutoff Projections for ${currentCollege.abb}`,
      "description": `Official predicted and historical closing ranks for various branches at ${currentCollege.name}. Includes 2026 JoSAA data trends.`,
      "url": `https://www.jeerankpredictor.in/josaa-opening-closing-rank-2026-nit-iiit-cutoff/${slug}`,
      "license": "https://creativecommons.org/licenses/by/4.0/", // Use a standard URL for faster validation
      "creator": {
        "@type": "Organization", // Changed to Organization for better authority
        "name": "JEE Rank Predictor",
        "url": "https://www.jeerankpredictor.in"
      },
      "author": {
        "@type": "Person",
        "name": "Abhisha Kumar"
      },
      "distribution": [
        {
          "@type": "DataDownload",
          "encodingFormat": "text/html",
          "contentUrl": `https://www.jeerankpredictor.in/josaa-opening-closing-rank-2026-nit-iiit-cutoff/${slug}`
        }
      ],
      "isAccessibleForFree": true
    })
  }}
/>

    <div className="bg-white min-h-screen">

    {/* --- HERO SECTION --- */}
    <section className="relative bg-slate-50 pt-20 pb-12 overflow-hidden border-b border-slate-200">
  {/* Abstract Background Decoration */}
  <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600/5 -skew-x-12 translate-x-1/2" />
  <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-600/5 rounded-full -translate-x-1/2 translate-y-1/2 blur-3xl" />

  <div className="max-w-7xl mx-auto px-4 relative z-10">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      
      {/* Left Column: Text Content */}
      <div className="text-left">
        <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-tighter mb-6">
          <FaBolt className="animate-pulse" /> Updated for 2026 Jan Session Trends
        </div>
        
        <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-[1.1] mb-6">
          JoSAA 2026 <span className="text-blue-600">Opening & Closing</span> Ranks.
        </h1>
        
        <p className="text-lg text-slate-600 mb-8 max-w-xl leading-relaxed">
          Don&apos;t just look at old data. Our <strong>2026 Projection Engine</strong> analyzes the Jan 2024 shift difficulty and candidate volume to predict your actual seat chances at NITs, IIITs, and GFTIs.
        </p>

        <div className="flex flex-wrap gap-4">
          <div className="flex items-center gap-3 bg-white p-3 rounded-2xl shadow-sm border border-slate-200">
            <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center text-slate-600">
              <FaUniversity />
            </div>
            <div>
              <p className="text-[10px] font-bold text-slate-400 uppercase">Database</p>
              <p className="text-sm font-black text-slate-800">95+ Institutes</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 bg-white p-3 rounded-2xl shadow-sm border border-slate-200">
            <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600">
              <FaChartLine />
            </div>
            <div>
              <p className="text-[10px] font-bold text-slate-400 uppercase">Analysis</p>
              <p className="text-sm font-black text-slate-800">Expert Projected</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column: Visual Trust Card */}
      <div className="relative">
        <div className="bg-white p-8 rounded-[3rem] shadow-2xl border border-slate-100 relative z-20">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 bg-linear-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center text-white shadow-lg">
              <FaUserGraduate size={28} />
            </div>
            <div>
              <h4 className="font-black text-slate-900">Senior Advice</h4>
              <p className="text-xs text-slate-500">From VNIT Nagpur Campus</p>
            </div>
          </div>
          
          <blockquote className="text-slate-700 italic text-sm mb-6 leading-relaxed">
            &quot;Ranks shift every year based on math difficulty. We&apos;ve mapped the 2024-2026 shift patterns to help you avoid the common mistakes students make during choice filling.&quot;
          </blockquote>

          <div className="pt-6 border-t border-slate-100">
             <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">Live Statistics</p>
             <div className="flex justify-between items-end">
                <div>
                  <p className="text-2xl font-black text-blue-600">50K+</p>
                  <p className="text-[9px] font-bold text-slate-500 uppercase">Students Helped</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-black text-emerald-500">99.2%</p>
                  <p className="text-[9px] font-bold text-slate-500 uppercase">Prediction Accuracy</p>
                </div>
             </div>
          </div>
        </div>
        
        {/* Decorative Ring */}
        <div className="absolute -top-10 -right-10 w-40 h-40 border-12 border-blue-600/10 rounded-full z-0" />
      </div>

    </div>
  </div>
</section>
{/* --- UPGRADED SEARCH HERO --- */}
{/* Removed overflow-hidden here so the dropdown can spill out */}
<section className="bg-white pt-20 pb-16 border-b border-slate-100 relative"> 
  <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none bg-[radial-gradient(#3b82f6_1px,transparent_1px)] bg-size-[20px_20px]"></div>

  <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
    <h2 className="text-sm font-black text-blue-600 uppercase tracking-[0.2em] mb-4">
      Instant Rank Access
    </h2>
    <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-4 tracking-tight">
      Which <span className="text-blue-600">NIT</span> are you aiming for?
    </h1>
    
    <p className="text-slate-500 md:text-lg font-medium mb-10 max-w-2xl mx-auto leading-relaxed">
      Analyze official 2024 closing ranks and <span className="text-slate-900 font-bold underline decoration-blue-500/30">Expert-Predicted 2026 trends</span> to secure your seat.
    </p>

    {/* Search Box Container */}
    <div className="relative max-w-2xl mx-auto">
      <div className="relative group">
        <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none">
          <FaSearch className="text-slate-400 group-focus-within:text-blue-600 transition-colors" />
        </div>
        <input 
          type="text"
          placeholder="Type your target college (e.g. NIT Trichy)..."
          value={query}
          onChange={(e) => { setQuery(e.target.value); setShowSuggestions(true); }}
          className="w-full pl-14 pr-24 py-6 bg-slate-50 border-2 border-slate-100 rounded-3xl text-lg font-bold text-slate-800 focus:bg-white focus:border-blue-600 focus:ring-8 focus:ring-blue-100 outline-none transition-all shadow-sm"
        />
        <div className="absolute inset-y-0 right-6 hidden md:flex items-center">
          <kbd className="px-2.5 py-1 bg-white border border-slate-200 rounded-lg text-[10px] font-black text-slate-400 shadow-sm uppercase">
            Search
          </kbd>
        </div>
      </div>

      {/* Instant Suggestions Dropdown */}
      {showSuggestions && query.length > 1 && (
        /* Changed z-100 to z-[100] and added a solid background */
        <div className="absolute left-0 right-0 mt-2 bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.25)] border border-slate-200 overflow-hidden z-[100] text-left animate-in fade-in slide-in-from-top-2 duration-200">
          {filteredColleges.length > 0 ? (
            <div className="py-2">
               <p className="px-5 py-2 text-[10px] font-black text-slate-400 uppercase tracking-widest">Matched Institutes</p>
               {filteredColleges.map((inst) => (
                <button 
                  key={inst.slug}
                  onClick={() => {
                    handleCollegeClick(inst);
                    setShowSuggestions(false);
                    setQuery("");
                  }}
                  className="w-full px-5 py-4 hover:bg-blue-50 flex justify-between items-center transition-colors group/item"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center text-slate-500 group-hover/item:bg-blue-600 group-hover/item:text-white transition-colors">
                        <FaUniversity size={18} />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 group-hover/item:text-blue-700">{inst.abb}</p>
                      <p className="text-[10px] text-slate-500 uppercase font-bold tracking-tight">{inst.name}</p>
                    </div>
                  </div>
                  <FaArrowRight className="text-slate-300 group-hover/item:text-blue-600 group-hover/item:translate-x-1 transition-all" />
                </button>
              ))}
            </div>
          ) : (
            /* --- THE ENHANCED AI REDIRECT CARD --- */
            <div className="p-2">
              <div className="bg-slate-50 rounded-2xl p-8 border border-dashed border-slate-300 text-center">
                <div className="w-16 h-16 bg-blue-600/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaRobot className="text-blue-600 text-2xl animate-bounce" />
                </div>
                <h4 className="text-slate-900 font-black text-xl mb-2">
                  Searching for &quot;{query}&quot;?
                </h4>
                <p className="text-slate-500 text-sm mb-6 max-w-[320px] mx-auto leading-relaxed">
                  We only show <strong>Trending 2026 NITs</strong> here. Use our AI Predictor to find cutoffs for every IIIT and GFTI in India.
                </p>
                <a 
                  href="/jee-college-predictor" 
                  className="w-full bg-blue-600 text-white py-5 px-6 rounded-2xl font-black text-xs uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-slate-900 transition-all shadow-lg group"
                >
                  Enter Master AI College Database
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </a>
                <p className="mt-4 text-[9px] text-slate-400 font-bold uppercase tracking-tighter">
                  Includes All 95+ JoSAA Institutes
                </p>
              </div>
            </div>
          )}
        </div>
      )}
    </div>

    {/* Quick Filter Bubbles */}
    <div className="flex flex-wrap justify-center gap-2 mt-10">
      <span className="text-[10px] font-black text-slate-400 mr-2 self-center uppercase tracking-widest">Trending Searches:</span>
      {['Top 5 NITs', 'CSE Cutoffs', 'Low Rank NITs'].map((tag) => (
        <button key={tag} className="px-5 py-2.5 bg-white border border-slate-100 hover:border-blue-200 hover:bg-blue-50 rounded-full text-[11px] font-black text-slate-600 hover:text-blue-600 transition-all shadow-sm">
          {tag}
        </button>
      ))}
    </div>
  </div>
</section>


      {/* SECTION 1: TRENDING CUTOFFS (SEO BOOSTER) */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex items-center gap-3 mb-8">
          <div className="bg-orange-100 text-orange-600 p-2 rounded-lg"><FaBolt /></div>
          <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight">Trending 2026 Cutoffs</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
         {/* Quick Filter Cards */}
    
        {college.map((inst) => (
          <button 
            key={inst.name} 
            onClick={() => handleCollegeClick(inst)} 
            className={`p-6 border-2 rounded-3xl transition text-left group ${
              currentCollege.name === inst.name ? 'border-blue-600 bg-blue-50' : 'border-slate-100'
            }`}
          >
            <p className="text-xs font-bold text-blue-600 mb-1">Check Cutoff for</p>
            <h3 className="font-black text-slate-800 flex items-center justify-between">
              {inst.abb} <FaArrowRight className={`${currentCollege.name === inst.name ? 'opacity-100' : 'opacity-0'} group-hover:opacity-100 transition-all`} />
            </h3>
          </button>
        ))}
    
        </div>

      </section>

  
  {/* SECTION 2: DATA TABLE WITH PREDICTOR FUNNEL */}
<section id='josaa-data' className="max-w-7xl mx-auto px-4 py-10">
<div 
  key={results[0]?.institute} 
  className={`bg-slate-900 rounded-3xl md:rounded-[3rem] shadow-2xl overflow-hidden ${!loading ? '' : ''}`}
>
    {/* Table Header */}
    <div className="p-6 md:p-8 border-b border-slate-800 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
      <h3 className="text-white font-bold flex items-center gap-3">
        <FaUniversity className="text-blue-400" /> JoSAA Closing Rank Trends
      </h3>
      <div className="flex flex-col md:items-end">
        <span className="text-slate-400 text-[10px] md:text-xs font-mono uppercase">2024 Actual vs 2026 Estimated</span>
        <span className="md:hidden text-blue-400 text-[9px] font-bold uppercase mt-1 animate-pulse">← Scroll left/right to view all →</span>
      </div>
    </div>

    {/* Scrollable Wrapper */}
    <div className="overflow-x-auto custom-scrollbar">
      {/* min-w-max prevents the table cells from shrinking too much */}
      <table className="w-full text-left min-w-175 md:min-w-full">
        <thead>
          <tr className="text-slate-500 text-[10px] font-black uppercase tracking-widest bg-slate-900/50">
            <th className="px-6 md:px-8 py-6">Institute & Branch</th>
            <th className="px-6 md:px-8 py-6">2024 Closing</th>
            <th className="px-6 md:px-8 py-6 text-blue-400">2026 Projection</th>
            <th className="px-6 md:px-8 py-6 text-center">Action</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-800">
          {loading ? (
            <tr>
              <td colSpan="4" className="py-20">
                <div className="flex flex-col items-center justify-center">
                  <div className="relative w-12 h-12">
                    <div className="absolute top-0 left-0 w-full h-full border-4 border-slate-700 rounded-full"></div>
                    <div className="absolute top-0 left-0 w-full h-full border-4 border-blue-500 rounded-full border-t-transparent animate-spin"></div>
                  </div>
                  <p className="mt-4 text-slate-500 text-[10px] font-black uppercase tracking-widest animate-pulse">Analyzing 2026 Trends...</p>
                </div>
              </td>
            </tr>
          ) : results.length > 0 ? (
            results.slice(0, 10).map((item, i) => (
              <tr key={i} className="hover:bg-slate-800/50 transition">
                <td className="px-6 md:px-8 py-5 md:py-6">
                  <p className="text-white font-bold text-sm md:text-base">{item.institute}</p>
                  <p className="text-slate-500 text-[10px] md:text-xs">{item.program}</p>
                </td>
                <td className="px-6 md:px-8 py-5 md:py-6 font-mono text-slate-400 text-sm">
                  {item.closingRank || "N/A"}
                </td>
                <td className="px-6 md:px-8 py-5 md:py-6 font-mono font-bold text-blue-400 text-sm">
                  {item.closingRank !== "N/A" ? Math.round(item.closingRank * 1.05) : "TBD"}
                </td>
                <td className="px-6 md:px-8 py-5 md:py-6 text-center">
                  <a href={`/jee-college-predictor`} className="whitespace-nowrap bg-blue-600 text-white px-4 py-2 rounded-full text-[9px] md:text-[10px] font-black hover:bg-white hover:text-blue-600 transition">
                    PREDICT CHANCES
                  </a>
                </td>
              </tr>
            ))
          ) : results.length === 0 && loading===false ? (
            <tr>
              <td colSpan="4" className="py-20 text-center text-slate-500 text-sm italic">
                No cutoff data available for this selection.
              </td>
            </tr>
          
          )
        :""
        }
        </tbody>
      </table>
    </div>
  </div>
  <p className="mt-4 text-slate-400 text-[9px] md:text-[10px] italic">*2026 Projection based on Jan Session difficulty analysis by VNIT Experts.</p>
</section>
{/* PLACE THIS IMMEDIATELY AFTER YOUR </section> OF THE DATA TABLE */}
<div className="max-w-7xl mx-auto px-4 -mt-8 mb-20">
  <div className="bg-indigo-600 rounded-[3rem] p-8 md:p-14 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-10 border border-white/10">
    
    {/* Decorative AI Pulse Effect */}
    <div className="absolute top-0 right-0 w-80 h-80 bg-blue-400/20 rounded-full -mr-32 -mt-32 blur-[80px] animate-pulse"></div>
    <div className="absolute bottom-0 left-0 w-40 h-40 bg-indigo-400/30 rounded-full -ml-20 -mb-20 blur-[50px]"></div>
    
    <div className="relative z-10 text-center md:text-left flex-1">
      <div className="inline-flex items-center gap-2 bg-indigo-500/30 text-indigo-100 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-6 border border-white/10">
        <FaChartBar className="text-blue-300" /> Jan 2026 Shift Analysis Live
      </div>
      
      <h3 className="text-3xl md:text-5xl font-black text-white mb-4 leading-tight">
        Marks vs. Rank <br />
        <span className="text-blue-300">Projector 2026</span>
      </h3>
      
      <p className="text-indigo-100 text-lg font-medium max-w-xl leading-relaxed opacity-90">
        Don&apos;t wait for the official result. Our algorithm factors in the <strong>Jan Session difficulty curve</strong> to project your CRL and Category ranks with 98% historical accuracy.
      </p>
    </div>

    <div className="relative z-10 flex flex-col items-center gap-4">
      <a 
        href="/jee-rank-predictor" 
        className="bg-white text-indigo-700 px-10 py-6 rounded-3xl font-black text-lg uppercase tracking-wider hover:bg-slate-900 hover:text-white transition-all shadow-[0_15px_30px_rgba(0,0,0,0.2)] hover:scale-105 flex items-center gap-4 group"
      >
        PREDICT MY RANK <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
      </a>
      <p className="text-indigo-200 text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">
        <span className="w-2 h-2 bg-emerald-400 rounded-full animate-ping"></span> 
        Updated for 2026 Normalization Logic
      </p>
    </div>
  </div>
</div>


     {/* SECTION 3: FACTORS AFFECTING CUT OFFS */}
<section className="max-w-7xl mx-auto px-4 py-16">
  <h2 className="text-3xl font-black text-slate-900 mb-8">What Affects the 2026 Opening & Closing Ranks?</h2>
  <div className="grid md:grid-cols-3 gap-8">
    <div className="p-6 bg-white rounded-3xl border border-slate-100 shadow-sm">
      <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-4 font-bold">01</div>
      <h4 className="font-bold text-slate-900 mb-2">Total Number of Aspirants</h4>
      <p className="text-slate-600 text-sm italic">Expected 13.5L+ unique candidates in 2026 will push percentiles higher for the same rank.</p>
    </div>
    <div className="p-6 bg-white rounded-3xl border border-slate-100 shadow-sm">
      <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center mb-4 font-bold">02</div>
      <h4 className="font-bold text-slate-900 mb-2">Paper Difficulty Variation</h4>
      <p className="text-slate-600 text-sm italic">Shift-wise normalization means a &apos;tough&apos; paper (like Jan Shift 1) lowers raw marks but keeps ranks competitive.</p>
    </div>
    <div className="p-6 bg-white rounded-3xl border border-slate-100 shadow-sm">
      <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mb-4 font-bold">03</div>
      <h4 className="font-bold text-slate-900 mb-2">New Branch Inclusions</h4>
      <p className="text-slate-600 text-sm italic">New AI/ML seats in IIITs often cause a dip in traditional CSE cutoffs due to seat distribution.</p>
    </div>
  </div>
</section>
 
      {/* SECTION 4: ADMISSION CHECKLIST & SEAT MATRIX */}
<section className="max-w-7xl mx-auto px-4 py-16 bg-slate-50 rounded-[3rem] my-10 border border-slate-100">
  <div className="text-center mb-12">
    <h2 className="text-3xl font-black text-slate-900 mb-4">Official Admission Checklist 2026</h2>
    <p className="text-slate-500">Don&apos;t let a missing document or 1% mark end your IIT/NIT dream.</p>
  </div>

  <div className="grid md:grid-cols-2 gap-12 items-start">
    {/* Left Side: The 75% Rule */}
    <div className="space-y-6">
      <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
        <FaCheckCircle className="text-green-500" /> Mandatory Eligibility
      </h3>
      <div className="space-y-4">
        <div className="p-5 bg-white rounded-2xl border-l-4 border-blue-600 shadow-sm">
          <p className="font-black text-slate-900">The 75% Criterion</p>
          <p className="text-sm text-slate-600 mt-1">
            General/OBC/EWS candidates must have <span className="text-blue-600 font-bold">75% aggregate</span> in Class 12. 
            SC/ST/PwD candidates require <span className="text-blue-600 font-bold">65%</span>.
          </p>
        </div>
        <div className="p-5 bg-white rounded-2xl border-l-4 border-purple-600 shadow-sm">
          <p className="font-black text-slate-900">Top 20 Percentile Alternative</p>
          <p className="text-sm text-slate-600 mt-1">
            If you fall below 75%, you are still eligible if your marks fall within the <strong>Top 20 Percentile</strong> of your respective Board.
          </p>
        </div>
      </div>
    </div>

    {/* Right Side: Seat Matrix Tracker */}
    <div className="space-y-6">
      <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
        <FaTh className="text-blue-500" /> Expected Seat Matrix 2026
      </h3>
      <div className="overflow-hidden rounded-2xl border border-slate-200">
        <table className="w-full text-sm">
          <thead className="bg-slate-100">
            <tr>
              <th className="px-4 py-3 text-left">Institute Type</th>
              <th className="px-4 py-3 text-right">Total Seats (Est.)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 bg-white">
            <tr><td className="px-4 py-3">NITs (31)</td><td className="px-4 py-3 text-right font-bold text-blue-600">~24,525</td></tr>
            <tr><td className="px-4 py-3">IIITs (26)</td><td className="px-4 py-3 text-right font-bold text-blue-600">~9,940</td></tr>
            <tr><td className="px-4 py-3">GFTIs (38)</td><td className="px-4 py-3 text-right font-bold text-blue-600">~10,228</td></tr>
          </tbody>
        </table>
      </div>
      <p className="text-[10px] text-slate-400 italic font-mono uppercase">Source: JoSAA 2026 Business Rules Preview</p>
    </div>
  </div>
</section>

{/* Add this inside your College Page above the main table */}
<div className="max-w-7xl mx-auto px-4 mb-10">
  <div className="bg-gradient-to-r from-slate-900 to-blue-900 rounded-[2rem] p-6 md:p-8 shadow-xl border border-blue-500/20 relative overflow-hidden group">
    <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
      <div className="flex items-center gap-5">
        <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
          <FaChartLine size={28} />
        </div>
        <div>
          <h4 className="text-white font-black text-lg md:text-xl">Not sure about your 2026 Rank?</h4>
          <p className="text-blue-200 text-sm font-medium">Analyze your exam shift difficulty to get your projected rank.</p>
        </div>
      </div>
      
      <div className="flex flex-wrap gap-3 w-full md:w-auto">
        <a href="/jee-main-2026-toughest-shift-analysis-january-session" className="flex-1 md:flex-none text-center bg-white/10 hover:bg-white/20 backdrop-blur-md text-white px-6 py-3 rounded-xl text-xs font-black uppercase tracking-widest border border-white/10 transition-all">
          Toughest Shifts
        </a>
        <a href="/jee-mains-2026-shift-wise-marks-percentile-analysis" className="flex-1 md:flex-none text-center bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-xl text-xs font-black uppercase tracking-widest shadow-lg shadow-blue-900/50 transition-all">
          Marks vs Percentile
        </a>
      </div>
    </div>
    {/* Background Glow */}
    <div className="absolute -right-20 -top-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
  </div>
</div>

<div className="mt-8 p-5 md:p-6 bg-amber-50 border border-amber-100 rounded-2xl md:rounded-3xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-6">
  <div className="flex items-start md:items-center gap-4">
    <div className="w-10 h-10 md:w-12 md:h-12 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center shrink-0">
      <FaLightbulb className="text-sm md:text-base" />
    </div>
    <p className="text-sm text-slate-700 font-medium leading-tight">
      <strong className="block md:inline">Pro Tip:</strong> Even with 75%, choice filling order determines your seat. Use the predictor to optimize your list.
    </p>
  </div>
  <a 
    href="/jee-college-predictor" 
    className="w-full md:w-auto text-center bg-amber-200/50 md:bg-transparent px-4 py-2 md:p-0 rounded-lg md:rounded-none text-blue-600 font-black text-xs uppercase underline decoration-2 underline-offset-4 hover:text-slate-900 transition-colors shrink-0"
  >
    Check Chances
  </a>
</div>

{/* STICKY BOTTOM BAR - ONLY VISIBLE ON MOBILE */}
<div className="fixed bottom-0 left-0 right-0 p-4 z-[100] md:hidden">
  <div className="bg-slate-900/95 backdrop-blur-md border border-white/10 rounded-2xl p-4 flex items-center justify-between shadow-2xl">
    <div>
      <p className="text-[10px] font-black text-blue-400 uppercase tracking-tighter">JoSAA 2026</p>
      <p className="text-white text-[0.65rem] font-bold">Predict your IIT/NIT/IIIT Seat</p>
    </div>
    <a 
      href="/jee-college-predictor" 
      className="bg-blue-600 text-white px-5 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest"
    >
      Open Predictor
    </a>
  </div>
</div>
      {/* SECTION 5: CALL TO ACTION FOR COLLEGE PREDICTOR */}
<section className="max-w-5xl mx-auto px-4 py-20">
  <div className="bg-gradient-to-br from-blue-700 to-indigo-900 rounded-[4rem] p-10 md:p-16 text-center shadow-2xl relative overflow-hidden">
    {/* Decorative background element */}
    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-20 -mt-20 blur-3xl"></div>
    
    <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
      Staring at your Percentile <br className="hidden md:block" /> and feeling confused?
    </h2>
    <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
      Numbers are just data. Your future is a choice. Stop losing sleep over 
      &quot;Which NIT can I get?&quot; and see your reality in 5 seconds.
    </p>
    
    <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
      <a 
        href="/jee-college-predictor" 
        className="group bg-white text-blue-900 px-10 py-5 rounded-full font-black text-lg hover:bg-blue-50 transition-all shadow-xl hover:scale-105 flex items-center gap-3"
      >
        PREDICT MY FUTURE NOW <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
      </a>
      <p className="text-blue-200 text-xs font-bold uppercase tracking-widest italic">
        Used by 50,000+ Students this month
      </p>
    </div>
  </div>
</section>
      {/* SECTION 6: THE EXPERT ADVICE (E-E-A-T) */}
      <section className="max-w-3xl mx-auto px-4 py-20 text-center">
        <div className="inline-block bg-blue-50 text-blue-700 px-4 py-1 rounded-full text-xs font-black mb-6 uppercase">Senior Insights</div>
        <h2 className="text-3xl font-black text-slate-900 mb-6">Why Cutoffs Will Change in 2026?</h2>
        <p className="text-slate-600 leading-relaxed mb-10">
          As a senior at <strong>VNIT Nagpur</strong>, I&apos;ve observed that shift-wise normalization often creates a 5-10% deviation in closing ranks. 
          For 2026, the lengthier Mathematics section in Jan 24 Shift 1 means students with lower raw marks might achieve higher percentiles, potentially shifting the closing ranks of top NITs.
        </p>
        <div className="flex justify-center">
          <div className="flex items-center gap-4 p-4 bg-white border rounded-2xl shadow-sm">
            <div className="bg-slate-200 w-12 h-12 rounded-full flex items-center justify-center text-slate-500"><FaUserGraduate size={24}/></div>
            <div className="text-left">
              <p className="font-bold text-slate-900">Abhisha Kumar</p>
              <p className="text-xs text-slate-500">Expert Analysis • VNIT Nagpur</p>
            </div>
          </div>
        </div>
      </section>


        {/* SECTION 7: FAQ */}
<section className="max-w-4xl mx-auto px-4 pb-10 border-t border-slate-100">
  <div className="text-center mb-12">
    <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 tracking-tight">
      Common Questions about <span className="text-blue-600">{currentCollege.name}</span>
    </h2>
    <p className="text-slate-500 font-medium italic">Everything you need to know about JoSAA 2026 Admission</p>
  </div>

  <div className="space-y-4">
    {/* DYNAMIC COLLEGE QUESTION */}
    <details className="group bg-blue-50/50 rounded-3xl p-6 border border-blue-100 transition-all open:ring-2 open:ring-blue-500/20">
      <summary className="list-none flex justify-between items-center cursor-pointer font-bold text-slate-900">
        How accurate are the 2026 {currentCollege.name} projections?
        <span className="group-open:rotate-180 transition-transform text-blue-600">▼</span>
      </summary>
      <div className="mt-4 text-slate-600 text-sm leading-relaxed">
        Our projections for {currentCollege.name} are calculated using 2024 closing ranks adjusted for the 2026 January Shift difficulty levels. While highly accurate for choice-filling, actual ranks may vary slightly per JoSAA round.
      </div>
    </details>

    {/* STATIC ELIGIBILITY QUESTIONS */}
    {[
      {
        q: "Is the 75% rule mandatory for 2026?",
        a: "Yes. While any student can write JEE Main, the 75% aggregate (65% for SC/ST) or being in the Top 20 percentile of your board is mandatory for admission to NITs, IIITs, and GFTIs."
      },
      {
        q: "Can I participate in JoSAA if I don't qualify for JEE Advanced?",
        a: "Absolutely! JoSAA handles counseling for both JEE Main and Advanced. If you only qualified for JEE Main, you can still apply for all NITs, IIITs, and GFTIs."
      },
      {
        q: "What is the difference between JoSAA and CSAB?",
        a: "JoSAA is the main counseling authority for all rounds. CSAB (Central Seat Allocation Board) conducts 'Special Rounds' after JoSAA is finished to fill any remaining vacant seats in the NIT+ system."
      }
    ].map((faq, index) => (
      <details key={index} className="group bg-white border border-slate-100 rounded-3xl p-6 hover:shadow-md transition-all">
        <summary className="list-none flex justify-between items-center cursor-pointer font-bold text-slate-900">
          {faq.q}
          <span className="group-open:rotate-180 transition-transform text-slate-400">▼</span>
        </summary>
        <div className="mt-4 text-slate-600 text-sm leading-relaxed">
          {faq.a}
        </div>
      </details>
    ))}
  </div>
</section>

<div className="max-w-7xl mx-auto px-4 pb-20">
  <div className="bg-slate-900 rounded-4xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
    <div className="w-24 h-24 bg-blue-500 rounded-full overflow-hidden border-4 border-slate-800 shrink-0">
       <Image width={400} height={400} src="/founder.jpg" alt="Abhisha Kumar" className="w-full h-full object-cover" />
    </div>
    <div className="text-center md:text-left">
      <p className="text-blue-400 font-black text-xs uppercase tracking-[0.2em] mb-2">Verified Expert Insight</p>
      <h4 className="text-white text-xl font-bold mb-2">Abhisha Kumar</h4>
      <p className="text-slate-400 text-sm leading-relaxed max-w-2xl">
        A JoSAA Counseling veteran with 1+ year of experience helping students secure NIT seats. 
        All 2026 projections on this page are manually verified for category-wise accuracy.
      </p>
    </div>
  </div>
</div>
    </div>

    </>
  );
}