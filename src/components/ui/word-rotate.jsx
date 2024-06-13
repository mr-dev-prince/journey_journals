"use client";

import { cn } from "@/utils/cn";
import { dmSerif } from "@/utils/font";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function WordRotate({
  quotes,
  duration = 5000,
  framerProps = {
    initial: { opacity: 0, y: -50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 50 },
    transition: { duration: 0.5, ease: "easeOut" },
  },
  className,
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, duration);

    // Clean up interval on unmount
    return () => clearInterval(interval);
  }, [quotes, duration]);

  return (
    <div className={`overflow-hidden py-2 ${dmSerif}`}>
      <AnimatePresence mode="wait">
        <motion.h1
          key={quotes[index]}
          className={cn(`text-left`, className)}
          {...framerProps}
        >
          {quotes[index]}
        </motion.h1>
      </AnimatePresence>
    </div>
  );
}
