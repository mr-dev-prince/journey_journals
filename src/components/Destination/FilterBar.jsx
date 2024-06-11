import { dmSerif } from "@/utils/font";
import { IoMdGlobe } from "react-icons/io";
import {
  FaCalendarAlt,
  FaCloud,
  FaFlag,
  FaUmbrellaBeach,
} from "react-icons/fa";
import { BsCloudSunFill } from "react-icons/bs";
import { IoAccessibilitySharp } from "react-icons/io5";
import { FaMoneyBill1Wave } from "react-icons/fa6";
import { GiMountainRoad } from "react-icons/gi";
import { BiRun } from "react-icons/bi";
import React from "react";
import { DropDownComponent } from "./DropDown";
import { IconRestore } from "@tabler/icons-react";
import { Button } from "@nextui-org/react";
import RefreshBtn from "./RefreshBtn";
import Image from "next/image";
import Link from "next/link";

const FilterBar = () => {
  return (
    <div className="w-[15rem] h-full fixed top-5 no-scroll-bar">
      <Link href={"/"}>
        <Image
          src="https://ik.imagekit.io/princeSherwa/Personal/wanderer's%20wallet/journey%20journals?updatedAt=1717788318957"
          height={80}
          width={80}
          alt="Logo"
          className="dark:invert"
        />
      </Link>
      <div className="w-full text-center">
        <p className={`text-xl ${dmSerif} tracking-wide`}>
          Filter your destinations
        </p>
      </div>
      <div className="h-full p-3 flex flex-col gap-3 ">
        {CategoryList.map((item, idx) => (
          <DropDownComponent
            key={idx}
            title={item.title}
            icon={item.icon}
            category={item.category}
          />
        ))}
        <RefreshBtn />
      </div>
    </div>
  );
};

export default FilterBar;

export const CategoryList = [
  {
    title: "Region",
    icon: <IoMdGlobe size={20} />,
    category: [
      "Asia",
      "Europe",
      "Antarctica",
      "South America",
      "North America",
      "Russia",
      "Africa",
    ],
  },
  { title: "Country", icon: <FaFlag size={20} /> },
  { title: "Destination", icon: <GiMountainRoad size={20} /> },
  { title: "Activity", icon: <BiRun size={20} /> },
  { title: "Climate", icon: <FaCloud size={20} /> },
  { title: "Duration", icon: <FaCalendarAlt size={20} /> },
  { title: "Budget", icon: <FaMoneyBill1Wave size={20} /> },
  { title: "Accessibility", icon: <IoAccessibilitySharp size={20} /> },
  { title: "Season", icon: <BsCloudSunFill size={20} /> },
  { title: "Travel Style", icon: <FaUmbrellaBeach size={20} /> },
];
