import Razorpay from "razorpay";
import { NextResponse } from "next/server";

// This line is CRITICAL for Cloudflare/Vercel compatibility with the Razorpay SDK
export const runtime = 'nodejs'; 

export async function POST(request) {
  const { userEmail, userRank } = await request.json();

  const instance = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
  });

  const options = {
    amount: 1500, 
    currency: "INR",
    receipt: `receipt_${Date.now()}`,
    notes: { email: userEmail, rank: userRank }
  };

  try {
    const order = await instance.orders.create(options);
    return NextResponse.json(order);
  } catch (error) {
    console.error("Razorpay Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}