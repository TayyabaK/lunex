"use client";
import React, { useState } from "react";
import Image from "next/image";

const PreSale = () => {
  const [selectedPayment, setSelectedPayment] = useState("ETH");

  const buttons = [
    { label: "ETH", icon: "/assets/eth.svg", selectedBg: "bg-[#34fcb4]", defaultBg: "bg-white" },
    { label: "USDT", icon: "/assets/usdt.png", selectedBg: "bg-[#34fcb4]", defaultBg: "bg-white" },
    { label: "BNB", icon: "/assets/bnb.png", selectedBg: "bg-[#34fcb4]", defaultBg: "bg-white" },
  ];

  return (
    <div className="bg-black [font-family:'Archivo-Bold',Helvetica] text-white py-[20px] px-[38px] rounded-lg shadow-md">
      <div className="flex justify-between items-center">
        <div className="flex items-center ">
          <div className="flex items-center justify-center bg-cover bg-no-repeat">
            <Image
              src="/assets/logo.png"
              alt="Ellipse"
              width={30}
              height={30}
            />
          </div>
          <div className="font-bold text-white text-md ml-2">Lunex</div>
        </div>
        <div className="flex items-center gap-[15px]">
          <span className="text-sm">Presale Stage</span>
          <div className="[font-family:'Archivo-Bold',Helvetica] font-bold text-[#34fcb4] text-[18.3px] text-center tracking-[0] leading-[normal]">
            7
          </div>
        </div>
      </div>

      <div className="mt-[15px]">
        <div className="flex justify-between items-center">
          <span className="text-sm">
            1 LNX{" "}
            <span className="font-semibold text-[#34fcb4]"> = $0.040 </span>
          </span>
          <span className="text-sm">
            NEXT STAGE PRICE{" "}
            <span className="font-semibold text-[#34fcb4]"> = $0.058 </span>
          </span>
        </div>
        <div className="mt-6">
          <div className="bg-transparent border-[1px] border-gray-700 rounded-md h-4 w-full">
            <div
              className="bg-[#34fcb4] rounded-[4px] h-4 w-4/5 text-[9px] pt-[1px] font-extrabold text-black px-[15px]"
              style={{ width: "74.5%" }}
            >
              74.5%
            </div>
          </div>
        </div>
      </div>

      <div className="mt-[15px]">
        <div className="flex justify-between items-center border-gray-700 border-[1px] rounded-md py-[5px] px-[15px]">
          <span className="font-normal text-[12px]">USDT Raised:</span>
          <span className="font-semibold text-sm">$17,200,000</span>
        </div>
        <div className="flex justify-between items-center mt-[3px] border-gray-700 border-[1px] rounded-md py-[5px] px-[15px]">
          <span className="font-normal text-sm">Token Sold:</span>
          <span className="font-semibold text-sm">265,000,000</span>
        </div>
      </div>

      <div className="mt-[12px] flex justify-center text-[10px]">
        {buttons.map((button) => (
          <button
            key={button.label}
            className={`${
              selectedPayment === button.label ? button.selectedBg : button.defaultBg
            } hover:bg-[#30ba87] text-${
              selectedPayment === button.label ? "black" : "#9e9e9e"
            } py-2 md:px-[42px] px-4 rounded-md mr-4`}
            onClick={() => setSelectedPayment(button.label)}
          >
            <span className="flex items-center text-black">
              <img
                src={button.icon}
                alt={`${button.label} Icon`}
                className="mr-2 ml-[-8px]"
              />
              {button.label}
            </span>
          </button>
        ))}
      </div>

      <div className="mt-[15px]">
        <div className="flex justify-between items-center">
          <span className="font-normal text-[10px]">
            Amount Of <span className="font-bold"> {selectedPayment} </span>You Receive
          </span>
          <span className="flex items-center">
            <img src="/assets/eth-blue.png" alt="ETH Icon" className="mr-2" />
          </span>
        </div>
        <div className="mt-[3px] flex flex-row bg-white border border-gray-700 rounded-md w-full focus:outline-none focus:border-[#34fcb4]">
          <input
            type="text"
            className="bg-white border-none text-black placeholder:text-[12px] rounded-md sm:py-2 sm:px-3 py-1 px-2 max-w-[83%] w-full focus:outline-none focus:border-[#34fcb4]"
            placeholder="Enter Amount"
          />
          <button className="bg-[#34fcb4] sm:px-[15px] px-[8px] mt-[4px] mb-[4px] mr-[5px] rounded-md text-black text-[12px] font-semibold">
            MAX
          </button>
        </div>
        <div className="mt-[12px] flex justify-between items-center">
          <span className="font-normal text-[10px]">
            Amount Of <span className="font-bold"> LNEX </span>You Receive
          </span>
          <span className="flex items-center">
            <img
              src="/assets/logo.png"
              alt="Lunex Icon"
              className="mr-[5px] h-[20px] w-[20px]"
            />
          </span>
        </div>
        <div className="mt-[3px] bg-white border border-gray-700 rounded-md w-full focus:outline-none focus:border-[#34fcb4]">
          <input
            type="text"
            className="bg-white border text-black placeholder:text-[12px] border-gray-700 rounded-md sm:py-2 sm:px-3 py-1 px-2 w-full focus:outline-none focus:border-[#34fcb4]"
            placeholder="0"
          />
        </div>
      </div>

      <div className="mt-2">
        <button className="bg-[#34fcb4] hover:bg-[#30ba87] text-black font-bold py-2 px-6 rounded-md w-full">
          Connect Wallet
        </button>
      </div>

      <div className="mt-6 flex justify-start items-center">
        <span className="flex items-center gap-[10px] text-[9px]">
          <img
            className="w-[15px] h-[15px]"
            alt="Group"
            src="/assets/Group-3.png"
          />
          How To Buy?
        </span>
      </div>
    </div>
  );
};

export default PreSale;
