"use client";

import React, { useState, useEffect } from "react";
import Futurelenux from "./Futurelenux";
import Brand from "./Brand";
import WhatIsLunex from "./WhatIsLunex";
import Potential from "./Potential";
import Exchange from "./Exchange";

 const Frame = () => {
  const [clientSideData, setClientSideData] = useState(null);

  useEffect(() => {
    setClientSideData("Dynamic Content");
  }, []);

  return (
    <div>
      <Futurelenux />
      <Brand />
      <WhatIsLunex />
      <Potential />
      <Exchange />
    </div>
  );
};

export default Frame;