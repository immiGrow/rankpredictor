"use client";
import React from 'react';
import dynamic from 'next/dynamic';

// Dynamic import with SSR disabled is mandatory for Agora
const VideoCall = dynamic(() => import('./VideoCall'), { 
  ssr: false,
  loading: () => (
    <div className="h-screen bg-black flex items-center justify-center text-white font-black uppercase tracking-widest animate-pulse">
      Initializing Secure Meeting Room...
    </div>
  )
});

export default function CallRoom({ params }) {
  // Use React.use() to unwrap params correctly for Next.js 15+
  const resolvedParams = React.use(params);
  const roomId = resolvedParams.roomId;

  return (
    <main className="h-screen bg-black overflow-hidden">
      <VideoCall roomId={roomId} />
    </main>
  );
}