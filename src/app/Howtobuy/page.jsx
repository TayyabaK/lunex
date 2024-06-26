import React from 'react';

const Howtobuy = () => {
  return (
    <div className="bg-black text-white px-32 py-16 flex flex-col lg:flex-row justify-between items-center">
      <div className="max-w-2xl mb-8 lg:mb-0">
        <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-4">
          The Lunex Token
        </h1>
        <p className="text-4xl lg:text-5xl font-bold leading-tight text-[#34FCB4] mb-4">
          purchase was designed
        </p>
        <p className="text-4xl lg:text-5xl font-bold leading-tight mb-4">
          to be as easy as possible.
        </p>
        <p className="text-md text-[#34FCB4] mb-4">
          Please Don’t Hesitate To Contact Us On Telegram If You Are Experiencing Any Issues.
        </p>
        <p className="text-md mb-4">
          Lunex Token Can Be Purchased Using Any Cryptocurrencies: Ethereum, USDT, And BNB.
        </p>
        <p className="text-md mb-4">
          Simply Press The Button Below And Follow The Instructions On Screen To Purchase Your Lunex Tokens.
        </p>
        <div className="flex space-x-4">
          <button className="relative neon-border px-6 py-2 flex items-center text-white font-bold transition-colors duration-300 ease-in-out hover:bg-[#34fcb4] hover:text-black">
            <span className="absolute left-0 ml-[-12px] flex items-center justify-center w-5 h-5 bg-black border border-white rounded-full neon-circle">
              <span className="w-2 h-2 bg-[#34fcb4] rounded-full"></span>
            </span>
            <span className="ml-6">JOIN PRESALE →</span>
          </button>
          <button className="relative neon-border px-6 py-2 flex items-center text-white font-bold transition-colors duration-300 ease-in-out hover:bg-[#34fcb4] hover:text-black">
            <span className="absolute left-0 ml-[-12px] flex items-center justify-center w-5 h-5 bg-black border border-white rounded-full neon-circle">
              <span className="w-2 h-2 bg-[#34fcb4] rounded-full"></span>
            </span>
            <span className="ml-6">WHITEPAPER</span>
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
