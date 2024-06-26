import React from "react";

const Howtobuy = () => {
  return (
    <div className="bg-black text-white px-24 py-16 flex flex-col lg:flex-row justify-between items-center">
      <div className="max-w-2xl mb-8 lg:mb-0">
        <h1 className="text-4xl lg:text-5xl text-[#34FCB4] font-bold leading-tight mb-4">
          The Lunex Token
        </h1>
        <p className="text-4xl lg:text-5xl font-bold leading-tight text-white mb-4">
          purchase was designed
        </p>
        <p className="text-4xl lg:text-5xl font-bold leading-tight mb-4">
          to be as easy as possible.
        </p>
        <p className="text-md text-[#34FCB4] mb-4">
          Please Don’t Hesitate To Contact Us On Telegram If You Are
          Experiencing Any Issues.
        </p>
        <p className="text-md mb-4">
          Lunex Token Can Be Purchased Using Any Cryptocurrencies: Ethereum,
          USDT, And BNB.
        </p>
        <p className="text-md mb-4">
          Simply Press The Button Below And Follow The Instructions On Screen To
          Purchase Your Lunex Tokens.
        </p>
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
      <div className="max-w-md">
        <img src="/assets/oracle.png" alt="How to Buy" />
      </div>
    </div>
  );
};

export default Howtobuy;
