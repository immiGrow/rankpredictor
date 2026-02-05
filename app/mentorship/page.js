"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { 
  FaBolt, FaCheckCircle, FaVideo, FaUserShield, 
  FaStar, FaHistory, FaTimes, FaUserEdit, FaGraduationCap
} from 'react-icons/fa';

export default function Page() {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMentor, setSelectedMentor] = useState(null);
  // ... inside your Mentorship Page component
const [formData, setFormData] = useState({ percentile: '', category: 'General', state: '' });

  const mentors = [
    { name: "Abhisha K.", college: "VNIT Nagpur", rank: "97.32%ile", tag: "CSE Expert", status: "Online" },
    { name: "Rahul M.", college: "IIT Bombay", rank: "AIR 12xx", tag: "JoSAA Pro", status: "Busy (3m left)" },
    { name: "Sneha P.", college: "NIT Trichy", rank: "99.1%ile", tag: "Choice Filling", status: "Online" },
  ];

  const openBooking = (mentor) => {
    setSelectedMentor(mentor);
    setIsModalOpen(true);
    
  };

  const handlePayment = (e) => {
    e.preventDefault();
  // Save data so it persists after the payment redirect
  localStorage.setItem('student_session_data', JSON.stringify(formData));
 router.push('/payment');
};

  return (
    <div className="bg-white min-h-screen text-slate-900 relative">
      {/* --- URGENCY HEADER --- */}
      <div className="bg-amber-100 py-2 text-center text-amber-800 text-xs font-black uppercase tracking-widest px-4 sticky top-16 z-50">
        ⚡ Live: {mentors.filter(m => m.status === "Online").length} Mentors Online Now | Next Slot in 4 mins
      </div>

      {/* --- HERO SECTION --- */}
      <section className="pt-16 pb-20 px-6 text-center bg-linear-to-b from-blue-50 to-white">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-bold mb-8">
            <FaStar /> The Trust-First Initiative
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-8 leading-tight">
            Talk to an <span className="text-blue-600 underline decoration-blue-200">NITian / IITian</span> <br /> 
            for just <span className="text-emerald-600 font-mono italic">₹19</span>
          </h1>
          <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Stop taking advice from consultants who never cleared JEE. Get 15 minutes of raw guidance from people who actually made it.
          </p>
          
          <button 
            onClick={() => openBooking(null)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-2xl font-black text-lg shadow-2xl shadow-blue-200 transition-all transform hover:-translate-y-1"
          >
            Start 15-Min Session (₹19)
          </button>
        </div>
      </section>

      {/* --- MENTOR PREVIEW --- */}
      <section className="py-20 bg-slate-950 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-black mb-12 text-center">Pick Your Expert</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {mentors.map((m, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-[2.5rem] relative group overflow-hidden">
                <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-tighter ${m.status === 'Online' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-amber-500/20 text-amber-400'}`}>
                   {m.status}
                </div>
                <div className="w-16 h-16 bg-slate-800 rounded-2xl mb-6 flex items-center justify-center text-2xl font-black text-blue-400">
                  {m.name[0]}
                </div>
                <h4 className="text-xl font-bold">{m.name}</h4>
                <p className="text-blue-400 font-bold text-sm mb-4">{m.college}</p>
                <button 
                  onClick={() => openBooking(m)}
                  className="w-full py-4 bg-white text-slate-950 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-blue-500 hover:text-white transition-all"
                >
                  Request Session
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- BOOKING MODAL (THE NEXT STEP) --- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-100 flex items-center justify-center px-4">
          <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm" onClick={() => setIsModalOpen(false)}></div>
          <div className="bg-white w-full max-w-lg rounded-[2.5rem] relative z-10 p-8 md:p-12 shadow-2xl overflow-hidden">
            <button onClick={() => setIsModalOpen(false)} className="absolute top-6 right-6 text-slate-400 hover:text-slate-900 transition-colors">
              <FaTimes size={24} />
            </button>
            
            <div className="text-center mb-8">
              <h3 className="text-2xl font-black mb-2">Prepare Your Session</h3>
              <p className="text-slate-500 text-sm">Fill your JEE details so the mentor is ready with your college list.</p>
            </div>

            <form className="space-y-4">
              <div className="relative">
                <FaUserEdit className="absolute left-4 top-4 text-slate-400" />
                <input type="text" onChange={(e) => setFormData({...formData, percentile: e.target.value})} placeholder="JEE Percentile (e.g. 98.2)" className="w-full p-4 pl-12 bg-slate-50 border border-slate-100 rounded-xl font-bold focus:ring-2 focus:ring-blue-500 outline-none" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <select onChange={(e) => setFormData({...formData, category: e.target.value})} className="p-4 bg-slate-50 border border-slate-100 rounded-xl font-bold text-slate-500 outline-none">
                  <option>Category</option>
                  <option>General</option>
                  <option>OBC-NCL</option>
                  <option>SC/ST</option>
                  <option>EWS</option>
                </select>
                <input type="text" onChange={(e) => setFormData({...formData, state: e.target.value})} placeholder="Home State" className="p-4 bg-slate-50 border border-slate-100 rounded-xl font-bold outline-none" />
              </div>
             <button onClick={handlePayment} className="block w-full bg-emerald-600 text-white text-center py-5 rounded-2xl font-black text-lg shadow-xl shadow-emerald-100 hover:bg-emerald-700 transition-all">
                Pay ₹19 to Connect Now
              </button>
            </form>
            
            <p className="text-[10px] text-center text-slate-400 mt-6 font-medium uppercase tracking-widest">
              You will be redirected to the secure payment gateway
            </p>
          </div>
        </div>
      )}
    </div>
  );
}