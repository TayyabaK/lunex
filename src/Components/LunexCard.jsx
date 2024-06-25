import React from "react";

const LunexCard = () => {
  return (
    <div className="relative bg-black flex md:flex-row flex-col justify-center py-[72px] gap-12 border border-browngrey border-[0.25px]">
      <img
        src="assets/Lunex-thin-border.svg"
        className="absolute top-[12px] left-[-500px]  w-[75%] h-[100%] z-10"
      />

      <div className="bg-black text-white flex justify-center py-16 pl-40">
        <div className="max-w-[400px] w-full flex flex-col items-start">
          <h1 className="text-[60px] font-bold mb-4">Lunex Card</h1>
          <p className="text-sm mb-6">
            Get Wealthier And Achieve Your Investment Goals With Our Dynamic
            Portfolio Tracker All From One App
          </p>
          <button className="relative neon-border neon-shadow neon-hover px-8 py-3 bg-black font-bold flex items-center transition-colors duration-300 ease-in-out mb-6">
            <span className="[font-family:'Archivo-Bold',Helvetica] font-bold text-sm lg:text-lg">
              BUY $LNEX NOW
            </span>
            <img
              className="ml-2 w-4 h-2"
              alt="Arrow"
              src="/assets/Vector-arrow.png"
            />
          </button>
          <div className="flex space-x-4">
            <img src="/assets/logos_visa.svg" alt="Visa" className="h-8 pr-2" />
            <img
              src="/assets/logo-mastercard.svg"
              alt="Mastercard"
              className="h-8"
            />
          </div>
        </div>
      </div>

      <div className="max-w-[1250px] w-1/3 bg-cover bg-center ">
        <img
          src="/assets/lunex-card.svg"
          alt="Lunex Card"
          height="639px"
          width="900px"
        />
      </div>
    </div>
  );
};

export default LunexCard;
