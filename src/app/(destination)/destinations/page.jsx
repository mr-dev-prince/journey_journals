import FilterBar from "@/components/Destination/FilterBar";
import { CardHoverEffect } from "@/components/Destination/HoverCard";
import React from "react";

const page = () => {
  return (
    <div className={`min-h-screen md:px-32 w-full flex justify-between gap-16`}>
      <div className="w-[15rem] h-full">
        <FilterBar />
      </div>
      <div className="mt-[12vh] w-full">
        <CardHoverEffect projects={projects} />
      </div>
    </div>
  );
};

export default page;

export const projects = [
  {
    id: "abc",
    title: "Eiffel Tower",
    location: "Paris, France",
    category: "Dining | Relaxing | Cities",
    link: "https://netflix.com",
    src: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGVpZmZlbCUyMHRvd2VyJTIwYXQlMjBuaWdodHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: "def",
    title: "Eiffel Tower",
    location: "Paris, France",
    category: "Dining | Relaxing | Cities",
    link: "https://netflix.com",
    src: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGVpZmZlbCUyMHRvd2VyJTIwYXQlMjBuaWdodHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: "ghi",
    title: "Eiffel Tower",
    location: "Paris, France",
    category: "Dining | Relaxing | Cities",
    link: "https://netflix.com",
    src: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGVpZmZlbCUyMHRvd2VyJTIwYXQlMjBuaWdodHxlbnwwfHwwfHx8MA%3D%3D",
  },
];
