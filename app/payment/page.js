"use client";
import { useEffect, useState } from 'react';
import { FaVideo, FaClock, FaStar, FaShieldAlt, FaLock, FaUserCheck } from 'react-icons/fa';

export default function PaymentSuccess() {
  const [status, setStatus] = useState('verifying');
  const [studentData, setStudentData] = useState(null);
  const [isMounted, setIsMounted] = useState(false);

  const room_id = "12362";

  useEffect(() => {
    // Wrapping in a small timeout pushes the execution to the next tick,
    // which stops the "synchronous cascading render" error.
    const mountTimer = setTimeout(() => {
      setIsMounted(true);
      
      const savedData = localStorage.getItem('student_session_data');
      if (savedData) {
        try {
          setStudentData(JSON.parse(savedData));
        } catch (e) {
          console.error("Error parsing student data", e);
        }
      }
    }, 0);

    const verifyTimer = setTimeout(() => setStatus('ready'), 2000);

    return () => {
      clearTimeout(mountTimer);
      clearTimeout(verifyTimer);
    };
  }, []);

  // Return a placeholder or null during SSR to match the client's first render
  if (!isMounted) {
    return <div className="min-h-screen bg-slate-50" />; 
  }

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6 text-slate-900">
      <div className="max-w-xl w-full bg-white rounded-[2.5rem] shadow-2xl p-10 text-center border border-slate-100">
        
        {status === 'verifying' ? (
          <div className="animate-pulse space-y-4">
            <div className="w-20 h-20 bg-blue-100 rounded-full mx-auto" />
            <h2 className="text-2xl font-bold tracking-tight">Verifying Payment...</h2>
            <p className="text-slate-400 text-sm">Securing your mentorship slot</p>
          </div>
        ) : (
          <>
            <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-3xl mx-auto mb-6 shadow-inner">
              <FaLock />
            </div>
            
            <h1 className="text-3xl font-black mb-2">Session Secured!</h1>
            <p className="text-slate-500 mb-8 font-medium">Your mentor is ready. Please join the meeting room.</p>

            {studentData && (
              <div className="bg-slate-900 text-left rounded-3xl p-6 mb-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10 text-white">
                    <FaUserCheck size={80} />
                </div>
                <p className="text-blue-400 text-[10px] font-black uppercase tracking-widest mb-3">Profile Shared with Mentor</p>
                <div className="grid grid-cols-3 gap-4">
                    <div>
                        <p className="text-slate-400 text-[10px] uppercase font-bold">Percentile</p>
                        <p className="text-white font-black text-lg">{studentData.percentile}%</p>
                    </div>
                    <div>
                        <p className="text-slate-400 text-[10px] uppercase font-bold">Category</p>
                        <p className="text-white font-black text-lg">{studentData.category}</p>
                    </div>
                    <div>
                        <p className="text-slate-400 text-[10px] uppercase font-bold">State</p>
                        <p className="text-white font-black text-lg">{studentData.state || 'N/A'}</p>
                    </div>
                </div>
              </div>
            )}

            <div className="bg-blue-50 rounded-3xl p-6 mb-8 text-left border border-blue-100">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-slate-500 flex items-center gap-1"><FaClock /> Session Time</span>
                <span className="font-bold text-right text-slate-900">Today (15 Mins)</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-500 flex items-center gap-1"><FaStar /> Assigned Mentor</span>
                <span className="font-bold text-blue-600">NIT/IIT Expert</span>
              </div>
            </div>

            <button 
               onClick={() => window.location.href = `/call/room-${room_id}`} 
               className="w-full bg-blue-600 hover:bg-blue-700 text-white py-5 rounded-2xl font-black text-xl shadow-xl shadow-blue-200 transition-all active:scale-95 flex items-center justify-center gap-3"
            >
              <FaVideo size={20} /> Enter Meeting Room
            </button>

            <p className="mt-6 text-[10px] text-slate-400 uppercase tracking-widest font-bold">
              <FaShieldAlt className="inline mr-1" /> Agora Encrypted Room ID: {room_id}
            </p>
          </>
        )}
      </div>
    </div>
  );
}