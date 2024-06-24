"use client";

import React from 'react';

const EarningsCalculator = () => {
  return (
    <div className="bg-black text-white px-8 py-16 flex flex-col items-center">
      <div className="max-w-2xl text-center mb-8">
        <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-4">
          Take Control of <span className="text-[#34FCB4]">Your Earnings</span>
        </h1>
        <p className="text-md mb-4">
          Use our profitability calculator to see how much you could earn. It’s easy to use and gives you accurate estimates based on the latest data and trends.
        </p>
        <p className="text-md mb-4">
          Find out what your efforts might bring and plan your financial future with confidence.
        </p>
      </div>

      <div className="max-w-3xl w-full bg-[#1a1a1a] p-8 rounded-lg shadow-lg">
        <h2 className="text-lg font-bold mb-4">COIN AMOUNT CALCULATOR.</h2>
        <p className="text-md mb-8">Calculate your profits on coin launch</p>

        <div className="mb-4">
          <label className="block text-md font-medium mb-2" htmlFor="lnx-amount">
            Enter how much LNX coins you have in the input below.
          </label>
          <input
            type="text"
            id="lnx-amount"
            className="w-full bg-black border border-gray-700 text-white p-2 rounded-lg"
            placeholder="LNX"
          />
        </div>

        <div className="mb-4">
          <input
            type="text"
            className="w-full bg-black border border-gray-700 text-white text-4xl text-center p-4 rounded-lg"
            placeholder="0.00"
            readOnly
          />
        </div>

        <div className="mb-4">
          <input
            type="text"
            className="w-full bg-black border border-[#34FCB4] text-[#34FCB4] text-4xl text-center p-4 rounded-lg"
            placeholder="$0.00"
            readOnly
          />
        </div>

        <p className="text-md mb-4">Move the slider to see how much your LNX will be worth at different price targets!</p>
        <div className="flex items-center mb-4">
          <input type="range" className="w-full" />
          <img src="/assets/moon-icon.png" alt="Moon" className="ml-4 w-6 h-6" />
        </div>

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

        <div className="flex justify-center space-x-4">
          <button className="relative neon-border px-6 py-2 flex items-center text-white font-bold transition-colors duration-300 ease-in-out hover:bg-[#34fcb4] hover:text-black">
            <span className="absolute left-0 ml-[-12px] flex items-center justify-center w-5 h-5 bg-black border border-white rounded-full neon-circle">
              <span className="w-2 h-2 bg-[#34fcb4] rounded-full"></span>
            </span>
            <span className="ml-6">BUY COINS</span>
          </button>
          <button className="relative neon-border px-6 py-2 flex items-center text-white font-bold transition-colors duration-300 ease-in-out hover:bg-[#34fcb4] hover:text-black">
            <span className="absolute left-0 ml-[-12px] flex items-center justify-center w-5 h-5 bg-black border border-white rounded-full neon-circle">
              <span className="w-2 h-2 bg-[#34fcb4] rounded-full"></span>
            </span>
            <span className="ml-6">HOW TO BUY</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default EarningsCalculator;
