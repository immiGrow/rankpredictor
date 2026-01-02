"use client";

export default function MarksPercentileTable() {
  const tableData = [
    { marks: "81 – 100", percentile: "93.5 – 96.1" },
    { marks: "71 – 80", percentile: "91.8 – 93.2" },
    { marks: "61 – 70", percentile: "87.0 – 91.7" },
    { marks: "51 – 60", percentile: "78.0 – 86.9" },
    { marks: "36 – 45", percentile: "58.0 – 68.9" },
    { marks: "31 – 35", percentile: "47.0 – 58.7" },
    { marks: "21 – 30", percentile: "32.0 – 48.9" },
    { marks: "11 – 20", percentile: "17.0 – 31.9" },
    { marks: "0 – 10", percentile: "0.8 – 16.9" }
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4 text-gray-900">
        JEE Main Marks vs Percentile
      </h2>
      <p className="text-center text-gray-700 mb-10 text-lg">
        Score ranges and their approximate percentiles for qualifying and lower brackets, based on recent JEE Main trends.
      </p>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg shadow overflow-hidden">
          <thead className="bg-blue-500 text-white">
            <tr>
              <th className="text-left py-3 px-4">Marks Range</th>
              <th className="text-left py-3 px-4">Approximate Percentile</th>
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
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
