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
import Roadmap from "./Roadmap";
import FAQ from "./Faq";

const Frame = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <Futurelenux />
      <section id="media">
        <Brand />
      </section>
      <WhatIsLunex />
      <Decentralize />
      <Potential />
      <Exchange />
      <EarnWhileHolding />
      <Noncustodial />
      <PortfolioTracker />
      <LunexCard />
      <RealUtility />
      <Tokenomics />
      <Secure />
      <LunexToken />
      <section id="giveaway">
        <GiveAway />
      </section>
      <Roadmap />
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-4 bg-[#34fcb4] text-black rounded-full shadow-lg transition-opacity duration-300 ease-in-out"
        >
          ↑
        </button>
      )}
    </div>
  );
};

export default Frame;
