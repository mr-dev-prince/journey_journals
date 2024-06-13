import Image from "next/image";
import Link from "next/link";
import React from "react";

import { ToggleTheme } from "../ui/toggleTheme";
import { NavList } from "@/constants/Navigation";
import { cn } from "@/utils/cn";
import { roboto } from "@/utils/font";

const Header = ({ className }) => {
  return (
    <div
      className={cn(
        `z-50 w-full ${roboto} h-[12vh]`,
        className
      )}
    >
      <div
        className={`flex justify-between  items-center md:mx-32 mx-6  text-lg`}
      >
        <Link href={"/"}>
          <Image
            src="https://ik.imagekit.io/princeSherwa/Personal/wanderer's%20wallet/journey%20journals?updatedAt=1717788318957"
            height={100}
            width={100}
            alt="Logo"
            className="hover:scale-95 duration-200 dark:invert"
          />
        </Link>
        <div className=" flex justify-center items-center gap-16 capitalize">
          {NavList.map((item, idx) => (
            <Link
              className="hover:scale-95 duration-200"
              key={idx}
              href={item.href}
            >
              {item.title}
            </Link>
          ))}
          <button className="border text-lg font-medium relative border-slate-700 dark:border-white/[0.2] text-black dark:text-white px-4 py-1.5 rounded-full hover:scale-95 duration-150">
            <span>Login</span>
            <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" />
          </button>
          <ToggleTheme />
        </div>
      </div>
    </div>
  );
};

export default Header;
