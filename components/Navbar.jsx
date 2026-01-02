"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  FaChartLine,
  FaCalculator,
  FaUniversity,
  FaBookOpen,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import logo from "@/public/logo.jpg";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-gray-950 text-white border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src={logo}
            alt="JEE Rank Predictor Logo"
            width={44}
            height={44}
            className="rounded"
            priority
          />
          <span className="text-xl md:text-2xl font-extrabold tracking-tight">
            <span className="text-blue-500">JEE</span>
            <span className="text-white">RankPredictor</span>
          </span>
        </Link>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex items-center gap-8 font-medium text-sm">

          <li>
            <Link href="/" className="hover:text-blue-400 transition">
              Rank Predictor
            </Link>
          </li>

          <li>
            <Link
              href="/"
              className="hover:text-blue-400 transition"
            >
              Percentile Predictor
            </Link>
          </li>

          

          <li>
            <Link
              href="/jee_main_marks_vs_rank_2026"
              className="hover:text-blue-400 transition"
            >
              Marks vs Rank
            </Link>
          </li>

          <li>
            <Link
              href="/blog/nta_percentile_calculation"
              className="hover:text-blue-400 transition"
            >
              Blog
            </Link>
          </li>

          <li>
            <Link
              href="/about"
              className="hover:text-blue-400 transition"
            >
              About
            </Link>
          </li>

          {/* CTA */}
          <li>
            <Link
              href="/"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition shadow"
            >
              Predict Rank
            </Link>
          </li>
        </ul>

        {/* MOBILE TOGGLE */}
        <button
          aria-label="Toggle Menu"
          onClick={() => setOpen(!open)}
          className="md:hidden text-xl"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-gray-900 border-t border-gray-800">
          <ul className="flex flex-col px-6 py-5 space-y-4 text-sm font-medium">

            <li className="flex items-center gap-2">
              <FaChartLine className="text-blue-400" />
              <Link href="/" onClick={() => setOpen(false)}>
                Rank Predictor
              </Link>
            </li>

            <li className="flex items-center gap-2">
              <FaCalculator className="text-blue-400" />
              <Link
                href="/percentile-predictor"
                onClick={() => setOpen(false)}
              >
                Percentile Predictor
              </Link>
            </li>

            <li className="flex items-center gap-2">
              <FaUniversity className="text-blue-400" />
              <Link
                href="/college-predictor"
                onClick={() => setOpen(false)}
              >
                College Predictor
              </Link>
            </li>

            <li className="flex items-center gap-2">
              <FaBookOpen className="text-blue-400" />
              <Link
                href="/jee_main_marks_vs_rank_2026"
                onClick={() => setOpen(false)}
              >
                Marks vs Rank 2026
              </Link>
            </li>

            <li className="flex items-center gap-2">
              <FaBookOpen className="text-blue-400" />
              <Link
                href="/blog/nta_percentile_calculation"
                onClick={() => setOpen(false)}
              >
                Blog
              </Link>
            </li>

            <li>
              <Link
                href="/about"
                onClick={() => setOpen(false)}
                className="block"
              >
                About
              </Link>
            </li>

            {/* MOBILE CTA */}
            <li>
              <Link
                href="/"
                onClick={() => setOpen(false)}
                className="block text-center bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold"
              >
                Predict Rank Now
              </Link>
            </li>

          </ul>
        </div>
      )}
    </nav>
  );
}
