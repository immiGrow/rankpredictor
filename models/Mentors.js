// models/User.js
import mongoose from "mongoose";

const MentorSchema = new mongoose.Schema(
  {
   
    fullName: String,
  tagline: String,
  college: String,
  rank: Number,
  branch: String,
  yearOfExam: Number,
  percentile: String,
  upiId: String,
  idCardUrl: String, // Store the URL or path
  status: { type: String, default: "pending" },
  createdAt: { type: Date, default: Date.now }
   
  },
  { timestamps: true }
);

export default mongoose.models.Mentors || mongoose.model("Mentors", MentorSchema);
