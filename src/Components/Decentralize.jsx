import React from "react";

const Decentralize = () => {
  return (
    <div
      className="relative bg-black flex justify-center border border-browngrey border-[0.25px]"
      style={{
        background:
          "radial-gradient(circle 50vh at 10% 5%, #273b1d, transparent)",
      }}
    >
      <div
        className="w-full bg-cover bg-center flex lg:flex-row flex-col justify-center self-center md:justify-between min-h-[600px]"
        style={{
          backgroundImage: "url('/assets/decentralize-back.svg')",
          backgroundSize: "100%",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
    </div>
  );
};

export default Decentralize;
