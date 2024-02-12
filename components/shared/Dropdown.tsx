"use client";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const Dropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  let timeout: NodeJS.Timeout | null = null;

  const handleMouseEnter = () => {
    setIsOpen(true);
    if (timeout) {
      clearTimeout(timeout); // Clear the timeout if it exists
    }
  };

  const handleMouseLeave = () => {
    timeout = setTimeout(() => {
      setIsOpen(false);
    }, 500); // 3000 milliseconds = 3 seconds
  };

  const handleMenuMouseEnter = () => {
    if (timeout) {
      clearTimeout(timeout); // Clear the timeout when the mouse enters the menu
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
        Others
        <IoIosArrowDown
          className={`${isOpen ? "rotate-180" : "rotate-0"}  duration-300`}
        />
      </p>

      <div
        onMouseEnter={handleMenuMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`dropdown_menu absolute flex ${
          isOpen
            ? "opacity-100 duration-300 translate-y-0"
            : "opacity-0 duration-500 pointer-events-none -translate-y-[400px]"
        } flex-col rounded-xl shadow-xl p-1 top-[10%] w-[200px]`}
      >
        <span className="dropdown_span">About</span>
        <span className="dropdown_span">Bilito</span>
        <span className="dropdown_span">Why Bilito?</span>
        <span className="dropdown_span">Travel Guide</span>
        <span className="dropdown_span">News</span>
        <span className="dropdown_span">FAQ & Support</span>
      </div>
    </>
  );
};

export default Dropdown;
