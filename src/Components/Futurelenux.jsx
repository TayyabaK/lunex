import React from "react";
import Image from "next/image";
import PreSale from "./PreSale";

const Futurelenux = () => {
  return (
    <div
      style={{
        background:
          "radial-gradient(circle 50vh at 10% 5%, #273b1d, transparent), radial-gradient(circle 50vh at 90% 5%, #273b1d, transparent), black",
      }}
      className="md:p-[100px] p-[70px] flex md:flex-row flex-col justify-center xl:gap-[90px] lg:gap-[50px] gap-[50px] "
    >
      <div>
        <section className="max-w-[700px]  w-full ">
          <div className="max-w-[700px] w-full font-bold text-transparent lg:text-[60px] xl:text-[75px] text-[56px] leading-none [font-family:'Archivo-Bold',Helvetica] tracking-[0] display-flex flex-wrap-nowrap">
            <span className="text-white display-inline my-[-20px]">
              Step Into the{" "}
            </span>
            <span className="text-white display-inline my-[-20px]">
              future with{" "}
            </span>
            <span className="text-[#34fcb4] display-inline my-[-20px]">
              {" "}
              Lunex Network
            </span>
          </div>

          <p className=" max-w-[700px] w-full mt-[80px]  [font-family:'Archivo-Medium',Helvetica] font-medium text-[#ffffffe6] text-lg lg:text-lg ">
            Corvus Is A Web3 Defi Crypto Exchange That Allows Users To Buy, Sell
            And Swap Cryptocurrency Instantly Via Our Non-custodial Crypto
            Application.
          </p>
          <div className="flex flex-col xl:gap-0 gap-[20px] justify-center sm:flex-row max-w-[680px] w-full mt-[90px] xl:justify-between">
            <div className=" max-w-[250px] w-full h-16  mt-[-18px]">
              <button class="relative neon-border neon-shadow neon-hover px-6 py-3 bg-black text-white font-bold flex items-center transition-colors duration-300 ease-in-out">
                <h1 className="[font-family:'Archivo-Bold',Helvetica] font-bold text-sm lg:text-lg flex">
                  JOIN PRESALE
                </h1>
                <img
                  className="ml-2 w-4 h-2"
                  alt="Group"
                  src="/assets/Vector-arrow.png"
                />
              </button>
            </div>
            <div className="flex flex-row gap-[35px]">
              <p className=" [font-family:'Archivo-Medium',Helvetica] font-medium text-transparent text-lg  whitespace-nowrap">
                <span className="text-[#34fcb4]">
                  {String.fromCharCode(47, 47)}
                </span>
                <span className="text-[#ffffffe6]"> Socials</span>
              </p>

              <img
                className=" max-w-[20px] w-full h-[20px]"
                alt="Group"
                src="/assets/VectorX-1.png"
              />
              <img
                className=" max-w-[25px] w-full h-[20px] "
                alt="Group"
                src="/assets/Vectordiscord-5.png"
              />
              <img
                className=" max-w-[20px] w-full h-[20px] "
                alt="Group"
                src="/assets/Vectorplane-3.png"
              />
            </div>
          </div>
        </section>
      </div>

      <section>
        <div className="max-w-[800px] w-full h-fit ">
          <div className=" max-w-[800px] w-full h-fit border-2 border-solid border-[#34fcb4]">
            <div className="max-w-[800px] w-full h-fit border-[#34fcb4] border-[1px]">
              <div className="">
                <PreSale />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Futurelenux;
