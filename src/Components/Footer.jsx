import React from "react";

const Footer = () => {
  return (
    <div
      className="bg-black text-white py-16 px-8 border-t border-browngrey mb-[100px]"
      style={{
        backgroundImage: "url('/assets/footer.svg')",
        backgroundSize: "100%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-start">
          <div className="flex flex-row pl-10">
            <img
              src="/assets/lunex-logo.svg"
              alt="Lunex Logo"
              className="mb-4 w-32"
            />
            <span className="text-[60px] font-bold pl-8 pt-4">LUNEX</span>
          </div>

          <button className="relative neon-border neon-shadow neon-hover mx-12 px-16 py-3 bg-black font-bold flex items-center transition-colors duration-300 ease-in-out">
            <span className="[font-family:'Archivo-Bold',Helvetica] font-bold text-sm lg:text-lg">
              SECURE
            </span>
            <img
              className="ml-2 w-4 h-2"
              alt="Arrow"
              src="/assets/Vector-arrow.png"
            />
          </button>
          <div className="flex flex-row space-y-4">
            <div className="flex items-center">
              <img
                src="/assets/email-icon.svg"
                alt="Email"
                className="h-6 mr-2"
              />
              <div>
                <p className="text-sm font-bold text-gray-500">
                  Technical Support:
                </p>
                <p>support@lunexnetwork.io</p>
              </div>
            </div>
            <div className="flex items-center">
              <img
                src="/assets/email-icon.svg"
                alt="Email"
                className="h-6 mr-2"
              />
              <div>
                <p className="text-sm font-bold text-gray-500">Marketing:</p>
                <p>marketing@lunexnetwork.io</p>
              </div>
            </div>
            <div className="flex items-center">
              <img
                src="/assets/email-icon.svg"
                alt="Email"
                className="h-6 mr-2"
              />
              <div>
                <p className="text-sm font-bold text-gray-500">Investors:</p>
                <p>investors@lunexnetwork.io</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start space-y-4">
          <h3 className="text-xl font-bold text-[#34fcb4]">
            {" "}
            {String.fromCharCode(47, 47)}
            Socials
          </h3>
          <div className="flex space-x-4">
            <img
              src="/assets/social-icon-1.svg"
              alt="Social 1"
              className="h-8"
            />
            <img
              src="/assets/social-icon-2.svg"
              alt="Social 2"
              className="h-8"
            />
            <img
              src="/assets/social-icon-3.svg"
              alt="Social 3"
              className="h-8"
            />
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
        <p className="mb-4 md:mb-0">
          Disclaimer: Digital currencies may be unregulated in your
          jurisdiction. The value of digital currencies may go down as well as
          up. Profits may be subject to capital gains or other taxes applicable
          in your jurisdiction.
        </p>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-white">
            Privacy
          </a>
          <a href="#" className="hover:text-white">
            Terms & Conditions
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
