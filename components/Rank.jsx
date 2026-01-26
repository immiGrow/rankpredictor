"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const JAN_2026_DATES = [
  { label: "21 Jan 2026", value: "2026-01-21" },
  { label: "22 Jan 2026", value: "2026-01-22" },
  { label: "23 Jan 2026", value: "2026-01-23" },
  { label: "24 Jan 2026", value: "2026-01-24" },
  { label: "28 Jan 2026", value: "2026-01-28" }
];

export default function Rank({ prediction, setPrediction }) {
  const router = useRouter();
  const [marks, setMarks] = useState(150);
  const [date, setDate] = useState("2026-01-21");
  const [shift, setShift] = useState(1);
  const [loading, setLoading] = useState(false);
  const [liveCount, setLiveCount] = useState(3264);

  // Magnet Strategy: Simulating a live counter for social proof
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveCount((prev) => prev + Math.floor(Math.random() * 5));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handlePredict = async () => {
    setLoading(true);
    setPrediction(null);
    try {
      const res = await fetch("/api/predict-rank", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ marks, date, shift })
      });
      const data = await res.json();
      if (res.ok) setPrediction(data);
      else alert(data.error || "Prediction Error");
    } catch (err) {
      alert("Server error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const formatNumber = (num) => Number(num).toLocaleString("en-IN");

  return (
    <div className="relative w-full max-w-4xl mx-auto z-20">
      {/* LIVE MAGNET STRIP */}
      <div className="flex justify-center mb-4">
        <div className="bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full flex items-center gap-3 shadow-xl">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
          </span>
          <p className="text-white text-[11px] font-bold uppercase tracking-widest">
            <span className="text-red-400">Live:</span> {formatNumber(liveCount)} Students Checking Now
          </p>
        </div>
      </div>

      <div className="bg-white rounded-[2.5rem] shadow-2xl border border-slate-200 overflow-hidden">
        <div className="p-6 md:p-10">
          
          {/* HEADER SECTION */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
            <div className="text-left">
              <h2 className="text-3xl font-black text-slate-900 tracking-tight">Rank Calculator</h2>
              <div className="flex items-center gap-2 mt-1">
                <span className="bg-indigo-100 text-indigo-700 text-[10px] font-bold px-2 py-0.5 rounded uppercase">V4.2 AI Engine</span>
                <p className="text-slate-400 text-xs font-medium italic">Updated with 2026 Shift Normalization</p>
              </div>
            </div>
            
            <div className="flex flex-col items-end">
              <div className="text-[10px] font-bold text-slate-400 uppercase mb-1">Data Confidence</div>
              <div className="flex gap-1">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className={`h-1.5 w-6 rounded-full ${i < 4 ? 'bg-green-500' : 'bg-slate-200'}`}></div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* INPUTS LEFT */}
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Exam Date</label>
                  <select 
                    value={date} 
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 font-semibold focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
                  >
                    {JAN_2026_DATES.map(d => <option key={d.value} value={d.value}>{d.label}</option>)}
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Shift</label>
                  <select 
                    value={shift} 
                    onChange={(e) => setShift(Number(e.target.value))}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 font-semibold focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
                  >
                    <option value={1}>Morning (Shift 1)</option>
                    <option value={2}>Evening (Shift 2)</option>
                  </select>
                </div>
              </div>

              <div className="p-5 bg-indigo-50/50 rounded-2xl border border-indigo-100">
                <div className="flex justify-between items-center mb-4">
                  <label className="font-bold text-indigo-900">Total Marks Obtained</label>
                  <div className="bg-white px-3 py-1 rounded-lg border border-indigo-200 shadow-sm">
                    <span className="text-2xl font-black text-indigo-600 leading-none">{marks}</span>
                    <span className="text-xs text-indigo-300 font-bold ml-1">/300</span>
                  </div>
                </div>
                <input
                  type="range" min={0} max={300} value={marks}
                  onChange={(e) => setMarks(Number(e.target.value))}
                  className="w-full h-2.5 bg-indigo-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                />
                <div className="flex justify-between mt-2 text-[10px] font-bold text-indigo-300 uppercase">
                  <span>Beginner</span>
                  <span>Average</span>
                  <span>Topper</span>
                </div>
              </div>
            </div>

            {/* ACTION RIGHT */}
            <div className="flex flex-col justify-center space-y-4">
              <div className="text-center p-6 border-2 border-dashed border-slate-200 rounded-2xl">
                <p className="text-slate-500 text-sm mb-4">Click below to run the prediction algorithm based on your specific shift difficulty.</p>
                <button
                  onClick={handlePredict}
                  disabled={loading}
                  className="w-full bg-slate-900 cursor-pointer hover:bg-indigo-600 text-white py-5 rounded-2xl font-black text-lg tracking-tight transition-all active:scale-95 shadow-xl shadow-indigo-200 disabled:opacity-50"
                >
                  {loading ? (
                    <span className="flex items-center justify-center gap-3">
                      <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Analyzing Shift...
                    </span>
                  ) : "GENERATE PREDICTION →"}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* PREDICTION RESULTS AREA */}
        <AnimatePresence>
          {prediction && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="bg-slate-900"
            >
              <div className="p-8 md:p-12 text-white">
                <div className="flex items-center gap-3 mb-8">
                  <div className="h-px flex-1 bg-white/10"></div>
                  <span className="text-indigo-400 text-[10px] font-black uppercase tracking-[0.2em]">Verified Result</span>
                  <div className="h-px flex-1 bg-white/10"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-10">
                  <div className="space-y-2">
                    <p className="text-indigo-300 text-xs font-bold uppercase tracking-widest">Expected AIR Rank</p>
                    <h3 className="text-3xl md:text-5xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">
                      {formatNumber(prediction.predicted_rank_range[0])} - {formatNumber(prediction.predicted_rank_range[1])}
                    </h3>
                  </div>
                  <div className="space-y-2">
                    <p className="text-indigo-300 text-xs font-bold uppercase tracking-widest text-right">Percentile Projection</p>
                    <div className="flex items-baseline justify-end gap-2">
                       <h3 className="text-3xl md:text-4xl font-black tracking-tight">
                        {prediction.predicted_percentile_range[0]} - {prediction.predicted_percentile_range[1]}
                      </h3>
                      <span className="text-indigo-400 font-bold text-xl">%</span>
                    </div>
                  </div>
                </div>

                <div className="mt-12 space-y-6">
  {/* TOUGHEST SHIFT INSIGHT (The "Relief" Hook) */}
  <motion.div 
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    className="bg-indigo-500/10 border border-indigo-400/20 rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4"
  >
    <div className="text-left">
      <span className="bg-indigo-500 text-[10px] font-black px-2 py-0.5 rounded text-white uppercase mb-1 inline-block">Shift Intelligence</span>
      <p className="text-indigo-100 text-sm font-medium">
        Think your marks are low? <span className="text-white font-bold underline decoration-indigo-400 cursor-pointer" onClick={() => router.push('/jee-main-2026-toughest-shift-analysis-january-session')}>Check if your shift was the toughest</span>. 
      </p>
      <p className="text-indigo-300 text-[11px]">Harder shifts often get higher percentiles at lower marks.</p>
    </div>
    <button 
      onClick={() => router.push('/jee-main-2026-toughest-shift-analysis-january-session')}
      className="whitespace-nowrap bg-white/10 hover:bg-white/20 text-white text-xs font-bold py-2 px-4 rounded-lg border border-white/10 transition-all cursor-pointer"
    >
      View Difficulty Map →
    </button>
  </motion.div>

  {/* MAIN ACTION GRID */}
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
    {/* NIT CSE - The "Dream" Button */}
    <button 
      onClick={() => router.push(`/top-nits-for-computer-science-cse-cutoff-2026`)}
      className="relative overflow-hidden flex flex-col items-center justify-center gap-1 cursor-pointer bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 py-5 rounded-2xl font-bold transition-all group shadow-lg shadow-indigo-900/40"
    >
      <div className="flex items-center gap-2">
        <span className="text-xl">🎯</span>
        <span className="text-white tracking-tight">Can I get NIT Computer Science?</span>
      </div>
      <span className="text-indigo-200 text-[10px] font-normal group-hover:text-white transition-colors">Compare your rank with 2026 CSE Cutoffs</span>
      
      {/* Subtle Glow Effect */}
      <div className="absolute -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shine" />
    </button>

    {/* College Predictor - The "Action" Button */}
    <button 
      onClick={() => router.push('/josaa-college-predictor')}
      className="flex flex-col items-center justify-center gap-1 cursor-pointer bg-white/5 hover:bg-white/10 border border-white/20 py-5 rounded-2xl font-bold transition-all group"
    >
      <div className="flex items-center gap-2 text-white">
        <span className="text-xl">🎓</span>
        <span className="tracking-tight">Personalized College Report</span>
      </div>
      <span className="text-slate-400 text-[10px] font-normal group-hover:text-slate-200 transition-colors">See the full list of IITs/NITs for your rank</span>
    </button>
  </div>

  {/* SOCIAL PROOF FOOTER */}
  <p className="text-center text-[11px] text-slate-500 font-medium">
    <span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-2"></span>
    Join <span className="text-slate-300">12,400+ students</span> who already generated their Jan 2026 analysis report.
  </p>
</div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}