"use client";
import { useEffect, useState } from "react";
import CouponCode from './CouponCode'
import Image from 'next/image'
import {
  FaCheckCircle,
  FaBookOpen,
  FaUserGraduate,
  FaRocket,
  FaStar
} from "react-icons/fa";

function RankResult({prediction}) {

     const [showNextSteps, setShowNextSteps] = useState(false);

     const [minRank, maxRank] = prediction.predicted_rank_range;

useEffect(() => {
    if (prediction) {
      const timer = setTimeout(() => {
        setShowNextSteps(true);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [prediction]);

  // 🔐 HARD GUARD (IMPORTANT)
  if (
    !prediction ||
    !prediction.predicted_rank_range ||
    prediction.predicted_rank_range.length < 2
  ) {
    return null;
  }
  return (
    <>
   {showNextSteps && <div className="animate-slide-up">
         {/* TRUST + PERSONALIZATION STRIP */}
<div className=" max-w-6xl mx-auto px-6">
  {/* TRUST BADGES */}
  <div className="flex flex-wrap items-center gap-3 mb-5">
    <span className="flex items-center gap-2 bg-blue-500 backdrop-blur px-4 py-2 rounded-full text-sm text-white shadow-sm">
      <FaCheckCircle className="text-green-400" />
      Official PW Partner
    </span>

    <span className="flex items-center gap-2 bg-blue-500 backdrop-blur px-4 py-2 rounded-full text-sm text-white shadow-sm">
      <FaBookOpen className="text-yellow-300" />
      Updated for JEE 2026
    </span>

    <span className="flex items-center gap-2 bg-blue-500 backdrop-blur px-4 py-2 rounded-full text-sm text-white shadow-sm">
      <FaUserGraduate className="text-white" />
      Trusted by 10L+ Aspirants
    </span>
  </div>

  {/* CONTEXT + MOTIVATION */}


<div className="relative bg-white border border-gray-200 rounded-2xl p-6 shadow-lg">
  
  {/* PERSONALIZED BADGE */}
  <span className="absolute -top-3 left-6 bg-indigo-600 text-white text-xs font-semibold px-4 py-1 rounded-full shadow">
    ⭐ Highly Recommended for You
  </span>

  {/* MAIN LINE */}
  <p className="mt-4 text-gray-800 text-base md:text-lg font-medium">
    Based on your predicted Rank <strong className="text-blue-600">  {minRank.toLocaleString()} – {maxRank.toLocaleString()}</strong>,
    these <strong>official PW resources</strong> give you the
    <span className="text-indigo-600 font-semibold"> highest chance to improve.</span>
  </p>

  {/* KEY BENEFITS */}
  <div className="mt-5 grid text-gray-800 sm:grid-cols-3 gap-4 text-sm">
    <div className="flex items-center gap-2">
      <FaRocket className="text-pink-500" />
      <span>Boost April attempt score</span>
    </div>

    <div className="flex items-center gap-2">
      <FaCheckCircle className="text-green-500" />
      <span>JEE Advanced–ready foundation</span>
    </div>

    <div className="flex items-center gap-2">
      <FaStar className="text-yellow-500" />
      <span>Same path as top rankers</span>
    </div>
  </div>

  {/* URGENCY */}
  <p className="mt-4 text-sm text-gray-600">
    ⏳ Early preparation = higher rank. Don’t miss the advantage.
  </p>
</div>

</div>

{/* NEXT STEPS SECTION */}
<section className="mt-6 bg-gradient-to-br from-blue-600 to-indigo-700 text-white rounded-3xl p-10 md:p-16 mx-4 md:mx-20 shadow-xl animate-fade-in">
  <h2 className="text-2xl md:text-3xl font-extrabold mb-3">
    🚀 What’s Next After Your JEE Main Session 1 Result?
  </h2>

  <p className="text-blue-100 mb-10 max-w-3xl">
    Top students don’t stop after Session 1. They either push for
    <strong> 99%ile+ in April</strong> or start focused preparation for
    <strong> JEE Advanced 2026</strong>. Choose the path that fits your goal.
  </p>

  {/* MAIN CARDS */}
  <div className="grid md:grid-cols-2 gap-8">

    {/* APRIL ATTEMPT CARD */}
    <div className="bg-white text-gray-900 rounded-2xl p-8 shadow-lg relative">
      <span className="absolute top-4 right-4 bg-green-600 text-white text-xs px-3 py-1 rounded-full">
        MOST CHOSEN
      </span>

      <Image
        src="/prayas.png"
        width={420}
        height={420}
        alt="JEE Main April Attempt 2026"
        className="rounded-xl mb-5"
      />

      <h3 className="text-xl font-bold mb-3">
        Boost April Attempt to 99%ile+
      </h3>

      <ul className="text-sm text-gray-700 space-y-2 mb-5">
        <li>✔ Target weak & high-weightage chapters</li>
        <li>✔ Chapter-wise & full-length mock tests</li>
        <li>✔ Strategy for percentile jump</li>
        <li>✔ Designed specially for Session 2</li>
      </ul>
<div className="pb-4">
     <CouponCode count={100}/>
</div>

      <a
        href="YOUR_AFFILIATE_LINK"
        target="_blank"
        className="block text-center bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
      >
        Upgrade My April Preparation →
      </a>
    </div>

    {/* JEE ADVANCED CARD */}
    <div className="bg-white text-gray-900 rounded-2xl p-8 shadow-lg">
      <Image
        src="/varun.png"
        width={420}
        height={420}
        alt="JEE Advanced 2026 Preparation"
        className="rounded-xl mb-5"
      />

      <h3 className="text-xl font-bold mb-3">
        JEE Advanced 2026 Full Preparation
      </h3>

      <ul className="text-sm text-gray-700 space-y-2 mb-5">
        <li>✔ Advanced-level theory & problem solving</li>
        <li>✔ Daily Practice Problems (DPPs)</li>
        <li>✔ PYQs with detailed video solutions</li>
        <li>✔ Ideal for serious Advanced aspirants</li>
      </ul>

   <div className="pb-4">
     <CouponCode count={150}/>
</div>

      <a
        href="YOUR_AFFILIATE_LINK"
        target="_blank"
        className="block text-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
      >
        Start JEE Advanced Prep →
      </a>
    </div>
  </div>

  {/* BOOKS ADD-ON */}
  <div className="mt-10 bg-white/95 text-gray-900 rounded-2xl p-8 shadow-md max-w-4xl">
    <h4 className="text-lg font-bold mb-2">
      📚 Recommended PW Books for JEE aspirants
    </h4>

    <p className="text-sm text-gray-600 mb-4">
      These books are used by PW faculty for concept clarity and advanced
      practice. Best used along with the above courses.
    </p>
  
    <a
      href="BOOK_AFFILIATE_LINK"
      target="_blank"
      className="text-blue-600 font-semibold hover:underline"
    >
      View Official PW Books →
    </a>
  </div>

  {/* DISCLOSURE */}
  <p className="text-xs text-blue-200 mt-6 max-w-4xl">
    Disclosure: Some links on this page are affiliate links. This does not affect
    the price you pay. We only recommend official Physics Wallah (PW) resources
    relevant to your preparation.
  </p>
</section>
    </div>}

    </>
  )
}

export default RankResult