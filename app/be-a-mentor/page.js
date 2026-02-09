"use client";
import Link from 'next/link';
import { FaWallet, FaBolt, FaShieldAlt, FaChartLine, FaCheckCircle, FaLock, FaUserGraduate, FaMoneyBillWave, FaExchangeAlt, FaShieldVirus, FaFingerprint } from 'react-icons/fa';

export default function MentorOnboarding() {
  return (
    <>
    <div className="bg-[#0A0C10] min-h-screen text-slate-200 selection:bg-blue-500/30 font-sans">
      
     
      {/* --- HERO SECTION --- */}
      <section className="pt-12 pb-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-400 px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] border border-blue-500/20 mb-8">
            <FaUserGraduate className="text-blue-400" /> Exclusive for IIT/NIT/IIIT Students
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight text-white mb-6 leading-tight">
            Stop Giving Free Advice. <br /> 
            <span className="text-blue-500">Start Earning Today.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto font-medium leading-relaxed">
            Every day, juniors ask you for help. Now, give them <b>professional guidance</b> on our platform and get paid for your time. No long commitments—just 15-minute sessions.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/register-mentor"><button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-2xl font-black text-lg transition-all shadow-[0_20px_40px_rgba(37,99,235,0.2)]">
              Register as a Mentor
            </button></Link>
          </div>
        </div>
      </section>

      {/* --- NEW SECTION: THE 3-STEP JOURNEY (Adds Width) --- */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { step: "01", title: "Verify Profile", desc: "Upload your College ID. We verify you within 2 hours to keep the platform elite." },
            { step: "02", title: "Set Availability", desc: "Toggle 'Online' when you're free in the hostel. No fixed shifts or boss." },
            { step: "03", title: "Get Paid", desc: "Sessions are auto-tracked. Earnings move to your wallet as soon as the call ends." }
          ].map((item, i) => (
            <div key={i} className="relative p-8 bg-white/[0.02] border border-white/5 rounded-[2rem] overflow-hidden">
              <span className="absolute -right-4 -top-4 text-8xl font-black text-white/[0.03]">{item.step}</span>
              <h4 className="text-xl font-bold text-white mb-3">{item.title}</h4>
              <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- THE "WHY" SECTION --- */}
      <section className="py-16 px-6 border-y border-white/5 bg-white/[0.01]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
                <h2 className="text-3xl font-black text-white mb-6">Why join us?</h2>
                <div className="space-y-6">
                    <div className="flex gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-500"><FaMoneyBillWave /></div>
                        <div>
                            <h4 className="font-bold text-white">Extra Pocket Money</h4>
                            <p className="text-slate-400 text-sm">Earn enough to cover your mess bills or weekend outings by just talking to juniors.</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-500"><FaBolt /></div>
                        <div>
                            <h4 className="font-bold text-white">Total Flexibility</h4>
                            <p className="text-slate-400 text-sm">Go Online only when you are free in the hostel. No fixed hours.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-blue-600 p-8 rounded-[2rem] text-white">
                <h3 className="text-2xl font-black mb-2 italic">The Reality Check</h3>
                <p className="text-blue-100 mb-6">Big startups charge students ₹500+ but don&apos;t pay mentors fairly. We keep it simple: <b>Affordable for them, Profitable for you.</b></p>
                <div className="bg-black/20 p-4 rounded-xl">
                    <p className="text-sm font-bold uppercase opacity-60">Est. Earnings</p>
                    <p className="text-3xl font-black">₹3,000 - ₹8,000 / mo</p>
                    <p className="text-[10px] mt-1 italic">*Based on 1-2 sessions per day</p>
                </div>
            </div>
        </div>
      </section>

      {/* --- NEW SECTION: EARNINGS POTENTIAL BY COLLEGE (Adds Professionalism) --- */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black text-white">Rank-to-Revenue Model</h2>
          <p className="text-slate-500 mt-2">The better your rank, the more demand you generate.</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse bg-white/[0.02] rounded-[2rem] overflow-hidden">
            <thead>
              <tr className="border-b border-white/5 text-slate-400 text-xs uppercase tracking-widest">
                <th className="p-6">College Tier</th>
                <th className="p-6">Demand Level</th>
                <th className="p-6">Avg. Session/Day</th>
                <th className="p-6">Monthly Potentail</th>
              </tr>
            </thead>
            <tbody className="text-white font-medium">
              <tr className="border-b border-white/5 hover:bg-white/[0.02] transition-all">
                <td className="p-6 flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-blue-500"></span>Top 5 IITs / NIT Nagpur</td>
                <td className="p-6 text-blue-400">Very High</td>
                <td className="p-6">4-5</td>
                <td className="p-6 text-xl font-bold">₹9,000+</td>
              </tr>
              <tr className="border-b border-white/5 hover:bg-white/[0.02] transition-all">
                <td className="p-6 flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-emerald-500"></span>Other IITs/NITs/IIITs</td>
                <td className="p-6 text-emerald-400">High</td>
                <td className="p-6">2-3</td>
                <td className="p-6 text-xl font-bold">₹5,500+</td>
              </tr>
              <tr className="hover:bg-white/[0.02] transition-all">
                <td className="p-6 flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-slate-500"></span>State Top Colleges</td>
                <td className="p-6 text-slate-400">Moderate</td>
                <td className="p-6">1-2</td>
                <td className="p-6 text-xl font-bold">₹3,000+</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* --- STANDARDIZED PRICING SECTION --- */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
             <h2 className="text-3xl font-black text-white mb-12">How much will you earn?</h2>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { type: "Quick Chat", price: "19", time: "10 Mins", desc: "Best for simple rank doubts." },
                  { type: "Audio Call", price: "49", time: "15 Mins", desc: "For college/branch selection." },
                  { type: "Expert Call", price: "99", time: "20 Mins", desc: "Detailed roadmap & strategy." }
                ].map((pkg, i) => (
                  <div key={i} className="bg-[#11141B] border border-white/5 p-8 rounded-3xl relative">
                    <h4 className="text-blue-500 font-black uppercase text-xs mb-2 tracking-widest">{pkg.type}</h4>
                    <div className="text-4xl font-black text-white mb-2">₹{pkg.price}</div>
                    <p className="text-slate-500 text-sm mb-6">{pkg.time} session</p>
                    <p className="text-slate-300 text-sm leading-relaxed">{pkg.desc}</p>
                  </div>
                ))}
             </div>
        </div>
      </section>

      {/* --- NEW SECTION: MENTOR SAFETY & TOOLS (Deepens Content) --- */}
      <section className="py-20 px-6 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-10 bg-gradient-to-br from-slate-900 to-[#0A0C10] border border-white/5 rounded-[3rem]">
              <FaShieldVirus className="text-blue-500 text-4xl mb-6" />
              <h3 className="text-2xl font-black text-white mb-4">Anti-Spam Protection</h3>
              <p className="text-slate-400 leading-relaxed">Your time is valuable. We block students who repeatedly cancel or misbehave. Every student is pre-verified via OTP before they can book you.</p>
          </div>
          <div className="p-10 bg-gradient-to-br from-slate-900 to-[#0A0C10] border border-white/5 rounded-[3rem]">
              <FaFingerprint className="text-emerald-500 text-4xl mb-6" />
              <h3 className="text-2xl font-black text-white mb-4">Anonymous Calling</h3>
              <p className="text-slate-400 leading-relaxed">No need to share your mobile number or personal Telegram ID. Our built-in VoIP system connects the call while keeping your identity 100% private.</p>
          </div>
      </section>

      {/* --- TRUST & PRIVACY --- */}
      <section className="py-24 max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-white/5">
          <div className="text-center">
            <FaLock className="text-blue-500 text-3xl mx-auto mb-4" />
            <h4 className="font-bold text-lg mb-2 text-white">Privacy Protected</h4>
            <p className="text-slate-500 text-sm">No sharing of phone numbers. Calls happen through our secure system.</p>
          </div>
          <div className="text-center">
            <FaWallet className="text-emerald-500 text-3xl mx-auto mb-4" />
            <h4 className="font-bold text-lg mb-2 text-white">Direct Payouts</h4>
            <p className="text-slate-500 text-sm">Withdraw your earnings directly to your UPI ID weekly.</p>
          </div>
          <div className="text-center">
            <FaShieldAlt className="text-purple-500 text-3xl mx-auto mb-4" />
            <h4 className="font-bold text-lg mb-2 text-white">Verified Only</h4>
            <p className="text-slate-500 text-sm">Only students with valid College IDs can join as mentors.</p>
          </div>
      </section>

{/* --- NEW SECTION: THE MENTOR WALL OF FAME (Trust Builder) --- */}
      <section className="py-20 px-6 bg-white/[0.02] border-t border-white/5">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-black text-white mb-4 italic">Trusted by Students From</h2>
          <p className="text-slate-500 mb-12">Join the elite network of mentors already helping thousands of aspirants.</p>
          
       <div className="flex flex-wrap justify-center gap-4 md:gap-6">
  {["IIT Bombay", "IIT Delhi", "VNIT Nagpur", "NIT Trichy", "IIIT Hyderabad", "BITS Pilani","NIT Suratkal", "NIT Rourkela", "NIT Warangal"].map((college, i) => (
    <div 
      key={college} 
      className="group relative flex items-center gap-3 bg-white/[0.03] border border-white/10 px-6 py-4 rounded-2xl hover:border-blue-500/50 hover:bg-blue-500/[0.05] transition-all duration-500 hover:-translate-y-1"
    >
      {/* Subtle Glow Background on Hover */}
      <div className="absolute inset-0 bg-blue-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
      
      {/* College Icon Placeholder (Circle with Initial) */}
      <div className="relative w-8 h-8 rounded-full bg-slate-800 border border-white/10 flex items-center justify-center text-[10px] font-black text-blue-400 group-hover:border-blue-500/50 transition-colors">
        {college.charAt(0)}
      </div>

      <div className="relative flex flex-col items-start">
        <span className="text-sm font-black tracking-tight text-slate-300 group-hover:text-white transition-colors">
          {college.toUpperCase()}
        </span>
        <div className="flex items-center gap-1">
          <span className="w-1 h-1 rounded-full bg-emerald-500"></span>
          <span className="text-[8px] font-bold text-slate-500 uppercase tracking-widest">Verified Hub</span>
        </div>
      </div>

      {/* Verified Badge Icon */}
      <FaCheckCircle className="relative text-blue-500/20 group-hover:text-blue-500 text-xs transition-colors" />
    </div>
  ))}
</div>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-left max-w-5xl mx-auto">
             <div className="bg-slate-900/40 p-6 rounded-2xl border-l-4 border-blue-500">
                <p className="text-sm italic text-slate-300">{"I was giving free advice on Reddit anyway. Now I get paid for it, and it paid for my entire semester's mess bill."}</p>
                <p className="mt-4 text-xs font-black text-white">— Final Year, VNIT Nagpur</p>
             </div>
             <div className="bg-slate-900/40 p-6 rounded-2xl border-l-4 border-emerald-500">
                <p className="text-sm italic text-slate-300">{"The privacy feature is the best. I don't have to share my WhatsApp number with random juniors anymore."}</p>
                <p className="mt-4 text-xs font-black text-white">— 2nd Year, IIT Kharagpur</p>
             </div>
             <div className="bg-slate-900/40 p-6 rounded-2xl border-l-4 border-purple-500">
                <p className="text-sm italic text-slate-300">{"Simple, fast payouts. I withdrawal every Sunday. It's the perfect side hustle for college students."}</p>
                <p className="mt-4 text-xs font-black text-white">— 3rd Year, NIT Surathkal</p>
             </div>
          </div>
        </div>
      </section>

      {/* --- NEW SECTION: DATA SECURITY & LEGAL (Belief Builder) --- */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
           <div className="relative">
              <div className="absolute -inset-4 bg-blue-500/20 blur-3xl rounded-full"></div>
              <div className="relative flex justify-center items-center py-10">
  {/* Animated Glow Effect */}
  <div className="absolute w-64 h-64 bg-blue-500/20 blur-[100px] rounded-full animate-pulse"></div>
  
  {/* Shield Icon Illustration */}
  <div className="relative bg-slate-900/50 p-12 rounded-[3rem] border border-blue-500/20 backdrop-blur-xl">
    <svg 
      width="120" 
      height="120" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="1.5" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className="text-blue-500"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
    <div className="absolute -bottom-2 -right-2 bg-blue-600 p-3 rounded-2xl shadow-lg">
      <FaLock className="text-white text-xl" />
    </div>
  </div>
</div>
           </div>
           <div>
              <h2 className="text-4xl font-black text-white mb-6">Your Data is <span className="text-blue-500 font-serif italic">Sacrosanct.</span></h2>
              <div className="space-y-6">
                 <div className="flex gap-4">
                    <FaShieldAlt className="text-blue-500 text-2xl mt-1" />
                    <div>
                       <h4 className="font-bold text-white">Encrypted ID Verification</h4>
                       <p className="text-sm text-slate-500">Your College ID is used only for one-time verification. We do not store your physical ID on public servers.</p>
                    </div>
                 </div>
                 <div className="flex gap-4">
                    <FaLock className="text-blue-500 text-2xl mt-1" />
                    <div>
                       <h4 className="font-bold text-white">SSL Secured Payments</h4>
                       <p className="text-sm text-slate-500">All financial transactions are processed via Razorpay/Stripe with 256-bit encryption. We never see your bank details.</p>
                    </div>
                 </div>
                 <div className="flex gap-4">
                    <FaCheckCircle className="text-blue-500 text-2xl mt-1" />
                    <div>
                       <h4 className="font-bold text-white">Anti-Harassment System</h4>
                       <p className="text-sm text-slate-500">A built-in recording system ensures that both mentor and student behave professionally. One strike and the student is banned.</p>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* --- NEW SECTION: THE FOUNDER'S PLEDGE (Humanizing the Brand) --- */}
      <section className="py-20 px-6 bg-gradient-to-t from-blue-900/20 to-transparent">
        <div className="max-w-3xl mx-auto text-center border border-white/10 p-12 rounded-[3rem] backdrop-blur-sm">
           <div className="w-20 h-20 bg-slate-800 rounded-full mx-auto mb-6 flex items-center justify-center border-2 border-blue-500 font-black text-2xl">
              VN
           </div>
           <h3 className="text-2xl font-black text-white mb-4 italic">{"I built this because I was tired of big brands exploitiing us."}</h3>
           <p className="text-slate-400 leading-relaxed mb-6">
             As a student at VNIT, I saw my batchmates giving hours of counseling for free, while big companies were charging juniors thousands for the same advice. <b>JEERankPredictor</b> is my attempt to bring the power back to the seniors. No corporate middleman—just you, the junior, and a fair price for your time.
           </p>
           <p className="font-black text-blue-500 uppercase tracking-widest text-sm">— Founder, JEERankPredictor</p>
        </div>
      </section>

     {/* --- PROFESSIONAL FINAL CTA --- */}
      <footer className="relative py-32 px-6 overflow-hidden border-t border-white/5 bg-[#0A0C10]">
        {/* Decorative background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/20 blur-[120px] rounded-full -z-10"></div>
        
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest">Onboarding Live for Feb 2026</span>
          </div>

          <h3 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter">
            Ready to build your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Personal Brand?</span>
          </h3>
          
          <p className="text-slate-400 text-lg mb-12 max-w-xl mx-auto font-medium">
            Join the network of elite mentors. Verification takes less than 2 hours. Start earning by this evening.
          </p>

          <div className="flex flex-col items-center gap-6">
            <Link href={"/register-mentor"}><button className="group relative px-12 py-6 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-black text-xl transition-all duration-300 hover:shadow-[0_0_40px_rgba(37,99,235,0.4)] hover:-translate-y-1 active:scale-95">
              <span className="flex items-center gap-3">
                BUILD MY MENTOR PROFILE
                <FaBolt className="group-hover:text-yellow-400 transition-colors" />
              </span>
            </button></Link>
            
            <div className="flex items-center gap-8 opacity-40 grayscale">
               <p className="text-[10px] font-bold tracking-[0.2em] text-white uppercase">Secure Payments</p>
               <p className="text-[10px] font-bold tracking-[0.2em] text-white uppercase">Privacy Guaranteed</p>
               <p className="text-[10px] font-bold tracking-[0.2em] text-white uppercase">24/7 Support</p>
            </div>
          </div>

          <div className="mt-24 pt-12 border-t border-white/5 flex justify-between">
             <div className="text-center w-full">
                <div className="text-lg font-black tracking-tighter text-white uppercase mb-1">
                  <span className="text-blue-500">JEE</span>RankPredictor
                </div>
                <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest italic">An Initiative by VNITians</p>
             </div>
             
             
          </div>
        </div>
      </footer>
     

      {/* --- NEW SECTION: INTERACTIVE FAQ (Wide Layout) --- */}
      <section className="py-24 px-6 border-t border-white/5 bg-gradient-to-b from-transparent to-white/[0.01]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-white mb-4 italic uppercase tracking-tighter">Common Objections</h2>
            <p className="text-slate-500 font-medium">Everything you need to know before joining the network.</p>
          </div>

          <div className="space-y-4">
            {[
              { 
                q: "Is my College ID safe?", 
                a: "Yes. We use 256-bit encryption. Your ID is only used by our internal team for a one-time verification to ensure no fake mentors join. It is never shared with students." 
              },
              { 
                q: "How do I get more bookings?", 
                a: "The secret is your 'Live' status. When you toggle 'Online' during peak hours (8 PM - 11 PM), you appear at the top of our Rank Predictor tool where thousands of students are active." 
              },
              { 
                q: "What if a student asks for my personal number?", 
                a: "Our guidelines strictly prohibit sharing personal contact info. Our built-in calling system protects your privacy. You can report any student who violates this." 
              },
              { 
                q: "Is there a minimum earning limit for withdrawal?", 
                a: "No. Even if you earn ₹19 from your first chat, you can request a withdrawal to your UPI ID weekly." 
              }
            ].map((item, i) => (
              <details key={i} className="group bg-white/[0.02] border border-white/5 rounded-2xl p-6 cursor-pointer hover:bg-white/[0.04] transition-all">
                <summary className="flex justify-between items-center list-none font-bold text-lg text-white group-open:text-blue-400 transition-colors">
                  {item.q}
                  <span className="text-blue-500 group-open:rotate-180 transition-transform">↓</span>
                </summary>
                <p className="mt-4 text-slate-400 text-sm leading-relaxed border-t border-white/5 pt-4">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* --- NEW SECTION: QUICK METRICS (Final Trust Push) --- */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center md:justify-between gap-12 text-center">
            <div>
                <p className="text-4xl font-black text-white italic tracking-tighter">2hr</p>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-2">Avg. Verification</p>
            </div>
            <div className="h-12 w-[1px] bg-white/10 hidden md:block"></div>
            <div>
                <p className="text-4xl font-black text-white italic tracking-tighter">₹0</p>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-2">Registration Fee</p>
            </div>
            <div className="h-12 w-[1px] bg-white/10 hidden md:block"></div>
            <div>
                <p className="text-4xl font-black text-white italic tracking-tighter">100%</p>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-2">Privacy Control</p>
            </div>
            <div className="h-12 w-[1px] bg-white/10 hidden md:block"></div>
            <div>
                <p className="text-4xl font-black text-white italic tracking-tighter">Weekly</p>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-2">Automatic Payouts</p>
            </div>
        </div>
      </section>

    </div>
    {/* --- TRUST BAR (REPLACES THE WHITE GAP) --- */}
      <section className=" pt-12 border-t   border-white/5">
        <div className="max-w-7xl mx-auto  px-6">
          <div className="flex flex-col md:flex-row bg-[#0A0C10] items-center justify-between gap-8 bg-gradient-to-r from-blue-600/10 to-transparent p-8 rounded-[2rem] border border-blue-500/10">
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white/50 text-white bg-slate-800 flex items-center justify-center text-[10px] font-bold">
                    {i === 1 ? 'IIT' : i === 2 ? 'NIT' : i === 3 ? 'IIIT' : 'BITS'}
                  </div>
                ))}
              </div>
              <div>
                <p className="text-white font-bold text-sm">Join 50+ Verified Mentors</p>
                <p className="text-slate-500 text-xs">Profiles verified via Official College Email ID</p>
              </div>
            </div>
            
            <div className="flex gap-8 items-center opacity-60 text-white">
               <span className="text-[10px] font-black tracking-[0.2em] uppercase">No Hidden Fees</span>
               <span className="text-[10px] font-black tracking-[0.2em] uppercase">Secure UPI</span>
               <span className="text-[10px] font-black tracking-[0.2em] uppercase">24/7 Mentor Support</span>
            </div>
          </div>
        </div>
      </section>
      </>
  );
}