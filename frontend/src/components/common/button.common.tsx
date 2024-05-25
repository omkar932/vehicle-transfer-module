import React from "react";

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset" | undefined;
}

const CommonButton: React.FC<ButtonProps> = ({
  onClick,
  children,
  className,
  type = "button",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${className} inline-block px-4 py-2 text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 bg-secondary text-primary hover:bg-accent hover:text-[#6B7280]`}
    >
      {children}
    </button>
  );
};

export default CommonButton;
