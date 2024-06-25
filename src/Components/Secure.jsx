import React from "react";

const Secure = () => {
  return (
    <div
      className="relative bg-black w-full h-full flex justify-center py-[100px] relative border-[0.25px] border-browngrey "
      style={{
        background: "radial-gradient(circle 50vh at 90% 20%, #273b1d, black)",
      }}
    >
      <div
        className=" max-w-[1300px] bg-cover pb-[90px] pt-[32px] bg-center w-full p-[7px] flex justify-between lg:flex-row flex-col  "
        style={{
          backgroundImage: "url('/assets/secure-back.svg')",
          backgroundSize: "100%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="bg-transparent text-white flex flex-column justify-end py-16 px-32">
          <p className="text-[16px] max-w-[430px] absolute top-[320px] left-[400px]">
            Lunax is a Web3 DeFi crypto exchange that allows users to Buy, Sell
            and Swap cryptocurrency instantly via our non-custodial crypto
            application.
          </p>
        </div>

        <div className="absolute top-[40px] left-[850px] bg-transparent text-white p-8 flex flex-col md:flex-row items-start md:items-center gap-6">
          <div className="flex flex-col text-xl mb-2">
            <div className="flex items-center mb-2">
              <span className="text-[#34fcb4] font-bold mr-2">
                {String.fromCharCode(47, 47)}
              </span>
              <span className="text-white font-bold">White Paper</span>
            </div>
            <p className="mb-4 max-w-[350px] text-[16px]">
              Lunax Is A Web3 DeFi Crypto Exchange That Allows Users To Buy,
              Sell And Swap
            </p>
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <img
                  src="/assets/pdf-icon.svg"
                  alt="PDF Icon"
                  className="h-6 w-6 mr-2"
                />
                <span className="text-[12px]">PDF</span>
              </div>
              <div className="flex items-center">
                <img
                  src="/assets/tick.svg"
                  alt="Check Icon"
                  className="h-6 w-6 mr-2"
                />
              </div>
            </div>
          </div>
        </div>

         <div className="absolute top-[250px] left-[850px] bg-transparent text-white p-8 flex flex-col md:flex-row items-start md:items-center gap-6">
          <div className="flex flex-col text-xl mb-2">
            <div className="flex items-center mb-2">
              <span className="text-[#34fcb4] font-bold mr-2">
                {String.fromCharCode(47, 47)}
              </span>
              <span className="text-white font-bold">Audit Report</span>
            </div>
            <p className="mb-4 max-w-[350px] text-[16px]">
              Lunax Is A Web3 DeFi Crypto Exchange That Allows Users To Buy,
              Sell And Swap
            </p>
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <img
                  src="/assets/pdf-icon.svg"
                  alt="PDF Icon"
                  className="h-6 w-6 mr-2"
                />
                <span className="text-[12px]">PDF</span>
              </div>
              <div className="flex items-center">
                <img
                  src="/assets/tick.svg"
                  alt="Check Icon"
                  className="h-6 w-6 mr-2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default Secure;
