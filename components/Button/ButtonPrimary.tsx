 
import React, { ReactNode, CSSProperties, MouseEvent } from 'react';

interface ButtonPrimaryProps {
  children: ReactNode;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  style?: CSSProperties;
  type?: "button" | "submit" | "reset";
  styleReverse?: boolean;
}

const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({
  children,
  onClick,
  style,
  type = "button",
  styleReverse = false,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`inline-block py-1 md:py-2 lg:py-3 px-4 md:px-6 lg:px-9 my-1 transition duration-300 hover:shadow-md rounded-md ${
        styleReverse
        ? "bg-white text-blue-500 border-blue-500 hover:bg-blue-500 border hover:border-transparent hover:text-white font-bold"
        : "hover:bg-white hover:text-blue-500 hover:border-blue-500 bg-blue-500 border border-transparent text-white"
      } ${style}`}
    >
      {children}
    </button>
  );
};

export default ButtonPrimary;