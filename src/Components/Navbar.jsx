"use client";
import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [selectedTab, setSelectedTab] = useState("ECOSYSTEM");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState({
    flag: "assets/flag-uk.png",
    label: "United Kingdom",
  });

  const tabs = [
    { name: "ECOSYSTEM", label: "ECOSYSTEM", page: "/" },
    { name: "WIN", label: "WIN $500K", page: "/#giveaway" },
    { name: "MEDIA", label: "MEDIA", page: "/#media" },
    { name: "HOW_TO_BUY", label: "HOW TO BUY", page: "/Howtobuy" },
    { name: "CALCULATOR", label: "CALCULATOR", page: "/Calculator" },
  ];

  const handleCountrySelect = (flag, label) => {
    setSelectedCountry({ flag, label });
    setDropdownOpen(false);
  };

  return (
    <div className="bg-black text-white py-8 mr-[64px]  ml-[44px] border-b-[0.25px] border-browngrey relative z-index-0">
      <div className="container w-full mx-auto flex items-center justify-between px-4 md:px-6 lg:px-8">
        <Link href="/">
          <div className="flex items-center ml-[-10px]">
            <img src="/assets/logo.png" alt="Logo" className="h-8 w-8 mr-1" />
            <div className="font-bold text-white text-xl pl-2 leading-normal">
              Lunex
            </div>
          </div>
        </Link>
        <div className="hidden xl:flex flex-grow justify-center space-x-10 lg:space-x-10">
          {tabs.map((tab) => (
            <Link href={tab.page} key={tab.name}>
              <div
                key={tab.name}
                className={`px-4 py-2 cursor-pointer flex items-center text-xs font-bold ${
                  selectedTab === tab.name ? "text-[#34FCB4] relative" : ""
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
                {selectedTab === tab.name && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#34FCB4] z-index-1 mb-[-40px]"></span>
                )}
              </div>
            </Link>
          ))}
        </div>
        <div className="hidden xl:flex items-center space-x-4 lg:space-x-10">
          <div
            className="relative flex items-center cursor-pointer"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            <img
              src={selectedCountry.flag}
              alt={selectedCountry.label}
              className="h-6 w-6"
            />
            <svg
              className={`h-4 w-4 ml-1 transition-transform duration-200 ${
                dropdownOpen ? "transform rotate-180" : ""
              }`}
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
                  onClick={() =>
                    handleCountrySelect("assets/flag-uk.png", "United Kingdom")
                  }
                >
                  <img
                    src="assets/flag-uk.png"
                    alt="UK Flag"
                    className="h-6 w-6 mr-2"
                  />
                  United Kingdom
                </div>
                <div
                  className="px-4 py-2 cursor-pointer flex items-center"
                  onClick={() =>
                    handleCountrySelect("assets/flag-usa.png", "USA")
                  }
                >
                  <img
                    src="assets/flag-usa.png"
                    alt="USA Flag"
                    className="h-6 w-6 mr-2"
                  />
                  USA
                </div>
              </div>
            )}
          </div>
          <button className="relative neon-border py-2 px-8 flex items-center text-white font-bold transition-colors duration-300 ease-in-out hover:bg-[#34fcb4] hover:text-black">
            <span className="absolute left-0 ml-[-12px] flex items-center justify-center w-5 h-5 bg-black border border-white rounded-full neon-circle">
              <span className="w-2 h-2 bg-[#34fcb4] rounded-full"></span>
            </span>
            <span>BUY $LUNAX</span>
          </button>
        </div>
        <div className="xl:hidden flex items-center">
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
        <div className="xl:hidden mt-4 flex flex-col items-center space-y-4">
          {tabs.map((tab) => (
            <Link key={tab.name} href={tab.page}>
              <div
                key={tab.name}
                className={`px-4 py-2 cursor-pointer flex items-center text-sm ${
                  selectedTab === tab.name ? "text-[#34FCB4] relative" : ""
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
                {selectedTab === tab.name && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#34FCB4] transform translate-y-1/2"></span>
                )}
              </div>
            </Link>
          ))}
          <div
            className="relative flex items-center cursor-pointer"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            <img
              src={selectedCountry.flag}
              alt={selectedCountry.label}
              className="h-6 w-6"
            />
            <svg
              className={`h-4 w-4 ml-1 transition-transform duration-200 ${
                dropdownOpen ? "transform rotate-180" : ""
              }`}
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
                  onClick={() =>
                    handleCountrySelect("assets/flag-uk.png", "United Kingdom")
                  }
                >
                  <img
                    src="assets/flag-uk.png"
                    alt="UK Flag"
                    className="h-6 w-6 mr-2"
                  />
                  United Kingdom
                </div>
                <div
                  className="px-4 py-2 cursor-pointer flex items-center"
                  onClick={() =>
                    handleCountrySelect("assets/flag-usa.png", "USA")
                  }
                >
                  <img
                    src="assets/flag-usa.png"
                    alt="USA Flag"
                    className="h-6 w-6 mr-2"
                  />
                  USA
                </div>
              </div>
            )}
          </div>
          <button className="relative neon-border py-2 px-8 flex items-center text-white font-bold transition-colors duration-300 ease-in-out hover:bg-[#34fcb4] hover:text-black">
            <span className="absolute left-0 ml-[-12px] flex items-center justify-center w-5 h-5 bg-black border border-white rounded-full neon-circle">
              <span className="w-2 h-2 bg-[#34fcb4] rounded-full"></span>
            </span>
            <span>BUY $LUNAX</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
