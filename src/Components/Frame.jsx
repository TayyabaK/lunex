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

import RealUtility from "./RealUtility";

import Tokenomics from "./Tokenomics";

import Secure from "./Secure";

import LunexToken from "./LunexToken";

import GiveAway from "./GiveAway";

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
      <RealUtility/>
      <Tokenomics/>
      <Secure/>
      <LunexToken/>
      <GiveAway/>
    </div>
  );
};

export default Frame;
