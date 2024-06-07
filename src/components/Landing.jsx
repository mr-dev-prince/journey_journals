import React from "react";
import Hero from "./Home/Hero";
import { roboto } from "@/utils/font";
import WelcomeSection from "./Home/WelcomeSection";
import GuideSection from "./Home/GuideSection";

const Landing = () => {
  return (
    <div className={`h-fit w-full ${roboto}`}>
      <Hero />
      <WelcomeSection />
      <GuideSection />
    </div>
  );
};

export default Landing;
