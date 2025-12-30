"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import logo from "@/public/logo.jpg";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white w-full z-20 top-0 border-b border-default">
      <div className="max-w-7xl flex flex-wrap items-center justify-between mx-auto p-4">

        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3">
          <Image src={logo} className="w-10 md:w-12" width={120} height={100} alt="RankPredictor Logo" />
          <span className="text-xl md:text-2xl font-semibold">
            <span className="text-blue-500 font-bold">Rank</span>
            <span className="text-green-500 font-bold">Predictor</span>
          </span>
        </Link>

        {/* Hamburger */}
        <button aria-label="Open Menu"
          onClick={() => setOpen(!open)}
          className="inline-flex items-center p-2 w-10 h-10 justify-center md:hidden rounded hover:bg-neutral-secondary-soft focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        {/* Menu */}
        <div
          className={`w-full md:block md:w-auto transition-all duration-300 ${
            open ? "block" : "hidden"
          }`}
        >
          <ul className="font-medium flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 bg-neutral-secondary-soft md:bg-transparent p-4 md:p-0 rounded">

            <li>
              <Link
                href="/jee_main_marks_vs_rank_2026"
                onClick={() => setOpen(false)}
                className="block py-2  font-bold px-3 hover:text-blue-200"
              >
                JEE Marks vs Rank 2026
              </Link>
            </li>

            <li>
              <Link
                href="/blog/jee_main_2025"
                onClick={() => setOpen(false)}
                className="block py-2  font-bold px-3 hover:text-blue-200"
              >
                Blogs
              </Link>
            </li>

            <li>
              <Link
                href="/about"
                onClick={() => setOpen(false)}
                className="block py-2  font-bold px-3 hover:text-blue-200"
              >
                About
              </Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
