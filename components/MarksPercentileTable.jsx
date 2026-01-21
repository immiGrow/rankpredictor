"use client";

export default function MarksPercentileTable() {
 

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
