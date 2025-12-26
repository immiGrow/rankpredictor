export const metadata = {
  title: "Privacy Policy – RankPredictor",
  description:
    "Read the privacy policy of RankPredictor to understand how we collect, use, and protect user information.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-12 text-gray-800">

      <h1 className="text-4xl font-bold mb-6">
        Privacy Policy
      </h1>

      <p className="text-gray-600 mb-8">
        Last updated: {new Date().getFullYear()}
      </p>

      <section className="space-y-8 leading-relaxed">

        <div>
          <h2 className="text-2xl font-semibold mb-3">Introduction</h2>
          <p>
            At <strong>RankPredictor</strong>, we value your privacy. This Privacy
            Policy explains how we collect, use, and safeguard your information
            when you use our website.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3">Information We Collect</h2>
          <p>
            We do not collect personally identifiable information such as name,
            phone number, or address unless you voluntarily contact us via email.
          </p>
          <p className="mt-2">
            We may collect non-personal information including:
          </p>
          <ul className="list-disc pl-6 mt-2 text-gray-700">
            <li>Browser type</li>
            <li>Device information</li>
            <li>Pages visited</li>
            <li>Time spent on the site</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3">Cookies</h2>
          <p>
            RankPredictor may use cookies to improve user experience and analyze
            website traffic. You can disable cookies through your browser
            settings if you prefer.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3">Third-Party Services</h2>
          <p>
            We may use third-party services such as analytics tools to understand
            user behavior. These services may collect information as governed by
            their respective privacy policies.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3">Data Security</h2>
          <p>
            We take reasonable measures to protect your data, but no method of
            transmission over the internet is 100% secure.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3">Children’s Information</h2>
          <p>
            RankPredictor does not knowingly collect personal information from
            children under the age of 13.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3">Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Any changes will
            be posted on this page.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3">Contact Us</h2>
          <p>
            If you have any questions regarding this Privacy Policy, please
            contact us at:
          </p>
          <p className="mt-2 font-medium text-blue-600">
            support@rankpredictor.in
          </p>
        </div>

      </section>
    </main>
  );
}
