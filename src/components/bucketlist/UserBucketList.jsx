import { dmSerif } from "@/utils/font";
import React from "react";

const UserBucketList = () => {
  return (
    <div>
      <div className="relative w-full  flex justify-center items-center">
        <div className="w-full absolute top-[52%] h-[2px] bg-gradient-to-r from-[#121212] via-blue-500 " />
        <p
          className={`${dmSerif} text-5xl capitalize bg-white dark:bg-black z-10 px-3`}
        >
          Your Bucket List
        </p>
      </div>
    </div>
  );
};

export default UserBucketList;
