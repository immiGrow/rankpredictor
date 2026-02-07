"use client";

import { useState, use } from 'react'; // 'use' is required for Next.js 15 params

export default function SuccessPage({ searchParams }) {
  // FIX: Unwrap the Promise using React.use()
  const params = use(searchParams);
  const { user, rank, payment_id, category, gender, quota, rankType } = params;

  const [isDownloading, setIsDownloading] = useState(false);
  const [showUpsell, setShowUpsell] = useState(true); // Show immediately or set to false to show after download

  // Dynamic Content: IITian vs NITian
  const mentorType = rankType === 'advanced' ? 'IITian' : 'NITian';
  const mentorCollege = rankType === 'advanced' ? 'IIT Bombay/Delhi' : 'Top NITs';

  const handleDownload = async () => {
    setIsDownloading(true);
    try {
      // 1. Trigger the download logic
      const downloadUrl = `/api/generate-full-pdf?user=${user}&rank=${rank}&category=${category}&gender=${gender}&quota=${quota}&rankType=${rankType}`;
      
      const response = await fetch(downloadUrl);
      if (!response.ok) throw new Error("Download failed");
      
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `JEE_Pro_Report_${rank}.pdf`;
      document.body.appendChild(a);
      a.click();
      a.remove();

      // 2. Optional: Scroll to upsell after download starts
      document.getElementById('mentorship-card')?.scrollIntoView({ behavior: 'smooth' });

    } catch (error) {
      console.error("Error downloading PDF:", error);
      alert("Failed to download report. Please try again.");
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 gap-6">
      
      {/* --- SECTION 1: DOWNLOAD CARD --- */}
      <div className="bg-white p-8 rounded-[2rem] border border-slate-100 text-center w-full max-w-lg shadow-xl">
        <div className="w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg animate-bounce-short">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
        
        <h1 className="text-xl font-black text-slate-900 mb-1">Payment Successful!</h1>
        <p className="text-slate-400 text-xs mb-6">Transaction ID: {payment_id}</p>

        {/* User Stats Grid */}
        <div className="grid grid-cols-2 gap-3 mb-6">
           <div className="bg-slate-50 p-3 rounded-xl text-left border border-slate-100">
              <p className="text-[10px] font-bold text-slate-400 uppercase">Rank</p>
              <p className="text-lg font-black text-slate-800">{rank}</p>
           </div>
           <div className="bg-slate-50 p-3 rounded-xl text-left border border-slate-100">
              <p className="text-[10px] font-bold text-slate-400 uppercase">Category</p>
              <p className="text-lg font-black text-slate-800">{category}</p>
           </div>
        </div>

        {/* Download Button */}
        <button 
          onClick={handleDownload}
          disabled={isDownloading}
          className={`group relative block w-full py-4 rounded-xl text-lg font-black transition-all overflow-hidden shadow-lg 
            ${isDownloading 
              ? "bg-slate-300 text-slate-500 cursor-not-allowed" 
              : "bg-blue-600 hover:bg-blue-700 text-white shadow-blue-200"
            }`}
        >
          <span className="relative z-10 flex items-center justify-center gap-2">
            {isDownloading ? (
              <>
                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                GENERATING PDF...
              </>
            ) : (
              "DOWNLOAD REPORT 📥"
            )}
          </span>
        </button>
      </div>

      {/* --- SECTION 2: MENTORSHIP UPSELL (Strategic Add-on) --- */}
      {/* {showUpsell && (
        <div 
          id="mentorship-card"
          className="bg-gradient-to-br from-[#1a1f2e] to-[#2d3748] p-1 rounded-[2rem] w-full max-w-lg shadow-2xl relative overflow-hidden group"
        >
  
           <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-50"></div>

           <div className="bg-[#1a1f2e] rounded-[1.8rem] p-6 h-full relative">
          
              <div className="absolute top-4 right-4 bg-yellow-400 text-black text-[10px] font-black px-2 py-1 rounded shadow-lg uppercase tracking-wider animate-pulse">
                Exclusive Offer
              </div>

              <h2 className="text-white font-bold text-lg mb-1">
                Confused by your choices?
              </h2>
              <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                Your rank makes you eligible for a 1:1 strategy session with an <span className="text-yellow-400 font-bold">{mentorType}</span> from {mentorCollege}.
              </p>

              <div className="flex items-center justify-between mt-2">
                <div>
                   <p className="text-slate-400 text-xs line-through">₹99 Session</p>
                   <p className="text-white text-2xl font-black">₹19 <span className="text-xs font-normal text-green-400">only</span></p>
                </div>
                
             
                <a 
                  href={`/mentorship`} // Replace with your actual Razorpay link or booking page
                  className="bg-white text-slate-900 px-6 py-3 rounded-xl font-bold text-sm hover:bg-yellow-400 transition-colors shadow-lg flex items-center gap-2"
                >
                  Book Now 
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                  </svg>
                </a>
              </div>
           </div>
        </div>
      )} */}

      <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mt-4">
        Official Partner of jeerankpredictor.in
      </p>
    </div>
  );
}