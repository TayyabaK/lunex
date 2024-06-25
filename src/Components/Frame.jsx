"use client";

import React, { useState, useEffect } from "react";
import Futurelenux from "./Futurelenux";
import Brand from "./Brand";
import WhatIsLunex from "./WhatIsLunex";
import Potential from "./Potential";
import Exchange from "./Exchange";
import Noncustodial from "./Noncustodial";

import EarnWhileHolding from "./EarnWhileHolding";
import Decentralize from "./Decentralize";

import PortfolioTracker from "./PortfolioTracker";

import LunexCard from "./LunexCard";

const Frame = () => {
  return (
    <div>
      <Futurelenux />
      <Brand />
      <WhatIsLunex />
      <Decentralize/>
      <Potential />
      <Exchange />
      <EarnWhileHolding/>
      <Noncustodial />
      <PortfolioTracker/>
      <LunexCard/>
    </div>
  );
};

export default Frame;
