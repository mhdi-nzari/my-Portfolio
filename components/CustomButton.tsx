import { customButtonProps } from "@/types";
import Image from "next/image";
import Link from "next/link";
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
  link
}: customButtonProps) => {


  return (
    <Link href={link || ""}>
      <button
        className={`custom__btn group outline outline-2 outline-offset-2 outline-transparent hover:-translate-y-1 hover:outline-primary  ${
          containerStyles ? containerStyles : ""
        }`}
        type={btnType || "button"}
        disabled={isDisabled}
        onClick={handleClick}
      >
        {children}
        <span className={textStyles}>{title}</span>

        {leftIcon && (
          <div className="relative h-6 w-6">
            <Image
              src={leftIcon}
              alt="arrow_left"
              fill
              loading="lazy"
              className="object-contain"
            />
          </div>
        )}
      </button>
    </Link>
  );
};

export default CustomButton;
