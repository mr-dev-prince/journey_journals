import {
  IconBrandDiscord,
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandX,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const WelcomeSection = () => {
  return (
    <div className="md:mx-32 min-h-screen flex justify-center items-center">
      <div className="flex justify-between items-center w-full h-full">
        <div className={`grid gap-12 w-[50%]`}>
          <div className="grid gap-5">
            <p className={`text-4xl`}>
              Welcome to Journey Journals,
              <br /> where your travel memories come to life!
            </p>
            <p className="tracking-wider ">
              Capture and share your travel adventures with stunning photos and
              engaging stories. Connect with fellow travelers, discover new
              destinations, and get inspired for your next journey. Every
              adventure has a home at Voyage Vault.
            </p>
          </div>
          <button className="border w-fit text-lg font-medium relative border-slate-700 dark:border-white/[0.2] text-black dark:text-white px-16 py-1.5 rounded-full hover:scale-95 duration-150">
            <span>Join Community</span>
            <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" />
          </button>
          <div className="flex gap-6">
            <Link href={"/"} className="hover:scale-95 duration-100 ">
              <IconBrandInstagram size={32} />
            </Link>
            <Link href={"/"} className="hover:scale-95 duration-100 ">
              <IconBrandFacebook size={32} />
            </Link>
            <Link href={"/"} className="hover:scale-95 duration-100 ">
              <IconBrandX size={32} />
            </Link>
            <Link href={"/"} className="hover:scale-95 duration-100 ">
              <IconBrandDiscord size={32} />
            </Link>
          </div>
        </div>
        <div className="w-[50%] flex justify-end items-center">
          <div className="h-[400px] w-[400px] relative ">
            <Image
              src="https://ik.imagekit.io/princeSherwa/Personal/wanderer's%20wallet/map2.png?updatedAt=1717753002521"
              width={350}
              height={400}
              className="absolute -bottom-5 right-0"
              alt="map"
            />
            <Image
              height={400}
              width={350}
              src="https://ik.imagekit.io/princeSherwa/Personal/wanderer's%20wallet/traveler.png?updatedAt=1717752220788"
              alt="traveler"
              className="absolute -bottom-5 right-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;
