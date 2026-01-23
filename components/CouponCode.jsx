"use client";
import { useState } from "react";
import { FaCopy, FaCheckCircle, FaGift } from "react-icons/fa";

export default function CouponCode({count}) {
  const couponCode = "ABHKUM0096";
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(couponCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      onClick={handleCopy}
      className="flex items-center justify-between gap-4 cursor-pointer 
      border border-green-300 bg-green-50 rounded-xl px-5 py-3 
      hover:bg-green-100 transition-all duration-200"
    >
      {/* Left */}
      <div className="flex items-center gap-3">
        <FaGift className="text-green-600 text-lg" />
        <div>
          <p className="text-sm font-semibold text-green-700">
            Extra ₹{count} OFF (Official PW Code)
          </p>
          <p className="text-xs text-gray-600">
            Tap to copy coupon
          </p>
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center gap-2 font-mono text-sm">
        <span className="px-3 py-1 bg-white border rounded-lg text-gray-800">
          {couponCode}
        </span>

        {copied ? (
          <FaCheckCircle className="text-green-600 animate-bounce" />
        ) : (
          <FaCopy className="text-gray-500" />
        )}
      </div>
    </div>
  );
}
