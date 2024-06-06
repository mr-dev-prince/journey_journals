import Image from "next/image";
import Link from "next/link";
import React from "react";

import logo from "@/assets/logo.png";
import { roboto } from "@/utils/font";
import { ToggleTheme } from "../ui/toggleTheme";
import { NavList } from "@/constants/Navigation";

const Header = () => {
  return (
    <div className={` absolute top-0 z-50 w-full `}>
      <div
        className={`flex justify-between  items-end md:mx-32 mx-6 ${roboto} text-lg`}
      >
        <div>
          <Link href={"/"}>
            <Image
              src={logo}
              height={80}
              width={80}
              alt="Logo"
              className="hover:scale-95 duration-200"
            />
          </Link>
        </div>
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
