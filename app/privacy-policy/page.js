import React from 'react';

export const metadata = {
  title: "Privacy Policy | JEE RankPredictor – Data Usage & Cookie Disclosure",
  description:
    "Official Privacy Policy for JEE RankPredictor. Learn how we handle student data, our use of Google AdSense cookies, and our commitment to user privacy.",
  alternates: {
    canonical: "https://www.jeerankpredictor.in/privacy-policy",
  },
  robots: "noindex, follow", // Usually, you don't want Privacy Policy to outrank your tools in search
};

export default function PrivacyPolicyPage() {
  const currentYear = new Date().getFullYear();

  return (
    <main className="max-w-4xl mx-auto px-6 py-12 text-gray-800 leading-relaxed">
      <div className="border-b border-gray-200 pb-8 mb-8">
        <h1 className="text-4xl font-extrabold mb-4 text-gray-900">Privacy Policy</h1>
        <p className="text-sm text-gray-500">
          Effective Date: January 1, 2026 | Last Updated: {currentYear}
        </p>
      </div>

      <section className="space-y-10">
        {/* 1. INTRODUCTION */}
        <div>
          <h2 className="text-2xl font-bold mb-3 text-gray-900">1. Introduction</h2>
          <p>
            Welcome to <strong>JEE RankPredictor</strong> (available at <a href="https://www.jeerankpredictor.in" className="text-blue-600 hover:underline">jeerankpredictor.in</a>). We are committed to protecting your personal information and your right to privacy. This policy explains what information we collect and how we use it specifically regarding JEE exam score estimation and advertisement services.
          </p>
        </div>

        {/* 2. MANDATORY ADSENSE SECTION (CRITICAL) */}
        <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
          <h2 className="text-2xl font-bold mb-3 text-blue-900">2. Google AdSense & Third-Party Advertising</h2>
          <p className="mb-4 text-blue-800">
            This website uses Google AdSense to serve advertisements. To comply with Google’s policies, please note the following:
          </p>
          <ul className="list-disc pl-6 space-y-3 text-blue-900 italic">
            <li>
              <strong>Cookies:</strong> Third-party vendors, including Google, use cookies to serve ads based on a user&apos;s prior visits to your website or other websites.
            </li>
            <li>
              <strong>DART Cookie:</strong> Google&apos;s use of advertising cookies enables it and its partners to serve ads to your users based on their visit to your sites and/or other sites on the Internet.
            </li>
            <li>
              <strong>Opt-out:</strong> Users may opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="underline font-bold">Google Ads Settings</a>.
            </li>
          </ul>
        </div>

        {/* 3. INFORMATION WE COLLECT */}
        <div>
          <h2 className="text-2xl font-bold mb-3 text-gray-900">3. Information Collection and Use</h2>
          <p className="mb-2">We collect information in two ways:</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>
              <strong>Tool Input Data:</strong> When you use our JEE Rank Predictor or JoSAA College Predictor, you may enter marks, percentile, or category. This data is processed in real-time to generate results. We <strong>do not store</strong> this data on our servers in a way that identifies you.
            </li>
            <li>
              <strong>Log Files:</strong> Like most websites, we collect standard log information (IP address, browser type, ISP, entry/exit pages). This is used strictly for analyzing trends and preventing bot attacks.
            </li>
          </ul>
        </div>

        {/* 4. COOKIES POLICY */}
        <div>
          <h2 className="text-2xl font-bold mb-3 text-gray-900">4. Cookies and Web Beacons</h2>
          <p>
            JEE RankPredictor uses &quot;cookies&quot; to store information about visitors&apos; preferences and the pages on the website that the visitor accessed. This information is used to optimize the users&apos; experience by customizing our web page content based on visitors&apos; browser type and/or other information.
          </p>
        </div>

        {/* 5. DATA PROTECTION (EEAT SIGNAL) */}
        <div>
          <h2 className="text-2xl font-bold mb-3 text-gray-900">5. Data Security & Integrity</h2>
          <p>
            As a platform built by a CSE student at VNIT Nagpur, we understand the importance of technical security. We use HTTPS encryption to protect all data transmitted between your browser and our site. We do not sell, trade, or otherwise transfer your data to outside parties.
          </p>
        </div>

        {/* 6. CHILDREN'S PRIVACY */}
        <div>
          <h2 className="text-2xl font-bold mb-3 text-gray-900">6. Children’s Privacy (COPPA)</h2>
          <p>
            Our website is directed to students preparing for engineering entrance exams. We do not knowingly collect any personally identifiable information from children under the age of 13. If you believe your child has provided this info, contact us immediately and we will remove it.
          </p>
        </div>

        {/* 7. CONSENT */}
        <div>
          <h2 className="text-2xl font-bold mb-3 text-gray-900">7. Your Consent</h2>
          <p>
            By using our website, you hereby consent to our Privacy Policy and agree to its Terms and Conditions.
          </p>
        </div>

        {/* 8. CONTACT */}
        <div className="border-t border-gray-200 pt-8">
          <h2 className="text-2xl font-bold mb-3 text-gray-900">Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us:</p>
          <div className="mt-4 p-4 bg-gray-50 rounded-lg inline-block">
            <p className="font-semibold text-gray-900">Email: <span className="text-blue-600">rankpredictorjee@gmail.com</span></p>
            <p className="text-sm text-gray-500 mt-1">Response time: Within 24 hours</p>
          </div>
        </div>
      </section>
    </main>
  );
}