import Image from "next/image";
import React from "react";

export const ProfileCard = () => {
  return (
    <div className="hover:bg-slate-200 dark:hover:bg-neutral-800 w-full rounded-full p-2 flex gap-3 justify-start items-center">
      <Image
        src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
        height={80}
        width={80}
        alt="profile"
        className=" rounded-full h-12 w-12 object-cover"
      />
      <span>
        <p>Prince Chaurasia</p>
        <p className="text-sm text-slate-500">@shutup_prince</p>
      </span>
    </div>
  );
};
