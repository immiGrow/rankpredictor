import Link from 'next/link'
import React from 'react'

function HubPage() {
  return (
    <div>
        
        <section className="max-w-6xl text-gray-900 mx-auto px-4 py-14">
  <h2 className="text-2xl md:text-3xl font-bold mb-6">
    JEE Main Marks vs Percentile Analysis
  </h2>

  <p className="text-gray-700 max-w-3xl mb-8">
    Understand what your JEE Main score means. Check expected percentile,
    rank range, and performance analysis for popular marks.
  </p>

  <div className="grid md:grid-cols-3 gap-6">

    {/* 120 */}
    <Link
      href="/jee-mains-120-marks-percentile-2025"
      className="block bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition"
    >
      <h3 className="font-bold text-lg">120 Marks in JEE Mains</h3>
      <p className="text-gray-600 mt-2">
        Expected percentile, rank & chances
      </p>
      <span className="text-blue-600 font-semibold mt-3 inline-block">
        Check Analysis →
      </span>
    </Link>

    {/* 150 */}
    <Link
      href="/jee-mains-150-marks-percentile-2025"
      className="block bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition"
    >
      <h3 className="font-bold text-lg">150 Marks in JEE Mains</h3>
      <p className="text-gray-600 mt-2">
        99 percentile chances explained
      </p>
      <span className="text-blue-600 font-semibold mt-3 inline-block">
        Check Analysis →
      </span>
    </Link>

    {/* 200 */}
    <Link
      href="/jee-mains-200-marks-percentile-2025"
      className="block bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition"
    >
      <h3 className="font-bold text-lg">200 Marks in JEE Mains</h3>
      <p className="text-gray-600 mt-2">
        Top rank & IIT chances
      </p>
      <span className="text-blue-600 font-semibold mt-3 inline-block">
        Check Analysis →
      </span>
    </Link>

  </div>

  {/* HUB CTA */}
  <Link
    href="/jee-mains-marks-analysis-2025"
    className="inline-block mt-8 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold"
  >
    View Complete Marks Analysis
  </Link>
</section>

    </div>
  )
}

export default HubPage