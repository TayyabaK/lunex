"use client";
import React from "react";
import Image from "next/image";

const PreSale = () => {
  return (
    <div className="bg-black [font-family:'Archivo-Bold',Helvetica]  text-white p-8 rounded-lg shadow-md">
      <div className="flex justify-between items-center">
        {/* <div>
          <img src="/lunex-logo.svg" alt="Lunex Logo" className="h-10" />
          <h1 className="font-bold text-2xl">Lunex</h1>
        </div> */}
        <div className="flex items-center ">
          <div className="flex items-center justify-center bg-cover bg-no-repeat">
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
        <div className="flex items-center gap-[15px]">
          <span className="font-semibold text-lg">Presale Stage</span>
          {/* <span className="font-bold text-lg ml-2">7</span> */}
          <div className=" [font-family:'Archivo-Bold',Helvetica] font-bold text-[#34fcb4] text-[23.3px] text-center  tracking-[0] leading-[normal]">
            7
          </div>
        </div>
      </div>

      <div className="mt-6">
        <div className="flex justify-between items-center">
          <span className="font-bold text-lg">
            1 LNX <span className="text-[#34fcb4]"> = $0.040 </span>
          </span>
          <span className="font-bold text-lg">
            NEXT STAGE PRICE <span className="text-[#34fcb4]"> = $0.058 </span>
          </span>
        </div>
        <div className="mt-2">
          <div className="bg-[#34fcb4]  rounded-full h-4 w-full">
            <div
              className="bg-[#1f8b63] rounded-full h-4 w-4/5"
              style={{ width: "74.5%" }}
            ></div>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <div className="flex justify-between items-center border-gray-700 border-[1px] rounded-md p-[5px]">
          <span className="font-normal text-lg">USDT Raised:</span>
          <span className="font-semibold text-lg">$17,200,000</span>
        </div>
        <div className="flex justify-between items-center mt-2 border-gray-700 border-[1px] rounded-md p-[5px]">
          <span className="font-normal text-lg">Token Sold:</span>
          <span className="font-semibold text-lg">265,000,000</span>
        </div>
      </div>

      <div className="mt-6 flex justify-center">
        <button className="bg-[#34fcb4]  hover:bg-[#30ba87] text-black font-bold py-2 md:px-[42px] px-4 rounded-lg mr-4">
          <span className="flex items-center">
            <img src="/assets/eth.png" alt="ETH Icon" className="mr-2" />
            ETH
          </span>
        </button>
        <button className="bg-white  hover:bg-[#30ba87] text-[#9e9e9e] font-bold py-2 md:px-[34px] px-4 rounded-lg mr-4">
          <span className="flex items-center">
            <img src="/assets/usdt.png" alt="USDT Icon" className="mr-2" />
            USDT
          </span>
        </button>
        <button className="bg-white  hover:bg-[#30ba87] text-[#9e9e9e] font-bold py-2 md:px-[38px] px-4 rounded-lg">
          <span className="flex items-center">
            <img src="/assets/bnb.png" alt="BNB Icon" className="mr-2" />
            BNB
          </span>
        </button>
      </div>

      <div className="mt-6">
        <div className="flex justify-between items-center">
          <span className="font-bold text-lg">Amount Of ETH You Receive</span>
          <span className="flex items-center">
            <img src="/assets/eth-blue.png" alt="ETH Icon" className="mr-2" />
          </span>
        </div>
        <div className="mt-2 bg-white border border-gray-700 rounded-md w-full focus:outline-none focus:border-[#34fcb4]">
          <input
            type="text"
            className="bg-white border-none text-black  rounded-md py-2 px-3 max-w-[83%] w-full focus:outline-none focus:border-[#34fcb4] "
            placeholder="Enter Amount"
          />
          <button className="bg-[#34fcb4] px-[15px] py-[4px] rounded-md  text-black text-sm font-semibold">
            MAX
          </button>
        </div>
        <div className="mt-4 flex justify-between items-center">
          <span className="font-bold text-lg">Amount Of LNEX You Receive</span>
          <span className="flex items-center">
            <img
              src="/assets/logo.png"
              alt="Lunex Icon"
              className="mr-2 h-[20px] w-[20px]"
            />
          </span>
        </div>
        <div className="mt-2 bg-white border border-gray-700 rounded-md w-full focus:outline-none focus:border-[#34fcb4] ">
          <input
            type="text"
            className="bg-white border text-black border-gray-700 rounded-md py-2 px-3 w-full focus:outline-none focus:border-[#34fcb4] "
            placeholder="0"
          />
        </div>
      </div>

      <div className="mt-6">
        <button className="bg-[#34fcb4]  hover:bg-[#30ba87] text-black font-bold py-3 px-6 rounded-lg w-full">
          Connect Wallet
        </button>
      </div>

      <div className="mt-6 flex justify-start items-center">
        <span className="flex items-center gap-[10px] text-sm">
          <img
            className=" w-[15px] h-[15px] top-[822px] left-[1208px]"
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
