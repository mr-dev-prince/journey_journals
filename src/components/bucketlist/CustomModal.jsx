"use client";

import { useCustomModal } from "@/hooks/useCustomModal";
import React from "react";

const CustomModal = () => {
  const isModalOpen = useCustomModal((state) => state.isModalOpen);

  console.log("modal-------->", isModalOpen);
  return (
    <>
      <div className="fixed top-0 bg-transparent z-50 h-screen w-full flex justify-center items-center">
        <div className="h-[70vh] w-[40rem] outline rounded-xl"></div>
      </div>
    </>
  );
};

export default CustomModal;
