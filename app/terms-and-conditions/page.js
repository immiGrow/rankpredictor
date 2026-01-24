export const metadata = {
  title: "Terms & Conditions | JEE RankPredictor",
  description: "Read the terms of use for JEE RankPredictor. Understand your rights and our site usage policies.",
};

export default function TermsPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12 text-gray-800 leading-relaxed">
      <h1 className="text-4xl font-extrabold mb-8 border-b pb-4">Terms and Conditions</h1>
      
      <section className="space-y-8">
        <div>
          <h2 className="text-xl font-bold mb-3">1. Acceptance of Terms</h2>
          <p>By accessing <strong>JEE RankPredictor</strong>, you agree to be bound by these terms. If you do not agree, please refrain from using our tools.</p>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-3">2. Use of Predictor Tools</h2>
          <p>Our Rank Predictor and College Predictor are for personal, non-commercial use only. You agree not to use automated bots to scrape data from our predictors.</p>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-3">3. Intellectual Property</h2>
          <p>The algorithms, design, and content (including shift-wise analysis) are the property of JEE RankPredictor. Copying or republishing our content without permission is strictly prohibited.</p>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-3">4. Limitation of Liability</h2>
          <p>JEE RankPredictor (and founder Abhisha Kumar) shall not be held liable for any decisions made based on our estimates. Predictions are mathematically derived but are not final results.</p>
        </div>
      </section>
    </main>
  );
}