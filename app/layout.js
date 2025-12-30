import Navbar from "@/components/Navbar";
import "./globals.css";
import { Poppins } from "next/font/google";
import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: [
    "100","200","300","400","500","600","700","800","900"
  ],
  display: "swap",
  variable: "--font-poppins",
});
export const metadata = {
  title: {
    default: "RankPredictor – JEE Main Rank Predictor 2026 | Marks vs Rank",
    template: "%s | RankPredictor",
  },

  description:
    "RankPredictor is a free JEE Main Rank Predictor 2026. Estimate your expected rank and percentile using marks based on previous year JEE Main data, trends, and analysis. Check JEE Main marks vs rank, percentile, cutoff insights and more.",

  keywords: [
    "JEE Main Rank Predictor 2026",
    "JEE Marks vs Rank",
    "JEE Main Percentile Predictor",
    "JEE Main 2026 Rank",
    "JEE Main Cutoff 2026",
    "JEE Main Marks Calculator",
    "JEE Main Rank vs Percentile",
    "JEE Main Analysis",
    "JEE Main Prediction Tool",
  ],

  authors: [{ name: "RankPredictor" }],

  creator: "RankPredictor",
  publisher: "RankPredictor",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: "https://jeerankpredictor.in",
  },

  openGraph: {
    title: "RankPredictor – JEE Main Rank Predictor 2026",
    description:
      "Predict your JEE Main 2026 rank and percentile using marks. Based on previous year trends and public data. Free & accurate JEE Main Rank Predictor.",
    url: "https://jeerankpredictor.in",
    siteName: "RankPredictor",
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "RankPredictor – JEE Main Rank Predictor 2026",
    description:
      "Estimate your JEE Main 2026 rank & percentile using marks. Free rank predictor based on previous year analysis.",
  },

  category: "Education",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.variable}>
        <Navbar />

        {/* Main content landmark */}
        <main id="main-content" className="min-h-screen">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}

