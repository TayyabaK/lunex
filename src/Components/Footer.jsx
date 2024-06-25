import React from "react";

const Footer = () => {
  return (
    <div
      style={{
        backgroundImage: "url('/assets/footer.svg')",
        backgroundSize: "100%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="bg-black text-white py-16 px-8 border-t border-gray-700">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-start space-y-4">
            <img
              src="/assets/logo.svg"
              alt="Lunex Logo"
              className="w-16 h-16"
            />
            <button className="relative neon-border neon-shadow neon-hover px-8 py-3 bg-black font-bold flex items-center transition-colors duration-300 ease-in-out">
              <span className="[font-family:'Archivo-Bold',Helvetica] font-bold text-sm lg:text-lg">
                SECURE
              </span>
              <img
                className="ml-2 w-4 h-2"
                alt="Arrow"
                src="/assets/Vector-arrow.png"
              />
            </button>
          </div>

          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-bold text-[#34fcb4]">
              {" "}
              {String.fromCharCode(47, 47)}
              Socials
            </h3>
            <div className="flex space-x-4">
              <img src="/assets/icon-1.svg" alt="Icon 1" className="w-8 h-8" />
              <img src="/assets/icon-2.svg" alt="Icon 2" className="w-8 h-8" />
              <img src="/assets/icon-3.svg" alt="Icon 3" className="w-8 h-8" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex flex-col space-y-2">
              <h4 className="text-sm font-semibold">Technical Support:</h4>
              <p>support@lunexnetwork.io</p>
            </div>
            <div className="flex flex-col space-y-2">
              <h4 className="text-sm font-semibold">Marketing:</h4>
              <p>marketing@lunexnetwork.io</p>
            </div>
            <div className="flex flex-col space-y-2">
              <h4 className="text-sm font-semibold">Investors:</h4>
              <p>investors@lunexnetwork.io</p>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto mt-8 flex flex-col md:flex-row justify-between text-sm space-y-4 md:space-y-0">
          <p className="text-gray-500">
            Disclaimer: Digital currencies may be regulated in your
            jurisdiction. The value of digital currencies may go down as well as
            up. Profits may be subject to capital gains or other taxes
            applicable in your jurisdiction.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-500 hover:text-white">
              Privacy
            </a>
            <a href="#" className="text-gray-500 hover:text-white">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
