import React from "react";
import Navbar from "./Navbar";
import Futurelenux from "./Futurelenux";
import Brand from "./Brand";
import WhatIsLunex from "./WhatIsLunex";
import Potential from "./Potential";

export const Frame = () => {
  return (
    <div>
      <div className="w-full bg-custom-gradient-topleft">
        <Navbar />
        <Futurelenux />
      </div>
      <Brand />
      <WhatIsLunex />
      <Potential/>
    </div>
  );
};
