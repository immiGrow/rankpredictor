import Script from "next/script";
import Rank from "@/components/Rank";

export default function Home() {
  return (
    <>
      {/* ✅ SoftwareApplication Schema */}
      <Script
        id="software-application-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "JEE Main Rank Predictor 2026",
            "operatingSystem": "Web",
            "applicationCategory": "EducationalApplication",
            "description":
              "Free JEE Main Rank Predictor 2026 to estimate expected rank and percentile using previous year trends.",
            "url": "https://jeerankpredictor.in",
            "author": {
              "@type": "Organization",
              "name": "JEE Rank Predictor"
            },
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "INR"
            }
          }),
        }}
      />

      <div className="bg-linear-to-b from-blue-100 to-white">
        <div className="py-12">
          <Rank />
        </div>
      </div>
    </>
  );
}
