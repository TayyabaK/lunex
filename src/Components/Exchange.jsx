import React from "react";

const Exchange = () => {
  return (
    <div
      className="bg-black flex justify-center pt-[70px]"
      style={{
        background: "radial-gradient(circle 50vh at 0% 20%, #273b1d, black)",
      }}
    >
      <div className=" max-w-[1300px] w-full p-[20px] flex lg:flex-row flex-col justify-center self-center md:justify-between ">
        <div className="p-[0px] max-w-[250px] w-full">
          <div className="relative w-full">
            {" "}
            <img
              src="/assets/mob-border.svg"
              alt="mob-border"
              className="w-full"
            />
            <img
              src="/assets/mob-screen1.svg"
              alt="mob-border"
              className="absolute inset-0 w-full h-full object-fill p-[15px]"
            />
          </div>
        </div>

        <div className="md:mt-[50px] mt-8 pr-[60px] ">
          <div className="flex flex-row  md:mt-[55px]  h-[30px] max-w-[600px] w-full">
            <p className="[font-family:'Archivo-Medium',Helvetica] font-medium text-transparent text-xl whitespace-nowrap">
              <span className="text-[#34fcb4]">
                {String.fromCharCode(47, 47)}
              </span>
              <span className="text-[#ffffffe6]">
                {" "}
                Bringing Web3 to the masses with unlimited potential
              </span>
            </p>
          </div>
          <div className="max-w-[620px] w-full [font-family:'Archivo-Bold',Helvetica] font-bold text-white lg:text-[60px] xl:text-[60px] text-[60px]">
            Exchange And Swap
          </div>
          <p className="max-w-[620px] w-full [font-family:'Archivo-Medium',Helvetica] font-medium text-[#ffffffe6] text-[14px] mt-4">
            A limitless multi chain decentralized Exchange. over 50,000+
            currency pairs are supported. Simple, quick, no connect wallet,
            custody free
          </p>

          <div className="max-w-[620px] w-full flex flex-row gap-[20px] mt-[55px]">
            <button class="relative neon-border neon-shadow neon-hover px-6 py-3 bg-black font-bold flex items-center transition-colors duration-300 ease-in-out">
              <h1 className="[font-family:'Archivo-Bold',Helvetica] font-bold text-sm lg:text-lg flex">
                BUY PRESALE
              </h1>
              <img
                className="ml-2 w-4 h-2"
                alt="Group"
                src="/assets/Vector-arrow.png"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exchange;