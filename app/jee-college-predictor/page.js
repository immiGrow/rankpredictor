import CollegePredictor from '@/components/CollegePredictor'
import React from 'react'

export const metadata = {
  // Title targets "JoSAA" and "Admission" - the two biggest search terms for college prediction
  title: 'JEE College Predictor 2026: AI-Powered JoSAA Admission Tool | IIT, NIT, IIIT',
  description: 'Predict your admission chances in IITs, NITs, IIITs & GFTIs with the most accurate JEE College Predictor 2026. Get branch-wise cutoffs based on JoSAA & CSAB trends. AI-assisted, free, and no login required.',
  alternates: {
    canonical: 'https://www.jeerankpredictor.in/jee-college-predictor',
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
  },
  openGraph: {
    // OG Title creates a "Must-Try" feeling for social sharing
    title: 'Which College Will I Get? JEE College Predictor 2026 (JoSAA & CSAB)',
    description: 'Enter your JEE Rank and category to see a realistic list of IITs, NITs, and IIITs you can join. AI-powered analysis for General, OBC, EWS, SC, and ST categories.',
    url: 'https://www.jeerankpredictor.in/jee-college-predictor',
    siteName: 'JEERankPredictor',
    images: [
      {
        url: 'https://www.jeerankpredictor.in/college-og.jpg', // Or use the new "analysis-og.jpg" we created
        width: 1200,
        height: 630,
        alt: 'JEE College Predictor 2026 Tool',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JEE College Predictor 2026: Predict IITs & NITs Instantly',
    description: 'The most accurate AI-assisted tool to predict your engineering college based on JEE Main & Advanced ranks. Filter by category, gender, and home state quota.',
    images: ['https://www.jeerankpredictor.in/college-og.jpg'], // Ensure this image is optimized for Twitter (1200x675)
  },
};

function page() {
  return (
    <>
      
      <CollegePredictor/>

    </>
  )
}

export default page