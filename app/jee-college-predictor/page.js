"use client";

import Head from "next/head";
import Script from "next/script";
import React from "react";
import { useEffect, useState } from "react";

function CollegeCard({ college, userRank }) {
  const diff = college.crank - userRank;

// Map score ranges to icon, color, and tooltip
const chanceMap = [
  { min: 80, icon: "✅", color: "bg-green-100 text-green-800", barColor: "bg-green-600", label: "Very Safe" },
  { min: 60, icon: "⚡", color: "bg-blue-100 text-blue-800", barColor: "bg-blue-600", label: "Good Chance" },
  { min: 40, icon: "⚠️", color: "bg-yellow-100 text-yellow-800", barColor: "bg-yellow-500", label: "Borderline" },
];

// Pick the appropriate chance based on score
const chanceInfo = chanceMap.find(c => college.score >= c.min) || {
  icon: "❌",
  color: "bg-red-100 text-red-800",
  barColor: "bg-red-600",
  label: "Low Chance",
};


  return (
    <div className="border rounded-xl p-4 md:p-6 shadow-sm hover:shadow-md transition h-full flex flex-col bg-white">

      {/* HEADER */}
      <div className="flex justify-between items-start gap-3 mb-2">
        <h3 className="text-sm md:text-base font-semibold text-gray-900 leading-snug">
          {college.institute}
        </h3>

       <span
    className={`px-2 py-1 text-[0.6rem] font-semibold rounded-full ${chanceInfo.color}`}
    title={chanceInfo.label} // tooltip shows full text
  >
    {chanceInfo.icon}
  </span>
      </div>

      {/* PROGRAM */}
      <p className="text-sm text-gray-700 mt-1 leading-snug">
        {college.program}
      </p>

      {/* META */}
      <div className="mt-3 text-xs text-gray-500 space-y-1">
        <p>Round: <b>{college.round}</b></p>
        <p>Closing Rank: <b>{college.crank}</b></p>
        <p>
          Rank Gap:{" "}
          <span
            className={`font-semibold ${
              diff >= 0 ? "text-green-600" : "text-red-600"
            }`}
          >
            {diff >= 0 ? `+${diff}` : diff}
          </span>
        </p>
      </div>

      {/* CONFIDENCE BAR */}
      <div className="mt-auto pt-4">
        <div className="flex justify-between text-xs text-gray-500 mb-1">
          <span>Confidence</span>
          <span className="font-semibold">{college.score}%</span>
        </div>

        <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
          <div
            className={`h-2 rounded-full transition-all duration-500 ${chanceInfo.barColor}`}
            style={{ width: `${college.score}%` }}
          />
        </div>
      </div>
    </div>
  );
}


