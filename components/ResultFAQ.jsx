"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import { FaChevronDown, FaQuestionCircle, FaLink } from 'react-icons/fa';

const ResultFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "Will NTA release the All India Rank (AIR) with Session 1 Results?",
      a: "No. For the January session, NTA only releases your NTA Score (Percentile). Your final All India Rank (AIR) and Category Rank will be calculated only after the Session 2 (April) results are declared, using the best of your two scores.",
      link: "/jee-rank-predictor",
      linkText: "Estimate your AIR now"
    },
    {
      q: "What is a 'Good Percentile' for NIT Computer Science (CSE) in 2026?",
      a: "For top-tier NITs like Trichy, Surathkal, or Warangal, a percentile of 99.5+ is usually required for General category students. For other NITs, 98.5+ is a safe target for CSE.",
      link: "/top-nits-for-computer-science-cse-cutoff-2026",
      linkText: "View Top 10 NIT Cutoffs"
    },
    {
      q: "How is the JEE Main Percentile different from Marks?",
      a: "Marks are your raw score out of 300. Percentile is a normalized score indicating the percentage of candidates who scored equal to or less than you in that specific shift.",
      link: "/blog/nta_percentile_calculation",
      linkText: "See Calculation Logic"
    },
    {
      q: "What if my Session 2 score is lower than Session 1?",
      a: "Don't worry. NTA uses the 'Best of Two' rule. Your final rank will be based on whichever session score is higher.",
    }
  ];

  return (
    <section className="max-w-4xl mx-auto my-20 px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-black text-slate-900 mb-2">Frequently Asked Questions</h2>
        <p className="text-slate-500 font-medium">Everything you need to know about your 2026 Result</p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className={`border-2 rounded-4xl transition-all overflow-hidden ${openIndex === index ? 'border-blue-600 bg-blue-50/30' : 'border-slate-100 bg-white'}`}
          >
            <button 
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex items-center justify-between p-6 text-left"
            >
              <div className="flex items-center gap-4">
                <FaQuestionCircle className={`text-xl ${openIndex === index ? 'text-blue-600' : 'text-slate-400'}`} />
                <span className="font-bold text-slate-800 md:text-lg">{faq.q}</span>
              </div>
              <FaChevronDown className={`transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-blue-600' : 'text-slate-400'}`} />
            </button>
            
            {openIndex === index && (
              <div className="px-6 pb-6 pt-0 animate-fadeIn">
                <div className="h-0.5 bg-slate-100 mb-6 w-12 rounded-full"></div>
                <p className="text-slate-600 leading-relaxed mb-4">{faq.a}</p>
                {faq.link && (
                  <Link href={faq.link} className="inline-flex items-center gap-2 text-blue-600 font-bold text-sm hover:underline">
                    <FaLink className="text-xs" /> {faq.linkText}
                  </Link>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ResultFAQ;