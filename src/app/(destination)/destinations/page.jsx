import FilterBar from "@/components/Destination/FilterBar";
import { CardHoverEffect } from "@/components/Destination/HoverCard";
import { roboto } from "@/utils/font";
import React from "react";

const page = () => {
  return (
    <div className={`min-h-screen h-screen md:px-32 flex ${roboto}`}>
      <div className="w-[15rem]">
        <FilterBar />
      </div>
      <div className="mt-[12vh] ">
        <CardHoverEffect />
      </div>
    </div>
  );
};

export default page;