function EmailCTA({ rank, colleges }) {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

 const submit = async () => {
  setError("");
  setDone(false);

  // ✅ Stronger email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    setError("Enter a valid email to receive your PDF college report.");
    return;
  }

  setLoading(true);

  try {
    const res = await fetch("/api/college-predictor/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, rank, colleges }),
    });

    const data = await res.json();

    // ❌ Backend error handling
    if (!res.ok) {
      throw new Error(data?.message || "Failed to send report. Try again.");
    }

    // ✅ Success
    setDone(true);
  } catch (err) {
    console.error("Lead submit error:", err);
    setError(
      err.message ||
        "Something went wrong. Please try again after some time."
    );
  } finally {
    setLoading(false);
  }
};

  return (
    <section className="mt-20 w-full bg-linear-to-r from-blue-50 via-white to-blue-50 border-y border-blue-200">
      <div className="max-w-7xl mx-auto px-6 py-12 text-center">
        {!done ? (
          <>
            {/* Trust badge */}
            <div className="flex justify-center mb-4">
              <span className="bg-blue-100 text-blue-700 text-xs px-4 py-1 rounded-full font-semibold">
                Trusted JoSAA Cutoff Data • AI Assisted Analysis
              </span>
            </div>

            <h2 className="text-3xl font-bold text-gray-900">
              🔒 Get Your Complete JoSAA College Prediction
            </h2>

            <p className="mt-4 text-gray-600 max-w-3xl mx-auto text-sm leading-relaxed">
              We show only the most relevant colleges here.
              <br />
              Get the <b>complete JoSAA college list (PDF + detailed chances)</b> directly on your email.
            </p>

            <div className="mt-8 flex flex-col items-center">
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className={`w-full sm:w-96 border rounded-lg p-3 text-sm outline-none transition
                    ${error
                      ? "border-red-400 focus:ring-2 focus:ring-red-100"
                      : "border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                    }`}
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />

                <button
                  onClick={submit}
                  disabled={loading}
                  className="bg-blue-600 text-white px-8 py-3 cursor-pointer disabled:cursor-not-allowed rounded-lg font-semibold hover:bg-blue-700 transition disabled:opacity-60"
                >
                  {loading ? "Sending…" : "🔒 Email Me the Full List"}
                </button>
              </div>

              {/* Inline error message */}
              {error && (
                <div className="mt-3 bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-2 rounded-md max-w-md">
                  ⚠ {error}
                </div>
              )}
            </div>

            <p className="mt-6 text-xs text-gray-500">
              ✅ Free • ✅ No spam • ✅ Official JoSAA data
            </p>
          </>
        ) : (
          <div className="py-10">
            <div className="text-5xl mb-4">📩</div>
            <h3 className="text-2xl font-bold text-green-700">
              Prediction Sent Successfully!
            </h3>
            <p className="mt-3 text-sm text-gray-600">
              Please check your inbox.
              <br />
              If you don’t see it, check <b>Spam</b> or <b>Promotions</b>.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
function LockedCollegePreviewCard() {
  const scrollToCTA = () => {
    document.getElementById("unlock-cta")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="relative h-70 border rounded-lg cursor-pointer shadow-sm overflow-hidden bg-white flex items-center justify-center">

      {/* Blurred fake list */}
      <div className="absolute inset-0 p-4 blur-sm select-none">
        <ul className="space-y-3">
          {[...Array(4)].map((_, i) => (
            <li
              key={i}
              className="border rounded-md p-3 text-sm"
            >
              <p className="font-medium">National Institute of Technology, ████</p>
              <p className="text-gray-500 text-xs">██████ Engineering</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Overlay */}
<div className="relative z-10 text-center px-6">

  {/* Lock badge */}
  <div className="mx-auto mb-3 flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 text-xl">
    🔒
  </div>

  {/* Title */}
  <h3 className="text-lg font-semibold text-gray-900 leading-tight">
    Unlock Full College List
  </h3>

  {/* Subtitle */}
  <p className="text-sm text-gray-600 mt-2">
    View <b>all colleges matching your rank</b>
    <br />
    with accurate JoSAA chances
  </p>

  {/* CTA */}
  <button
    onClick={scrollToCTA}
    className="mt-4 w-full bg-blue-600 text-white py-2.5 rounded-lg text-sm font-semibold
               hover:bg-blue-700 cursor-pointer transition focus:outline-none focus:ring-2 focus:ring-blue-400"
  >
   🔐 Unlock Full List →
  </button>

  {/* Trust signals */}
  <div className="mt-3 text-xs text-gray-500 flex items-center justify-center gap-2">
    <span>✅ Free</span>
    <span>•</span>
    <span>🔐 No spam</span>
    <span>•</span>
    <span>📊 Official JoSAA data</span>
  </div>

</div>

    </div>
  );
}

const toolSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "JEE College Predictor 2026",
    "url": "https://jeerankpredictor.in/jee-college-predictor",
    "applicationCategory": "EducationApplication",
    "description": "Predict your eligible IITs, NITs, IIITs, and GFTIs using AI-assisted JoSAA cutoff analysis based on your JEE Main or Advanced rank. Supports category, quota & gender filters for accurate predictions.",
    "operatingSystem": "Web",
    "softwareVersion": "1.0",
    "creator": {
      "@type": "Organization",
      "name": "JEERankPredictor",
      "url": "https://jeerankpredictor.in"
    },
    "featureList": [
      "Predict eligible IIT, NIT, IIIT, GFTI colleges",
      "Supports JEE Main & Advanced ranks",
      "Category, quota & gender filters",
      "AI-assisted cutoff analysis",
      "Free college prediction tool"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "bestRating": "5",
      "ratingCount": "1240"
    }
  };



export default function CollegePredictor() {
  const [filters, setFilters] = useState(null);
  const [rank, setRank] = useState("");
  const [rankType, setRankType] = useState("main");
  const [form, setForm] = useState({});
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [warning, setWarning] = useState("");
  const [error, setError] = useState("");


  useEffect(() => {
    fetch("/api/college-predictor/filters")
      .then(res => res.json())
      .then(data => {
        setFilters(data);
        setForm({
          category: data.categories[0] || "",
          gender: data.genders[0] || "",
          quota: data.quotas[0] || "",
        });
      });
  }, []);

const predict = async () => {
  setLoading(true);
  setError("");
  setResult(null);

  try {
    const res = await fetch("/api/college-predictor/predict", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        rank: Number(rank),
        rankType,
        ...form,
      }),
    });

    // ❌ API-level error (500, 400, etc.)
    if (!res.ok) {
      const message = await res.text();
      throw new Error(message || "Something went wrong on server");
    }

    const data = await res.json();
    setResult(data);
  } catch (err) {
    console.error(err);

    setError(
      "⚠️ We couldn’t generate your prediction right now. Please try again in a moment."
    );
  } finally {
    setLoading(false);
  }
};


  if (!filters) return <p className="mt-10 text-center">Loading filters…</p>;

  return (
    <>
    <Head>
      {/* Primary Meta Tags */}
      <title>JEE College Predictor 2026 – Predict IITs, NITs & GFTIs Accurately</title>
      <meta
        name="description"
        content="Predict your eligible IITs, NITs, IIITs, and GFTIs using our free AI-assisted JEE College Predictor 2026. Supports JEE Main & Advanced ranks, category, quota & gender filters."
      />
      <link rel="canonical" href="https://jeerankpredictor.in/jee-college-predictor" />
      <meta name="robots" content="index, follow" />

      {/* Open Graph / Facebook */}
      <meta property="og:title" content="JEE College Predictor 2026 – Predict IITs, NITs & GFTIs Accurately" />
      <meta property="og:description" content="Find your realistic college options in IITs, NITs, IIITs, and GFTIs using our AI-powered JEE College Predictor 2026 tool. Free and student-friendly." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://jeerankpredictor.in/jee-college-predictor" />
      <meta property="og:site_name" content="JEERankPredictor" />
      <meta property="og:image" content="https://jeerankpredictor.in/logo.jpg" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="JEE College Predictor 2026 – Predict IITs, NITs & GFTIs Accurately" />
      <meta name="twitter:description" content="Predict your eligible IIT, NIT, IIIT & GFTI colleges using AI-assisted JEE College Predictor 2026. Supports JEE Main & Advanced rank, category & quota filters." />
      <meta name="twitter:image" content="https://jeerankpredictor.in/logo.jpg" />

      {/* JSON-LD Tool Schema */}
     
    </Head>
     <Script
        id="tool-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }}
      />
    <main className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center">
  JoSAA AI College Predictor 2026
</h1>

<p className="mt-2 text-center text-gray-600 text-sm leading-relaxed">
  Predict your eligible IITs, NITs, IIITs, and GFTIs using
  <span className="font-medium text-blue-700">
    {" "}AI-assisted JoSAA cutoff analysis
  </span>{" "}
  based on previous years’ data.
  <br />
  Enter your JEE Main or JEE Advanced rank and apply category, quota,
  and gender filters for accurate predictions.
</p>

<p className="mt-1 text-center text-xs font-semibold text-gray-500">
  Note: AI (All India) quota applies to IITs only.
  HS/OS quotas are applicable for NITs, IIITs, and GFTIs.
</p>


      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mt-6">
        <select
          className="border p-2"
          value={rankType}
          onChange={e => setRankType(e.target.value)}
        >
          <option value="main">JEE Main Rank</option>
          <option value="advanced">JEE Advanced Rank</option>
        </select>

        <input
          className="border p-2"
          placeholder="Enter Category Rank"
          type="number"
          value={rank}
          onChange={e => setRank(e.target.value)}
        />

        <select
          className="border p-2"
          value={form.category}
          onChange={e => setForm({ ...form, category: e.target.value })}
        >
          {filters.categories.map(v => <option key={v} value={v}>{v}</option>)}
        </select>

        <select
          className="border p-2"
          value={form.gender}
          onChange={e => setForm({ ...form, gender: e.target.value })}
        >
          {filters.genders.map(v => <option key={v} value={v}>{v}</option>)}
        </select>

        <select
          className="border p-2"
          value={rankType === "advanced" ? "AI" : form.quota}
          onChange={e => setForm({ ...form, quota: e.target.value })}
          disabled={rankType === "advanced"}
        >
          {filters.quotas.map(v => <option key={v} value={v}>{v}</option>)}
        </select>
      </div>

      {warning && <p className="mt-2 text-red-500">{warning}</p>}

      <button
        onClick={predict}
        disabled={loading || !rank}
        className="mt-6 bg-blue-600 text-white px-6 py-3 disabled:opacity-50 disabled:cursor-not-allowed hover:cursor-pointer rounded font-semibold hover:bg-blue-700 transition"
      >
        {loading ? "Analyzing…" : "Predict Colleges"}
      </button>
{error && (
  <div className="mt-4 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
    {error}
  </div>
)}
      {result && (
        <div className="mt-6 space-y-6">
          {result.high.length + result.medium.length + result.low.length === 0 ? (
            <p className="text-center text-gray-500 mt-6">No colleges matched your rank/filters</p>
          ) : (
            <>
              <div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
  {result.high.slice(0, 4).map((c, i) => (
    <CollegeCard key={i} college={c} userRank={rank}/>
  ))}
  {result.medium.slice(0, 6).map((c, i) => (
    <CollegeCard key={i} college={c} userRank={rank}/>
  ))}
  {result.low.slice(0, 4).map((c, i) => (
    <CollegeCard key={i} college={c} userRank={rank}/>
  ))}

  {/* Unlock card as its own grid item */}
  <LockedCollegePreviewCard />
</div>
              </div>

           

             
              
               
                   <div id="unlock-cta">
{result && <EmailCTA rank={rank} colleges={result} />}
</div>
             
            </>
          )}
        </div>
      )}

      <p className="text-xs text-center text-gray-500 mt-3">
  Predictions are based on JoSAA cutoff trends and previous years’ counselling data.
  This tool is for guidance only.
</p>

    </main>
    </>
  );
}
