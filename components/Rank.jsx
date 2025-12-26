"use client";
import { useState } from "react";

export default function Rank() {
  const [marks, setMarks] = useState(150); // default mid-value
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);

  const handlePredict = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/predict-rank", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ marks }),
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

  const formatNumber = (num) => {
    return num.toLocaleString("en-IN");
  };

  return (
    <div className="flex items-center justify-center px-4  ">
      <div className="bg-white p-8 rounded-2xl shadow-xl max-w-lg w-full text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">JEE Main 2026 Rank Predictor</h1>
        <p className="text-gray-600 mb-6">
          Enter your expected JEE Main marks and get an estimated rank instantly.
        </p>

        {/* Marks Input */}
        <div className="mb-6 flex flex-col gap-4">
          {/* Direct Input */}
          <div>
            <label htmlFor="marksInput" className="block mb-2 font-medium text-gray-700">
              Enter Marks (0–300)
            </label>
            <input
              type="number"
              id="marksInput"
              value={marks}
              min="0"
              max="300"
              onChange={(e) => {
                const val = Number(e.target.value);
                if (val >= 0 && val <= 300) setMarks(val);
              }}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="text-gray-600 font-bold text-center">OR</div>

          {/* Slider Input */}
          <div>
            <label htmlFor="marksSlider" className="block mb-2 font-medium text-gray-700">
              Marks Slider: {marks} / 300
            </label>
            <input
              type="range"
              id="marksSlider"
              min="0"
              max="300"
              value={marks}
              onChange={(e) => setMarks(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
            />
            <div className="flex justify-between text-sm text-gray-500 mt-1">
              <span>0</span>
              <span>300</span>
            </div>
          </div>
        </div>

        {/* Predict Button */}
        <button
          onClick={handlePredict}
          disabled={loading}
          className="w-full bg-blue-700 hover:bg-blue-600 cursor-pointer text-white py-3 rounded-lg font-semibold transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "Predicting..." : "Predict Rank"}
        </button>

       {/* Result */}
{prediction && (
  <div className="mt-8 bg-linear-to-br from-blue-600 to-blue-700 text-white p-6 rounded-2xl shadow-xl">
    
    {/* Header */}
    <div className="text-center mb-4">
      <h2 className="text-xl font-semibold opacity-90">📊 Your JEE Main 2026 Prediction</h2>
    </div>

    {/* MAIN RESULT – RANK */}
    <div className="bg-white text-blue-700 rounded-xl p-5 text-center shadow-md">
      <p className="text-sm uppercase tracking-wide text-gray-500 mb-1">
        Expected Rank
      </p>
      <p className="text-4xl md:text-5xl font-extrabold">
        {formatNumber(prediction.predicted_rank_range[0])}
        <span className="text-2xl font-semibold text-gray-500 mx-2">–</span>
        {formatNumber(prediction.predicted_rank_range[1])}
      </p>
      <p className="text-sm text-gray-500 mt-1">
        (Estimated for 2026)
      </p>
    </div>

    {/* SECONDARY INFO */}
    <div className="grid grid-cols-2 gap-4 mt-5 text-center">
      
      {/* Percentile */}
      <div className="bg-blue-500/30 rounded-xl p-4">
        <p className="text-xs uppercase tracking-wide opacity-80">
          Expected Percentile
        </p>
        <p className="text-xl font-bold mt-1">
          {prediction.predicted_percentile} –{" "}
          {(parseFloat(prediction.predicted_percentile) + 0.1).toFixed(2)}
        </p>
      </div>

      {/* Marks */}
      <div className="bg-blue-500/30 rounded-xl p-4">
        <p className="text-xs uppercase tracking-wide opacity-80">
          Marks Entered
        </p>
        <p className="text-xl font-bold mt-1">
          {marks} / 300
        </p>
      </div>
    </div>

    {/* FOOTNOTE */}
    <p className="text-center text-xs opacity-70 mt-4">
      Based on ~{formatNumber(prediction.total_candidates || 1545000)} candidates & past year trends
    </p>
  </div>
)}

      </div>
    </div>
  );
}
