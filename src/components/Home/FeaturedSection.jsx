import React from "react";
import { InfiniteMovingCard } from "./FeaturedPostScroll";
import { dmSerif } from "@/utils/font";

const FeaturedSection = () => {
  return (
    <div className={`min-h-screen py-16`}>
      <div className=" h-[10rem] px-32  flex justify-center items-center">
        <div className="relative w-full  flex justify-center items-center">
          <div className="w-full absolute top-[52%] h-[2px] bg-gradient-to-r from-[#121212] via-blue-500 " />
          <p
            className={`${dmSerif} text-5xl capitalize bg-white dark:bg-black z-10 px-3`}
          >
            featured posts
          </p>
        </div>
      </div>
      <div className="mt-4">
        <InfiniteMovingCard />
      </div>
    </div>
  );
};

export default FeaturedSection;
