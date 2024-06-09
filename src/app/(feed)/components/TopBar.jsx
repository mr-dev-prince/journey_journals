import Image from "next/image";
import React from "react";
import PostInput from "./ResponsiveInput";
import { IconMapPin, IconMovie, IconPhotoScan } from "@tabler/icons-react";
import { AnimatedInput } from "@/components/ui/Search";
import PostBtn from "./PostBtn";

const TopBar = () => {
  return (
    <div className=" w-full p-2 flex gap-3 mt-2 border-b-2 dark:border-b">
      <div className="flex  w-[60%] justify-center items-start gap-1">
        <div className=" overflow-hidden w-[4rem]">
          <Image
            src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
            height={80}
            width={80}
            alt="Profile"
            className="rounded-full h-12 w-12 object-cover"
          />
        </div>
        <div className="w-full h-full">
          <PostInput />
          <div className="h-[2px] bg-slate-500" />
          <div className="flex mt-2 justify-between items-center ">
            <div className="flex gap-3">
              <button className="hover:text-blue-500 transition">
                <IconPhotoScan />
              </button>
              <button className="hover:text-blue-500 transition">
                <IconMovie />
              </button>
              <button className="hover:text-blue-500 transition">
                <IconMapPin />
              </button>
            </div>
            <PostBtn title={"Post"} className="py-1 px-4" />
          </div>
        </div>
      </div>
      <div className="w-[40%] space-y-3">
        <AnimatedInput />
        <span className="w-full flex justify-end items-center">
          <PostBtn title={"Search"} className="py-1 px-4" />
        </span>
      </div>
    </div>
  );
};

export default TopBar;
