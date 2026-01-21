"use client";
import { useEffect, useState } from "react";

export default function ShiftWiseTable() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/marks-data")
      .then(res => res.json())
      .then(res => {
        setData(res);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="bg-blue-50 text-blue-700 p-6 rounded-xl text-center">
        Loading shift-wise analysis…
      </div>
    );
  }

  if (!data?.rows?.length) {
    return (
      <div className="bg-yellow-50 text-yellow-700 p-6 rounded-xl text-center">
        Shift-wise data will appear as exams are conducted.
      </div>
    );
  }

  return (
    <div className="overflow-x-auto rounded-xl shadow">
      <table className="w-full text-sm border">
        <thead className="bg-blue-600 text-white">
          <tr>
            <th className="border px-3 py-2">Percentile Range</th>
            {data.columns.map(col => (
              <th key={col} className="border px-3 py-2 whitespace-nowrap">
                {col}
              </th>
            ))}
          </tr>
        </thead>

        <tbody className="bg-white">
          {data.rows.map(row => (
            <tr key={row.percentile} className="text-center">
              <td className="border px-3 py-2 font-semibold">
                {row.percentile}
              </td>

              {data.columns.map(col => (
                <td key={col} className="border px-3 py-2">
                  {row.values[col] || "—"}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
