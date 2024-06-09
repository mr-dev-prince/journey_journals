import React from "react";
import Hero from "./Home/Hero";
import { roboto } from "@/utils/font";
import WelcomeSection from "./Home/WelcomeSection";
import GuideSection from "./Home/GuideSection";
import FeaturedSection from "./Home/FeaturedSection";
import CreatorSection from "./Home/CreatorSection";

const Landing = () => {
  return (
    <div className={`h-fit w-full ${roboto}`}>
      <Hero />
      <WelcomeSection />
      <GuideSection />
      <FeaturedSection />
      <CreatorSection/>
    </div>
  );
};

export default Landing;
