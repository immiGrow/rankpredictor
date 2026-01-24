import Link from "next/link";
import { FaEnvelope, FaClock, FaCheckCircle, FaExclamationTriangle } from "react-icons/fa";

export const metadata = {
  title: "Contact Us | JEE RankPredictor – Support & Feedback",
  description: "Have questions about your JEE Main 2026 rank prediction? Reach out to Abhisha Kumar (VNIT Nagpur) for feedback or data corrections.",
};

export default function ContactPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-12 text-gray-800">
      <section className="text-center mb-16">
        <h1 className="text-4xl font-extrabold mb-4">Get in <span className="text-blue-600">Touch</span></h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Feedback from the JEE community helps us make our prediction algorithms more accurate for everyone.
        </p>
      </section>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <FaCheckCircle className="text-green-500" /> How We Can Help
            </h2>
            <ul className="space-y-4 text-gray-600">
              <li className="flex gap-3"><strong>•</strong> Technical queries regarding the Rank Predictor tool.</li>
              <li className="flex gap-3"><strong>•</strong> Feedback on JoSAA AI College Predictor results.</li>
              <li className="flex gap-3"><strong>•</strong> Partnerships or educational collaborations.</li>
              <li className="flex gap-3"><strong>•</strong> Reporting bugs or data discrepancies in 2026 shift analysis.</li>
            </ul>
          </div>

          <div className="p-6 bg-amber-50 rounded-xl border border-amber-100 text-sm text-amber-800">
            <h3 className="font-bold flex items-center gap-2 mb-2">
              <FaExclamationTriangle /> Important Note
            </h3>
            <p>We do not provide personalized counseling or official NTA results. For official queries, please contact the NTA helpdesk at jeemain@nta.ac.in.</p>
          </div>
        </div>

        <div className="bg-white p-8 rounded-2xl border shadow-sm flex flex-col items-center text-center justify-center">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
            <FaEnvelope className="text-blue-600 text-2xl" />
          </div>
          <h2 className="text-2xl font-bold mb-2">Email Us</h2>
          <p className="text-gray-500 mb-6">Our support team usually responds within 24–48 hours.</p>
          <a href="mailto:rankpredictorjee@gmail.com" className="text-xl font-bold text-blue-600 hover:underline">
            rankpredictorjee@gmail.com
          </a>
          <div className="mt-8 flex items-center gap-2 text-gray-400 text-sm">
            <FaClock /> <span>Response time: ~24 hours</span>
          </div>
        </div>
      </div>
    </main>
  );
}