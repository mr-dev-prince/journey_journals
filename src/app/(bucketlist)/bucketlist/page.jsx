import { TravelQuote } from "@/components/bucketlist/TravelQuote";
import UserBucketList from "@/components/bucketlist/UserBucketList";
import React from "react";

const page = () => {
  return (
    <div className={`md:px-32 min-h-screen py-2 bg-[#FAFAFA] dark:bg-black`}>
      <TravelQuote />
      <UserBucketList />
    </div>
  );
};

export default page;
