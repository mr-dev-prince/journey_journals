"use client";

import { PlaceholdersAndVanishInput } from "./animatedInput";

export function AnimatedInput() {
  const placeholders = [
    "Search Tags",
    "Search Locations",
    "Search Your Favourite Traveller",
  ];

  const handleChange = (e) => {
    console.log(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
  };
  return (
    <div className="flex flex-col justify-center items-center">
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={onSubmit}
      />
    </div>
  );
}
