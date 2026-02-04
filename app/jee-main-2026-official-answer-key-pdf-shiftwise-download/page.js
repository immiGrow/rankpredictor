import AnswerKeyPage from '@/components/AnswerKeyPage';
import React from 'react'

// app/jee-main-2026-official-answer-key-pdf-shiftwise-download/metadata.js

export const metadata = {
  title: "🔴 JEE Main 2026 Answer Key (OUT): Download Shift-wise PDF & Response Sheet",

  description:
    "JEE Main 2026 Official Answer Key for Session 1 is expected today, Feb 4. Check live status, download shift-wise PDF, and use our tracker for Bonus Questions.",

  alternates: {
    canonical:
      "https://www.jeerankpredictor.in/jee-main-2026-official-answer-key-pdf-shiftwise-download",
  },

  openGraph: {
    title: "🔴 JEE 2026 Answer Key OUT - Download PDF & Check Bonus Questions",
    description:
      "Calculate your rank instantly. Full shift-wise analysis and challenge tracker for Jan-Feb 2026 attempt.",
    url: "https://www.jeerankpredictor.in/jee-main-2026-official-answer-key-pdf-shiftwise-download",
    images: [
      {
        url: "https://www.jeerankpredictor.in/jee-2026-result-live-banner.jpg",
        width: 1200,
        height: 630,
        alt: "JEE Main 2026 Answer Key",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "🔴 JEE 2026 Answer Key OUT - Download PDF & Check Bonus Questions",
    description:
      "Calculate your rank instantly. Full shift-wise analysis and challenge tracker for Jan-Feb 2026 attempt.",
    images: ["https://www.jeerankpredictor.in/jee-2026-result-live-banner.jpg"],
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
    <AnswerKeyPage/>
    </>
  )
}

export default page