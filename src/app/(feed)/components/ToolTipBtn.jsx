import React from "react";

const ToolTipBtn = ({ title, icon, count }) => {
  return (
    <button className="flex justify-center items-center gap-1 group capitalize hover:text-blue-600 transition relative">
      {icon}
      {title}
      <span className="absolute top-0 opacity-0 group-hover:opacity-100 group-hover:-top-6 transition-all duration-300 bg-blue-600 text-white px-2 py-0.5 rounded-lg">
        <p className="text-xs">{count}</p>
      </span>
    </button>
  );
};

export default ToolTipBtn;
