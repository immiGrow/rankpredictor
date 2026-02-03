"use client";
import React from 'react';
import Link from 'next/link';
import { 
  FaBolt, FaCheckCircle, FaVideo, FaUserShield, 
  FaStar, FaChalkboardTeacher, FaHistory, FaPhoneAlt 
} from 'react-icons/fa';

export default function Page() {
  const mentors = [
    { name: "Abhisha K.", college: "VNIT Nagpur", rank: "97.32%ile", tag: "CSE Expert" },
    { name: "Rahul M.", college: "IIT Bombay", rank: "AIR 12xx", tag: "JoSAA Pro" },
    { name: "Sneha P.", college: "NIT Trichy", rank: "99.1%ile", tag: "Choice Filling" },
  ];

  return (
    <div className="bg-white min-h-screen text-slate-900">
      {/* --- URGENCY HEADER --- */}
      <div className="bg-amber-100 py-2 text-center text-amber-800 text-xs font-bold uppercase tracking-widest px-4">
        ⚡ Limited Slots: Only 15 Sessions available for Feb 12th Results Day
      </div>

      {/* --- HERO SECTION --- */}
      <section className="pt-16 pb-24 px-6 text-center bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-bold mb-8">
            <FaStar /> The Trust-First Initiative
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-8 leading-tight">
            Talk to an <span className="text-blue-600 underline decoration-blue-200">NITian / IITian</span> <br /> 
            for just <span className="text-emerald-600">₹19</span>
          </h1>
          <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Stop taking advice from consultants who never cleared JEE. Get 15 minutes of raw, honest guidance from someone who is actually studying in your dream college.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-2xl font-black text-lg shadow-2xl shadow-blue-200 transition-all transform hover:-translate-y-1">
              Book Your 15-Min Session
            </button>
            <Link href="/jee-rank-predictor" className="bg-slate-100 hover:bg-slate-200 text-slate-700 px-10 py-5 rounded-2xl font-bold text-lg transition-all">
              Predict My Rank First
            </Link>
          </div>
        </div>
      </section>

      {/* --- THE ₹19 COUNSELING MODEL --- */}
      <section className="max-w-6xl mx-auto px-6 py-20 border-y border-slate-100">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center text-2xl shadow-inner">
              <FaBolt />
            </div>
            <h3 className="text-2xl font-bold">15-Min Quick Analysis</h3>
            <p className="text-slate-500 leading-relaxed">Discuss your marks, category, and state quota. Get a list of 5 Safe colleges you can apply to immediately.</p>
          </div>
          <div className="space-y-4">
            <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center text-2xl shadow-inner">
              <FaVideo />
            </div>
            <h3 className="text-2xl font-bold">Live Video Call</h3>
            <p className="text-slate-500 leading-relaxed">Face-to-face interaction on Google Meet. No bots, no automated emails—just real engineering students.</p>
          </div>
          <div className="space-y-4">
            <div className="w-14 h-14 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center text-2xl shadow-inner">
              <FaUserShield />
            </div>
            <h3 className="text-2xl font-bold">Zero-Commitment</h3>
            <p className="text-slate-500 leading-relaxed">It&apos;s just ₹19. If you like the guidance, hire them for JoSAA counseling. If not, you only lost a chai&apos;s worth of money.</p>
          </div>
        </div>
      </section>

      {/* --- MENTOR PREVIEW --- */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-4xl font-black mb-4">Our Elite Mentors</h2>
              <p className="text-slate-400">Hand-picked students from India&apos;s top technical institutes.</p>
            </div>
            <div className="flex gap-2">
                <span className="px-4 py-2 bg-white/10 rounded-full text-xs font-bold uppercase tracking-widest border border-white/10">VNIT Nagpur</span>
                <span className="px-4 py-2 bg-white/10 rounded-full text-xs font-bold uppercase tracking-widest border border-white/10">IIT Bombay</span>
                <span className="px-4 py-2 bg-white/10 rounded-full text-xs font-bold uppercase tracking-widest border border-white/10">NIT Trichy</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {mentors.map((m, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-[2rem] hover:bg-white/10 transition-all group">
                <div className="w-20 h-20 bg-slate-800 rounded-2xl mb-6 flex items-center justify-center text-3xl font-black text-blue-400">
                  {m.name[0]}
                </div>
                <h4 className="text-xl font-bold mb-1">{m.name}</h4>
                <p className="text-blue-400 font-bold text-sm mb-4">{m.college}</p>
                <div className="flex items-center gap-2 text-xs text-slate-400 mb-6 font-medium">
                  <FaHistory /> {m.rank}
                </div>
                <Link href={`/payment`}><button className="w-full py-3 bg-white text-slate-900 rounded-xl font-black text-sm group-hover:bg-blue-500 group-hover:text-white transition-all">
                  Book Session
                </button></Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- TRUST FOOTER --- */}
      <section className="py-20 max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Still confused?</h2>
        <p className="text-slate-500 mb-10 leading-relaxed">
          The difference between a Better College and a Better Year is often one 15-minute conversation. Don&apos;t let your JEE hard work go to waste due to bad counseling.
        </p>
        <div className="flex items-center justify-center gap-6 text-slate-400 font-bold text-sm">
            <span className="flex items-center gap-2"><FaCheckCircle className="text-emerald-500" /> Secure Payment</span>
            <span className="flex items-center gap-2"><FaCheckCircle className="text-emerald-500" /> 100% Refundable</span>
        </div>
      </section>
    </div>
  );
}