import { FaExclamationTriangle, FaChartBar, FaGlobe, FaShieldAlt } from "react-icons/fa";

export const metadata = {
  title: "Disclaimer | JEE RankPredictor – Accuracy & Official Notice",
  description:
    "Official disclaimer for JEE RankPredictor. Understand the limitations of our rank and college predictions for the JEE Main 2026 session.",
  alternates: {
    canonical: "https://www.jeerankpredictor.in/disclaimer",
  },
};

export default function DisclaimerPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12 text-gray-800 leading-relaxed">
      {/* Header Section */}
      <div className="text-center mb-12">
        <FaExclamationTriangle className="text-amber-500 text-5xl mx-auto mb-4" />
        <h1 className="text-4xl font-extrabold mb-4">Legal Disclaimer</h1>
        <p className="text-gray-600">Please read this carefully before using our prediction tools.</p>
      </div>

      <section className="space-y-10">
        {/* 1. Accuracy & Normalization */}
        <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 shadow-sm">
          <h2 className="text-2xl font-bold mb-3 flex items-center gap-2">
            <FaChartBar className="text-blue-600" /> Accuracy & Normalization
          </h2>
          <p className="mb-4">
            The rank and percentile predictions provided by <strong>JEE RankPredictor</strong> are based on historical data analysis (2021-2025) and statistical trends. 
          </p>
          <p className="bg-white p-4 rounded-lg border-l-4 border-blue-600 italic text-sm">
            <strong>Note on 2026 Session:</strong> NTA uses a specific normalization process based on the relative performance of all candidates in a specific shift. Since the exact number of candidates and their performance vary every year, our results are <strong>mathematical estimates</strong> and may differ from your final NTA scorecard.
          </p>
        </div>

        {/* 2. Official Affiliation */}
        <div>
          <h2 className="text-2xl font-bold mb-3 flex items-center gap-2 text-gray-900">
            <FaShieldAlt className="text-green-600" /> No Official Affiliation
          </h2>
          <p>
            JEE RankPredictor is an independent educational platform developed by <strong>Abhisha Kumar Chittore</strong>. We are <strong>NOT affiliated</strong>, associated, authorized, endorsed by, or in any way officially connected with:
          </p>
          <ul className="list-disc pl-6 mt-3 space-y-1 text-gray-700 font-medium">
            <li>National Testing Agency (NTA)</li>
            <li>Ministry of Education (MoE), Government of India</li>
            <li>Joint Seat Allocation Authority (JoSAA) or CSAB</li>
            <li>Any coaching institute or university (including VNIT Nagpur)</li>
          </ul>
        </div>

        {/* 3. No Admission Guarantee */}
        <div>
          <h2 className="text-2xl font-bold mb-3">No Admission or Rank Guarantee</h2>
          <p>
            Usage of our <strong>JoSAA-AI College Predictor</strong> does not guarantee admission into any NIT, IIIT, GFTI, or IIT. Counseling outcomes depend on various factors including category-wise seat vacancy, choice filling, and official cutoff ranks which are subject to change annually.
          </p>
        </div>

        {/* 4. External Links */}
        <div>
          <h2 className="text-2xl font-bold mb-3 flex items-center gap-2">
            <FaGlobe className="text-purple-600" /> External Links Disclaimer
          </h2>
          <p>
            Our website may contain links to external sites (like jeemain.nta.nic.in). We do not monitor or check these external links for accuracy or reliability. We do not warrant, endorse, or guarantee the information offered by third-party websites.
          </p>
        </div>

        {/* 5. Limitation of Liability */}
        <div className="bg-red-50 p-6 rounded-2xl border border-red-100">
          <h2 className="text-xl font-bold mb-3 text-red-900">Limitation of Liability</h2>
          <p className="text-sm text-red-800">
            By using this website, you agree that <strong>JEE RankPredictor</strong> and its founder shall not be held responsible for any decisions made, or for any damages or losses incurred, as a result of using the information or tools provided on this site. You are advised to consult official NTA brochures for final information.
          </p>
        </div>

        {/* 6. Consent */}
        <div className="text-center pt-8">
          <p className="text-sm text-gray-500 italic">
            By continuing to use our website, you hereby consent to this Disclaimer and agree to its terms.
          </p>
        </div>
      </section>
    </main>
  );
}