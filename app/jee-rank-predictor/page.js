import JeeRankPredictorPage from '@/components/JeeRankPredictorPage'
import React from 'react'

export const metadata = {
  // Title optimized for "Percentile vs Rank" - one of the most searched JEE terms
  title: 'JEE Main Rank Predictor 2026: Percentile vs Rank | Accurate AIR Predictor',
  description: 'Predict your JEE Main All India Rank (AIR) from your percentile with our 2026 NTA-based predictor. Get accurate estimates for IIT, NIT & IIIT admissions for all categories.',
  alternates: {
    canonical: 'https://www.jeerankpredictor.in/jee-rank-predictor',
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
  },
  openGraph: {
    // OG Title made more "Clicky" for WhatsApp/Facebook shares
    title: '🔥 JEE Rank Predictor 2026: Check Your Expected AIR Now!',
    description: 'Don\'t wait for results! Calculate your expected AIR from your percentile using our AI-driven rank predictor for JEE 2026. Student-friendly & Accurate.',
    url: 'https://www.jeerankpredictor.in/jee-rank-predictor',
    siteName: 'JEERankPredictor',
    images: [
      {
        url: 'https://www.jeerankpredictor.in/logo.jpg',
        width: 1200,
        height: 630,
        alt: 'JEE Rank Predictor 2026',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JEE 2026 Rank Predictor: Percentile vs AIR Analysis',
    description: 'Calculate your JEE Main All India Rank accurately. Best free tool for NIT & IIT admission planning.',
    images: ['https://www.jeerankpredictor.in/logo.jpg'],
  },
};

function page() {
  return (
    <>
      
      <JeeRankPredictorPage/>
    </>
  )
}

export default page