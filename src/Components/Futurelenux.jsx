import React from "react";
import Image from "next/image";

const Futurelenux = () => {
  return (
    <div className="bg-black p-[50px] flex flex-row justify-between ">
      {/* <div className="w-[1810px] h-[1034px]">
        <img
          className="fixed w-[879px] h-[1034px] top-0 left-0 object-cover"
          alt="Element"
          src="/assets/Ellipse-shadow.png"
        />
      </div> */}
      <section className="w-[680px]">
        <p className=" w-[700px]  [font-family:'Archivo-Bold',Helvetica] font-bold text-transparent text-[80px] tracking-[0] leading-[102.0px]">
          <span className="text-white">
            Step Into the <br /> future with
            <br />
          </span>
          <span className="text-[#34fcb4]">Lunex Network</span>
        </p>
        {/* <div className=" w-[1051px] top-[1427px] left-36 [font-family:'Archivo-Bold',Helvetica] font-bold text-white text-[120px] tracking-[0] leading-[102.0px]">
        What is Lunex?
      </div> */}
        <p className=" w-[700px] mt-[50px] [font-family:'Archivo-Medium',Helvetica] font-medium text-[#ffffffe6] text-xl ">
          Corvus Is A Web3 Defi Crypto Exchange That Allows Users To Buy, Sell
          And Swap Cryptocurrency Instantly Via Our Non-custodial Crypto
          Application.
        </p>
        {/* presale button */}
        <div className="flex flex-row  mt-[55px] justify-between">
          {/* <div className=" w-[279px] h-16  border-2 border-solid border-[#34fcb4]">
          <div className=" w-[307px] h-16  border-2 border-solid border-[#34fcb4]" />{" "}
        </div> */}
          <div className=" w-[250px] h-16  mt-[-18px]">
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
                className=" w-[250px] h-[64pxpx] top-[822px] mt-[9px] left-[1208px]"
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
              className=" w-[25px] h-[25px] top-[822px] mt-[9px] left-[1208px]"
              alt="Group"
              src="/assets/VectorX-1.png"
            />
            {/* 3 */}
            <img
              className=" w-[30px] h-[25px] top-[822px] mt-[9px] left-[1208px]"
              alt="Group"
              src="/assets/Vectordiscord-5.png"
            />
            {/* 4 */}
            <img
              className=" w-[25px] h-[25px] top-[822px] mt-[9px] left-[1208px]"
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
        <div className="w-[510px] h-[619px] ">
          <div className=" w-[510px] h-[619px] border-2 border-solid border-[#34fcb4]">
            <div className="w-[510px] h-[621px] border-[#34fcb4] border-[1px]">
              <div className="p-[20px]">
                {/* 1st */}
                <div className="flex flex-row justify-between ">
                  <div className="flex items-center mt-[20px]">
                    <div className="flex items-center justify-center bg-cover bg-no-repeat">
                      <Image
                        src="/assets/logo.png"
                        alt="Ellipse"
                        width={50}
                        height={50}
                        className="w-11 h-21"
                      />
                    </div>
                    <div className="font-bold text-white text-lg leading-normal ml-2">
                      Lunex
                    </div>
                  </div>
                  <div className="flex flex-row gap-[10px] mt-[30px] ">
                    <div className="[font-family:'Archivo-Regular',Helvetica] font-normal text-white text-base tracking-[0] leading-[22.9px] whitespace-nowrap">
                      Presale Stage
                    </div>
                    <div className=" [font-family:'Archivo-Bold',Helvetica] font-bold text-[#34fcb4] text-[23.3px] text-center  tracking-[0] leading-[normal]">
                      7
                    </div>{" "}
                  </div>
                </div>
                {/* 2nd */}
                <div className="flex flex-row justify-between mt-[15px]">
                  <div className="flex flex-row">
                    {" "}
                    <div className=" [font-family:'Archivo-Regular',Helvetica] mr-[5px] font-normal text-white text-base tracking-[0] leading-[22.9px] whitespace-nowrap">
                      1 Lnx
                    </div>
                    <div className=" [font-family:'Archivo-Bold',Helvetica] font-bold text-[#34fcb4] text-lg tracking-[0] leading-[25.7px] whitespace-nowrap">
                      = $0.040
                    </div>{" "}
                  </div>

                  <div className="flex flex-row">
                    {" "}
                    <div className=" [font-family:'Archivo-Regular',Helvetica] mr-[5px] font-normal text-white text-base tracking-[0] leading-[22.9px] whitespace-nowrap">
                      NEXT STAGE PRICE
                    </div>
                    <div className="[font-family:'Archivo-Bold',Helvetica] font-bold text-[#34fcb4] text-lg leading-[25.7px] whitespace-nowrap  tracking-[0]">
                      = $0.058
                    </div>{" "}
                  </div>
                </div>
                {/* 3rd */}
                <div className=" w-[468px] h-[19px] mt-[15px] rounded border border-solid border-[#2d2c2d]">
                  <div
                    className="w-[329px] h-[18px] 
          bg-[#34fcb4] rounded backdrop-blur-[28.7px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(28.7px)_brightness(100%)]"
                  >
                    <div className="[font-family:'Archivo-Bold',Helvetica] font-extrabold text-[#14011c] text-[8px] pt-[3px] pl-[8px] whitespace-nowrap">
                      74.5%
                    </div>
                  </div>
                </div>
                {/* 4th */}
                <div
                  className=" w-[468px] h-[34px] rounded border flex flex-row border-solid border-white mt-[15px] justify-between px-[10px]
          backdrop-blur-[28.7px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(28.7px)_brightness(100%)] opacity-90"
                >
                  <div className=" [font-family:'Archivo-Regular',Helvetica] font-normal text-white text-xs mt-[8px]  whitespace-nowrap">
                    Usdt Raised:
                  </div>
                  <div className=" [font-family:'Archivo-Regular',Helvetica] font-normal text-white text-lg mb-[8px] whitespace-nowrap">
                    $17,200,000
                  </div>
                </div>
                {/* 5th */}
                <div
                  className=" w-[468px] h-[34px] rounded border flex flex-row border-solid border-white mt-[15px] justify-between px-[10px]
          backdrop-blur-[28.7px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(28.7px)_brightness(100%)] opacity-90"
                >
                  <div className=" [font-family:'Archivo-Regular',Helvetica] font-normal text-white text-xs mt-[8px]  whitespace-nowrap">
                    Token Sold:
                  </div>
                  <div className=" [font-family:'Archivo-Regular',Helvetica] font-normal text-white text-lg mb-[8px] whitespace-nowrap">
                    265,000,000
                  </div>
                </div>
                {/* 6th */}
                <div className="flex flex-row justify-between mt-[15px]">
                  <div
                    className=" w-[150px] h-[34px] flex flex-row text-center justify-center pt-[8px] gap-[5px]
           bg-[#34fcb4] rounded backdrop-blur-[28.7px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(28.7px)_brightness(100%)]"
                  >
                    <img
                      className=" w-[9px] h-[15px]"
                      alt="Group"
                      src="/assets/Groupassets.png"
                    />
                    <div className="[font-family:'Archivo-Regular',Helvetica] font-normal   text-black text-xs whitespace-nowrap">
                      ETH
                    </div>
                  </div>
                  <div
                    className=" w-[150px] h-[34px] flex flex-row text-center justify-center pt-[8px] gap-[5px]
                 bg-white rounded backdrop-blur-[28.7px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(28.7px)_brightness(100%)]"
                  >
                    <img
                      className=" w-3.5 h-3.5 "
                      alt="Cryptocurrency usdt"
                      src="/assets/cryptocurrency_usdt.png"
                    />
                    <div className="[font-family:'Archivo-Regular',Helvetica] font-normal  text-[#9e9e9e] text-xs whitespace-nowrap">
                      USDT
                    </div>
                  </div>
                  <div
                    className=" w-[150px] h-[34px]  flex flex-row text-center justify-center pt-[8px] gap-[5px]
                 bg-white rounded backdrop-blur-[28.7px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(28.7px)_brightness(100%)]"
                  >
                    <img
                      className=" w-3.5 h-3.5 "
                      alt="Cryptocurrency bnb"
                      src="/assets/cryptocurrency_bnb_sm.png"
                    />
                    <div className="[font-family:'Archivo-Regular',Helvetica] font-normal text-[#9e9e9e] text-xs whitespace-nowrap">
                      BNB
                    </div>
                  </div>
                </div>
                {/* 7th */}
                <div className="mt-[15px]">
                  <p className="[font-family:'Archivo-Regular',Helvetica] font-normal text-white text-xs tracking-[0] leading-[17.1px] whitespace-nowrap">
                    <span className="[font-family:'Archivo-Regular',Helvetica] font-normal text-white text-xs tracking-[0] leading-[17.1px]">
                      Amount of{" "}
                    </span>
                    <span className="[font-family:'Archivo-Bold',Helvetica] font-bold">
                      ETH
                    </span>
                    <span className="[font-family:'Archivo-Regular',Helvetica] font-normal text-white text-xs tracking-[0] leading-[17.1px]">
                      {" "}
                      You Pay
                    </span>
                  </p>{" "}
                </div>
                {/* 8th */}
                <div
                  className=" w-[468px] h-[46px] bg-white  mt-[15px] pl-[15px] pr-[15px] flex flex-row justify-between
          rounded backdrop-blur-[28.7px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(28.7px)_brightness(100%)]"
                >
                  <div className="[font-family:'Archivo-Regular',Helvetica] pt-[15px] font-normal text-[#9e9e9e] text-xs  whitespace-nowrap">
                    Enter Amount
                  </div>
                  <div className="flex flex-row  gap-[15px] ">
                    <button className=" w-[51px] h-[31px] mt-[8px] bg-[#34fcb4] rounded">
                      <div className=" [font-family:'Archivo-Bold',Helvetica] font-bold text-black text-xs text-center mt-[3px] whitespace-nowrap">
                        Max
                      </div>
                    </button>
                    <img
                      className=" w-5 h-5 mt-[13px]"
                      alt="Cryptocurrency color"
                      src="/assets/cryptocurrency-eth-blue.png"
                    />
                  </div>
                </div>
                {/* 9th */}
                <div className="mt-[15px]">
                  <p className=" top-[648px] left-[1196px] [font-family:'Archivo-Regular',Helvetica] font-normal text-white text-xs tracking-[0] leading-[17.1px] whitespace-nowrap">
                    <span className="[font-family:'Archivo-Regular',Helvetica] font-normal text-white text-xs tracking-[0] leading-[17.1px]">
                      Amount of{" "}
                    </span>
                    <span className="[font-family:'Archivo-Bold',Helvetica] font-bold">
                      LNEX
                    </span>
                    <span className="[font-family:'Archivo-Regular',Helvetica] font-normal text-white text-xs tracking-[0] leading-[17.1px]">
                      {" "}
                      You Receive
                    </span>
                  </p>
                </div>
                {/* 10th */}
                <div
                  className=" w-[468px] h-[46px] bg-white  mt-[15px] pl-[15px] pr-[15px] flex flex-row justify-between
          rounded backdrop-blur-[28.7px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(28.7px)_brightness(100%)]"
                >
                  <div className="[font-family:'Archivo-Regular',Helvetica] pt-[15px] font-normal text-[#9e9e9e] text-xs  whitespace-nowrap">
                    0
                  </div>
                  <div>
                    <img
                      className=" w-5 h-5 mt-[13px]"
                      alt="Cryptocurrency color"
                      src="/assets/Group-9216.png"
                    />
                  </div>
                </div>
                {/* 11 */}
                <button className=" mt-[15px] w-[468px] h-[46px]  bg-[#34fcb4] rounded">
                  <div className=" [font-family:'Archivo-Bold',Helvetica] font-bold text-black text-lg text-center justify-center flex">
                    Connect Wallet
                  </div>
                </button>
                {/* 12th */}
                <div className="mt-[25px] flex flex-row gap-[10px]">
                  <img
                    className=" w-[15px] h-[15px] top-[822px] left-[1208px]"
                    alt="Group"
                    src="/assets/Group-3.png"
                  />
                  <div className="[font-family:'Archivo-Regular',Helvetica] font-normal text-white text-xs whitespace-nowrap">
                    How To Buy?
                  </div>
                </div>
                {/* 13th */}
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
