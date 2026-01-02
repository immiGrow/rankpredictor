"use client";
import { motion } from "framer-motion";
import { AiOutlineBarChart, AiOutlineCalculator, AiOutlineBank, AiOutlineThunderbolt, AiOutlineLock, AiOutlineDollar, AiOutlineMobile, AiOutlineSync } from "react-icons/ai";

export default function KeyFeatures() {
  const features = [
    {
      icon: <AiOutlineBarChart size={28} className="text-blue-500" />,
      title: "Accurate AIR Prediction",
      description: "Advanced algorithms predict your All India Rank using historical JEE Main data."
    },
    {
      icon: <AiOutlineCalculator size={28} className="text-blue-500" />,
      title: "Percentile Calculator",
      description: "Instant percentile calculation based on your marks and NTA normalization patterns."
    },
    {
      icon: <AiOutlineBank size={28} className="text-blue-500" />,
      title: "300+ College Database",
      description: "Coverage of IITs, NITs, IIITs, GFTIs, and top private engineering colleges."
    },
    {
      icon: <AiOutlineThunderbolt size={28} className="text-blue-500" />,
      title: "Lightning Speed",
      description: "Get results in under 1 second. Instant predictions whenever you need them."
    },
    {
      icon: <AiOutlineLock size={28} className="text-blue-500" />,
      title: "Privacy First",
      description: "Zero data collection. No signup required. Your privacy is fully protected."
    },
    {
      icon: <AiOutlineDollar size={28} className="text-blue-500" />,
      title: "100% Free",
      description: "Completely free to use forever. No hidden charges or premium features."
    }
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12 text-gray-900">
        Key Features of  <span className="">
            <span className="text-blue-500 ">JEE</span>
            <span className="text-gray-900">RankPredictor</span>
          </span>
      </h2>
      <p className="text-center text-gray-700 mb-10 text-lg">
        Everything engineering aspirants need for rank prediction and college selection
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="relative flex items-start p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
          >
            {/* Step number badge */}
            <div className="absolute -top-4 -left-4 w-10 h-10 flex items-center justify-center bg-blue-500 text-white font-bold rounded-full shadow-lg text-lg">
              {index + 1}
            </div>

            {/* Icon and content */}
            <div className="shrink-0 mr-4">{feature.icon}</div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-1">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
