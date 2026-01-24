import AboutPage from '@/components/AboutPage';
import Script from 'next/script';
import React from 'react';

// 1. FULL SEO METADATA
export const metadata = {
  title: "About JEE RankPredictor | Founded by Abhisha Kumar (VNIT Nagpur)",
  description: "Learn about JEE RankPredictor, developed by Abhisha Kumar Chittore (97.32%ile, VNIT Nagpur). We use data-driven algorithms to provide accurate JEE Main 2026 rank and college predictions.",
  keywords: [
    "About JEE RankPredictor",
    "Abhisha Kumar Chittore",
    "VNIT Nagpur CSE",
    "JEE Main Rank Predictor methodology",
    "JoSAA AI College Predictor",
    "JEE 2026 marks vs percentile analysis",
    "How rank predictor works"
  ],
  alternates: {
    canonical: "https://www.jeerankpredictor.in/about",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "About JEE RankPredictor | Expert JEE 2026 Insights",
    description: "Built by a JEE survivor for future engineers. Get accurate rank estimates based on 5 years of NTA data.",
    url: "https://www.jeerankpredictor.in/about",
    siteName: "JEE RankPredictor",
    images: [
      {
        url: 'https://www.jeerankpredictor.in/logo.jpg', // Make sure to add an OG image in your public folder
        width: 1200,
        height: 630,
        alt: 'Abhisha Kumar Chittore - Founder of JEE RankPredictor',
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About JEE RankPredictor | Founded by AKC (VNIT Nagpur)",
    description: "Data-driven JEE Main Rank & College predictions by Abhisha Kumar, CSE student at VNIT Nagpur.",
    creator: "@hoodtohustle", // Add your handle if you have one
    images: ['https://www.jeerankpredictor.in/logo.jpg'],
  },
};

function Page() {
  // 2. ENHANCED SCHEMA (Combining Person and Website for maximum trust)
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        "@id": "https://www.jeerankpredictor.in/about/#webpage",
        "url": "https://www.jeerankpredictor.in/about",
        "name": "About JEE RankPredictor",
        "description": "Information about the founder and methodology behind the JEE Rank and College predictor tools.",
        "breadcrumb": {
          "@id": "https://www.jeerankpredictor.in/about/#breadcrumb"
        },
        "mainEntity": {
          "@id": "https://www.jeerankpredictor.in/about/#person"
        }
      },
      {
        "@type": "Person",
        "@id": "https://www.jeerankpredictor.in/about/#person",
        "name": "Abhisha Kumar Chittore",
        "alternateName": "AKC",
        "image": "https://www.jeerankpredictor.in/founder.jpg", // Recommended: add your photo
        "jobTitle": "Founder & Lead Developer",
        "alumniOf": {
          "@type": "CollegeOrUniversity",
          "name": "Visvesvaraya National Institute of Technology, Nagpur",
          "alternateName": "VNIT Nagpur",
          "sameAs": "https://vnit.ac.in/"
        },
        "description": "Abhisha Kumar Chittore is a B.Tech CSE student at VNIT Nagpur and a JEE 2025 achiever with 97.32 percentile.",
        "knowsAbout": ["JEE Main", "Engineering Entrance Exams", "Data Analysis", "JoSAA Counseling", "React.js", "Next.js"],
        "url": "https://www.jeerankpredictor.in/about"
      }
    ]
  };

  return (
    <>
      <Script
        id="about-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* 3. MAIN COMPONENT */}
      <AboutPage />
    </>
  );
}

export default Page;