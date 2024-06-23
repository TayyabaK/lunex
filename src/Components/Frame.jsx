import React from "react";
import Navbar from "./Navbar";
import Futurelenux from "./Futurelenux";
import Brand from "./Brand";
import WhatIsLunex from "./WhatIsLunex";
import Potential from "./Potential";
import Exchange from "./Exchange";

export const Frame = () => {
  return (
    <div>
      <Navbar />
      <Futurelenux />
      <Brand />
      <WhatIsLunex />
      <Potential />
      <Exchange/>
    </div>
  );
};
