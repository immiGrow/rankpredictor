import { NextResponse } from "next/server";

import Mentors from "@/models/Mentors";
import { MongoClient } from "mongodb";

const MONGO_URI = process.env.MONGO_URI;

export async function POST(req) {
  try {
     const client = new MongoClient(MONGO_URI);
    await client.connect();
    const data = await req.formData();

    // Extract fields from FormData
    const fullName = data.get("fullName");
    const tagline = data.get("tagline");
    const college = data.get("college");
    const rank = data.get("rank");
    const branch = data.get("branch");
    const yearOfExam = data.get("yearOfExam");
    const percentile = data.get("percentile");
    const upiId = data.get("upiId");
    const file = data.get("idCard");

    // NOTE: In a real app, upload 'file' to Cloudinary/S3 and get a URL.
    // For now, we will simulate saving the data.
    const newMentor = await Mentors.create({
      fullName,
      tagline,
      college,
      rank,
      branch,
      yearOfExam,
      percentile,
      upiId,
      idCardUrl: "verification_pending_file", 
    });

    return NextResponse.json({ success: true, mentorId: newMentor._id }, { status: 201 });
  } catch (error) {
    console.error("Registration Error:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}