import React from "react";

const Footer = () => {
  return (
    <div
      className="relative bg-black text-white py-16 px-8 border-t border-browngrey mb-[100px]"
      style={{
        backgroundImage: "url('/assets/footer.svg')",
        backgroundSize: "100%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-start">
          <div className="flex flex-row pl-10 pb-[18px]">
            <img
              src="/assets/lunex-logo.svg"
              alt="Lunex Logo"
              className="mb-4 w-32"
            />
            <span className="text-[60px] font-bold pl-8 pt-4">LUNEX</span>
          </div>

          <button className="relative neon-border neon-shadow neon-hover mx-12 px-16 py-2 ml-12  bg-black font-bold flex items-center transition-colors duration-300 ease-in-out">
            <span className="[font-family:'Archivo-Bold',Helvetica] font-bold text-sm lg:text-lg">
              SECURE
            </span>
            <img
              className="ml-2 w-4 h-2"
              alt="Arrow"
              src="/assets/Vector-arrow.png"
            />
          </button>

          <div className="flex flex-row mt-4 px-12 pt-12 gap-12">
            <div className="flex items-start space-x-2">
              <img
                src="/assets/email-icon.svg"
                alt="Email"
                className="h-5 mb-8"
              />
              <div className="flex flex-col">
                <p className="text-sm font-bold text-[#34fcb4]">
                  Technical Support:
                </p>
                <p>support@lunexnetwork.io</p>
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <img
                src="/assets/email-icon.svg"
                alt="Email"
                className="h-5 mb-5"
              />
              <div className="flex flex-col ">
                <p className="text-sm font-bold text-[#34fcb4]">Marketing:</p>
                <p>marketing@lunexnetwork.io</p>
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <img
                src="/assets/email-icon.svg"
                alt="Email"
                className="h-5 mb-5"
              />
              <div className="flex flex-col">
                <p className="text-sm font-bold text-[#34fcb4]">Investors:</p>
                <p>investors@lunexnetwork.io</p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute flex flex-row ml-[800px] mt-[140px]">
          <p className=" [font-family:'Archivo-Medium',Helvetica] font-medium text-transparent text-lg  whitespace-nowrap">
            <span className="text-[#34fcb4]">
              {String.fromCharCode(47, 47)}
            </span>
            <span className="text-[#ffffffe6]"> Socials</span>
          </p>
          <href className="cursor-pointer">
            <img
              className=" max-w-[20px] w-full h-[20px] ml-44 "
              alt="Group"
              src="/assets/VectorX-1.png"
            />
          </href>
          <href className="cursor-pointer">
            {" "}
            <img
              className=" max-w-[25px] w-full h-[20px] ml-16 "
              alt="Group"
              src="/assets/Vectordiscord-5.png"
            />
          </href>
          <href className="cursor-pointer">
            {" "}
            <img
              className="max-w-[20px] w-full h-[20px] ml-16 "
              alt="Group"
              src="/assets/Vectorplane-3.png"
            />
          </href>
        </div>
      </div>
      <div className="max-w-7xl mx-auto flex flex-row items-start text-gray-500 text-sm">
        <p className="flex-1 mb-4 md:mb-0 mt-8 max-w-[650px] ml-28">
          Disclaimer: Digital currencies may be unregulated in your
          jurisdiction. The value of digital currencies may go down as well as
          up. Profits may be subject to capital gains or other taxes applicable
          in your jurisdiction.
        </p>
        <div className="flex flex-row ">
          <a href="#" className="hover:text-white mt-8  mb-4 md:mb-0 ml-8">
            Privacy
          </a>
          <a href="#" className="hover:text-white mt-8  mb-4 md:mb-0 ml-20">
            Terms & Conditions
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
