import React from "react";
import { ThreeDCard } from "./ThreeDCard";

const GuideSection = () => {
  return (
    <div className="md:px-32 min-h-screen">
      <div className="flex w-full justify-between items-center">
        <ThreeDCard
          heading="Sign Up"
          description="Create your free account."
          href="/signup"
          title="Sign Up Now..."
        />
        <ThreeDCard />
        <ThreeDCard />
      </div>
    </div>
  );
};

export default GuideSection;
