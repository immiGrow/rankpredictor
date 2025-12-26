export const metadata = {
  title: "Disclaimer – RankPredictor",
  description:
    "Official disclaimer for RankPredictor. Read important information regarding accuracy, affiliation, and usage.",
};

export default function DisclaimerPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-12 text-gray-800">

      <h1 className="text-4xl font-bold mb-6">
        Disclaimer
      </h1>

      <section className="space-y-8 leading-relaxed">

        <div>
          <h2 className="text-2xl font-semibold mb-3">General Information</h2>
          <p>
            The information provided on <strong>RankPredictor</strong> is for
            educational and informational purposes only.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3">
            No Official Affiliation
          </h2>
          <p>
            RankPredictor is not affiliated with the National Testing Agency (NTA)
            or any government organization. We are also not associated with any
            coaching institute.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3">
            Accuracy of Predictions
          </h2>
          <p>
            Rank, percentile, and cutoff predictions shown on this website are
            based on historical data, trends, and publicly available information.
            Actual results may vary.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3">
            No Admission Guarantee
          </h2>
          <p>
            We do not guarantee admission, rank, percentile, or selection in any
            exam or counseling process.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3">
            External Links
          </h2>
          <p>
            Our website may contain links to external websites. We are not
            responsible for the content or accuracy of information on those
            sites.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3">
            User Responsibility
          </h2>
          <p>
            By using this website, you agree that RankPredictor will not be held
            liable for any losses, damages, or decisions made based on the
            information provided here.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3">
            Consent
          </h2>
          <p>
            By using RankPredictor, you hereby consent to this disclaimer and
            agree to its terms.
          </p>
        </div>

      </section>
    </main>
  );
}
