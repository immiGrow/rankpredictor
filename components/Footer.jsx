import Link from "next/link";
import {
  FaChartLine,
  FaUniversity,
  FaCalculator,
  FaBookOpen,
  FaShieldAlt,
  FaInfoCircle,
  FaGavel,
  FaEnvelope
} from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 text-gray-300 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">

        {/* BRAND + FOUNDER INFO */}
        <div className="md:col-span-2">
          <Link href="/" className="inline-block mb-4">
            <h2 className="text-2xl font-extrabold tracking-tight">
              <span className="text-blue-500">JEE</span>
              <span className="text-white">RankPredictor</span>
            </h2>
          </Link>

          <p className="text-sm leading-relaxed text-gray-400">
            <strong>JEERankPredictor.in</strong> is a data-driven educational platform designed by engineering students to simplify the JEE Main 2026 journey. We provide AI-assisted rank estimates based on historical NTA trends and JoSAA seat matrices.
          </p>

          <div className="mt-6 p-4 bg-gray-900/50 rounded-xl border border-gray-800">
            <p className="text-xs text-gray-500 italic">
              Developed & Maintained by <span className="text-blue-400 font-medium text-sm">Abhisha Kumar (VNIT Nagpur)</span>. 
              Helping JEE 2026 aspirants with technical precision.
            </p>
          </div>
        </div>

        {/* PREDICTION TOOLS */}
        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-6">
            Prediction Tools
          </h3>
          <ul className="space-y-4 text-sm">
            <li className="flex items-center gap-2">
              <FaChartLine className="text-blue-500 shrink-0" />
              <Link href="/jee-rank-predictor" className="hover:text-blue-400 transition">JEE Rank Predictor</Link>
            </li>
            <li className="flex items-center gap-2">
              <FaCalculator className="text-blue-500 shrink-0" />
              <Link href="/" className="hover:text-blue-400 transition">Percentile Predictor</Link>
            </li>
            <li className="flex items-center gap-2">
              <FaUniversity className="text-blue-500 shrink-0" />
              <Link href="/josaa-college-predictor" className="hover:text-blue-400 transition">College Predictor</Link>
            </li>
          </ul>
        </div>

        {/* ANALYSIS & CONTENT */}
        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-6">
            2026 Analysis
          </h3>
          <ul className="space-y-4 text-sm">
            <li><Link href="/jee-mains-2026-shift-wise-marks-percentile-analysis" className="hover:text-white transition">Shift-wise Analysis</Link></li>
            <li><Link href="/jee_main_cutoff_2026" className="hover:text-white transition">Expected Cutoffs</Link></li>
            <li><Link href="/jee_main_marks_vs_rank_2026" className="hover:text-white transition">Marks vs Rank</Link></li>
            <li><Link href="/blog/nta_percentile_calculation" className="hover:text-white transition">NTA Normalization</Link></li>
          </ul>
        </div>

        {/* LEGAL & TRUST (ADSENSE ESSENTIALS) */}
        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-6">
            Legal & Support
          </h3>
          <ul className="space-y-4 text-sm">
            <li className="flex items-center gap-2">
              <FaInfoCircle className="text-gray-500" />
              <Link href="/about" className="hover:text-white">About Us</Link>
            </li>
            <li className="flex items-center gap-2">
              <FaShieldAlt className="text-gray-500" />
              <Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
            </li>
            <li className="flex items-center gap-2">
              <FaGavel className="text-gray-500" />
              <Link href="/terms-and-conditions" className="hover:text-white">Terms of Service</Link>
            </li>
            <li className="flex items-center gap-2">
              <FaShieldAlt className="text-gray-500" />
              <Link href="/disclaimer" className="hover:text-white">Disclaimer</Link>
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-gray-500" />
              <Link href="/contact" className="hover:text-white">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* BOTTOM COPYRIGHT BAR */}
      <div className="border-t border-gray-900 bg-black/30">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© {currentYear} JEERankPredictor.in · All rights reserved.</p>
          <p className="flex items-center gap-1 italic">
           Built with ❤️ for JEE Aspirants by a VNITian.
          </p>
        </div>
      </div>
    </footer>
  );
}