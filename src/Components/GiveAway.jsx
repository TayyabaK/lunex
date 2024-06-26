import React from "react";

const GiveAway = () => {
  return (
    <div className="relative my-12 bg-black w-full h-full flex justify-center border-[0.25px] border-browngrey ">
      <img
        className="w-full h-full bg-cover bg-center flex justify-between lg:flex-row flex-col  "
        src="/assets/giveaway.svg"
      />
      <div className="absolute left-[630px] max-w-[500px] bg-transparent text-white px-8 flex flex-col items-start">
        <h1 className="font-bold text-[78px] leading-none mb-4">
          Join The Giveaway
        </h1>
        <p className="text-lg mb-4">
          <span className="text-[#34fcb4] font-bold">
            {String.fromCharCode(47, 47)} The Giveaway Amount:{" "}
          </span>
          <span className="text-[#34fcb4] font-bold">$500,000</span>
        </p>
        <p className="text-sm mb-4 max-w-[600px]">
          Corvus is a Web3 DeFi Crypto Exchange that allows users to buy, sell
          and swap cryptocurrency instantly via our non-custodial crypto
          application. Corvus is a Web3 DeFi Crypto Exchange that allows users
          to buy, sell and swap cryptocurrency instantly via our non-custodial
          crypto application.
        </p>
        <button className="relative neon-border neon-shadow neon-hover px-8 py-3 bg-black font-bold flex items-center transition-colors duration-300 ease-in-out mt-8">
          <span className="[font-family:'Archivo-Bold',Helvetica] font-bold text-sm lg:text-lg">
            JOIN THE GIVEAWAY
          </span>
          <img
            className="ml-2 w-4 h-2"
            alt="Arrow"
            src="/assets/Vector-arrow.png"
          />
        </button>
      </div>
    </div>
  );
};

export default GiveAway;
