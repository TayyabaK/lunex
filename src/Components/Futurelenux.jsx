import React from "react";
import Image from "next/image";
import Presale from "./Presale";

const Futurelenux = () => {
  return (
    <div className="bg-black p-[50px] flex md:flex-row flex-col justify-center md:gap-[300px]">
      {/* <div className="w-[1810px] h-[1034px]">
        <img
          className="fixed w-[879px] h-[1034px] top-0 left-0 object-cover"
          alt="Element"
          src="/assets/Ellipse-shadow.png"
        />
      </div> */}
      <section className="max-w-[680px] w-full">
        <p className="max-w-[650px] w-full font-bold text-transparent text-[80px] leading-none [font-family:'Archivo-Bold',Helvetica] tracking-[0]">
  <span className="text-white">
    Step Into the future with 
  </span>
  <span className="text-[#34fcb4]"> Lunex Network</span>
</p>
        {/* <div className=" w-[1051px] top-[1427px] left-36 [font-family:'Archivo-Bold',Helvetica] font-bold text-white text-[120px] tracking-[0] leading-[102.0px]">
        What is Lunex?
      </div> */}
        <p className=" max-w-[700px] w-full mt-[50px] [font-family:'Archivo-Medium',Helvetica] font-medium text-[#ffffffe6] text-xl ">
          Corvus Is A Web3 Defi Crypto Exchange That Allows Users To Buy, Sell
          And Swap Cryptocurrency Instantly Via Our Non-custodial Crypto
          Application.
        </p>
        {/* presale button */}
        <div className="flex flex-row  mt-[55px] justify-between">
          {/* <div className=" w-[279px] h-16  border-2 border-solid border-[#34fcb4]">
          <div className=" w-[307px] h-16  border-2 border-solid border-[#34fcb4]" />{" "}
        </div> */}
          <div className=" max-w-[250px] w-full h-16  mt-[-18px]">
            {/* <div className=" [font-family:'Archivo-Bold',Helvetica] font-bold text-white text-lg  flex">
              JOIN PRESALE
            </div>
            <img
              className=" w-[25px] h-[10px] top-[822px] mt-[9px] left-[1208px]"
              alt="Group"
              src="/assets/Vector-arrow.png"
            /> */}
            <button>
              <img
                className="w-full max-w-[250px] h-[64pxpx] top-[822px] mt-[9px] left-[1208px]"
                alt="Group"
                src="/assets/Group-9213-presale.png"
              />{" "}
            </button>
          </div>
          {/* socials with presale */}
          <div className="flex flex-row gap-[35px]">
            {/* 1 */}
            <p className=" [font-family:'Archivo-Medium',Helvetica] font-medium text-transparent text-2xl tracking-[0] leading-[44.0px] whitespace-nowrap">
              <span className="text-[#34fcb4]">//</span>
              <span className="text-[#ffffffe6]"> Socials</span>
            </p>
            {/* 2 */}
            <img
              className=" max-w-[25px] w-full h-[25px] top-[822px] mt-[9px] left-[1208px]"
              alt="Group"
              src="/assets/VectorX-1.png"
            />
            {/* 3 */}
            <img
              className=" max-w-[30px] w-full h-[25px] top-[822px] mt-[9px] left-[1208px]"
              alt="Group"
              src="/assets/Vectordiscord-5.png"
            />
            {/* 4 */}
            <img
              className=" max-w-[25px] w-full h-[25px] top-[822px] mt-[9px] left-[1208px]"
              alt="Group"
              src="/assets/Vectorplane-3.png"
            />
            {/*  */}
          </div>
        </div>
        {/* ends presale */}
      </section>

      {/*  start */}
      <section>
        <div className="max-w-[510px] w-full h-fit ">
          <div className=" max-w-[510px] w-full h-fit border-2 border-solid border-[#34fcb4]">
            <div className="max-w-[510px] w-full h-fit border-[#34fcb4] border-[1px]">
              <div className="">
                <Presale />
              </div>
            </div>
          </div>
        </div>
        {/* end */}
      </section>
    </div>
  );
};

export default Futurelenux;