"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "../ui/aurora-background";
import { dmSerif } from "@/utils/font";

export function BackGroundAurora() {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-8 items-center justify-center px-4"
      >
        <div>
          <p className={`dark:text-white ${dmSerif} text-7xl`}>
            Discover Your Next Adventure
          </p>
        </div>
        <div>
          <p className={`dark:text-white ${dmSerif} text-xl`}>
            Explore breathtaking destinations and add them to your bucket list
          </p>
        </div>
        <div>
          <button className="border text-lg font-medium relative border-slate-700 dark:border-white/[0.2] text-black dark:text-white px-4 py-1.5 rounded-full hover:scale-95 duration-150">
            <span>Start Exploring</span>
            <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" />
          </button>
        </div>
      </motion.div>
    </AuroraBackground>
  );
}
