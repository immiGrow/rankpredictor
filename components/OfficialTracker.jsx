"use client";
import React, { useMemo } from "react";
import { FaBell, FaCheckCircle, FaExternalLinkAlt } from "react-icons/fa";

const OfficialTracker = () => {
  // Current date for comparison (Logic based on 2026 Timeline)
  const today = new Date();
  
  const status = useMemo(() => {
    const now = today.getTime();
    const dates = {
      keyRelease: new Date('2026-02-02').getTime(),
      resultRelease: new Date('2026-02-12').getTime(),
    };

    if (now < dates.keyRelease) {
      return {
        phase: 'EXAM_LIVE',
        keyStatus: 'Expected Soon',
        keyProgress: 'w-[70%]',
        keyColor: 'bg-orange-500',
        scoreStatus: 'Pending',
        scoreProgress: 'w-[10%]',
        scoreColor: 'bg-slate-200',
        ctaText: 'Visit NTA Portal',
        isKeyLive: false
      };
    } else if (now >= dates.keyRelease && now < dates.resultRelease) {
      return {
        phase: 'KEY_RELEASED',
        keyStatus: 'RELEASED',
        keyProgress: 'w-full',
        keyColor: 'bg-emerald-500',
        scoreStatus: 'Processing',
        scoreProgress: 'w-[60%]',
        scoreColor: 'bg-orange-500',
        ctaText: 'Download Answer Key',
        isKeyLive: true
      };
    } else {
      return {
        phase: 'RESULT_LIVE',
        keyStatus: 'RELEASED',
        keyProgress: 'w-full',
        keyColor: 'bg-emerald-500',
        scoreStatus: 'LIVE NOW',
        scoreProgress: 'w-full',
        scoreColor: 'bg-blue-600',
        ctaText: 'Check Your Scorecard',
        isKeyLive: true,
        isResultLive: true
      };
    }
  }, [today]);

    const handleNotify = () => {
  // Replace this with your actual WhatsApp Channel or Group link
  const whatsappLink = "https://whatsapp.com/channel/0029VbBx9RFHbFVA5UfzKG3d";
  window.open(whatsappLink, '_blank');
};


  return (
    <div className="w-full shrink-0 lg:sticky lg:top-6">
      <div className={`bg-white border-2 ${status.isResultLive ? 'border-emerald-500' : 'border-blue-600'} rounded-3xl overflow-hidden shadow-2xl transition-all duration-500`}>
        
        {/* Header */}
        <div className={`${status.isResultLive ? 'bg-emerald-600' : 'bg-blue-600'} p-4 text-white transition-colors`}>
          <div className="flex items-center gap-2 mb-1">
            <span className="relative flex h-2 w-2">
              <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${status.isResultLive ? 'bg-emerald-100' : 'bg-blue-100'} opacity-75`}></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
            </span>
            <span className="text-[10px] font-black uppercase tracking-widest">
              NTA Official Status {status.phase === 'RESULT_LIVE' ? '(FINAL)' : '(LIVE)'}
            </span>
          </div>
          <h3 className="text-lg font-bold leading-tight">Answer Key & Scorecard 2026</h3>
        </div>

        {/* Status Content */}
        <div className="p-5 space-y-6">
          
          {/* Answer Key Row */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs font-bold uppercase tracking-tighter">
              <span className="text-slate-400">Provisional Key</span>
              <span className={status.isKeyLive ? 'text-emerald-600 flex items-center gap-1' : 'text-orange-500'}>
                {status.isKeyLive && <FaCheckCircle />} {status.keyStatus}
              </span>
            </div>
            <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
              <div className={`h-full ${status.keyColor} ${status.keyProgress} transition-all duration-1000 ${!status.isKeyLive && 'animate-pulse'}`}></div>
            </div>
            <p className="text-[11px] text-slate-500 italic">
              {status.isKeyLive ? 'Released on Feb 2, 2026' : 'Expected: Feb 2 - Feb 4, 2026'}
            </p>
          </div>

          {/* Scorecard Row */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs font-bold uppercase tracking-tighter">
              <span className="text-slate-400">Final Scorecard</span>
              <span className={status.isResultLive ? 'text-blue-600 font-black animate-bounce' : 'text-slate-400'}>
                {status.scoreStatus}
              </span>
            </div>
            <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
              <div className={`h-full ${status.scoreColor} ${status.scoreProgress} transition-all duration-1000`}></div>
            </div>
            <p className="text-[11px] text-slate-500 italic text-right">
              {status.isResultLive ? 'Links are now active' : 'Expected: Feb 12, 2026'}
            </p>
          </div>

          <hr className="border-slate-100" />

          {/* Action Buttons */}
          <div className="space-y-3">
            <a 
              href="https://jeemain.nta.nic.in/" 
              target="_blank" 
              rel="noreferrer"
              className={`flex items-center justify-center gap-2 w-full py-3 rounded-xl text-xs font-bold transition-all shadow-lg ${
                status.isResultLive ? 'bg-emerald-600 text-white' : 'bg-slate-900 text-white hover:bg-blue-700'
              }`}
            >
              <FaExternalLinkAlt size={10} /> {status.ctaText}
            </a>
            
            {!status.isResultLive && (
             <button 
  onClick={handleNotify}
  className="w-full py-3 border-2 border-slate-200 text-slate-600 rounded-xl text-xs font-bold hover:bg-green-50 hover:border-green-500 hover:text-green-700 transition-all flex items-center justify-center gap-2 group"
>
  <FaBell className="text-blue-500 group-hover:animate-bounce" /> 
  Join WhatsApp Channel for Alerts
</button>
            )}
          </div>
        </div>
        
        {/* Footer info */}
        <div className="bg-slate-50 p-3 text-center border-t border-slate-100">
           <p className="text-[9px] font-bold text-slate-400 uppercase tracking-tighter">
             Last Refreshed: {today.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} IST
           </p>
        </div>
      </div>
    </div>
  );
};

export default OfficialTracker;