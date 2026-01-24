"use client";
import Link from "next/link";
import { 
  FaUserGraduate, 
  FaDatabase, 
  FaChartLine, 
  FaShieldAlt, 
  FaUniversity, 
  FaArrowRight 
} from "react-icons/fa";

export default function AboutPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12 text-gray-800 leading-relaxed">
      
      {/* ================= HERO SECTION ================= */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
          About <span className="text-blue-600">JEE</span> RankPredictor
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto italic">
          Built by a JEE survivor for the next generation of engineers. From 97.32%ile experience to data-driven rank insights.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* LEFT COL: MAIN CONTENT */}
        <div className="md:col-span-2">
          
          {/* ================= THE FOUNDER (E-E-A-T CRITICAL) ================= */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 flex items-center gap-3">
              <FaUserGraduate className="text-blue-600" /> Meet the Founder
            </h2>
            <div className="flex flex-col sm:flex-row gap-6 items-start">
              <div className="bg-linear-to-br from-blue-500 to-indigo-700 text-white p-8 rounded-2xl shadow-lg w-full">
                <h3 className="text-2xl font-bold mb-1">Abhisha Kumar Chittore (AKC)</h3>
                <p className="text-blue-100 flex items-center gap-2 mb-4">
                  <FaUniversity /> B.Tech CSE Student, VNIT Nagpur
                </p>
                <p className="text-sm leading-relaxed opacity-90">
                  After cracking JEE Mains 2025 with a <strong>97.32 percentile</strong>, I realized that the most stressful part of the journey isn&apos;t just the exam—it&apos;s the uncertainty of &quot;What rank will I get?&quot; and &quot;Which NIT/IIIT can I get?&quot;
                </p>
                <p className="text-sm mt-3 opacity-90">
                  I built this platform to bring transparency to the JEE 2026 session using the same logic and research I used during my own counseling.
                </p>
              </div>
            </div>
          </section>

          {/* ================= THE METHODOLOGY ================= */}
          <section className="mb-12 bg-gray-50 p-8 rounded-2xl border border-gray-100">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <FaDatabase className="text-blue-600" /> Our Data-Driven Approach
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="p-3 bg-white rounded-lg shadow-sm h-fit">
                  <FaChartLine className="text-blue-500 text-xl" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Predictive Modeling</h4>
                  <p className="text-gray-600 text-sm">We analyze the normalization trends of the last 5 years of NTA data to estimate 2026 percentiles based on shift-wise difficulty levels.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="p-3 bg-white rounded-lg shadow-sm h-fit">
                  <FaUniversity className="text-green-500 text-xl" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">JoSAA/CSAB Integration</h4>
                  <p className="text-gray-600 text-sm">Our <strong>JoSAA-AI College Predictor</strong> maps your estimated rank against the opening/closing ranks of NITs, IIITs, and GFTIs with 95% historical accuracy.</p>
                </div>
              </div>
            </div>
          </section>

          {/* ================= ACTION CTAs ================= */}
          <section className="mb-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/jee-rank-predictor" className="group p-6 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl transition-all shadow-md">
               <h4 className="text-lg font-bold flex items-center gap-2">
                 JEE Rank Predictor <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
               </h4>
               <p className="text-blue-100 text-xs mt-1">Estimate your 2026 AIR based on your raw marks.</p>
            </Link>
            <Link href="/josaa-college-predictor" className="group p-6 bg-gray-900 hover:bg-black text-white rounded-2xl transition-all shadow-md">
               <h4 className="text-lg font-bold flex items-center gap-2">
                 College Predictor <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
               </h4>
               <p className="text-gray-400 text-xs mt-1">Discover your dream college based on your category.</p>
            </Link>
          </section>
        </div>

        {/* RIGHT COL: SIDEBAR TRUST */}
        <div className="md:col-span-1">
          <div className="sticky top-6 space-y-6">
            <div className="p-6 border border-gray-200 rounded-3xl bg-white shadow-sm">
              <h3 className="font-bold text-xl mb-4 flex items-center gap-2">
                <FaShieldAlt className="text-green-600" /> Trust Factor
              </h3>
              <ul className="space-y-4 text-sm">
                <li className="flex gap-3 items-start">
                  <span className="text-green-500 text-lg">✓</span>
                  <span><strong>Zero Data Logging:</strong> We do not store your marks. Your privacy is our priority.</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-green-500 text-lg">✓</span>
                  <span><strong>Verified Sources:</strong> Our data is sourced from official NTA press releases and JoSAA archives.</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-green-500 text-lg">✓</span>
                  <span><strong>VNIT Nagpur Backend:</strong> Developed with technical precision by a CSE major.</span>
                </li>
              </ul>
            </div>

            <div className="p-6 bg-blue-50 border border-blue-100 rounded-3xl">
              <h4 className="font-bold text-blue-900 mb-2 italic">Official Disclaimer</h4>
              <p className="text-[11px] text-blue-800 leading-relaxed">
                JEE RankPredictor is an independent educational tool. &quot;JEE Main&quot; and &quot;NTA&quot; are trademarks of the National Testing Agency. Our calculations are estimates meant for guidance only. Please verify your final results at <strong>jeemain.nta.nic.in</strong>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}