import { cn } from "@/utils/cn";
import Link from "next/link";
import React from "react";

const PostBtn = ({ title, className }) => {
  return (
    <Link
      href={"/"}
      className={cn(
        "ring-1 rounded-lg capitalize text-center bg-blue-500 hover:bg-blue-600 transition text-white cursor-pointer",
        className
      )}
    >
      {title}
    </Link>
  );
};

export default PostBtn;
