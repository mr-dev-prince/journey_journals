"use client";
import React from "react";
import { FloatingNav } from "../ui/floating-navbar";
import { NavList } from "@/constants/Navigation";
import { roboto } from "@/utils/font";

export function FloatingNavBar() {
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={NavList} className={`md:gap-10 font-bold ${roboto}`} />
    </div>
  );
}
