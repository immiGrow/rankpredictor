import Marks150Page from '@/components/Marks150Page'
import React from 'react'

export const metadata = {
  // Title optimized for "Top NITs" - a high-intent search query for this score range
  title: '150 Marks in JEE Main 2026: Percentile, AIR & Top NIT Admission Chances',
  description: 'Scored 150 in JEE Main 2026? Get your expected 98+ percentile, shift-wise rank analysis, and a list of Top 10 NITs you can get with 150 marks. Free & Accurate.',
  alternates: {
    canonical: 'https://www.jeerankpredictor.in/jee-mains-150-marks-percentile-2026',
  },
   robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
  },
  openGraph: {
    title: '150 Marks in JEE Main 2026 – Percentile & Best NIT Branches',
    description: 'Is 150 marks enough for NIT Trichy or Warangal? Check detailed Marks vs Percentile analysis, category-wise cutoffs, and 2026 normalization trends.',
    url: 'https://www.jeerankpredictor.in/jee-mains-150-marks-percentile-2026',
    siteName: 'JEERankPredictor',
    images: [
      {
        url: 'https://www.jeerankpredictor.in/marks-og.png',
        width: 1200,
        height: 630,
        alt: 'JEE Main 150 Marks Analysis',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JEE Main 2026: What Percentile for 150 Marks?',
    description: 'Analyze your 150 marks score. Get expected All India Rank and admission chances in top-tier NITs and IIITs.',
    images: ['https://www.jeerankpredictor.in/marks-og.png'],
  },
};

function page() {
  return (
    <>
     <Marks150Page/> 
    </>
  )
}

export default page