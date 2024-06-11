"use client";

import React, { useCallback, useEffect, useMemo, useState } from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import { FaCaretDown, FaCaretRight } from "react-icons/fa";

export const DropDownComponent = ({ title, icon, category }) => {
  const [selectedKey, setSelectedKey] = useState(title);
  const [open, setOpen] = useState(false);

  const handleClick = useCallback(() => {
    setOpen(!open);
  }, [setOpen, open]);

  const handleSelectionChange = (key) => {
    setSelectedKey(key);
    setOpen(!open);
  };


  return (
    <Dropdown>
      <DropdownTrigger>
        <Button variant="bordered" className="capitalize" onClick={handleClick}>
          <div className="flex w-full justify-between items-center">
            {icon}
            <p className="capitalize text-base">{selectedKey}</p>
            <div>
              {open ? <FaCaretDown size={16} /> : <FaCaretRight size={16} />}
            </div>
          </div>
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        variant="flat"
        disallowEmptySelection
        selectionMode="single"
        selectedKeys={new Set([selectedKey])}
        onSelectionChange={(keys) => handleSelectionChange([...keys][0])}
      >
        {category &&
          category.map((item, idx) => (
            <DropdownItem key={item}>{item}</DropdownItem>
          ))}
      </DropdownMenu>
    </Dropdown>
  );
};

// export const DropDownComponent = ({ title, icon, category }) => {
//   const [open, setOpen] = useState(false);
//   const handleClick = () => {
//     setOpen(!open);
//   };
//   return (
//     <Dropdown>
//       <DropdownTrigger>
//         <Button variant="bordered" onClick={handleClick}>
//           <div className="flex w-full justify-between items-center">
//             {icon}
//             <p className="text-lg capitalize">{title}</p>
//             <div>
//               {open ? <FaCaretDown size={16} /> : <FaCaretRight size={16} />}
//             </div>
//           </div>
//         </Button>
//       </DropdownTrigger>
//       <DropdownMenu aria-label="Static Actions">
//         {category &&
//           category.map((item, idx) => (
//             <DropdownItem key={idx}>{item}</DropdownItem>
//           ))}
//       </DropdownMenu>
//     </Dropdown>
//   );
// };
