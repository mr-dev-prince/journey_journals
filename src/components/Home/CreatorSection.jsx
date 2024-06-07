import React from "react";
import { AnimatedProfile } from "./AnimatedProfile";
import { dmSerif } from "@/utils/font";

const CreatorSection = () => {
  return (
    <div className={`md:px-32 `}>
      <div className="flex justify-center items-center h-[10rem]">
        <p className={`${dmSerif} text-5xl capitalize`}>
          Get inspired by your favourite creator
        </p>
      </div>
      <div><AnimatedProfile /></div>
      <div className="flex justify-center items-center h-[10rem]">
        <p className={`${dmSerif} text-2xl capitalize`}>
        Ready to share your travel stories? Sign up today and start inspiring others with your adventures!
        </p>
      </div>
    </div>
  );
};

export default CreatorSection;
