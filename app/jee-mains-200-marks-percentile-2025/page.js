import Marks200Page from '@/components/Marks200Page'
import React from 'react'

export const metadata = {
  // Title targets high-competition keywords: "99 Percentile" and "NIT Trichy/Warangal"
  title: '200 Marks in JEE Main 2026: Percentile, AIR & NIT CSE Admission Chances',
  description: 'Scored 200 marks in JEE Main 2026? Get your expected 99+ percentile, All India Rank, and admission chances for CSE in Top NITs like Trichy, Warangal & Surathkal.',
  alternates: {
    canonical: 'https://www.jeerankpredictor.in/jee-mains-200-marks-percentile-2026',
  },
   robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
  },
  openGraph: {
    title: 'Is 200 Marks Enough for 99 Percentile in JEE Main 2026? Rank Analysis',
    description: 'Achieve a 99+ percentile with 200 marks. Check detailed shift-wise analysis, IIT JEE Advanced eligibility, and category-wise NIT cutoff trends for 2026.',
    url: 'https://www.jeerankpredictor.in/jee-mains-200-marks-percentile-2026',
    siteName: 'JEERankPredictor',
    images: [
      {
        url: 'https://www.jeerankpredictor.in/marks-og.png', 
        width: 1200,
        height: 630,
        alt: 'JEE Main 200 Marks Analysis',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JEE Main 2026: 200 Marks Percentile & Rank Trends',
    description: 'Complete analysis for students scoring 200. Expected AIR, Top NIT branches, and JEE Advanced qualification marks.',
    images: ['https://www.jeerankpredictor.in/marks-og.png'],
  },
};

function page() {
  return (
    <>
    
    <Marks200Page/>
    </>
  )
}

export default page