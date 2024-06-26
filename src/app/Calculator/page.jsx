"use client";

import React, { useState, useEffect } from "react";
import SliderComponent from "./RangeBar";

const EarningsCalculator = () => {
  const [value, setValue] = useState(50);

  useEffect(() => {
    // Set the initial value of the slider
    document
      .querySelector('input[type="range"]')
      .style.setProperty("--value", value + "%");
  }, [value]);

  return (
    <div className="bg-black text-white px-8 py-16 flex flex-col items-center">
      <div className="max-w-2xl text-center mb-8">
        <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-4">
          Take Control of <span className="text-[#34FCB4]">Your Earnings</span>
        </h1>
        <p className="text-md mb-4">
          Use our profitability calculator to see how much you could earn. It’s
          easy to use and gives you accurate estimates based on the latest data
          and trends.
        </p>
        <p className="text-md mb-4">
          Find out what your efforts might bring and plan your financial future
          with confidence.
        </p>
      </div>

      <div
        className="max-w-3xl w-full h-fit border-1 border-solid border-[#34fcb4]"
        style={{
          boxShadow: "6px 6px 0 black, 7px 7px 0 #34fcb4",
          color: "transparent",
        }}
      >
        <div className=" w-full h-fit border-[#34fcb4] border-[1px]">
          <div className="w-full p-8 text-white">
            <div className="flex flex-row items-center justify-between w-full">
              <h2 className="text-lg font-bold">
                <span className="text-[#34fcb4]">
                  {String.fromCharCode(47, 47)}{" "}
                </span>
                COIN AMOUNT CALCULATOR.
              </h2>
              <p className="text-[14px]">
                Take a peek at your future earnings.
              </p>
            </div>
            <div className="flex justify-between items-center border-[#848484] border-[0.3px] py-[15px] my-[30px] px-[15px]">
              <span className="font-normal text-[18px] text-[#e2e2e2]">
                Calculate your profits on coin launch
              </span>
            </div>

            <div className="mb-4">
              <label
                className="block text-md font-medium mb-2"
                htmlFor="lnx-amount"
              >
                Enter how much LNX coins you have in the input below.
              </label>
              <label type="text" className="text-white">
                LNEX
              </label>
            </div>

            <div className="mb-4">
              <input
                type="text"
                className="w-full bg-black border border-gray-700 text-white text-4xl text-left p-4 border-[#848484] border-[0.3px]"
                placeholder="0.00"
                readOnly
              />
            </div>
            <label type="text" className="text-white mb-8">
              USDT Amount
            </label>
            <div className="mb-4 mt-4">
              <input
                type="text"
                className="w-full bg-black border-[#848484] border-[0.3px] text-[#34FCB4] text-4xl text-left p-4"
                placeholder="$0.00"
                readOnly
              />
            </div>

            <p className="text-md mb-4">
              Move the slider to see how much your LNX will be worth at
              different price targets!
            </p>
            <SliderComponent />

            <div className="flex justify-between mb-8">
              <div className="text-center">
                <p className="text-md">Presale batch 1</p>
                <p className="text-lg font-bold">$0.001</p>
              </div>
              <div className="text-center">
                <p className="text-md">Batch A1</p>
                <p className="text-lg font-bold">$0.0448</p>
              </div>
              <div className="text-center">
                <p className="text-md">Current Price</p>
                <p className="text-lg font-bold">$0.0122</p>
              </div>
              <div className="text-center">
                <p className="text-md">The Moon</p>
                <p className="text-lg font-bold">$10</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[750px] w-full flex justify-between mt-[55px]">
        <button className="relative neon-border neon-shadow neon-hover w-48 h-12 bg-black font-bold flex items-center justify-center transition-colors duration-300 ease-in-out">
          <h1 className="[font-family:'Archivo-Bold',Helvetica] font-bold text-sm lg:text-lg flex">
            BUY COINS
          </h1>
          <img
            className="ml-2 w-4 h-2"
            alt="Group"
            src="/assets/Vector-arrow.png"
          />
        </button>
        <button className="w-48 h-12 white-border white-shadow white-hover bg-black font-bold flex items-center justify-center transition-colors duration-300 ease-in-out">
          <h1 className="[font-family:'Archivo-Bold',Helvetica] font-bold text-sm lg:text-lg flex">
            HOW TO BUY
          </h1>
        </button>
      </div>
    </div>
  );
};

export default EarningsCalculator;
