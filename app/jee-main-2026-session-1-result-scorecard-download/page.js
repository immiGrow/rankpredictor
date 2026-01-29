import React from 'react';
import Head from 'next/head';
import { FaDownload, FaExternalLinkAlt, FaCalculator, FaHistory, FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa';
import Image from 'next/image';
import OfficialTracker from '@/components/OfficialTracker';

const JEEJanResultPage = () => {
  return (
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
        Status: Session 1 Results are expected by Feb 12, 2026. Stay Tuned!
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
            <button className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-black flex items-center gap-2 hover:bg-blue-700 shadow-xl shadow-blue-200 transition-all">
              <FaDownload /> Download Scorecard (Link 1)
            </button>
            <button className="bg-white border-2 border-slate-200 text-slate-700 px-8 py-4 rounded-2xl font-black flex items-center gap-2 hover:border-blue-600 transition-all">
              <FaExternalLinkAlt /> NTA Official Portal
            </button>
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
<div className="">
<OfficialTracker/>
</div>
        {/* 4. THE "PERCENTILE" EXPLAINER (Technical Authority) */}
        <section className="bg-slate-900 rounded-[3rem] p-10 text-white mb-20 overflow-hidden relative">
          <div className="relative z-10">
            <h2 className="text-3xl font-black mb-8 flex items-center gap-3">
              <FaCalculator className="text-green-400" /> How NTA Calculates Your Percentile
            </h2>
            <p className="text-slate-400 mb-8 max-w-3xl">
              NTA uses a **Normalization Process** to ensure fairness across shifts. Your percentile is NOT your percentage. It represents the percentage of candidates who scored equal to or less than you.
            </p>
            
            <div className="bg-white/10 border border-white/20 p-6 rounded-2xl mb-8">
              <p className="text-lg font-mono text-center">
                {"Percentile = $$100 \times \frac{\text{No. of candidates with raw score } \le \text{ yours}}{\text{Total no. of candidates in the session}}$$"}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex gap-4 p-4 bg-white/5 rounded-2xl">
                <FaCheckCircle className="text-green-400 shrink-0 mt-1" />
                <p className="text-sm text-slate-300">Percentile scores are calculated up to 7 decimal places to avoid ties.</p>
              </div>
              <div className="flex gap-4 p-4 bg-white/5 rounded-2xl">
                <FaExclamationTriangle className="text-yellow-400 shrink-0 mt-1" />
                <p className="text-sm text-slate-300">Your final All India Rank (AIR) is based on the best of your two session scores.</p>
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

      </main>
    </div>
  );
};

export default JEEJanResultPage;