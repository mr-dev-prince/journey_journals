"use client";

import React from "react";
import Header from "../Common/Header";
import { BackgroundBeams } from "../ui/background-beams";
import HeroContent from "./HeroContent";

const Hero = () => {
  return (
    <div className="min-h-screen w-full rounded-md  relative flex flex-col items-center justify-center antialiased">
      <HeroContent />
      <BackgroundBeams />
    </div>
  );
};

export default Hero;
