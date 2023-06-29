import { customButtonProps } from "@/types";
import Image from "next/image";
import React from "react";

const CustomButton = ({
  title,
  leftIcon,
  containerStyles,
  handleClick,
  textStyles,
  isDisabled,
  btnType,
  children,
 
}: customButtonProps) => {
  return (
    <button
    
      className={`custom__btn group outline outline-offset-2 outline-2 outline-transparent hover:outline-primary hover:-translate-y-1 ${containerStyles ? containerStyles : ""}`}
      type={btnType || "button"}
      disabled={isDisabled}
      onClick={handleClick}
      
    >
      {children}
      <span className={textStyles}>{title}</span>

      {leftIcon && (
        <div className="relative w-6 h-6">
          <Image
            src={leftIcon}
            alt="arrow_left"
            fill
            className="object-contain"
          />
        </div>
      )}
    </button>
  );
};

export default CustomButton;
