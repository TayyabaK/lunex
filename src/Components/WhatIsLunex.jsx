import React from "react";

const WhatIsLunex = () => {
  return (
    <div className="md:p-[50px] p-[70px] flex md:flex-row flex-col justify-center xl:gap-[90px] lg:gap-[50px] gap-[50px] xl2:gap-[150px] border-b-[0.25px] border-browngrey ">
      <div>
        <div className="max-w-[750px] w-full [font-family:'Archivo-Bold',Helvetica] font-bold text-white lg:text-[60px] xl:text-[70px] text-[60px]">
          What is Lunex?
        </div>
        <p className="max-w-[750px] w-full [font-family:'Archivo-Medium',Helvetica] font-medium text-[#ffffffe6] text-[16px] mt-4">
          Corvus Is A Web3 Defi Crypto Exchange That Allows Users To Buy, Sell
          And Swap Cryptocurrency Instantly Via Our Non-custodial Crypto
          Application.
        </p>

        <div className="max-w-[750px] w-full flex flex-row gap-[20px] mt-[55px]">
          <div class="flex space-x-4">
            <button class="relative neon-border neon-shadow neon-hover w-48 h-12 bg-black font-bold flex items-center justify-center transition-colors duration-300 ease-in-out">
              <h1 class="[font-family:'Archivo-Bold',Helvetica] font-bold text-sm lg:text-lg flex">
                JOIN PRESALE
              </h1>
              <img
                className="ml-2 w-4 h-2"
                alt="Group"
                src="/assets/Vector-arrow.png"
              />
            </button>
            <button class="w-48 h-12 white-border white-shadow white-hover bg-black font-bold flex items-center justify-center transition-colors duration-300 ease-in-out">
              <h1 class="[font-family:'Archivo-Bold',Helvetica] font-bold text-sm lg:text-lg flex">
                WHITEPAPER
              </h1>
            </button>
          </div>
        </div>
        <div className="flex flex-row justify-between md:mt-[55px] mt-[20px] h-[30px] max-w-[600px] w-full">
          <p className="[font-family:'Archivo-Medium',Helvetica] font-medium text-transparent text-xl whitespace-nowrap">
            <span className="text-[#34fcb4]">
              {String.fromCharCode(47, 47)}
            </span>
            <span className="text-[#ffffffe6]"> Cross-Chain Processing</span>
          </p>
          <img
            src="/assets/pentagon-eth.png"
            alt="social-eth"
            className="h-6"
          />
          <img src="/assets/bnb.svg" alt="social-bnb" className="h-6" />
          <img
            src="/assets/blue-pentagon.svg"
            alt="social-blue"
            className="h-6"
          />
          <img src="/assets/red-mount.svg" alt="social-red" className="h-6" />
          <img src="/assets/solana.svg" alt="social-solana" className="h-6" />
        </div>
      </div>

      <div className="relative md:mt-0 mt-8 lg:mr-[100px]">
        <img
          src="assets/Lunex-thin-border.svg"
          className="absolute top-[-150px] left-[150px] w-full h-full z-10"
        />
        <img
          src="/assets/whitepaper-mob.svg"
          alt="mob"
          className="w-full h-[420px] relative z-20"
        />
        <img
          src="assets/Lunex-thin-border.svg"
          className="absolute top-[150px] left-[-150px] w-full h-full z-10"
        />
      </div>
    </div>
  );
};

export default WhatIsLunex;
