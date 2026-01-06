import Script from "next/script";
import Rank from "@/components/Rank";
import Link from "next/link";
import TrustSection from "@/components/TrustSection";
import HowItWorks from "@/components/HowItWorks";
import KeyFeatures from "@/components/KeyFeatures";
import WhyChooseRP from "@/components/WhyChooseRP";
import PercentileRankTable from "@/components/PercentileRankTable";
import MarksPercentileTable from "@/components/MarksPercentileTable";
import EssentialResources from "@/components/EssentialResources";
import FAQSection from "@/components/FAQSection";
import HubPage from "@/components/HubPage";

/* =======================
   SEO METADATA (HOMEPAGE)
======================= */
export const metadata = {
  title: "JEE Main Rank Predictor 2026 – Predict Rank & Percentile by Marks",
  description:
    "Use India’s free JEE Main Rank Predictor 2026 to estimate your expected rank and percentile based on marks. Built using past year JEE Main data, trends, and analysis. No login required.",
  keywords: [
    "JEE Main Rank Predictor 2026",
    "JEE Main Marks vs Rank",
    "JEE Main Percentile Predictor",
    "JEE Rank Calculator",
    "JEE Main Rank Estimator",
    "JEE Main 2026 Rank Prediction",
    "JEE Main Analysis Tool",
  ],
  alternates: {
    canonical: "https://jeerankpredictor.in",
  },
  openGraph: {
    title: "JEE Main Rank Predictor 2026 – Free Marks vs Rank Tool",
    description:
      "Predict your JEE Main 2026 rank & percentile using marks. Based on previous year trends and official data patterns.",
    url: "https://jeerankpredictor.in",
    siteName: "RankPredictor",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "JEE Main Rank Predictor 2026",
    description:
      "Estimate your JEE Main 2026 rank and percentile instantly using marks.",
  },
};

export default function Home() {
  return (
    <>
      {/* =======================
          SOFTWARE APPLICATION SCHEMA
      ======================= */}
      <Script
        id="software-application-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "JEE Main Rank Predictor 2026",
            operatingSystem: "Web",
            applicationCategory: "EducationalApplication",
            description:
              "Free JEE Main Rank Predictor 2026 to estimate expected rank and percentile using previous year trends.",
            url: "https://jeerankpredictor.in",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "INR",
            },
            author: {
              "@type": "Organization",
              name: "RankPredictor",
            },
          }),
        }}
      />

      {/* =======================
          FAQ SCHEMA (VERY IMPORTANT)
      ======================= */}
      <Script
        id="faq-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "How accurate is JEE Main Rank Predictor 2026?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "The JEE Main Rank Predictor 2026 provides an estimated rank range based on previous year trends and public data. Actual ranks may vary due to exam difficulty and total candidates.",
                },
              },
              {
                "@type": "Question",
                name: "Is this JEE rank predictor official?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "No, this tool is not affiliated with NTA. It is an independent educational tool designed to help students estimate their expected rank.",
                },
              },
              {
                "@type": "Question",
                name: "Can I use this predictor before official results?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Yes. This rank predictor is meant for pre-result estimation to help students understand their approximate standing.",
                },
              },
            ],
          }),
        }}
      />

      {/* =======================
          PAGE CONTENT
      ======================= */}
    <main id="main-content" className="bg-linear-to-b from-blue-50 to-white">
        {/* HERO SECTION */}
        <section className="bg-indigo-50">
      <div className="max-w-6xl mx-auto px-4 py-16 lg:flex lg:items-center lg:justify-between gap-12">
        {/* Left: Hero Text */}
        <div className="lg:w-1/2">
          <p className="text-blue-600 font-semibold uppercase mb-3 text-sm md:text-base">
            Free • Accurate • Instant Results
          </p>
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
            JEE Main Rank Predictor 2026 – <span className="text-blue-600">Predict Rank & Percentile</span>
          </h1>
          <p className="text-gray-700 text-lg mb-8">
            Use our free <strong>JEE Main Rank Predictor 2026</strong> to estimate your expected All India Rank (AIR) 
            and percentile based on marks. Calculations are based on previous year JEE Main data, normalization trends, 
            and official NTA statistics. No signup required.
          </p>
        </div>

        {/* Right: Rank Tool */}
        <div className="lg:w-1/2 flex justify-center">
          {/* Use your Rank component directly */}
          <Rank />
        </div>
      </div>
    </section>

        {/* TRUST SIGNALS */}
       <TrustSection/>

        {/* HOW IT WORKS */}
      <HowItWorks/>

      {/* Key Features of JEE Main Rank Predictor 2026 */}
      <KeyFeatures/>

      {/* Why Choose JEE Rank Predictor 2026 */}
      <WhyChooseRP/>

        {/* MARKS VS PERCENTILE TABLE  2026*/}
      <PercentileRankTable/>

      {/* Marks VS Percentile Table */}
<MarksPercentileTable/>

{/* Essential Resources Section */}
<EssentialResources/>

{/* JEE MAINS 120 150 200 marks pages links */}
<HubPage/>
        {/* FAQ */}
        <FAQSection/>
      </main>
    </>
  );
}
