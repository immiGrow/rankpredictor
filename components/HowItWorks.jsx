"use client";
import { motion } from "framer-motion";
import { AiOutlineEnter, AiOutlineBarChart, AiOutlineCalculator, AiOutlineCheckCircle } from "react-icons/ai";

export default function HowItWorks() {
  const steps = [
    {
      icon: <AiOutlineEnter size={28} className="text-blue-500" />,
      title: "Enter your JEE Main marks",
      description: "Input your marks out of 300 to get started."
    },
    {
      icon: <AiOutlineBarChart size={28} className="text-blue-500" />,
      title: "Marks mapped to percentile",
      description: "We calculate your expected percentile based on past year trends."
    },
    {
      icon: <AiOutlineCalculator size={28} className="text-blue-500" />,
      title: "Estimate All India Rank (AIR)",
      description: "Your marks are converted into an estimated AIR for better planning."
    },
    {
      icon: <AiOutlineCheckCircle size={28} className="text-blue-500" />,
      title: "Analyze cutoff & college chances",
      description: "Check which colleges you are likely to get admission in."
    }
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12 text-gray-900">
        How JEE Main Rank Predictor 2026 Works
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="relative flex items-start p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            {/* Step number badge */}
            <div className="absolute -top-4 -left-4 w-10 h-10 flex items-center justify-center bg-blue-500 text-white font-bold rounded-full shadow-lg text-lg">
              {index + 1}
            </div>

            {/* Icon and content */}
            <div className="shrink-0 mr-4">{step.icon}</div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-1">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
