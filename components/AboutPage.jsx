"use client";
import Link from "next/link";
import { 
  FaUserGraduate, 
  FaDatabase, 
  FaChartLine, 
  FaShieldAlt, 
  FaUniversity, 
  FaArrowRight,
  FaCheckCircle,
  FaBullseye,
  FaCode,
  FaLightbulb
} from "react-icons/fa";

export default function AboutPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12 text-gray-800 leading-relaxed bg-white">
      
      {/* ================= HERO SECTION ================= */}
      <section className="text-center mb-20 animate-fadeIn">
        <h1 className="text-5xl md:text-6xl font-[950] mb-6 tracking-tight text-slate-900">
          About <span className="text-blue-600">JEE</span> RankPredictor
        </h1>
        <p className="text-xl text-gray-500 max-w-3xl mx-auto font-medium">
          Built by a JEE survivor for the next generation of engineers. From 97.32%ile experience to data-driven rank insights.
        </p>
        <div className="h-1.5 w-24 bg-blue-600 mx-auto mt-8 rounded-full"></div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* LEFT COL: MAIN CONTENT */}
        <div className="md:col-span-2 space-y-16">
          
          {/* ================= THE FOUNDER (E-E-A-T CRITICAL) ================= */}
          <section id="founder">
            <h2 className="text-3xl font-bold mb-8 text-gray-900 flex items-center gap-3">
              <FaUserGraduate className="text-blue-600" /> Meet the Founder
            </h2>
            <div className="flex flex-col gap-6 items-start">
              <div className="bg-gradient-to-br from-slate-900 to-blue-900 text-white p-10 rounded-[2.5rem] shadow-2xl w-full relative overflow-hidden">
                <div className="absolute top-[-20px] right-[-20px] opacity-10 text-9xl">
                    <FaUniversity />
                </div>
                <h3 className="text-3xl font-black mb-1">Abhisha Kumar Chittore (AKC)</h3>
                <p className="text-blue-300 flex items-center gap-2 mb-6 font-semibold tracking-wide uppercase text-sm">
                  <FaCheckCircle className="text-blue-400" /> B.Tech CSE Student @ VNIT Nagpur
                </p>
                <div className="space-y-4 text-blue-50/90 text-base leading-relaxed">
                    <p>
                        After cracking JEE Mains 2025 with a <strong>97.32 percentile</strong>, I realized that the most stressful part of the journey isn&apos;t just the exam—it&apos;s the crushing uncertainty that follows. 
                    </p>
                    <p>
                        During my counseling, I spent hundreds of hours analyzing JoSAA archives and NTA normalization trends. I built this platform to automate that research, providing 2026 aspirants with the clarity I wish I had.
                    </p>
                </div>
              </div>
            </div>
          </section>

          {/* ================= OUR MISSION (NEW SECTION) ================= */}
          <section className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="p-8 bg-blue-50/50 rounded-3xl border border-blue-100">
                <FaBullseye className="text-3xl text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">Our Mission</h3>
                <p className="text-gray-600 text-sm">
                    To bridge the gap between Raw Marks and Final Admission by providing the most accurate, shift-aware predictions in India.
                </p>
            </div>
            <div className="p-8 bg-indigo-50/50 rounded-3xl border border-indigo-100">
                <FaLightbulb className="text-3xl text-indigo-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">The Vision</h3>
                <p className="text-gray-600 text-sm">
                    We aim to empower every student—regardless of their coaching background—with elite-level data analysis and counseling guidance.
                </p>
            </div>
          </section>

          {/* ================= THE METHODOLOGY ================= */}
          <section className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100">
            <h2 className="text-2xl font-black mb-8 flex items-center gap-3 text-slate-900">
              <FaDatabase className="text-blue-600" /> Our Data-Driven Approach
            </h2>
            <div className="space-y-8">
              <div className="flex gap-5">
                <div className="p-4 bg-white rounded-2xl shadow-sm h-fit">
                  <FaChartLine className="text-blue-500 text-2xl" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Predictive Modeling</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Unlike static calculators, our engine factors in <strong>Shift Difficulty Levels</strong> and the record-breaking 15 Lakh+ registrations of 2026 to ensure your <Link href="/jee-rank-predictor" className="text-blue-600 font-bold underline">JEE Rank Prediction</Link> is realistic.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-5">
                <div className="p-4 bg-white rounded-2xl shadow-sm h-fit">
                  <FaCode className="text-purple-500 text-2xl" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Next-Gen Tech Stack</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Built with <strong>Next.js 15</strong> for blazing-fast performance. Our algorithms process thousands of rows of JoSAA opening and closing ranks in milliseconds to give you instant results.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* ================= ACTION CTAs ================= */}
          <section className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Link href="/jee-main-2026-session-1-result-scorecard-download" className="group p-8 bg-blue-600 hover:bg-blue-700 text-white rounded-4xl transition-all shadow-xl shadow-blue-200">
               <h4 className="text-xl font-bold flex items-center gap-2">
                 Check 2026 Result <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
               </h4>
               <p className="text-blue-100 text-xs mt-2 font-medium">Direct NTA scorecard access and shift analysis.</p>
            </Link>
            <Link href="/josaa-college-predictor" className="group p-8 bg-slate-900 hover:bg-black text-white rounded-4xl transition-all shadow-xl shadow-slate-300">
               <h4 className="text-xl font-bold flex items-center gap-2">
                 NIT/IIIT Predictor <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
               </h4>
               <p className="text-slate-400 text-xs mt-2 font-medium">Explore college options based on your category and home state.</p>
            </Link>
          </section>
        </div>

        {/* RIGHT COL: SIDEBAR TRUST */}
        <div className="md:col-span-1">
          <div className="sticky top-10 space-y-8">
            <div className="p-8 border-2 border-slate-100 rounded-[2.5rem] bg-white shadow-sm">
              <h3 className="font-bold text-xl mb-6 flex items-center gap-2 text-slate-900">
                <FaShieldAlt className="text-green-600" /> Trust Indicators
              </h3>
              <ul className="space-y-6 text-sm">
                <li className="flex gap-4 items-start">
                  <span className="bg-green-100 text-green-600 p-1 rounded-full"><FaCheckCircle /></span>
                  <span><strong>No Data Harvesting:</strong> Your scores are yours. We do not require sign-ups or store personal marks.</span>
                </li>
                <li className="flex gap-4 items-start">
                    <span className="bg-green-100 text-green-600 p-1 rounded-full"><FaCheckCircle /></span>
                  <span><strong>JoSAA Verified:</strong> College data is synced with official 2024-25 closing ranks for maximum precision.</span>
                </li>
                <li className="flex gap-4 items-start">
                    <span className="bg-green-100 text-green-600 p-1 rounded-full"><FaCheckCircle /></span>
                  <span><strong>Authoritative:</strong> Content curated by current engineering students who have cleared the exam.</span>
                </li>
              </ul>
            </div>

            <div className="p-8 bg-slate-900 rounded-[2.5rem] text-white">
                <h4 className="font-bold text-lg mb-4">Questions?</h4>
                <p className="text-slate-400 text-sm mb-6">Need help with our predictors or found a bug?</p>
                <Link href="/contact" className="inline-block bg-blue-600 px-6 py-3 rounded-xl font-bold text-sm hover:bg-blue-500 transition-colors">
                    Contact Our Team
                </Link>
            </div>

            <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
              <h4 className="font-bold text-slate-900 mb-2 text-xs uppercase tracking-widest">Legal Notice</h4>
              <p className="text-[10px] text-slate-500 leading-relaxed">
                JEE RankPredictor is an independent project. JEE Main is a trademark of NTA. All predictions are mathematical estimates. Verify your final scorecard at <strong>jeemain.nta.nic.in</strong>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}