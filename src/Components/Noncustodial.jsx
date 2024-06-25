import React from "react";

const Noncustodial = () => {
  return (
    <div
      className="bg-black flex justify-center pt-[70px] relative  mb-[50px]"
      style={{
        background: "radial-gradient(circle 50vh at 0% 20%, #273b1d, black)",
      }}
    >
      <div
        className=" max-w-[1300px] bg-cover pb-[60px] bg-center w-full p-[7px] flex justify-between lg:flex-row flex-col  "
        style={{
          backgroundImage: "url('/assets/3-mob-custodial.svg')",
        }}
      >
        {/* <div className="p-[0px] max-w-[250px] w-full">
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
        </div> */}

        <div className="md:pt-[115px] md:pb-[65px] mt-9 ">
          <div className="max-w-[620px]  w-full font-bold leading-tight text-white lg:text-[60px] xl:text-[60px] text-[60px]">
            Non Custodial <br></br>
            Crypto Wallet
          </div>

          <div className="max-w-[620px] w-full flex flex-row gap-[20px] mt-[55px]">
            <button class="relative neon-border neon-shadow neon-hover px-6 py-3 bg-black font-bold flex items-center transition-colors duration-300 ease-in-out">
              <h1 className=" font-bold text-sm lg:text-lg flex">STAKE </h1>
              <img
                className="ml-2 w-4 h-2"
                alt="Group"
                src="/assets/Vector-arrow.png"
              />
            </button>
          </div>
        </div>

        <div>
          <img
            src="/assets/custodial-screen2.svg"
            alt="mob-border"
            className="absolute inset-0 w-full h-full  object-fill px-[60px] pb-[20px] pt-[90px]"
          />
        </div>

        <section>
          <div className="text-white text-sm font-medium max-w-[355px] md:pt-[150px] mr-[100px] mt-8">
            <div>
              {" "}
              Manage Your Crypto With Complete Peace Of Mind. Store, Buy, Swap,
              And Stake Crypto From Your Mobile Or Desktop App. All Private And
              Secure
            </div>
            <div className="mt-[10px] gap-[10px] flex flex-col font-normal text-xs">
              <div>1. Non personal information is required or collected.</div>
              <div>
                {" "}
                2. Your funds are stored on your device. Your keys, your
                Cryptal.
              </div>
              <div>
                3. 40+ Blockchains and thousands of crypto tokens supported.
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Noncustodial;
