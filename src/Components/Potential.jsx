import React from "react";

const Potential = () => {
  return (
    <div className="bg-black">
      <section>
        <div className="flex flex-col sm:flex-row gap-[10px] sm:gap-[25px] px-[70px] justify-center items-center">
          <div className="flex items-center mt-[60px]">
            <span className="text-[#34fcb4] text-xl [font-family:'Archivo-Medium',Helvetica] font-medium">
              {String.fromCharCode(47, 47)}
            </span>
            <span className="text-[#ffffffe6] text-xl [font-family:'Archivo-Medium',Helvetica] font-medium ml-2">
              Benefits
            </span>
          </div>
          <div className="flex-grow h-[2px] bg-[#34fcb4] mt-[60px]"></div>
          <span className="text-white font-bold [font-family:'Archivo-Bold',Helvetica] lg:text-[50px] xl:text-[56px] text-[40px] flex items-center mt-4 sm:mt-0">
            Unlimited Potential
          </span>
        </div>
      </section>
      <section className="flex md:flex-row flex-col md:gap-0 gap-[20px] mt-[15px] self-center justify-center md:justify-center p-[20px]">
        <div className="md:max-w-[250px] max-w-[760px] w-full justify-center border-[0.5px] border-gray-700 flex p-[20px] flex-col">
          <img
            className="max-w-[100px] h-[150px] mb-[80px] w-full"
            src="/assets/secure.svg"
            alt="Secure"
          />
          <div className="">
            <button className="px-[20px] text-[9px] py-[4px] tracking-wider hover:bg-[#34fcb4] hover:text-black text-white border-[1px] border-gray-600 rounded-sm">
              TECHNOLOGY
            </button>
          </div>
          <div className="mt-[15px] w-full text-white flex flex-col">
            <span className="font-medium text-lg">Secure Transaction</span>
            <span className="text-xs font-light leading-5 mt-[20px]">
              &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </span>
          </div>
        </div>

        <div className="md:max-w-[250px] max-w-[760px] w-full justify-center border-[0.5px] border-gray-700 flex p-[20px] flex-col">
          <img
            className="max-w-[75px] h-[150px] mb-[80px] w-full"
            src="/assets/troffee.svg"
            alt="Trophy"
          />
          <div className="">
            <button className="px-[20px] text-[9px] py-[4px] tracking-wider hover:bg-[#34fcb4] hover:text-black text-white border-[1px] border-gray-600 rounded-sm">
              ECOSYSTEM
            </button>
          </div>
          <div className="mt-[15px] w-full text-white flex flex-col">
            <span className="font-medium text-lg">Reward Program</span>
            <span className="text-xs font-light leading-5 mt-[20px]">
              &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </span>
          </div>
        </div>

        <div className="md:max-w-[250px] max-w-[760px] w-full justify-center border-[0.5px] border-gray-700 flex p-[20px] flex-col">
          <img
            className="max-w-[100px] h-[150px] mb-[80px] w-full"
            src="/assets/weight.svg"
            alt="Weight"
          />
          <div className="">
            <button className="px-[20px] text-[9px] py-[4px] tracking-wider hover:bg-[#34fcb4] hover:text-black text-white border-[1px] border-gray-600 rounded-sm">
              AVAILABILITY
            </button>
          </div>
          <div className="mt-[15px] w-full text-white flex flex-col">
            <span className="font-medium text-lg">Lower Fees</span>
            <span className="text-xs font-light leading-5 mt-[20px]">
              &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </span>
          </div>
        </div>

        <div className="md:max-w-[250px] max-w-[760px] w-full justify-center border-[0.5px] border-gray-700 flex p-[20px] flex-col">
          <button className="hover:w-[450px]">
            <img
              className="max-w-[250px] h-[150px] mb-[80px] w-full"
              src="/assets/governance.svg"
              alt="Governance"
            />
          </button>
          <div className="">
            <button className="px-[30px] text-[9px] py-[4px] tracking-wider text-white hover:bg-[#34fcb4] hover:text-black border-[1px] border-gray-600 rounded-sm">
              HONESTY
            </button>
          </div>
          <div className="mt-[15px] w-full text-white flex flex-col">
            <span className="font-medium text-[#34fcb4] text-lg">
              Decentralized Governance
            </span>
            <span className="text-xs font-light leading-5 mt-[20px]">
              &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </span>
          </div>
        </div>

        <div className="md:max-w-[250px] max-w-[760px] w-full justify-center border-[0.5px] border-gray-700 flex p-[20px] flex-col">
          <img
            className="max-w-[140px] h-[150px] mb-[80px] w-full"
            src="/assets/window.svg"
            alt="Window"
          />
          <div className="">
            <button className="px-[35px] text-[9px] py-[4px] tracking-wider hover:bg-[#34fcb4] hover:text-black text-white border-[1px] border-gray-600 rounded-sm">
              TRUST
            </button>
          </div>
          <div className="mt-[15px] w-full text-white flex flex-col">
            <span className="font-medium text-lg">Transparancy</span>
            <span className="text-xs font-light leading-5 mt-[20px]">
              &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </span>
          </div>
        </div>
      </section>
      <div className="bg-black h-[600px] w-full"></div>
    </div>
  );
};

export default Potential;
