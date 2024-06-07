"use client";

import React from "react";
import Header from "../Common/Header";
import { BackgroundBeams } from "../ui/background-beams";
import HeroContent from "./HeroContent";

const Hero = () => {
  return (
    <div className="min-h-screen w-full rounded-md dark:bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <Header />
      <HeroContent />
      <BackgroundBeams />
    </div>
  );
};

export default Hero;
