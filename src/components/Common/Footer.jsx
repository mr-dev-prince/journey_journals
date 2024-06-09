import { dmSerif, roboto } from "@/utils/font";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className={`${roboto} md:px-32 py-16`}>
      <div className="w-full h-[2px] bg-gradient-to-r from-[#121212] via-blue-500  mb-8 " />
      <div className="flex justify-between items-center">
        <Link href={"/"}>
          <Image
            src="https://ik.imagekit.io/princeSherwa/Personal/wanderer's%20wallet/journey%20journals?updatedAt=1717788318957"
            height={80}
            width={80}
            alt="Logo"
            className="hover:scale-95 duration-200 dark:invert"
          />
        </Link>
        <div className="flex gap-12 capitalize">
          <Link href={"/contact"}>Contact Us</Link>
          <Link href={"/contact"}>Terms & Conditions</Link>
          <Link href={"/contact"}>Careers</Link>
          <Link href={"/contact"}>feedback</Link>
        </div>
        <div className="flex flex-col gap-16  ">
          <div className={`${dmSerif} relative text-3xl `}>
            <p className="absolute top-0 left-0">Journey</p>
            <p className="absolute top-6 left-5 ">Journals.</p>
          </div>
          <p className="text-xs tracking-wider capitalize">&copy; all rights reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
