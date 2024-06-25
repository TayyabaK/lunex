"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const PreSale = () => {
  const [clientSideData, setClientSideData] = useState(null);

  useEffect(() => {
    setClientSideData("Dynamic Content");
  }, []);
  const [selectedPayment, setSelectedPayment] = useState("ETH");

  const buttons = [
    {
      label: "ETH",
      icon: "/assets/eth.svg",
      selectedBg: "bg-[#34fcb4]",
      defaultBg: "bg-white",
    },
    {
      label: "USDT",
      icon: "/assets/usdt.png",
      selectedBg: "bg-[#34fcb4]",
      defaultBg: "bg-white",
    },
    {
      label: "BNB",
      icon: "/assets/bnb.png",
      selectedBg: "bg-[#34fcb4]",
      defaultBg: "bg-white",
    },
  ];

  return (
    <div
      className="bg-black text-white pt-[15px] pb-[25px] px-[38px] rounded-lg shadow-md"
      style={{
        fontFamily: "sans-serif",
      }}
    >
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
          <div className="font-bold text-white text-[21px] ml-[10px]">
            Lunex
          </div>
        </div>
        <div className="flex items-center gap-[15px]">
          <span className="text-[11px] font-normal">Presale Stage</span>
          <div
            className=" font-bold text-[#34fcb4] text-[18.3px] text-center tracking-[0] leading-[normal]"
            style={{
              fontFamily: "sans-serif",
            }}
          >
            7
          </div>
        </div>
      </div>
      <div className="bg-[#212021] h-[1px] w-full mt-[7.5px]"></div>

      <div className="mt-[11px]">
        <div className="flex justify-between items-center">
          <span className="text-[11px]">
            1 LNX{" "}
            <span className="font-semibold text-[13px] text-[#34fcb4]">
              {" "}
              = $0.040{" "}
            </span>
          </span>
          <span className="text-[11px]">
            NEXT STAGE PRICE{" "}
            <span className="font-semibold text-[13px] text-[#34fcb4]">
              {" "}
              = $0.058{" "}
            </span>
          </span>
        </div>

        <div className="bg-[#212021] h-[1px] w-full mt-[7.5px]"></div>

        <div className="mt-[11px]">
          <div className="bg-transparent border-[1px] border-[#212021] rounded-md h-4 w-full">
            <div
              className="bg-[#34fcb4] rounded-[3px] h-[15px] w-4/5 text-[6px] pt-[3px] font-extrabold text-black px-[12px]"
              style={{ width: "74.5%" }}
            >
              74.5%
            </div>
          </div>
        </div>
      </div>

      <div className="mt-[12px]">
        <div className="flex justify-between items-center border-[#848484] border-[0.3px] rounded-[3px] py-[4px] px-[15px]">
          <span className="font-normal text-[9px] text-[#e2e2e2]">
            USDT Raised:
          </span>
          <span className="font-medium text-[#e2e2e2] text-sm">
            $17,200,000
          </span>
        </div>
        <div className="flex justify-between items-center mt-[3px] border-[#848484] border-[0.3px] rounded-[3px] py-[4px] px-[15px]">
          <span className="font-normal text-[9px] text-[#e2e2e2]">
            Token Sold:
          </span>
          <span className=" font-medium text-[#e2e2e2] text-sm">
            265,000,000
          </span>
        </div>
      </div>

      <div className="mt-[12px] flex justify-center text-[9px]">
        {buttons.map((button) => (
          <button
            key={button.label}
            className={`${
              selectedPayment === button.label
                ? button.selectedBg
                : button.defaultBg
            } hover:bg-[#30ba87] text-${
              selectedPayment === button.label ? "black" : "#9e9e9e"
            } py-[6px] md:px-[46px] px-[16px] rounded-[4px] mr-[5px]`}
            onClick={() => setSelectedPayment(button.label)}
          >
            <span className="flex items-center text-black">
              <img
                src={button.icon}
                alt={` ${button.label} Icon`}
                className="mr-2 ml-[-8px]"
              />
              {button.label}
            </span>
          </button>
        ))}
      </div>

      <div className="mt-[8px]">
        <div className="flex justify-between items-center">
          <span className="font-normal text-[10px]">
            Amount Of <span className="font-bold"> {selectedPayment} </span>You
            Receive
          </span>
          <span className="flex items-center">
            <img src="/assets/eth-blue.png" alt="ETH Icon" className="mr-2" />
          </span>
        </div>
        <div className="mt-[3px] flex flex-row bg-white border border-gray-700 rounded-md w-full focus:outline-none focus:border-[#34fcb4]">
          <input
            type="text"
            className="bg-white border-none text-black placeholder:text-[10px] rounded-[4px] py-[6px] sm:px-3  px-2 max-w-[83%] w-full focus:outline-none focus:border-[#34fcb4]"
            placeholder="Enter Amount"
          />
          <button className="bg-[#34fcb4] sm:px-[15px] px-[8px] mt-[4px] mb-[4px] mr-[5px] rounded-md text-black text-[12px] font-semibold">
            MAX
          </button>
        </div>
        <div className="mt-[8px] flex justify-between items-center">
          <span className="text-[10px] font-light">
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
            className="bg-white border text-black placeholder:text-[10px] border-gray-700 rounded-[4px] py-[6px] sm:px-3  px-2 w-full focus:outline-none focus:border-[#34fcb4]"
            placeholder="0"
          />
        </div>
      </div>

      <div className="mt-2">
        <button className="bg-[#34fcb4] hover:bg-[#30ba87] text-[14px] text-black font-bold py-[8px] px-6 rounded-[4px] w-full">
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
