"use client";

export default function PercentileRankTable() {
  const tableData = [
    { marks: "300", percentile: "100", rank: "1" },
    { marks: "271 - 280", percentile: "99.994 – 99.997", rank: "25 – 56" },
    { marks: "260 - 270", percentile: "99.988 – 99.994", rank: "55 – 115" },
    { marks: "241 - 259", percentile: "99.956 – 99.988", rank: "115 – 402" },
    { marks: "222 - 240", percentile: "99.901 – 99.956", rank: "401 – 978" },
    { marks: "201 - 222", percentile: "99.795 – 99.901", rank: "978 – 2001" },
    { marks: "180 - 200", percentile: "99.573 – 99.782", rank: "2001 – 3901" },
    { marks: "161 - 180", percentile: "99.239 – 99.573", rank: "3901 – 7003" },
    { marks: "141 - 160", percentile: "98.732 – 99.239", rank: "7003 – 12200" },
    { marks: "119 - 140", percentile: "96.978 – 98.732", rank: "12200 – 21010" },
    { marks: "100 - 119", percentile: "96.064 – 96.978", rank: "21010 – 35000" }
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-6 text-gray-900">
        Percentile vs Estimated Rank (2026)
      </h2>
      <p className="text-center text-gray-700 mb-10 text-lg">
        Approximate All India Rank (AIR) ranges corresponding to different percentiles based on recent JEE Main trends.
      </p>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg shadow overflow-hidden">
          <thead className="bg-blue-500 text-white">
            <tr>
              <th className="text-left py-3 px-4">Marks Range</th>
              <th className="text-left py-3 px-4">JEE Main Percentile</th>
              <th className="text-left py-3 px-4">Projected AIR</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
              >
                <td className="py-3 px-4">{row.marks}</td>
                <td className="py-3 px-4">{row.percentile}</td>
                <td className="py-3 px-4">{row.rank}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
