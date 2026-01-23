"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";


const JAN_2026_DATES = [
  { label: "21 Jan 2026", value: "2026-01-21" },
  { label: "22 Jan 2026", value: "2026-01-22" },
  { label: "23 Jan 2026", value: "2026-01-23" },
  { label: "24 Jan 2026", value: "2026-01-24" },
  { label: "28 Jan 2026", value: "2026-01-28" }
];

export default function Rank({prediction, setPrediction}) {
  const router = useRouter();

  const [marks, setMarks] = useState(150);
  const [date, setDate] = useState("2026-01-21");
  const [shift, setShift] = useState(1);
  
  const [loading, setLoading] = useState(false);

  const handlePredict = async () => {
    setLoading(true);
    setPrediction(null);

    try {
      const res = await fetch("/api/predict-rank", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          marks,
          date,
          shift
        })
      });

      const data = await res.json();

      if (res.ok) {
        setPrediction(data);
      } else {
        alert(data.error || "Error predicting rank");
      }
    } catch (err) {
      console.error(err);
      alert("Server error");
    } finally {
      setLoading(false);
    }
  };

  const formatNumber = (num) =>
    Number(num).toLocaleString("en-IN");

  return (
    <div className="flex items-center justify-center px-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl max-w-lg w-full">

        {/* HEADER */}
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-2">
          JEE Main 2026 Rank Predictor 
        </h1>
        <p className="text-gray-600 text-center mb-6">
          Shift-wise prediction based on past year difficulty analysis (updated for Jan 2026)
        </p>

        {/* DATE + SHIFT */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Exam Date
            </label>
            <select
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full border rounded-lg px-3 py-2"
            >
              {JAN_2026_DATES.map(d => (
                <option key={d.value} value={d.value}>
                  {d.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Shift
            </label>
            <select
              value={shift}
              onChange={(e) => setShift(Number(e.target.value))}
              className="w-full border rounded-lg px-3 py-2"
            >
              <option value={1}>Shift 1</option>
              <option value={2}>Shift 2</option>
            </select>
          </div>
        </div>

        {/* MARKS INPUT */}
        <div className="mb-6">
          <label className="block mb-2 font-medium text-gray-700">
            Enter Marks (0–300)
          </label>
          <input
            type="number"
            min={0}
            max={300}
            value={marks}
            onChange={(e) => {
              const v = Number(e.target.value);
              if (v >= 0 && v <= 300) setMarks(v);
            }}
            className="w-full border rounded-lg px-3 py-2 mb-3"
          />

          <input
            type="range"
            min={0}
            max={300}
            value={marks}
            onChange={(e) => setMarks(Number(e.target.value))}
            className="w-full accent-blue-600"
          />

          <div className="flex justify-between text-sm text-gray-500 mt-1">
            <span>0</span>
            <span>{marks}</span>
            <span>300</span>
          </div>
        </div>

        {/* BUTTON */}
        <button
          onClick={handlePredict}
          disabled={loading}
          className="w-full bg-blue-700 hover:bg-blue-600 cursor-pointer text-white py-3 rounded-lg font-semibold transition disabled:opacity-50"
        >
          {loading ? "Predicting..." : "Predict Rank"}
        </button>
           

        {/* RESULT */}
        {prediction && (
          <div className="mt-8 bg-linear-to-br from-blue-600 to-blue-700 text-white p-6 rounded-2xl">

            <h2 className="text-center text-lg font-semibold mb-4">
              📊 Your JEE Main 2026 Prediction
            </h2>

            <div className="bg-white text-blue-700 rounded-xl p-5 text-center">
              <p className="text-sm text-gray-600 mb-1">
                Expected Rank Range
              </p>
              <p className="text-4xl font-extrabold">
                {formatNumber(prediction.predicted_rank_range[0])}
                <span className="mx-2 text-gray-500">–</span>
                {formatNumber(prediction.predicted_rank_range[1])}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-5 text-center">
              <div className="bg-blue-500/30 rounded-xl p-4">
                <p className="text-xs opacity-80">
                  Expected Percentile
                </p>
                <p className="text-lg font-bold">
                  {prediction.predicted_percentile_range[0]} –{" "}
                  {prediction.predicted_percentile_range[1]}
                </p>
              </div>

              <div className="bg-blue-500/30 rounded-xl p-4">
                <p className="text-xs opacity-80">
                  Marks Entered
                </p>
                <p className="text-lg font-bold">
                  {marks} / 300
                </p>
              </div>
            </div>

            <p className="text-center text-xs opacity-70 mt-4">
              Based on ~{formatNumber(prediction.total_candidates)} candidates  
              <br />
              ⚠️ Jan 2026 predictions use shift-wise normalization
            </p>
          {/* NEXT STEP: COLLEGE PREDICTOR */}
<motion.button
  initial={{ opacity: 0, y: 10 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.2 }}
  onClick={() =>
    router.push("/josaa-college-predictor")
  }
  className="mt-5 w-full bg-white cursor-pointer hover:scale-105 text-blue-700 font-bold py-3 rounded-xl
             flex items-center justify-center gap-2
             hover:bg-blue-50 transition-all"
>
  🎓 See Colleges You Can Get →
</motion.button>

<p className="text-center text-xs opacity-80 mt-2">
  View IITs • NITs • IIITs • GFTIs • Category-wise cutoffs
</p>


          </div>
        )}
      </div>
    </div>
  );
}
