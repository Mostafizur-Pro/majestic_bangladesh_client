"use client";
import { useState, ReactNode } from "react";
import { IoIosArrowDown } from "react-icons/io";

interface MenuItem {
  name: string;
  path: string;
}

interface DropdownProps {
  children: ReactNode;
  icon?: ReactNode;
  menu?: MenuItem[];
  width?: string;
}

const Dropdown: React.FC<DropdownProps> = ({ children, icon, menu, width }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  let timeout: NodeJS.Timeout | null = null;

  const handleMouseEnter = () => {
    setIsOpen(true);
    if (timeout) {
      clearTimeout(timeout);
    }
  };

  const handleMouseLeave = () => {
    timeout = setTimeout(() => {
      setIsOpen(false);
    }, 500);
  };

  const handleMenuMouseEnter = () => {
    if (timeout) {
      clearTimeout(timeout);
      timeout = null;
    }
  };

  return (
    <>
      <p
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="flex items-center gap-2 link_hover cursor-pointer"
      >
        {children}
        {icon ? (
          <IoIosArrowDown
            className={`${isOpen ? "rotate-180" : "rotate-0"}  duration-300`}
          />
        ) : (
          ""
        )}
      </p>

      <div
        onMouseEnter={handleMenuMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`dropdown_menu absolute flex ${
          isOpen
            ? "opacity-100 duration-300 translate-y-0"
            : "opacity-0 duration-500 pointer-events-none -translate-y-[400px]"
        } flex-col rounded-xl shadow-xl p-1 top-[10%] ${
          width ? width : "w-[200px]"
        }`}
      >
        {/* change span to Link when pages are added */}
        {menu?.map((link, index) => (
          <span key={index} className="dropdown_span">
            {link.name}
          </span>
        ))}
      </div>
    </>
  );
};

export default Dropdown;
