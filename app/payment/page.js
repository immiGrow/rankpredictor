"use client";
import { useEffect, useState } from 'react';
import { FaVideo, FaClock, FaStar, FaShieldAlt, FaLock } from 'react-icons/fa';

export default function PaymentSuccess() {
  const [status, setStatus] = useState('verifying'); // verifying, ready, expired

  // In a real app, you'd verify the Razorpay signature here via an API route
  useEffect(() => {
    const timer = setTimeout(() => setStatus('ready'), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
      <div className="max-w-xl w-full bg-white rounded-[2.5rem] shadow-2xl p-10 text-center border border-slate-100">
        
        {status === 'verifying' ? (
          <div className="animate-pulse space-y-4">
            <div className="w-20 h-20 bg-blue-100 rounded-full mx-auto" />
            <h2 className="text-2xl font-bold text-slate-800">Verifying Payment...</h2>
          </div>
        ) : (
          <>
            <div className="w-24 h-24 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-4xl mx-auto mb-6 shadow-inner">
              <FaLock />
            </div>
            
            <h1 className="text-3xl font-black text-slate-900 mb-2">Session Secured!</h1>
            <p className="text-slate-500 mb-8 font-medium">Your ₹19 Rank Analysis session with an NITian is ready.</p>

            <div className="bg-blue-50 rounded-3xl p-6 mb-8 text-left border border-blue-100">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
                   <FaVideo className="text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">Encrypted Video Call</h3>
                  <p className="text-xs text-slate-500">Privacy Protected • No Numbers Shared</p>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500 flex items-center gap-1"><FaClock /> Duration</span>
                  <span className="font-bold text-slate-900">15 Minutes</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500 flex items-center gap-1"><FaStar /> Quality Guarantee</span>
                  <span className="font-bold text-slate-900">4.8★ Rated Mentor</span>
                </div>
              </div>
            </div>

            <button 
               onClick={() => window.location.href = `/call/room-xyz`} 
               className="w-full bg-blue-600 hover:bg-blue-700 text-white py-5 rounded-2xl font-black text-xl shadow-xl shadow-blue-200 transition-all active:scale-95"
            >
              Enter Meeting Room
            </button>

            <p className="mt-6 text-[10px] text-slate-400 uppercase tracking-widest font-bold">
              <FaShieldAlt className="inline mr-1" /> Powered by Agora Privacy Shield
            </p>
          </>
        )}
      </div>
    </div>
  );
}