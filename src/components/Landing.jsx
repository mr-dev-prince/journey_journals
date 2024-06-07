import React from "react";
import Hero from "./Home/Hero";
import { roboto } from "@/utils/font";

const Landing = () => {
  return (
    <div className={`h-fit w-full ${roboto}`}>
      <Hero />
    </div>
  );
};

export default Landing;
