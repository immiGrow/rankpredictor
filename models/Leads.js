// models/User.js
import mongoose from "mongoose";

const LeadSchema = new mongoose.Schema(
  {
   
    email: { type: String,default:"" }, // Optional: Lead
   
  },
  { timestamps: true }
);

export default mongoose.models.Leads || mongoose.model("Leads", LeadSchema);
