import React from "react";

const RealUtility = () => {
  return (
    <div className="bg-black text-white py-16 px-32">
      <div className="text-center mb-12">
        <h2 className="text-[50px] font-bold mb-2 text-[#34fcb4]">Real Utility</h2>
        <h1 className="text-4xl font-bold mb-4">The $LNEX Token</h1>
        <p className="text-lg mb-6">
          Corvus: A Web3 DeFi Crypto Exchange That Allows Users To Buy, Sell And
          Swap Cryptocurrency Instantly Via Our Non-Custodial Crypto
          Application.
        </p>
        <button className="relative neon-border neon-shadow neon-hover px-8 py-3 bg-black font-bold flex items-center justify-center transition-colors duration-300 ease-in-out mx-auto mb-8">
          <span className="[font-family:'Archivo-Bold',Helvetica] font-bold text-sm lg:text-lg">
            BUY $LNEX NOW
          </span>
          <img
            className="ml-2 w-4 h-2"
            alt="Arrow"
            src="/assets/Vector-arrow.png"
          />
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="p-6 border border-gray-700 text-left ">
          <div className="flex flex-row pb-4">
            <img src="/assets/cross-icon.svg" />
            <h3 className="text-lg font-bold text-[#34fcb4] px-2">
              Early Access
            </h3>
          </div>

          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </div>
        <div className="p-6 border border-gray-700 text-left ">
          <div className="flex flex-row pb-4">
            <img src="/assets/cross-icon.svg" />
            <h3 className="text-lg font-bold text-[#34fcb4] px-2">
              Disocunted Tokens
            </h3>
          </div>

          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </div>
        <div className="p-6 border border-gray-700 text-left ">
          <div className="flex flex-row pb-4">
            <img src="/assets/cross-icon.svg" />
            <h3 className="text-lg font-bold text-[#34fcb4] px-2">
              Priority Support
            </h3>
          </div>

          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </div>
        <div className="p-6 border border-gray-700 text-left">
          <div className="flex flex-row pb-4">
            <img src="/assets/cross-icon.svg" />
            <h3 className="text-lg font-bold text-[#34fcb4] px-2">
              Insider Tokens
            </h3>
          </div>

          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RealUtility;
