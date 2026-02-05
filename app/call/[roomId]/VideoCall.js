"use client";
import React, { useState, useEffect, useMemo } from 'react';
import AgoraRTC, { 
  AgoraRTCProvider, 
  useJoin, 
  useLocalCameraTrack, 
  useLocalMicrophoneTrack, 
  useRemoteUsers,
  RemoteUser,
  LocalVideoTrack
} from "agora-rtc-react";
import { FaPhoneSlash, FaMicrophone, FaMicrophoneSlash, FaVideo, FaVideoSlash, FaStar } from 'react-icons/fa';

export default function VideoCall({ roomId }) {
  const client = useMemo(() => {
    if (typeof window !== 'undefined') {
      return AgoraRTC.createClient({ mode: "rtc", codec: "vp8" });
    }
    return null;
  }, []);

  if (!client) return null;

  return (
    <AgoraRTCProvider client={client}>
      <VideoCallView roomId={roomId} />
    </AgoraRTCProvider>
  );
}

function VideoCallView({ roomId }) {
  const [timeLeft, setTimeLeft] = useState(900);
  const [micOn, setMicOn] = useState(true);
  const [vidOn, setVidOn] = useState(true);
  const [showReview, setShowReview] = useState(false);
  const [rating, setRating] = useState(0);

  // 1. Join Channel
  const { isConnected } = useJoin({
    appid: 'd0344f399b87424bb9a0c8c691ddbf27', 
    channel: roomId, 
    token: null // Ensure your Agora project is in "Testing Mode" (No Certificate)
  });

  // 2. Hardware Tracks
  const { localMicrophoneTrack } = useLocalMicrophoneTrack(micOn);
  const { localCameraTrack } = useLocalCameraTrack(vidOn);
  const remoteUsers = useRemoteUsers();

  // 3. Functional Timer: Only starts when remoteUsers.length > 0
  useEffect(() => {
    let interval = null;
    if (isConnected && remoteUsers.length > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(interval);
            setShowReview(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => 
    {

        if (interval) clearInterval(interval);
    }
  }, [isConnected, remoteUsers.length]);

  const handleEndCall = () => {
    setShowReview(true);
  };

  return (
    <div className="h-screen bg-slate-950 text-white flex flex-col overflow-hidden font-sans">
      <div className="flex-grow relative bg-black flex flex-col md:flex-row">
        
        {/* MAIN FEED (MENTOR) */}
        <div className="flex-grow bg-slate-900 relative">
          {remoteUsers.length > 0 ? (
            remoteUsers.map((user) => (
              <RemoteUser key={user.uid} user={user} style={{ width: '100%', height: '100%' }} />
            ))
          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-center p-6">
              <div className="max-w-sm">
                <div className="w-20 h-20 bg-blue-600 rounded-full mx-auto animate-pulse mb-6 shadow-[0_0_50px_rgba(37,99,235,0.4)]" />
                <h2 className="text-xl font-black mb-2 tracking-tight">WAITING FOR MENTOR</h2>
                <p className="text-slate-500 text-sm font-bold uppercase tracking-widest">
                  Timer will start once connection is established
                </p>
              </div>
            </div>
          )}
        </div>

        {/* SELF FEED */}
        <div className="w-full md:w-1/4 h-48 md:h-auto bg-slate-800 relative border-l border-white/10 shadow-2xl overflow-hidden">
          {vidOn ? (
            <LocalVideoTrack track={localCameraTrack} play style={{ width: '100%', height: '100%' }} />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-slate-900 text-slate-700">
              <FaVideoSlash size={40} />
            </div>
          )}
          <div className="absolute bottom-4 left-4 flex items-center gap-2">
             <span className="bg-blue-600 text-[10px] font-black px-2 py-1 rounded">LIVE</span>
             {!micOn && <FaMicrophoneSlash className="text-red-500" />}
          </div>
        </div>

        {/* CLOCK (Only shows/highlights when active) */}
        <div className={`absolute top-6 right-6 z-50 px-6 py-2 rounded-2xl font-mono text-3xl font-black shadow-2xl transition-all ${remoteUsers.length > 0 ? 'bg-blue-600 scale-110' : 'bg-slate-900 opacity-50'}`}>
          {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
        </div>
      </div>

      {/* CALL CONTROLS */}
      <div className="p-8 bg-slate-900 border-t border-white/10 flex justify-center items-center gap-8 shadow-[0_-10px_50px_rgba(0,0,0,0.4)]">
        <button 
          onClick={() => setMicOn(!micOn)}
          className={`p-5 rounded-2xl transition-all border-2 ${micOn ? 'bg-slate-800 border-white/5 text-white' : 'bg-red-600 border-red-400 text-white'}`}
        >
          {micOn ? <FaMicrophone size={24} /> : <FaMicrophoneSlash size={24} />}
        </button>
        
        <button 
          onClick={() => setVidOn(!vidOn)}
          className={`p-5 rounded-2xl transition-all border-2 ${vidOn ? 'bg-slate-800 border-white/5 text-white' : 'bg-red-600 border-red-400 text-white'}`}
        >
          {vidOn ? <FaVideo size={24} /> : <FaVideoSlash size={24} />}
        </button>

        <button 
          onClick={handleEndCall}
          className="px-12 py-5 bg-red-600 rounded-3xl font-black flex items-center gap-3 hover:bg-red-500 hover:scale-105 transition-all shadow-xl shadow-red-900/40 uppercase tracking-tighter"
        >
          <FaPhoneSlash size={20} /> End Session
        </button>
      </div>

      {/* REVIEW POPUP */}
      {showReview && (
        <div className="fixed inset-0 z-[100] bg-slate-950/90 backdrop-blur-xl flex items-center justify-center p-4">
          <div className="max-w-md w-full bg-white text-slate-900 rounded-[3rem] p-10 shadow-2xl text-center">
            <h3 className="text-3xl font-black italic mb-2">SESSION ENDED</h3>
            <p className="text-slate-500 font-bold mb-8 uppercase text-xs tracking-widest border-b pb-4">Rate your Mentor</p>
            
            <div className="flex justify-center gap-2 mb-8">
              {[1, 2, 3, 4, 5].map((star) => (
                <FaStar 
                  key={star} 
                  size={32}
                  className={`cursor-pointer transition-colors ${rating >= star ? 'text-amber-400' : 'text-slate-200'}`}
                  onClick={() => setRating(star)}
                />
              ))}
            </div>

            <div className="bg-red-50 p-4 rounded-2xl mb-8 border border-red-100">
               <p className="text-[10px] text-red-600 font-black uppercase tracking-tighter leading-tight">
                 Did this mentor ask for your personal number or payment outside this platform? 
                 <span className="block underline mt-1 cursor-pointer">Report Violation</span>
               </p>
            </div>

            <button 
              onClick={() => window.location.href = '/mentorship'}
              className="w-full bg-slate-900 text-white py-5 rounded-2xl font-black text-lg hover:bg-black transition-all"
            >
              Submit & Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}