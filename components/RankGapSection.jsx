"use client";

import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const RankGapGraph = () => {
  // Example data: Rank Gap vs Probability
  const data = {
    labels: [0, 50, 100, 150, 200, 250, 300], // Rank gap
    datasets: [
      {
        label: "Admission Probability (%)",
        data: [95, 85, 70, 50, 30, 15, 5], // Example probabilities
        fill: true,
        backgroundColor: "rgba(59, 130, 246, 0.2)", // Tailwind blue-500 with opacity
        borderColor: "rgba(59, 130, 246, 1)", // Tailwind blue-500
        tension: 0.4, // smooth curve
        pointRadius: 5,
        pointHoverRadius: 7,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        labels: {
          font: { size: 14 },
        },
      },
      tooltip: {
        callbacks: {
          label: (context) => `${context.parsed.y}%`,
        },
      },
      title: {
        display: true,
        text: "Rank Gap vs Admission Probability",
        font: { size: 18, weight: "bold" },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Rank Gap",
          font: { size: 14, weight: "bold" },
        },
      },
      y: {
        title: {
          display: true,
          text: "Admission Probability (%)",
          font: { size: 14, weight: "bold" },
        },
        min: 0,
        max: 100,
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default function RankGapSection() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center text-gray-900">
          How Rank Gap Affects Admission Chances
        </h2>

        <p className="mt-4 max-w-3xl mx-auto text-center text-gray-600 text-lg">
          As the difference between your rank and the closing rank increases, your
          admission probability decreases sharply rather than linearly. Understanding
          this trend can help you strategize your college choices effectively.
        </p>

        <div className="mt-12 bg-white rounded-2xl shadow-lg p-8">
          <RankGapGraph />

          <p className="mt-4 text-xs text-gray-400 text-center">
            This behavior is consistently observed across JoSAA rounds.
          </p>
        </div>
      </div>
    </section>
  );
}
