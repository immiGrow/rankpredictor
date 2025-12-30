import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Section 1: Brand + SEO */}
        <div>
          <Link href="/" className="inline-block mb-3">
            <span className="text-2xl font-extrabold">
              <span className="text-blue-500">Rank</span>
              <span className="text-green-500">Predictor</span>
            </span>
          </Link>

          <p className="text-sm leading-relaxed text-gray-300">
            <strong>RankPredictor</strong> is a free JEE Main Rank Predictor 2026
            that estimates your expected rank and percentile using previous year
            JEE Main data and trends.
          </p>

          <ul className="mt-4 space-y-2 text-sm text-gray-300">
            <li>• Data sources: NTA & coaching institute reports</li>
            <li>• Predictions based on historical analysis</li>
            <li>• Not affiliated with NTA or JEE authorities</li>
          </ul>
        </div>

        {/* Section 2: Quick Links */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-4">
            Important Links
          </h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/about" className="hover:text-white">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
            <li><Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link></li>
            <li><Link href="/disclaimer" className="hover:text-white">Disclaimer</Link></li>
          </ul>
        </div>

        {/* Section 3: Articles / SEO Boost */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-4">
            JEE Main Resources
          </h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/blog/jee_main_2025" className="hover:text-white">
                JEE Main 2025 Marks vs Percentile
              </Link>
            </li>
              <li>
              <Link href="/jee_main_marks_vs_rank_2026" className="hover:text-white">
                JEE Main Marks vs Rank 2026
              </Link>
            </li>
            <li>
              <Link href="/jee_main_marks_vs_rank_2026" className="hover:text-white">
                JEE Main Rank vs Percentile 2026
              </Link>
            </li>
            <li>
              <Link href="/jee_main_cutoff_2026" className="hover:text-white">
                JEE Main Cutoff Analysis
              </Link>
            </li>
          
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-800 py-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} RankPredictor · JEE Main Rank Predictor 2026
      </div>
    </footer>
  );
}
