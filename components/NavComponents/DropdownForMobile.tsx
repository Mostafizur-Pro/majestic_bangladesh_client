import { Disclosure } from "@headlessui/react";
import { IoIosArrowDown } from "react-icons/io";

interface MenuItem {
  name: string;
  path: string;
}

interface DropdownForMobileProps {
  children: React.ReactNode;
  menu?: MenuItem[];
}

const DropdownForMobile: React.FC<DropdownForMobileProps> = ({ children, menu }) => {
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button className="px-2 hover:bg-[#1D91CC] hover:text-white duration-300 justify-between">
            <span className="text-lg">{children}</span>
            <IoIosArrowDown
              className={`${open ? "rotate-180 transform" : ""} `}
            />
          </Disclosure.Button>
          <Disclosure.Panel className="text-lg bg-gray-200 flex flex-col items-start">
            {
                menu?.map((link, index) => <span key={index} className="py-1">{link.name}</span>)
            }
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default DropdownForMobile;
