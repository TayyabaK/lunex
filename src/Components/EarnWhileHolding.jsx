import React from "react";

const EarnWhileHolding = () => {
  return (
    <div
     className="relative bg-black flex justify-center mt-[70px] mb-[70px] border border-browngrey border-0.25"
     style={{
        background:
          "radial-gradient(circle 50vh at 10% 5%, #273b1d, transparent)",
      }}
     >
      <div
        className="max-w-[1250px] w-full bg-cover bg-center pt-[85px] pb-[85px] flex lg:flex-row flex-col justify-center self-center md:justify-between min-h-[600px]"
        style={{
          backgroundImage: "url('/assets/earnwhileholding.svg')",
        }}
      >
        <div className="text-white p-8 px-56 flex flex-col items-start space-y-8 ">
          <h1 className="text-[60px] font-bold w-[270px] text-white font-bold [font-family:'Archivo-Bold',Helvetica] lg:text-[50px]">
            Earn While Holding.
          </h1>
          <p className="text-white text-sm w-[350px]">
            <span className="text-[#34FCB4]">
                 {String.fromCharCode(47, 47)} 
            </span>
           Unlock Passive Earnings By
            Strategically Engaging In The Practice Of Holding Assets Over Time.
          </p>
          <button className="my-[70px] relative neon-border neon-shadow neon-hover px-16 py-2 bg-black font-bold flex items-center transition-colors duration-300 ease-in-out">
            <span className="[font-family:'Archivo-Bold',Helvetica] font-bold text-sm lg:text-lg">
              EARN
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
  );
};

export default EarnWhileHolding;
