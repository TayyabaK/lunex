"use client";
import React, { useState } from "react";

const Navbar = () => {
  const [selectedTab, setSelectedTab] = useState("ECOSYSTEM");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const tabs = [
    { name: "ECOSYSTEM", label: "ECOSYSTEM" },
    { name: "WIN", label: "WIN $500K" },
    { name: "MEDIA", label: "MEDIA" },
    { name: "HOW_TO_BUY", label: "HOW TO BUY" },
    { name: "CALCULATOR", label: "CALCULATOR" },
  ];

  return (
    <nav className="bg-black text-white pt-4 pb-4">
      <div className="container w-full mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img src="/assets/logo.png" alt="Logo" className="h-8 w-8 mr-1" />
          <div className="font-bold text-white text-lg leading-normal">
            LUNEX
          </div>
        </div>
        <div className="hidden md:flex flex-grow justify-center space-x-10">
          {tabs.map((tab) => (
            <div
              key={tab.name}
              className={`px-4 py-2 cursor-pointer flex items-center ${
                selectedTab === tab.name
                  ? "text-green-500 border-b-2 border-green-500"
                  : ""
              }`}
              onClick={() => setSelectedTab(tab.name)}
            >
              <span
                className={`h-4 w-4 flex items-center justify-center rounded-full mr-2 border ${
                  selectedTab === tab.name
                    ? "bg-black border-white"
                    : "bg-black border-white"
                }`}
              >
                <span
                  className={`h-2 w-2 rounded-full ${
                    selectedTab === tab.name ? "bg-green-500" : ""
                  }`}
                ></span>
              </span>
              {tab.label}
            </div>
          ))}
        </div>
        <div className="hidden md:flex items-center mr-4">
          <div className="relative">
            <img
              src="assets/flag-uk.png"
              alt="UK Flag"
              className="h-6 w-6 cursor-pointer"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            />
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg">
                <div
                  className="px-4 py-2 cursor-pointer"
                  onClick={() => setDropdownOpen(false)}
                >
                  Option 1
                </div>
                <div
                  className="px-4 py-2 cursor-pointer"
                  onClick={() => setDropdownOpen(false)}
                >
                  Option 2
                </div>
              </div>
            )}
          </div>
          <button className="bg-black border-green border-2 px-4 py-2 ml-10 hover:bg-green-500 hover:border-white transition duration-300 ease-in-out">
            {" "}
            BUY $LUNAX
          </button>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <svg
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden mt-4 flex flex-col items-center space-y-4">
          {tabs.map((tab) => (
            <div
              key={tab.name}
              className={`px-4 py-2 cursor-pointer flex items-center ${
                selectedTab === tab.name
                  ? "text-green-500 border-b-2 border-green-500"
                  : ""
              }`}
              onClick={() => {
                setSelectedTab(tab.name);
                setMenuOpen(false);
              }}
            >
              <span
                className={`h-4 w-4 flex items-center justify-center rounded-full mr-2 border ${
                  selectedTab === tab.name
                    ? "bg-black border-white"
                    : "bg-black border-white"
                }`}
              >
                <span
                  className={`h-2 w-2 rounded-full ${
                    selectedTab === tab.name ? "bg-green-500" : ""
                  }`}
                ></span>
              </span>
              {tab.label}
            </div>
          ))}
          <div className="relative">
            <img
              src="assets/flag-uk.png"
              alt="UK Flag"
              className="h-6 w-6 cursor-pointer"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            />
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg">
                <div
                  className="px-4 py-2 cursor-pointer"
                  onClick={() => setDropdownOpen(false)}
                >
                  Option 1
                </div>
                <div
                  className="px-4 py-2 cursor-pointer"
                  onClick={() => setDropdownOpen(false)}
                >
                  Option 2
                </div>
              </div>
            )}
          </div>
          <button className="bg-black border-green border-2 px-4 py-2 hover:bg-green-500 hover:border-white transition duration-300 ease-in-out">
            BUY $LUNEX
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
