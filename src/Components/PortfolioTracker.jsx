import React from "react";

const PortfolioTracker = () => {
  return (
    <div
      className="bg-black w-full h-full flex justify-center pt-[70px] relative border-[0.25px] border-browngrey "
      style={{
        background: "radial-gradient(circle 50vh at 90% 20%, #273b1d, black)",
      }}
    >
      <div
        className=" max-w-[1300px] bg-cover pb-[90px] pt-[32px] bg-center w-full p-[7px] flex justify-between lg:flex-row flex-col  "
        style={{
          backgroundImage: "url('/assets/portfoliotracker.svg')",
          backgroundSize: "100%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="bg-transparent text-white flex flex-column justify-end py-16 px-32">
          <div className="max-w-[550px] w-full px-6">
            <h1 className="font-bold mb-4 lg:text-[60px] xl:text-[60px] text-[60px]">
              Portfolio <span className="text-[#34fcb4]">Tracker</span>
            </h1>
            <p className="text-sm text-bold mb-6">
              Get Wealthier And Achieve Your Investment Goals With Our Dynamic
              Portfolio Tracker All From One App
            </p>
            <ol className="text-left  text-[12px] list-decimal list-inside space-y-2 mb-6">
              <li>
                Track Your Wallets, Exchange Accounts And Other Assets Such As
                Stocks.
              </li>
              <li>
                Analyze Your Performance And Improve Your Results By Staying Up
                To Date With Market Conditions With Easily Digestible Charts And
                Statistics.
              </li>
              <li>
                Make Informed Decisions, Get Your Deals Done Quickly And Make
                Money.
              </li>
            </ol>
            <button className="relative neon-border neon-shadow neon-hover px-8 py-3 bg-black font-bold flex items-center justify-center transition-colors duration-300 ease-in-out">
              <span className="[font-family:'Archivo-Bold',Helvetica] font-bold text-sm lg:text-lg">
                JOIN PRESALE
              </span>
              <img
                className="ml-2 w-4 h-2"
                alt="Arrow"
                src="/assets/Vector-arrow.png"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioTracker;
