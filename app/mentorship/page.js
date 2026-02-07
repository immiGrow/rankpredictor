"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { 
  FaBolt, FaCheckCircle, FaVideo, FaUserShield, 
  FaStar, FaTimes, FaUserEdit, FaGraduationCap, FaQuoteLeft, FaQuestionCircle
} from 'react-icons/fa';
import Image from 'next/image';

export default function MentorshipPage() {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMentor, setSelectedMentor] = useState(null);
  const [formData, setFormData] = useState({ percentile: '', category: 'General', state: '' });
const indianStates = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal", "A&N Islands", "Chandigarh", "DNHDD", "Delhi", "Jammu & Kashmir", "Ladakh", "Lakshadweep", "Puducherry"
];
  const mentors = [
    { 
      id: "vnit-abhisha-01", // ADDED UNIQUE ID
      name: "Abhisha K.", 
      college: "VNIT Nagpur", 
      branch: "Computer Science",
      rank: "99.2%ile", 
      tag: "CSAB Specialist", 
      status: "Online", 
      img: "/mentor/abhisha.jpg",
      isAvailable: true 
    },
    { 
      id: "iitb-rahul-02", // ADDED UNIQUE ID
      name: "Rahul M.", 
      college: "IIT Bombay", 
      branch: "Electrical Eng.",
      rank: "AIR 12xx", 
      tag: "JoSAA Expert", 
      status: "Slots Full", 
      img: "/mentor/rahul.jpg",
      isAvailable: false 
    },
    { 
      id: "vnit-saurav-03", // ADDED UNIQUE ID
      name: "Saurav M.", 
      college: "VNIT Nagpur", 
      branch: "Mechanical Eng.",
      rank: "98.5%ile", 
      tag: "Core Branch Pro", 
      status: "Online", 
      img: "/mentor/saurav.jpg",
      isAvailable: true 
    },
    { 
      id: "nitt-sneha-04", // ADDED UNIQUE ID
      name: "Sneha P.", 
      college: "NIT Trichy", 
      branch: "ICE",
      rank: "99.1%ile", 
      tag: "Choice Filling", 
      status: "Next Slot: 4 PM", 
      img: "/mentor/sneha.jpg",
      isAvailable: false 
    },
    { 
      id: "iitd-arjun-05", // ADDED UNIQUE ID
      name: "Arjun V.", 
      college: "IIT Delhi", 
      branch: "Chemical Eng.",
      rank: "AIR 34xx", 
      tag: "Advanced Expert", 
      status: "Offline", 
      img: "/mentor/arjun.jpg",
      isAvailable: false 
    },
  ];

  const openBooking = (mentor) => {
    // If mentor is null (from Hero button), we can assign a "General" slot or let them pick
    setSelectedMentor(mentor);
    setIsModalOpen(true);
  };

  const handlePayment = (e) => {
    e.preventDefault();
    
    // Create the final session object
    const sessionData = {
      student: formData,
      mentor: selectedMentor ? {
        id: selectedMentor.id,
        name: selectedMentor.name,
        college: selectedMentor.college
      } : { id: 'general', name: 'Next Available Expert' },
      timestamp: new Date().toISOString()
    };

    // Save data so it persists
    localStorage.setItem('student_session_data', JSON.stringify(sessionData));
    
    // Redirect to payment route
    router.push('/payment');
  };

  return (
    <div className="bg-white min-h-screen text-slate-900 selection:bg-blue-100">
      
      {/* --- URGENCY HEADER --- */}
      <div className="bg-blue-600 py-2.5 text-center text-white text-[10px] md:text-xs font-black uppercase tracking-[0.2em] px-4 sticky top-0 z-[100] shadow-lg">
        ⚡ {mentors.filter(m => m.status === "Online").length} Top Mentors Online | Average Wait Time: 4 mins
      </div>

      {/* --- HERO SECTION --- */}
      <section className="relative pt-20 pb-16 px-6 text-center overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:20px_20px] opacity-30 -z-10"></div>
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-xs font-black mb-8 border border-emerald-200 shadow-sm">
            <FaCheckCircle /> VERIFIED NITIAN & IITIAN NETWORK
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-8 leading-[1.1] text-slate-900">
            Get 1:1 Counseling <br /> 
            from <span className="text-blue-600 underline decoration-blue-200 decoration-8 underline-offset-4">Your Dream College</span>
          </h1>
          <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed font-medium">
            Don&apos;t leave your seat to chance. Talk to seniors who have actually cracked JEE.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={() => openBooking(null)}
              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-12 py-5 rounded-2xl font-black text-xl shadow-[0_20px_50px_rgba(37,99,235,0.3)] transition-all transform hover:-translate-y-1 active:scale-95"
            >
              Start Session for ₹19
            </button>
          </div>
        </div>
      </section>

      {/* --- MENTOR PREVIEW SECTION --- */}
      <section className="py-24 bg-slate-950 text-white rounded-[3rem] mx-4 border border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-black mb-16 tracking-tight">Meet Your Experts</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mentors.map((m, i) => (
              <div key={m.id} className="bg-gradient-to-b from-white/[0.07] to-transparent border border-white/10 p-8 rounded-[3rem] relative group hover:border-blue-500/50 transition-all duration-500">
                <div className="absolute top-6 right-6 flex flex-col items-end gap-2">
                    <div className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-1.5 ${m.status.includes('Online') ? 'bg-emerald-500/20 text-emerald-400' : 'bg-amber-500/20 text-amber-400'}`}>
                       <span className={`w-1.5 h-1.5 rounded-full ${m.status.includes('Online') ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400'}`}></span>
                       {m.status}
                    </div>
                </div>

                <div className="relative w-24 h-24 mb-8">
                    <div className="relative w-full h-full bg-slate-800 rounded-[2rem] overflow-hidden border-2 border-white/10 group-hover:border-blue-500/50 transition-all">
                      {m.img ? (
                        <Image src={m.img} width={96} height={96} alt={m.name} className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-4xl font-black">{m.name[0]}</div>
                      )}
                    </div>
                </div>

                <div className="mb-6">
                    <h4 className="text-2xl font-black text-white">{m.name}</h4>
                    <p className="text-blue-400 font-black text-sm uppercase">{m.college}</p>
                    <div className="mt-2 text-slate-300 text-xs font-bold italic">
                      Specialist: {m.branch}
                    </div>
                </div>

                <button 
                  disabled={!m.isAvailable}
                  onClick={() => openBooking(m)}
                  className={`w-full py-5 rounded-[1.5rem] font-black text-xs uppercase tracking-[0.2em] transition-all transform active:scale-95 shadow-xl
                    ${!m.isAvailable 
                      ? "bg-slate-800 text-slate-500 cursor-not-allowed border border-white/5" 
                      : "bg-white text-slate-900 hover:bg-blue-600 hover:text-white"
                    }`}
                >
                  {m.isAvailable ? "Connect Now" : "Slots Full"}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- BOOKING MODAL --- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center px-4 backdrop-blur-md bg-slate-900/40">
           <div className="bg-white w-full max-w-lg rounded-[2.5rem] relative p-8 md:p-12 shadow-2xl">
                <button onClick={() => setIsModalOpen(false)} className="absolute top-8 right-8 text-slate-400 hover:text-slate-900">
                    <FaTimes size={24} />
                </button>
                <div className="text-center mb-8">
                    <h3 className="text-2xl font-black mb-1">
                      Session with {selectedMentor ? selectedMentor.name : 'an Expert'}
                    </h3>
                    <p className="text-slate-500 font-medium italic text-sm">
                      Target College: {selectedMentor ? selectedMentor.college : 'Any Top NIT/IIT'}
                    </p>
                </div>
                <form className="space-y-4">
                    <input 
                      required
                      type="text" 
                      onChange={(e) => setFormData({...formData, percentile: e.target.value})} 
                      placeholder="JEE Percentile / Rank" 
                      className="w-full p-4 bg-slate-50 border-2 border-slate-100 rounded-2xl font-bold focus:border-blue-600 outline-none transition-all" 
                    />
                    <div className="grid grid-cols-2 gap-4">
                      {/* Category Dropdown (Shortened) */}
  <select 
    required
    onChange={(e) => setFormData({...formData, category: e.target.value})} 
    className="p-4 bg-slate-50 border-2 border-slate-100 rounded-2xl font-bold text-sm outline-none appearance-none focus:border-blue-600 transition-all cursor-pointer"
  >
    <option value="">Category</option>
    <option value="General">General</option>
    <option value="EWS">Gen-EWS</option>
    <option value="OBC-NCL">OBC-NCL</option>
    <option value="SC">SC</option>
    <option value="ST">ST</option>
  </select>
                        {/* State Dropdown */}
  <select 
    required
    onChange={(e) => setFormData({...formData, state: e.target.value})} 
    className="p-4 bg-slate-50 border-2 border-slate-100 rounded-2xl font-bold text-sm outline-none appearance-none focus:border-blue-600 transition-all cursor-pointer"
  >
    <option value="">Home State</option>
    {indianStates.map((state) => (
      <option key={state} value={state}>{state}</option>
    ))}
  </select>
                    </div>
                    <button 
                      onClick={handlePayment} 
                      className="w-full bg-blue-600 text-white py-5 rounded-2xl font-black text-xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-100 mt-4"
                    >
                        Pay ₹19 & Connect
                    </button>
                </form>
           </div>
        </div>
      )}
    </div>
  );
}