import React from "react";
import Image from "next/image";
import PreSale from "./PreSale";

const Futurelenux = () => {
  return (
    <div className="bg-black p-[50px] flex md:flex-row flex-col justify-center md:gap-[300px]">
   
      <section className="max-w-[680px] w-full">
        <p className="max-w-[650px] w-full font-bold text-transparent text-[80px] leading-none [font-family:'Archivo-Bold',Helvetica] tracking-[0]">
          <span className="text-white">Step Into the future with</span>
          <span className="text-[#34fcb4]"> Lunex Network</span>
        </p>
     
        <p className=" max-w-[700px] w-full mt-[50px] [font-family:'Archivo-Medium',Helvetica] font-medium text-[#ffffffe6] text-xl ">
          Corvus Is A Web3 Defi Crypto Exchange That Allows Users To Buy, Sell
          And Swap Cryptocurrency Instantly Via Our Non-custodial Crypto
          Application.
        </p>
        <div className="flex flex-row  mt-[55px] justify-between">
         
          <div className=" max-w-[250px] w-full h-16  mt-[-18px]">
        
            <button>
              <img
                className="w-full max-w-[250px] h-[64pxpx] top-[822px] mt-[9px] left-[1208px]"
                alt="Group"
                src="/assets/Group-9213-presale.png"
              />{" "}
            </button>
          </div>
          <div className="flex flex-row gap-[35px]">
          
            <p className=" [font-family:'Archivo-Medium',Helvetica] font-medium text-transparent text-2xl tracking-[0] leading-[44.0px] whitespace-nowrap">
              <span className="text-[#34fcb4]"></span>
              <span className="text-[#ffffffe6]"> Socials</span>
            </p>
          
            <img
              className=" max-w-[25px] w-full h-[25px] top-[822px] mt-[9px] left-[1208px]"
              alt="Group"
              src="/assets/VectorX-1.png"
            />
            <img
              className=" max-w-[30px] w-full h-[25px] top-[822px] mt-[9px] left-[1208px]"
              alt="Group"
              src="/assets/Vectordiscord-5.png"
            />
            <img
              className=" max-w-[25px] w-full h-[25px] top-[822px] mt-[9px] left-[1208px]"
              alt="Group"
              src="/assets/Vectorplane-3.png"
            />
          </div>
        </div>
      </section>

      <section>
        <div className="max-w-[510px] w-full h-fit ">
          <div className=" max-w-[510px] w-full h-fit border-2 border-solid border-[#34fcb4]">
            <div className="max-w-[510px] w-full h-fit border-[#34fcb4] border-[1px]">
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
