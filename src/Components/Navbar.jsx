"use client";
import React, { useState } from "react";
import Image from "next/image";

const Navbar = () => {
  const [active, setActive] = useState(false);
  return (
    <div className="relative flex flex-row bg-black w-full justify-between px-4 py-4">
      {/* Logo container */}
      <div className="flex items-center md:ml-[20px] ml-[5px]">
        <div
          className="flex items-center justify-center bg-cover bg-no-repeat"
          style={{
            backgroundImage: 'url("/assets/Subtractassets.png")',
            width: "39px",
            height: "39px",
          }}
        >
          <Image
            src="/assets/logo.png"
            alt="Ellipse"
            width={50}
            height={50}
            className="w-11 h-21"
          />
        </div>
        <div className="font-bold text-white text-lg leading-normal ml-2">
          Lunex
        </div>
      </div>

      {/* Navbar items container */}
      <div className="flex flex-row items-center justify-center space-x-6">
        {/* Sample item with icon */}
        {/* <div className="flex items-center">
          <div className="w-5 h-5 rounded-full border border-solid border-white"></div>
          <div
            className={`font-bold text-lg leading-normal ml-2 ${
              isActive.ecosystem ? "text-[#34fcb4]" : "text-white"
            }`}
          >
            ECOSYSTEM
          </div>
        </div> */}

        {/* Repeat other items similarly */}
        <div className="flex items-center">
          <div className="w-5 h-5 rounded-full border border-solid border-white"></div>
          <div className="font-bold text-[#34fcb4] text-lg leading-normal ml-2">
            ECOSYSTEM
          </div>
        </div>

        <div className="flex items-center">
          <div className="w-5 h-5 rounded-full border border-solid border-white"></div>
          <div className="font-bold text-[#34fcb4] text-lg leading-normal ml-2">
            ECOSYSTEM
          </div>
        </div>

        <div className="flex items-center">
          <div className="w-5 h-5 rounded-full border border-solid border-white"></div>
          <div className="font-bold text-[#34fcb4] text-lg leading-normal ml-2">
            ECOSYSTEM
          </div>
        </div>

        <div className="flex items-center">
          <div className="w-5 h-5 rounded-full border border-solid border-white"></div>
          <div className="font-bold text-[#34fcb4] text-lg leading-normal ml-2">
            ECOSYSTEM
          </div>
        </div>
      </div>

      {/* Buy $LUNAX text */}
      <div className="flex flex-row">
        <div className="flex items-center">
          <Image
            src="/assets/flag-uk.png"
            alt="flag"
            width={30}
            height={30}
            className="w-11 h-21"
          />{" "}
        </div>
        <div className="flex items-center border-[1px] md:mr-[80px] mr-[5px] p-[15px] md:ml-[30px]">
          <div className="w-5 h-5 rounded-full border border-solid border-white ml-[-25px]"></div>
          <div
            className="text-lg font-bold text-white leading-normal whitespace-nowrap ml-2"
            style={{ letterSpacing: "0.72px" }}
          >
            BUY $LUNAX
          </div>
        </div>{" "}
      </div>
    </div>
  );
};

export default Navbar;
