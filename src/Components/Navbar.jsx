"use client";
import React, { useState } from "react";

const Navbar = () => {
  const [selectedTab, setSelectedTab] = useState("ECOSYSTEM");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState({
    flag: "assets/flag-uk.png",
    label: "United Kingdom",
  });

  const tabs = [
    { name: "ECOSYSTEM", label: "ECOSYSTEM" },
    { name: "WIN", label: "WIN $500K" },
    { name: "MEDIA", label: "MEDIA" },
    { name: "HOW_TO_BUY", label: "HOW TO BUY" },
    { name: "CALCULATOR", label: "CALCULATOR" },
  ];

  const handleCountrySelect = (flag, label) => {
    setSelectedCountry({ flag, label });
    setDropdownOpen(false);
  };

  return (
    <nav className="bg-black text-white pt-4 pb-4 border-b-[0.25px] border-browngrey">
      <div className="container mx-auto flex items-center justify-between px-4 md:px-6 lg:px-8">
        <div className="flex items-center">
          <img src="/assets/logo.png" alt="Logo" className="h-8 w-8 mr-1" />
          <div className="font-bold text-white text-lg leading-normal">
            LUNEX
          </div>
        </div>
        <div className="hidden md:flex flex-grow justify-center space-x-4 lg:space-x-10">
          {tabs.map((tab) => (
            <div
              key={tab.name}
              className={`px-4 py-2 cursor-pointer flex items-center text-sm ${
                selectedTab === tab.name
                  ? "text-[#34FCB4] border-b-2 border-[#34FCB4] pb-3"
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
                    selectedTab === tab.name ? "bg-[#34FCB4]" : ""
                  }`}
                ></span>
              </span>
              {tab.label}
            </div>
          ))}
        </div>
        <div className="hidden md:flex items-center space-x-4 lg:space-x-10">
          <div className="relative flex items-center cursor-pointer" onClick={() => setDropdownOpen(!dropdownOpen)}>
            <img src={selectedCountry.flag} alt={selectedCountry.label} className="h-6 w-6" />
            <svg
              className={`h-4 w-4 ml-1 transition-transform duration-200 ${dropdownOpen ? "transform rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg">
                <div
                  className="px-4 py-2 cursor-pointer flex items-center"
                  onClick={() => handleCountrySelect("assets/flag-uk.png", "United Kingdom")}
                >
                  <img src="assets/flag-uk.png" alt="UK Flag" className="h-6 w-6 mr-2" />
                  United Kingdom
                </div>
                <div
                  className="px-4 py-2 cursor-pointer flex items-center"
                  onClick={() => handleCountrySelect("assets/flag-usa.png", "USA")}
                >
                  <img src="assets/flag-usa.png" alt="USA Flag" className="h-6 w-6 mr-2" />
                  USA
                </div>
              </div>
            )}
          </div>
          <button className="bg-black border-[#34FCB4] border-2 px-4 py-2 hover:bg-[#34FCB4] hover:border-black hover:text-black transition duration-300 ease-in-out">
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
              className={`px-4 py-2 cursor-pointer flex items-center text-sm ${
                selectedTab === tab.name
                  ? "text-[#34FCB4] border-b-2 border-[#34FCB4] pb-3"
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
                    selectedTab === tab.name ? "bg-[#34FCB4]" : ""
                  }`}
                ></span>
              </span>
              {tab.label}
            </div>
          ))}
          <div className="relative flex items-center cursor-pointer" onClick={() => setDropdownOpen(!dropdownOpen)}>
            <img src={selectedCountry.flag} alt={selectedCountry.label} className="h-6 w-6" />
            <svg
              className={`h-4 w-4 ml-1 transition-transform duration-200 ${dropdownOpen ? "transform rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg">
                <div
                  className="px-4 py-2 cursor-pointer flex items-center"
                  onClick={() => handleCountrySelect("assets/flag-uk.png", "United Kingdom")}
                >
                  <img src="assets/flag-uk.png" alt="UK Flag" className="h-6 w-6 mr-2" />
                  United Kingdom
                </div>
                <div
                  className="px-4 py-2 cursor-pointer flex items-center"
                  onClick={() => handleCountrySelect("assets/flag-usa.png", "USA")}
                >
                  <img src="assets/flag-usa.png" alt="USA Flag" className="h-6 w-6 mr-2" />
                  USA
                </div>
              </div>
            )}
          </div>
          <button className="bg-black border-[#34FCB4] border-2 px-4 py-2 hover:bg-[#34FCB4] hover:border-white hover:text-black transition duration-300 ease-in-out">
            BUY $LUNAX
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
