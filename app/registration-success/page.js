"use client";
import { FaClock, FaCheckCircle, FaRocket, FaInstagram } from 'react-icons/fa';

export default function RegistrationSuccess() {
  return (
    <div className="bg-[#0A0C10] min-h-screen flex items-center justify-center px-6">
      <div className="max-w-2xl w-full text-center">
        {/* Animated Success Icon */}
        <div className="relative mb-8 inline-block">
          <div className="absolute inset-0 bg-blue-500 blur-3xl opacity-20 animate-pulse"></div>
          <FaCheckCircle className="text-8xl text-blue-500 relative" />
        </div>

        <h1 className="text-4xl md:text-5xl font-black text-white mb-4 italic">
          Application <span className="text-blue-500 uppercase">Received!</span>
        </h1>
        
        <p className="text-slate-400 text-lg mb-12 leading-relaxed">
          Your credentials have been sent to our verification queue. Our team (seniors from VNIT) will review your ID manually.
        </p>

        {/* Status Card */}
        <div className="bg-white/[0.03] border border-white/10 rounded-[2.5rem] p-8 mb-10 text-left">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-yellow-500/10 rounded-full flex items-center justify-center text-yellow-500">
              <FaClock className="animate-spin-slow" />
            </div>
            <div>
              <h4 className="font-bold text-white uppercase tracking-tighter text-sm">Review in Progress</h4>
              <p className="text-xs text-slate-500 italic">Estimated time: 120 Minutes</p>
            </div>
          </div>
          
          <div className="space-y-4">
             <div className="flex items-center gap-3 text-sm">
                <FaCheckCircle className="text-emerald-500" />
                <span className="text-slate-300">Profile Created</span>
             </div>
             <div className="flex items-center gap-3 text-sm opacity-50">
                <div className="w-4 h-4 rounded-full border border-slate-500"></div>
                <span className="text-slate-500">ID Verification (Pending)</span>
             </div>
             <div className="flex items-center gap-3 text-sm opacity-50">
                <div className="w-4 h-4 rounded-full border border-slate-500"></div>
                <span className="text-slate-500">Dashboard Access Granted</span>
             </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-black transition-all">
            Join Mentor Discord
          </button>
          <button className="bg-white/5 hover:bg-white/10 text-white px-8 py-4 rounded-2xl font-black border border-white/10 transition-all">
            Go to Homepage
          </button>
        </div>
      </div>
    </div>
  );
}