"use client";

import { Button } from "@nextui-org/react";
import { IconRestore } from "@tabler/icons-react";
import React from "react";

const RefreshBtn = () => {
  return (
    <Button
      variant="bordered"
      className="outline rounded-lg py-1 flex"
      onClick={() => window.location.reload()}
    >
      <div className="flex justify-center items-center text-base gap-3">
        <IconRestore /> Reset Filter
      </div>
    </Button>
  );
};

export default RefreshBtn;
