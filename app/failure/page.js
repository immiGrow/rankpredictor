"use client";

import { use } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function FailurePage({ searchParams }) {
  const params = use(searchParams);
  const router = useRouter();
  
  // Extract data to allow the user to "Try Again" easily
  const { user, rank, category, gender, quota, rankType } = params;

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6">
      <div className="bg-white p-10 rounded-[2.5rem] border border-slate-100 text-center max-w-lg shadow-2xl relative overflow-hidden">
        
        {/* Decorative Background Element */}
        <div className="absolute top-0 left-0 w-full h-2 bg-red-500"></div>

        {/* Failure Icon */}
        <div className="w-16 h-16 bg-red-100 text-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </div>
        
        <h1 className="text-2xl font-black text-slate-900 mb-2">Payment Incomplete</h1>
        <p className="text-slate-500 text-sm mb-8 leading-relaxed">
          Don&apos;t worry, if any amount was deducted, it will be refunded automatically within 5-7 days.
        </p>

        {/* Possible Reasons Box */}
        <div className="bg-red-50 p-4 rounded-2xl text-left mb-8 border border-red-100">
           <p className="text-[10px] font-bold text-red-600 uppercase mb-2">Common Issues:</p>
           <ul className="text-xs text-slate-600 space-y-2">
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 bg-red-400 rounded-full"></span>
                Transaction cancelled by user or bank
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 bg-red-400 rounded-full"></span>
                Insufficient funds or daily UPI limit reached
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 bg-red-400 rounded-full"></span>
                Network connectivity lost during payment
              </li>
           </ul>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-3">
            <button 
              onClick={() => router.back()}
              className="w-full bg-slate-900 text-white font-black py-4 rounded-2xl text-lg shadow-lg hover:bg-slate-800 transition-all"
            >
              TRY AGAIN 🔄
            </button>
            
            <Link 
              href="/"
              className="w-full bg-white text-slate-600 font-bold py-4 rounded-2xl text-sm border border-slate-200 hover:bg-slate-50 transition-all"
            >
              Back to Home
            </Link>
        </div>

        {/* Support Section */}
        <div className="mt-8 pt-6 border-t border-slate-100">
            <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-3">
               Need Help? Contact Support
            </p>
            <div className="flex justify-center gap-4">
                <a href="mailto:support@jeerankpredictor.in" className="text-blue-600 text-xs font-bold hover:underline">
                    Email Support
                </a>
                <span className="text-slate-300">|</span>
                <a href="https://wa.me/YOUR_NUMBER" className="text-green-600 text-xs font-bold hover:underline">
                    WhatsApp Us
                </a>
            </div>
        </div>
      </div>
      
      {/* Branding Footer */}
      <div className="mt-8 flex items-center gap-2 opacity-50">
        <Image src="/logo.jpg" alt="Logo" width={24} height={24} className="w-6 h-6 grayscale" />
        <p className="text-xs font-bold text-slate-900 uppercase tracking-tighter">jeerankpredictor.in</p>
      </div>
    </div>
  );
}