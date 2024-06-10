"use client";
import React, { useState } from "react";
import { FaCaretDown, FaCaretRight } from "react-icons/fa";

const FilterCategory = ({ title, icon, content, category }) => {
  console.log("Category---------->", category);
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <button
      onClick={handleClick}
      className="outline outline-1 relative rounded-3xl flex flex-col py-1 gap-3 items-center justify-between px-3 cursor-pointer w-full"
    >
      <div className="flex w-full justify-between items-center">
        {icon}
        <p className="text-lg capitalize">{title}</p>
        <div>
          {open ? <FaCaretDown size={16} /> : <FaCaretRight size={16} />}
        </div>
      </div>
      {open && (
        <div
          className={`w-full h-fit outline bg-white z-50 overflow-auto no-scroll-bar text-left`}
        >
          <div className="flex flex-wrap w-full gap-2">
            
          </div>
        </div>
      )}
    </button>
  );
};

export default FilterCategory;
