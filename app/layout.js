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
    default: "JEERankPredictor – JEE Main Rank Predictor 2026 | Marks vs Rank",
    template: "%s | JEERankPredictor",
  },

  description:
    "JEERankPredictor is a free JEE Main Rank Predictor 2026. Estimate your expected rank and percentile using marks based on previous year JEE Main data, trends, and analysis.",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    siteName: "JEERankPredictor",
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
  },

  other: {
    "google-adsense-account": "ca-pub-9968150249925857",
  },
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

