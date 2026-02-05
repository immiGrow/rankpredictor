import Marks120Page from '@/components/Marks120Page'
import React from 'react'

export const metadata = {
  // Title optimized for "Marks vs Percentile" - the #1 search query after exams
  title: '120 Marks in JEE Main 2026: Percentile, Rank & NIT Admission Chances',
  description: 'Scored 120 marks in JEE Main 2026? Find your expected percentile, All India Rank (AIR), and NIT admission chances. See if 120 marks is enough to qualify for JEE Advanced.',
  alternates: {
    canonical: 'https://www.jeerankpredictor.in/jee-mains-120-marks-percentile-2026', // Updated to 2026 to match your title
  },
   robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
  },
  openGraph: {
    title: 'Is 120 Marks Good in JEE Main 2026? Percentile & NIT Analysis',
    description: 'Detailed analysis of 120 marks in JEE Main. Check expected percentile (approx 96.5-97.8), rank trends, and which NIT branches you can get with this score.',
    url: 'https://www.jeerankpredictor.in/jee-mains-120-marks-percentile-2026',
    siteName: 'JEERankPredictor',
    images: [
      {
        url: 'https://www.jeerankpredictor.in/marks-og.png', // Make sure this image exists
        width: 1200,
        height: 630,
        alt: 'JEE Main 120 Marks Analysis',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JEE Main 2026: What Percentile for 120 Marks?',
    description: 'Get the most accurate Marks vs Percentile analysis for a score of 120. See NIT admission chances for OBC, SC, ST, and General categories.',
    images: ['https://www.jeerankpredictor.in/marks-og.png'], // Ensure this image is optimized for Twitter (1200x675)
  },
};

function page() {
  return (
    <>
    
    <Marks120Page/>
    </>
  )
}

export default page