"use client";

import React, { useState, useEffect } from "react";
import Futurelenux from "./Futurelenux";
import Brand from "./Brand";
import WhatIsLunex from "./WhatIsLunex";
import Potential from "./Potential";
import Exchange from "./Exchange";
import Noncustodial from "./Noncustodial";

const Frame = () => {
  return (
    <div>
      <Futurelenux />
      <Brand />
      <WhatIsLunex />
      <Potential />
      <Exchange />
      <Noncustodial />
    </div>
  );
};

export default Frame;
