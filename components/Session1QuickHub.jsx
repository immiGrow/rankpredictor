import React from 'react';
import Link from 'next/link';
import { FaFileInvoice, FaChartLine, FaDownload, FaArrowRight } from 'react-icons/fa';

const Session1QuickHub = () => {
  const links = [
    {
      title: "Official Answer Key",
      desc: "Download Shift-wise Provisional PDF",
      href: "/jee-main-2026-official-answer-key-pdf-shiftwise-download",
      icon: <FaDownload className="text-blue-600" />,
      bg: "bg-blue-50",
      border: "border-blue-100"
    },
    {
      title: "Session 1 Scorecard (LIVE)",
      desc: "Download NTA Result & Percentile",
      href: "/jee-main-2026-session-1-result-scorecard-download",
      icon: <FaFileInvoice className="text-indigo-600" />,
      bg: "bg-indigo-50",
      border: "border-indigo-100"
    },
    {
      title: "Marks vs Percentile",
      desc: "Updated Jan Session Analysis",
      href: "/jee-mains-2026-shift-wise-marks-percentile-analysis",
      icon: <FaChartLine className="text-emerald-600" />,
      bg: "bg-emerald-50",
      border: "border-emerald-100"
    }
  ];

  return (
    <section className="mb-12 ">
      <div className="max-w-6xl mx-auto bg-white border-2 border-slate-100 rounded-[2.5rem] p-8 md:p-10 shadow-xl shadow-slate-200/50">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <div>
            <h2 className="text-2xl font-black text-slate-900 tracking-tight">
              Session 1 <span className="text-blue-600">Essential Resources</span>
            </h2>
            <p className="text-slate-500 font-medium text-sm mt-1">
              Check answer keys, results, and detailed rank analysis for January 2026.
            </p>
          </div>
          <div className="hidden md:block">
            <span className="bg-slate-100 text-slate-600 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
              Live Updates
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {links.map((item, idx) => (
            <Link key={idx} href={item.href}>
              <div className={`group h-full p-6 rounded-3xl border-2 ${item.bg} ${item.border} hover:shadow-lg hover:scale-[1.02] transition-all cursor-pointer flex flex-col justify-between`}>
                <div>
                  <div className="bg-white w-12 h-12 rounded-2xl flex items-center justify-center shadow-sm mb-4">
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-slate-900 text-lg mb-1">{item.title}</h3>
                  <p className="text-slate-600 text-xs font-medium leading-relaxed mb-4">
                    {item.desc}
                  </p>
                </div>
                <div className="flex items-center gap-2 text-blue-700 font-bold text-xs uppercase tracking-tighter">
                  Open Portal <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        {/* SEO Bottom Text (For the Bot) */}
        <div className="mt-8 pt-6 border-t border-slate-50 text-center">
          <p className="text-[11px] text-slate-400 leading-relaxed max-w-2xl mx-auto">
            Our data is updated in real-time following the <Link href="/jee-main-2026-toughest-shift-analysis-january-session" className="underline hover:text-blue-600">Jan Toughest Shift Analysis</Link>. 
            Ensure you verify your scores against the <Link href="/jee-main-2026-official-answer-key-pdf-shiftwise-download" className="underline hover:text-blue-600">Official NTA Answer Key</Link> 
            before calculating your final <Link href="/jee-rank-predictor" className="underline hover:text-blue-600">JEE Rank Predictor</Link> score.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Session1QuickHub;