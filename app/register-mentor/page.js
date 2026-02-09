"use client";
import { useState, useMemo, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { FaUser, FaGraduationCap, FaIdCard, FaWallet, FaCheckCircle, FaRocket, FaSearch, FaPlusCircle, FaChevronRight, FaChevronLeft } from 'react-icons/fa';

export default function MentorRegistration() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);

  // --- FORM STATE ---
  const [formData, setFormData] = useState({
    fullName: "",
    tagline: "",
    college: "",
    rank: "",
    branch: "",
    yearOfExam: "2024",
    percentile: "",
    upiId: "",
    idCard: null
  });

  const [collegeSearch, setCollegeSearch] = useState("");
  const [isManualCollege, setIsManualCollege] = useState(false);

  // --- DATA LISTS ---
  const topColleges = [
    "IIT Bombay", "IIT Delhi", "IIT Madras", "IIT Kanpur", "IIT Roorkee", "IIT Guwahati", "IIT BHU",
    "VNIT Nagpur", "NIT Trichy", "NIT Surathkal", "NIT Warangal", "NIT Rourkela", "NIT Calicut", "MNNIT Allahabad",
    "IIIT Hyderabad", "IIIT Bangalore", "IIIT Delhi", "IIIT Allahabad", "BITS Pilani", "BITS Goa", "BITS Hyderabad"
  ];

  const commonBranches = ["CSE", "ECE", "EE", "ME", "CE", "Chemical", "MNC", "AI/ML", "Data Science"];

  // --- LOGIC ---
  const filteredColleges = useMemo(() => {
    if (!collegeSearch || isManualCollege) return [];
    return topColleges.filter(c => c.toLowerCase().includes(collegeSearch.toLowerCase()));
  }, [collegeSearch, isManualCollege]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const selectCollege = (college) => {
    setCollegeSearch(college);
    setFormData(prev => ({ ...prev, college: college }));
    setShowSuggestions(false);
  };

  const handleSubmit = async () => {
    setLoading(true);
    const data = new FormData();
    Object.keys(formData).forEach(key => data.append(key, formData[key]));
    if (!isManualCollege) data.set("college", collegeSearch);

    try {
      const response = await fetch('/api/register-mentor', { method: 'POST', body: data });
      if (response.ok) router.push('/registration-success');
      else alert("Submission failed. Please check your details.");
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#0A0C10] min-h-screen text-slate-200 py-12 px-6 font-sans">
      <div className="max-w-3xl mx-auto">
        
        {/* --- PREMIUM HEADING --- */}
        <div className="text-center mb-12">
            <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase italic leading-none">
                The <span className="text-blue-500">Elite</span> Portal
            </h1>
            <p className="text-slate-500 font-bold tracking-[0.4em] text-[10px] mt-4 uppercase">Verification & Onboarding</p>
        </div>

        {/* --- DYNAMIC PROGRESS BAR --- */}
        <div className="max-w-md mx-auto mb-16">
            <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2 px-1">
                <span>Application Progress</span>
                <span className="text-blue-500">{Math.round((step / 3) * 100)}%</span>
            </div>
            <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                <div 
                    className="h-full bg-gradient-to-r from-blue-600 to-indigo-400 transition-all duration-700 ease-out"
                    style={{ width: `${(step / 3) * 100}%` }}
                ></div>
            </div>
        </div>

        <div className="bg-white/[0.02] border border-white/5 p-8 md:p-12 rounded-[3.5rem] backdrop-blur-3xl shadow-2xl relative overflow-hidden">
          
          {/* STEP 1: PERSONAL */}
          {step === 1 && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h2 className="text-3xl font-black text-white italic mb-2">Personal Identity</h2>
              <p className="text-slate-500 text-sm mb-8">This is how students will see you.</p>
              
              <div className="space-y-6">
                <div>
                  <label className="text-[10px] font-black uppercase tracking-widest text-blue-500 ml-1">Full Name</label>
                  <input name="fullName" value={formData.fullName} onChange={handleInputChange} type="text" placeholder="Rahul Sharma" className="w-full bg-white/5 border border-white/10 p-5 rounded-3xl mt-2 outline-none focus:border-blue-500 transition-all" />
                </div>
                <div>
                  <label className="text-[10px] font-black uppercase tracking-widest text-blue-500 ml-1">Short Tagline</label>
                  <input name="tagline" value={formData.tagline} onChange={handleInputChange} type="text" placeholder="Helping you crack NIT Nagpur with 99 percentile" className="w-full bg-white/5 border border-white/10 p-5 rounded-3xl mt-2 outline-none focus:border-blue-500 transition-all" />
                </div>
                <button onClick={() => setStep(2)} className="group w-full bg-blue-600 p-6 rounded-[2rem] font-black text-lg shadow-xl shadow-blue-600/20 hover:bg-blue-500 transition-all flex items-center justify-center gap-3">
                  Continue <FaChevronRight className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: ACADEMIC (The "Better" Logic) */}
          {step === 2 && (
            <div className="animate-in fade-in slide-in-from-right-8 duration-500">
              <h2 className="text-3xl font-black text-white italic mb-2">Academic Prowess</h2>
              <p className="text-slate-500 text-sm mb-8">Verified credentials build student trust.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2 relative">
                  <label className="text-[10px] font-black uppercase tracking-widest text-blue-500 ml-1">Current College</label>
                  <div className="relative mt-2">
                    <input 
                      value={collegeSearch}
                      onChange={(e) => {setCollegeSearch(e.target.value); setIsManualCollege(false); setShowSuggestions(true);}}
                      onFocus={() => setShowSuggestions(true)}
                      type="text" 
                      placeholder="Search IIT, NIT, IIIT..." 
                      className="w-full bg-white/5 border border-white/10 p-5 rounded-3xl outline-none focus:border-blue-500 transition-all" 
                    />
                    {/* Fixed Suggestion Box Logic */}
                    {showSuggestions && filteredColleges.length > 0 && (
                      <div className="absolute w-full mt-2 bg-[#12141C] border border-white/10 rounded-2xl overflow-hidden z-50 shadow-2xl max-h-60 overflow-y-auto">
                        {filteredColleges.map(c => (
                          <div key={c} onClick={() => selectCollege(c)} className="p-4 hover:bg-blue-600 cursor-pointer text-sm font-bold transition-colors">{c}</div>
                        ))}
                      </div>
                    )}
                  </div>
                  <button onClick={() => setIsManualCollege(true)} className="mt-3 text-[10px] text-slate-500 hover:text-blue-400 flex items-center gap-2 font-bold uppercase tracking-widest"><FaPlusCircle /> Can&apos;t find it? Type manual</button>
                </div>

                {/* Branch Chips */}
                <div className="md:col-span-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-blue-500 ml-1">Branch</label>
                    <div className="flex flex-wrap gap-2 mt-3">
                        {commonBranches.map(b => (
                            <button key={b} onClick={() => setFormData({...formData, branch: b})} className={`px-4 py-2 rounded-xl text-[10px] font-black transition-all border ${formData.branch === b ? "bg-blue-600 border-blue-400 text-white" : "bg-white/5 border-white/5 text-slate-400 hover:border-white/20"}`}>
                                {b}
                            </button>
                        ))}
                    </div>
                </div>

                <div>
                    <label className="text-[10px] font-black uppercase tracking-widest text-blue-500 ml-1">JEE CRL Rank</label>
                    <input name="rank" value={formData.rank} onChange={handleInputChange} type="number" className="w-full bg-white/5 border border-white/10 p-5 rounded-3xl mt-2 outline-none focus:border-blue-500" />
                </div>
                <div>
                    <label className="text-[10px] font-black uppercase tracking-widest text-blue-500 ml-1">Percentile</label>
                    <input name="percentile" value={formData.percentile} onChange={handleInputChange} type="text" className="w-full bg-white/5 border border-white/10 p-5 rounded-3xl mt-2 outline-none focus:border-blue-500" />
                </div>
              </div>
              <div className="flex gap-4 mt-12">
                <button onClick={() => setStep(1)} className="flex-1 bg-white/5 p-6 rounded-[2rem] font-black text-slate-500 hover:text-white transition-all flex items-center justify-center gap-2"><FaChevronLeft size={10} /> Back</button>
                <button onClick={() => setStep(3)} className="flex-[2] bg-blue-600 p-6 rounded-[2rem] font-black text-white shadow-xl shadow-blue-600/20">Next: Verification</button>
              </div>
            </div>
          )}

          {/* STEP 3: VERIFICATION */}
          {step === 3 && (
             <div className="animate-in fade-in zoom-in-95 duration-500">
                <h2 className="text-3xl font-black text-white italic mb-2">Final Step</h2>
                <div className="space-y-8 mt-8">
                  <div className="border-2 border-dashed border-white/10 p-12 rounded-[2rem] text-center hover:border-blue-500 transition-all relative group cursor-pointer">
                    <input type="file" onChange={(e) => setFormData({...formData, idCard: e.target.files[0]})} className="absolute inset-0 opacity-0 cursor-pointer" />
                    <FaIdCard className="text-5xl text-blue-500 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                    <p className="text-sm font-black text-white uppercase tracking-widest">{formData.idCard ? formData.idCard.name : "Upload College ID"}</p>
                    <p className="text-[10px] text-slate-500 mt-2 italic">Max file size 5MB (PNG/JPG)</p>
                  </div>
                  <div>
                    <label className="text-[10px] font-black uppercase tracking-widest text-emerald-500 ml-1">UPI ID for Payouts</label>
                    <div className="relative">
                        <input name="upiId" value={formData.upiId} onChange={handleInputChange} type="text" placeholder="yourname@upi" className="w-full bg-white/5 border border-white/10 p-5 rounded-3xl mt-2 outline-none focus:border-emerald-500 transition-all" />
                        <FaWallet className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-700" />
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <button onClick={() => setStep(2)} className="flex-1 bg-white/5 p-6 rounded-[2rem] font-black text-slate-500">Back</button>
                    <button onClick={handleSubmit} disabled={loading} className="flex-[3] bg-gradient-to-r from-blue-600 to-indigo-600 p-6 rounded-[2rem] font-black text-xl text-white shadow-2xl flex items-center justify-center gap-3 active:scale-95 transition-all">
                        {loading ? "PROCESSING..." : "SUBMIT PROFILE"} <FaRocket />
                    </button>
                  </div>
                </div>
             </div>
          )}
        </div>
      </div>
    </div>
  );
}