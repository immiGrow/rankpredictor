"use client";
import { motion } from "framer-motion";
import { FaBullseye, FaCalendarCheck, FaLockOpen, FaBolt } from "react-icons/fa";

const trustItems = [
  {
    icon: FaBullseye,
    title: "High Accuracy",
    desc: "Predictions based on previous year JEE Main data & trends",
  },
  {
    icon: FaCalendarCheck,
    title: "2026 Updated",
    desc: "Latest normalization & cutoff analysis included",
  },
  {
    icon: FaLockOpen,
    title: "100% Free",
    desc: "No login, no signup, no hidden charges",
  },
  {
    icon: FaBolt,
    title: "< 1s Results",
    desc: "Instant rank & percentile calculation",
  },
];

export default function TrustSection() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-14">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-6"
      >
        {trustItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={index}
              whileHover={{ y: -6, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="group bg-white/80 backdrop-blur  border border-gray-100 rounded-2xl p-6 text-center shadow-sm hover:shadow-lg"
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Icon size={22} />
              </div>

              <h3 className="font-semibold text-gray-900">
                {item.title}
              </h3>

              <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
