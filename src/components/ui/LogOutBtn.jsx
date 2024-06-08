import { IconLogout2 } from "@tabler/icons-react";
import React from "react";

const LogOutBtn = () => {
  return (
    <button className="flex gap-3 ring-1 p-2 rounded-lg hover:bg-slate-200 dark:hover:bg-neutral-800">
      <IconLogout2 />
      <p>Log Out</p>
    </button>
  );
};

export default LogOutBtn;
