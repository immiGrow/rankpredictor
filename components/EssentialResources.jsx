"use client";
import { redirect } from "next/dist/server/api-utils";
import Link from "next/link";
import { AiOutlineBarChart, AiOutlineLineChart, AiOutlineBook, AiOutlineCalculator, AiOutlineProject } from "react-icons/ai";

export default function EssentialResources() {
  const resources = [
    {
      type: "Analysis",
      title: "Marks vs Percentile vs Rank 2025",
      description:
        "Complete breakdown of score trends for the 2025 session. Check what marks you need for 99%ile.",
      icon: <AiOutlineBarChart size={28} className="text-blue-500" />,
      redirect:"/jee-mains-marks-analysis-2025"
    },
    {
      type: "Prediction",
      title: "Expected Cutoff 2026",
      description:
        "Will the cutoff rise again? See our data-backed predictions for General, OBC, and EWS categories.",
      icon: <AiOutlineLineChart size={28} className="text-blue-500" />,
      redirect:"/jee_main_cutoff_2026"
    },
    {
      type: "Guide",
      title: "How NTA Calculates Percentile",
      description:
        "Understanding the normalization process and why your raw score is different from your percentile.",
      icon: <AiOutlineBook size={28} className="text-blue-500" />,
      redirect:"/blog/nta_percentile_calculation"
    },
    {
      type: "Tool",
      title: "JEE Main Rank Predictor",
      description:
        "Calculate your expected percentile and rank instantly based on your mock test scores.",
      icon: <AiOutlineCalculator size={28} className="text-blue-500" />,
        redirect:"/jee-rank-predictor"
    },
    {
      type: "Tool",
      title: "College Predictor",
      description:
        "Find the best IITs, NITs, and IIITs for your rank. Filter by branch and category.",
      icon: <AiOutlineProject size={28} className="text-blue-500" />,
        redirect:"https://collegedunia.com/college-predictor"
    }
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 py-16 bg-gray-50">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4 text-gray-900">
        Essential JEE Main Resources
      </h2>
      <p className="text-center text-gray-700 mb-12 text-lg">
        Deep dive into our detailed analysis and prediction tools to stay ahead in your JEE preparation.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {resources.map((res, index) => (
          <div
            key={index}
            className="relative p-6 bg-white rounded-2xl shadow hover:shadow-2xl transition-shadow duration-300 flex flex-col"
          >
            <Link href={res.redirect} target={res.redirect === "https://collegedunia.com/college-predictor" ? "_blank" : "_self"}>
            {/* Badge with type */}
            <div className="absolute -top-3 -left-3 px-3 py-1 bg-blue-500 text-white text-sm font-semibold rounded-full shadow">
              {res.type}
            </div>

            {/* Icon */}
            <div className="mb-4">{res.icon}</div>

            {/* Title */}
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{res.title}</h3>

            {/* Description */}
            <p className="text-gray-600">{res.description}</p>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
