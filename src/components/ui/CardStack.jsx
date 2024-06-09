"use client";
import { CardStack } from "../ui/card-stack";

export function CardStackComponent() {
  return (
    <div className="flex items-center justify-center w-full">
      <CardStack items={CARDS} />
    </div>
  );
}

const CARDS = [
  {
    id: 0,
    img: "https://plus.unsplash.com/premium_photo-1679865370898-79814beb3c33?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dHJhdmVsbGluZ3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1533850595620-7b1711221751?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dHJhdmVsbGluZ3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dHJhdmVsbGluZ3xlbnwwfHwwfHx8MA%3D%3D",
  },
];
