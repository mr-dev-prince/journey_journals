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
import FilterCategory from "./FilterCategory";

const FilterBar = () => {
  const open = 1;
  return (
    <div className="w-[15rem] h-full pt-[8rem] fixed top-0 overflow-auto no-scroll-bar">
      <div className="w-full text-center">
        <p className={`text-xl ${dmSerif} tracking-wide`}>
          Filter your destinations
        </p>
      </div>
      <div className="h-full p-3 flex flex-col gap-4 ">
        {CategoryList.map((item, idx) => (
          <FilterCategory
            key={idx}
            title={item.title}
            icon={item.icon}
            category={item.category}
          />
        ))}
      </div>
    </div>
  );
};

export default FilterBar;

export const CategoryList = [
  {
    title: "Region",
    icon: <IoMdGlobe size={24} />,
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
  { title: "Country", icon: <FaFlag size={24} /> },
  { title: "Destination", icon: <GiMountainRoad size={24} /> },
  { title: "Activity", icon: <BiRun size={24} /> },
  { title: "Climate", icon: <FaCloud size={24} /> },
  { title: "Duration", icon: <FaCalendarAlt size={24} /> },
  { title: "Budget", icon: <FaMoneyBill1Wave size={24} /> },
  { title: "Accessibility", icon: <IoAccessibilitySharp size={24} /> },
  { title: "Season", icon: <BsCloudSunFill size={24} /> },
  { title: "Travel Style", icon: <FaUmbrellaBeach size={24} /> },
];
