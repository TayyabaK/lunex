import React from "react";

const WhatIsLunex = () => {
  return (
    <div className="bg-black p-[50px] flex md:flex-row flex-col">
      <section className="md:pr-[150px] pr-[100px]">
        <div className="max-w-[700px] w-full [font-family:'Archivo-Bold',Helvetica] font-bold text-white text-[80px] ">
          What is Lunex?
        </div>
        <p className="max-w-[700px] w-full [font-family:'Archivo-Medium',Helvetica] font-medium text-[#ffffffe6] text-lg mt-4">
          Corvus Is A Web3 Defi Crypto Exchange That Allows Users To Buy, Sell
          And Swap Cryptocurrency Instantly Via Our Non-custodial Crypto
          Application.
        </p>

        <div className="max-w-[700px] w-full flex flex-row gap-[20px] mt-[55px]">
          <button className="max-w-[250px] w-full py-[12px] border-solid gap-[10px] border-[#34fcb4] border-[1px] justify-center flex flex-row">
            <h1 className="[font-family:'Archivo-Bold',Helvetica] font-bold text-white text-lg flex">
              JOIN PRESALE
            </h1>
            <img
              className="w-full max-w-[25px] h-[10px] mt-[9px]"
              alt="Group"
              src="/assets/Vector-arrow.png"
            />
          </button>
          <button className="max-w-[250px] w-full py-[12px] border-solid border-white border-[1px] justify-center flex flex-row">
            <h1 className="[font-family:'Archivo-Bold',Helvetica] font-bold text-white text-lg flex">
              WHITEPAPER
            </h1>
          </button>
        </div>
        <div className="flex flex-row justify-between md:mt-[55px] mt-[20px] h-[30px] max-w-[600px] w-full">
          <p className="[font-family:'Archivo-Medium',Helvetica] font-medium text-transparent text-2xl whitespace-nowrap">
            <span className="text-[#34fcb4]">//</span>
            <span className="text-[#ffffffe6]"> Cross-Chain Processing</span>
          </p>
          <img src="/assets/pentagon-eth.png" alt="social-eth" className="h-8"/>
          <img src="/assets/bnb.svg" alt="social-bnb" className="h-8"/>
          <img src="/assets/blue-pentagon.svg" alt="social-blue" className="h-8"/>
          <img src="/assets/red-mount.svg" alt="social-red" className="h-8"/>
          <img src="/assets/solana.svg" alt="social-solana" className="h-8"/>
        </div>
      </section>

      <section className="md:mt-0 mt-8 md:ml-2">
        <img src="/assets/whitepaper-mob.svg" alt="mob" className="w-full"/>
      </section>
    </div>
  );
};

export default WhatIsLunex;
