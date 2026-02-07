// app/unlock/page.js
import React from 'react';
import UnlockButton from './UnlockButton';

export default async function UnlockPage({ searchParams }) {
  // NEXT.JS 16 FIX: searchParams must be awaited
  const params = await searchParams;
  
  // Extracting all the new fields sent from the Predictor page
  const userEmail = params.user || "Student";
  const userRank = params.rank || "N/A";
  const userCategory = params.category || "General";
  const userGender = params.gender || "Gender-Neutral";
  const userQuota = params.quota || "OS";
  const userRankType = params.rankType || "main";

  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col items-center py-12 px-4 font-sans">
      {/* 100% Trust Header */}
      <div className="max-w-xl w-full bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-blue-50 overflow-hidden">
        
        {/* Branding & Status */}
        <div className="bg-gradient-to-r from-blue-700 to-blue-600 p-8 text-white">
          <div className="flex justify-between items-start mb-4">
            <span className="bg-blue-500/30 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest border border-white/20">
              Official Report
            </span>
            <span className="flex items-center gap-1 text-green-300 text-xs font-bold">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-ping"></span> Verified Data
            </span>
          </div>
          <h1 className="text-2xl font-extrabold tracking-tight">JEE College Predictor Pro</h1>
          <p className="text-blue-100 text-sm mt-1 opacity-90">Analysis for: {userEmail}</p>
        </div>

        <div className="p-8">
          {/* Rank & Filter Summary Badge */}
          <div className="relative bg-blue-50/50 p-6 rounded-2xl border border-blue-100 mb-8 overflow-hidden">
            <div className="flex justify-between items-center relative z-10">
              <div>
                <p className="text-[10px] text-blue-600 font-black uppercase tracking-tighter mb-1">
                  {userRankType === "advanced" ? "JEE Advanced Rank" : "JEE Main Rank"}
                </p>
                <p className="text-4xl font-black text-slate-900 tracking-tight">{userRank}</p>
              </div>
              <div className="text-right">
                <p className="text-[10px] text-slate-500 font-bold uppercase mb-1">Selection Profile</p>
                <div className="bg-white border border-blue-200 px-3 py-1 rounded-lg shadow-sm">
                  <span className="text-blue-700 font-bold text-xs">{userCategory} • {userQuota}</span>
                </div>
              </div>
            </div>
            
            {/* Decorative background star */}
            <div className="absolute -right-4 -bottom-4 text-blue-100 opacity-20 transform rotate-12">
               <svg width="120" height="120" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            </div>
          </div>

          <h3 className="text-slate-800 font-bold text-lg mb-4 flex items-center gap-2">
            🚀 Ready to Unlock? 
          </h3>
          
          <div className="space-y-4 mb-8">
            {[
              { t: "Full List (80+ Colleges)", d: `Top ${userCategory} options for your rank` },
              { t: "Branch Wise Matrix", d: "Exact branch you'll get in each round" },
              { t: "Reservation Strategy", d: `${userQuota} Quota & ${userGender} analysis` },
            //  { t: "Bonus: NITian Guidance", d: "Personal 10-min roadmap call with an IITian/NITian" }
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start group">
                <div className="mt-1 bg-green-100 text-green-600 p-1 rounded-full group-hover:bg-green-500 group-hover:text-white transition-colors">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <div>
                  <p className="font-bold text-slate-800 text-sm leading-tight">{item.t}</p>
                  <p className="text-xs text-slate-500 mt-0.5">{item.d}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Pricing & CTA */}
          <div className="bg-slate-900 rounded-2xl p-6 text-center shadow-xl shadow-blue-200/50">
             <div className="flex justify-center items-center gap-3 mb-2">
                <span className="text-slate-400 line-through text-sm">₹499</span>
                <span className="bg-yellow-400 text-slate-900 text-[10px] font-black px-2 py-0.5 rounded-md uppercase">96% OFF</span>
             </div>
             <div className="flex justify-center items-baseline mb-4">
                <span className="text-white text-5xl font-black">₹15</span>
                <span className="text-slate-400 text-sm ml-2">Total</span>
             </div>

            {/* NEW: Passing ALL props to the button */}
            <UnlockButton 
               userEmail={userEmail} 
               userRank={userRank} 
               userCategory={userCategory}
               userGender={userGender}
               userQuota={userQuota}
               userRankType={userRankType}
            />

             <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold italic mt-4">
                One-time payment • Secure UPI & Cards
             </p>
          </div>
        </div>

        {/* Social Proof Footer */}
        <div className="bg-slate-50 p-5 border-t border-slate-100 text-center">
          <div className="flex justify-center -space-x-2 mb-2">
            {[1,2,3,4].map(i => (
              <div key={i} className="w-6 h-6 rounded-full border-2 border-white bg-slate-300 overflow-hidden">
                <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="user" />
              </div>
            ))}
            <div className="w-6 h-6 rounded-full border-2 border-white bg-blue-600 text-[8px] flex items-center justify-center text-white font-bold">+5k</div>
          </div>
          <p className="text-[11px] text-slate-400 font-medium italic">
           { `"Saved me from wasting my rank last year!" — Aman, NIT Surat`}
          </p>
        </div>
      </div>
      
      {/* Policy Links */}
      <div className="mt-8 flex gap-6 text-[10px] text-slate-400 font-bold uppercase tracking-widest">
         <span className="hover:text-blue-500 cursor-pointer">Security</span>
         <span className="hover:text-blue-500 cursor-pointer">Support</span>
         <span className="hover:text-blue-500 cursor-pointer">Refund Policy</span>
      </div>
    </div>
  );
}