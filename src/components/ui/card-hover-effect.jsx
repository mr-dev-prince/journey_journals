"use client";

import { cn } from "@/utils/cn";
import { IconCategory2, IconMapPin, IconStar, IconStarFilled } from "@tabler/icons-react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export const HoverEffect = ({ items, className, src }) => {
  let [hoveredIndex, setHoveredIndex] = useState();

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 py-5",
        className
      )}
    >
      {items.map((item, idx) => (
        <Link
          href={`/destinations/${item.id}`}
          key={item && item.link}
          className="relative group p-2 block h-[20rem] w-[21rem]"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block  rounded-md"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <CardContent content={item} />
          </Card>
        </Link>
      ))}
    </div>
  );
};

export const Card = ({ className, children }) => {
  return (
    <div
      className={cn(
        "rounded-lg h-full w-full overflow-hidden bg-black  border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20 ",
        className
      )}
    >
      <div className="relative z-50 ">
        <div className="p-2">{children}</div>
      </div>
    </div>
  );
};

export const CardContent = ({ content, className, children }) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="h-[80%] w-full object-cover outline-white">
        {content && (
          <Image
            className="h-full w-full object-cover rounded-md"
            src={content.src}
            height={500}
            width={500}
            alt="img"
          />
        )}
      </div>
      <div className="h-[20%]">
        {content && (
          <div className="flex flex-col gap-1 justify-start">
            <div className="flex justify-between items-center text-white">
              <p className="text-xl ">{content.title}</p>
              <span className="flex justify-center items-center gap-1 text-yellow-500">
                <IconStarFilled size={16} />
                <p>4.5</p>
              </span>
            </div>
            <span className="flex justify-center items-center w-fit gap-2 text-slate-400">
              <IconMapPin size={16} />
              <p className="">{content.location}</p>
            </span>
            <span className="flex justify-center items-center w-fit gap-2 text-slate-400">
              <IconCategory2 size={16} />
              <p>{content.category}</p>
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
