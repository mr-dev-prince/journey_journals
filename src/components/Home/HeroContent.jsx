import { dmSerif } from "@/utils/font";
import React from "react";

const HeroContent = () => {
  return (
    <div className="absolute h-full w-full left-0 top-0 flex justify-center items-center ">
      <div className="text-center grid place-items-center">
        <div className="grid gap-6">
          <h1 className={`${dmSerif} text-9xl tracking-wider`}>
            Journey Journals.
          </h1>
          <h2 className="text-4xl font-extralight ">
            Every trip has a tale to tell.
          </h2>
        </div>
        <button className="border w-fit text-lg font-medium relative border-slate-700 dark:border-white/[0.2] text-black dark:text-white px-16 py-2 rounded-full hover:scale-95 duration-150 cursor-pointer z-50 mt-12">
          <span>Explore </span>
          <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" />
        </button>
      </div>
    </div>
  );
};

export default HeroContent;
