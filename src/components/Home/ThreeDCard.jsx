"use client";
import React from "react";
import { PinContainer } from "../ui/3d-pin";
import Image from "next/image";

export function ThreeDCard({ href, heading, description, title, src }) {
  return (
    <div className="h-fit w-full flex items-center justify-center ">
      <PinContainer title={title} href={href}>
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[25rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            {heading}
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">{description}</span>
          </div>
          <div className="flex h-[250px] flex-1 w-full mt-4 rounded-lg overflow-hidden">
            <Image src={src} height={500} width={500} className="h-full object-cover"  alt="signup" />
          </div>
        </div>
      </PinContainer>
    </div>
  );
}
