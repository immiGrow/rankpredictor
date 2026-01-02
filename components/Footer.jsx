import Link from "next/link";
import {
  FaChartLine,
  FaUniversity,
  FaCalculator,
  FaBookOpen,
  FaShieldAlt,
  FaInfoCircle,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* BRAND + SEO */}
        <div>
          <Link href="/" className="inline-block mb-4">
            <h2 className="text-2xl font-extrabold tracking-tight">
              <span className="text-blue-500">JEE</span>
              <span className="text-white">RankPredictor</span>
            </h2>
          </Link>

          <p className="text-sm leading-relaxed text-gray-400">
            <strong>JEERankPredictor.in</strong> is a free and accurate
            <strong> JEE Main Rank Predictor 2026</strong> that helps students
            estimate their expected <strong>All India Rank (AIR)</strong>,
            percentile, and college chances using previous year trends and
            NTA-based normalization logic.
          </p>

          <ul className="mt-4 space-y-2 text-sm text-gray-500">
            <li>• Based on historical JEE Main data (2024–2025)</li>
            <li>• No signup • 100% free • Privacy-first</li>
            <li>• Independent educational tool (not affiliated with NTA)</li>
          </ul>
        </div>

        {/* TOOLS */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Prediction Tools
          </h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <FaChartLine className="text-blue-400" />
              <Link href="/" className="hover:text-white">
                JEE Main Rank Predictor 2026
              </Link>
            </li>
            <li className="flex items-center gap-2">
              <FaCalculator className="text-blue-400" />
              <Link href="/" className="hover:text-white">
                JEE Main Percentile Predictor
              </Link>
            </li>
            <li className="flex items-center gap-2">
              <FaUniversity className="text-blue-400" />
              <Link href="https://collegedunia.com/college-predictor" target="_blank" className="hover:text-white">
                College Predictor (IITs, NITs, IIITs)
              </Link>
            </li>
          </ul>
        </div>

        {/* RESOURCES / BLOGS */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            JEE Main Resources
          </h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <FaBookOpen className="text-blue-400" />
              <Link
                href="/blog/nta_percentile_calculation"
                className="hover:text-white"
              >
                How NTA Calculates JEE Main Percentile
              </Link>
            </li>

            <li className="flex items-center gap-2">
              <FaBookOpen className="text-blue-400" />
              <Link
                href="/jee_main_marks_vs_rank_2026"
                className="hover:text-white"
              >
                JEE Main Marks vs Rank 2026
              </Link>
            </li>

            <li className="flex items-center gap-2">
              <FaBookOpen className="text-blue-400" />
              <Link
                href="/jee_main_marks_vs_rank_2026"
                className="hover:text-white"
              >
                JEE Main Marks vs Percentile 2026
              </Link>
            </li>

            <li className="flex items-center gap-2">
              <FaBookOpen className="text-blue-400" />
              <Link
                href="/jee_main_cutoff_2026"
                className="hover:text-white"
              >
                Expected JEE Main Cutoff 2026
              </Link>
            </li>
          </ul>
        </div>

        {/* TRUST / LEGAL */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Trust & Info
          </h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <FaInfoCircle className="text-blue-400" />
              <Link href="/about" className="hover:text-white">
                About Us
              </Link>
            </li>
            <li className="flex items-center gap-2">
              <FaShieldAlt className="text-blue-400" />
              <Link href="/privacy-policy" className="hover:text-white">
                Privacy Policy
              </Link>
            </li>
            <li className="flex items-center gap-2">
              <FaShieldAlt className="text-blue-400" />
              <Link href="/disclaimer" className="hover:text-white">
                Disclaimer
              </Link>
            </li>
            <li className="flex items-center gap-2">
              <FaInfoCircle className="text-blue-400" />
              <Link href="/contact" className="hover:text-white">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-gray-800 py-5 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} JEERankPredictor.in · Free JEE Main Rank & Percentile Predictor 2026
      </div>
    </footer>
  );
}
