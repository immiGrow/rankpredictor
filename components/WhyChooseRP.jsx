"use client";
import { motion } from "framer-motion";
import { AiOutlineBarChart, AiOutlineDatabase, AiOutlineCalculator, AiOutlineStar } from "react-icons/ai";

export default function WhyChooseRP() {
  const reasons = [
    {
      icon: <AiOutlineBarChart size={28} className="text-blue-500" />,
      title: "Accurate Marks vs Percentile Calculations",
      description:
        "Our JEE percentile calculator uses advanced statistical algorithms accounting for NTA normalization, subject-wise distribution, and historical marking trends for highly accurate results."
    },
    
    {
      icon: <AiOutlineCalculator size={28} className="text-blue-500" />,
      title: "Free All India Rank (AIR) Predictor",
      description:
        "Calculate your All India Rank instantly without signup. Our predictor uses marks, percentile, and category for accurate AIR estimation."
    }
   
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 py-16 bg-gray-50">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4 text-gray-900">
        Why Choose <span className="">
            <span className="text-blue-500 ">JEE</span>
            <span className="text-gray-900">RankPredictor</span>
          </span>?
      </h2>
      <p className="text-center text-gray-700 mb-10 text-lg">
        The most trusted JEE rank and college prediction tool in India
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        {reasons.map((reason, index) => (
          <motion.div
            key={index}
            className="relative flex items-start p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
          >
           

            {/* Icon and content */}
            <div className="shrink-0 mr-4">{reason.icon}</div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-1">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
