import JosaaCollegePredictorPage from '@/components/JosaaCollegePredictorPage'
import React from 'react'

export const metadata = {
  title: 'JoSAA AI College Predictor 2026 – Predict IITs, NITs, GFTIs & Other JEE College Options',
  description: 'Use your JEE Main/Advanced rank to predict admission chances in IITs, NITs, GFTIs & other top engineering colleges through our free JoSAA 2026 College Predictor. Plan choice filling smartly based on rank, category, quota & gender.',
  alternates: {
    canonical: 'https://www.jeerankpredictor.in/josaa-college-predictor',
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
  },
  openGraph: {
    title: 'Will You Get an NIT? JoSAA 2026 College Predictor (Free Tool) - Check Admission Chances in Top NITs (LIVE)',
    description: "Don't guess. Enter your JEE Main Rank/Percentile to see exactly which NITs, IIITs, or GFTIs you are eligible for. Includes Home State & Category quota benefits. Get a detailed college report for General, OBC, EWS, SC & ST categories. 100% accurate rank analysis.",
    url: 'https://www.jeerankpredictor.in/josaa-college-predictor',
    siteName: 'JEERankPredictor',
    images: [
      {
        url: 'https://www.jeerankpredictor.in/college-og.jpg',
        width: 1200,
        height: 630,
        alt: 'JoSAA 2026 College Predictor',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JoSAA College Predictor 2026 – Predict Your Realistic JEE College Options',
    description: 'Predict your realistic JoSAA college options instantly with your JEE rank, category & quota. Free and accurate predictions.',
    images: ['https://www.jeerankpredictor.in/college-og.jpg'],
  },
};

function page() {
  return (
    <>
    
    <JosaaCollegePredictorPage/>

    </>
  )
}

export default page