import React from "react";
import { InfiniteMovingCard } from "./FeaturedPostScroll";

const FeaturedSection = () => {
  return (
    <div className={`max-h-screen md:px-32`}>
      <InfiniteMovingCard />
    </div>
  );
};

export default FeaturedSection;
