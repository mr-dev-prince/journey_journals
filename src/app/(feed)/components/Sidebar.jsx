import LogOutBtn from "@/components/ui/LogOutBtn";
import { ProfileCard } from "@/components/ui/Profile";
import { ToggleTheme } from "@/components/ui/toggleTheme";
import { FeedNavList } from "@/constants/Navigation";
import { roboto } from "@/utils/font";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import PostBtn from "./PostBtn";

const Sidebar = () => {
  return (
    <div className={`h-full w-fit ${roboto} w-[15rem]`}>
      <div className="fixed top-0 p-2 h-full ">
        <div className="flex flex-col h-full w-[15rem] justify-between">
          <div className="flex flex-col gap-12">
            <Link href={"/"}>
              <Image
                src="https://ik.imagekit.io/princeSherwa/Personal/wanderer's%20wallet/journey%20journals?updatedAt=1717788318957"
                height={80}
                width={80}
                alt="Logo"
                className="dark:invert"
              />
            </Link>
            <div className="flex flex-col capitalize gap-5">
              {FeedNavList.map((item, idx) => (
                <Link
                  href={item.href}
                  key={idx}
                  className="flex justify-start items-center gap-3 text-xl hover:bg-slate-200 dark:hover:bg-neutral-800 py-2 px-4 rounded-full transition duration-100"
                >
                  <span>{item.icon}</span>
                  <p className="hidden md:block">{item.title}</p>
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <PostBtn title={"Share your journey"} className="p-2" />
            <div className="ring-1 rounded-lg p-1">
              <ProfileCard />
              <div className="flex justify-start items-center gap-6 p-2 ">
                <LogOutBtn />
                <ToggleTheme />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
