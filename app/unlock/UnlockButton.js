"use client";
import { useState } from "react";
import Script from "next/script";

export default function UnlockButton({ userEmail, userRank,userCategory,userGender,userQuota,userRankType }) {
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    setLoading(true); // Disable button immediately
    
    try {
      const response = await fetch("/api/razorpay", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userEmail, userRank }),
      });
      
      const order = await response.json();

      if (!response.ok) throw new Error(order.error || "Order failed");

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: order.amount,
        currency: "INR",
        name: "JEE Rank Predictor",
        description: "Unlock Pro College Report List",
        // --- ADD YOUR LOGO HERE ---
        image: "https://www.jeerankpredictor.in/logo.jpg", // Replace with your actual logo URL
        order_id: order.id,
       // ... existing handler code
    handler: function (res) {
  // Pass ALL fields to the success page URL
    const params = new URLSearchParams({
    payment_id: res.razorpay_payment_id,
    user: userEmail,
    rank: userRank,
    category: userCategory, // Make sure these variables are available in your state
    gender: userGender,
    quota: userQuota,
    rankType: userRankType
    });
  window.location.href = `/success?${params.toString()}`;
},
        modal: {
  ondismiss: function() {
    setLoading(false);
    // Optional: Redirect to failure page if they close the modal
    // window.location.href = `/failure?user=${userEmail}&rank=${userRank}...`;
  }
},
        prefill: { email: userEmail },
        theme: { color: "#2563eb" },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      alert("Payment failed to initialize. Please try again.");
      setLoading(false); // Re-enable so they can try again
    }
  };

  return (
    <>
      <Script src="https://checkout.razorpay.com/v1/checkout.js" />
      <button
        onClick={handlePayment}
        disabled={loading}
        className={`w-full font-black py-4 rounded-2xl  text-lg shadow-xl transform transition all
          ${loading 
            ? "bg-slate-400 cursor-not-allowed scale-100" 
            : "bg-blue-600 hover:bg-blue-700 cursor-pointer text-white hover:scale-[1.02] active:scale-95"
          }`}
      >
        {loading ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            SECURELY PROCESSING...
          </span>
        ) : (
          "UNLOCK FULL REPORT NOW 🔓"
        )}
      </button>
    </>
  );
}