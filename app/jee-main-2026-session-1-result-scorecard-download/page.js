import JEEJanResultPage from '@/components/JEEJanResultPage'
import React from 'react'

// app/jee-main-2026-session-1-result-scorecard-download/metadata.js

export const metadata = {
  title: "JEE Main 2026 Session 1 Result (LIVE): Direct Link & Scorecard",

  description:
    "Official NTA JEE Main 2026 Session 1 Result direct link. Download Jan Session Scorecard, check shift-wise percentile calculation, and qualifying cutoffs for JEE Advanced.",

  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },

  alternates: {
    canonical:
      "https://www.jeerankpredictor.in/jee-main-2026-session-1-result-scorecard-download",
  },

  openGraph: {
    type: "article",
    url: "https://www.jeerankpredictor.in/jee-main-2026-session-1-result-scorecard-download",
    title: "🔴 JEE Main 2026 Session 1 Result OUT: Check Your Percentile Here!",
    description:
      "The NTA has released the Jan Session results. Use our direct link to download your scorecard and predict your AIR instantly.",
    siteName: "JEE Rank Predictor",
    images: [
      {
        url: "https://www.jeerankpredictor.in/images/jee-2026-result-live-banner.jpg",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "JEE Main 2026 Result (Jan Session): Direct Download Link",
    description:
      "Download your JEE 2026 Scorecard and check marks vs percentile analysis for all shifts.",
    images: [
      "https://www.jeerankpredictor.in/images/jee-2026-result-live-banner.jpg",
    ],
  },

  robots: {
    index: true,
    follow: true,
    maxImagePreview: "large",
    maxSnippet: -1,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  themeColor: "#2563eb",
};


function page() {
  return (
    <>
      <JEEJanResultPage/>
    </>
  )
}

export default page