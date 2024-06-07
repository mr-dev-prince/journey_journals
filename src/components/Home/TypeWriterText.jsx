"use client";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
export function TypewriterText() {
  const words = [
    {
      text: "Journey",
    },
    {
      text: "Journals."
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-fit">
      <TypewriterEffectSmooth words={words} />
    </div>
  );
}
