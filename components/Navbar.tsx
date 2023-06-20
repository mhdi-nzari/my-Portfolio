"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import CustomButton from "./CustomButton";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(false);
  const [menuClicked, setMenuClicked] = useState(false);


  return (
    <header className="w-full z-40 container relative ">
      <nav className="flex items-center justify-between py-7 gap-x-5">
        <Link href={"/"}>
          <Image
            alt="logo"
            src="/images/logo.png"
            width={77}
            loading="lazy"
            height={39}
          />
        </Link>

        <div className="flex gap-5 items-center justify-center ">
          <CustomButton
            btnType="button"
            containerStyles="burger bg-primary hover:bg-transparent !px-3"
            textStyles="text-white font-light !text-12 sm:text-14 "
            title="ثبت نام | ورود"
          />
          <button
            type="button"
            className="flex flex-col justify-center lg:hidden gap-1 w-8 h-8 "
            onClick={() => {
              setActiveMenu((prevActiveMenu) => !prevActiveMenu);
              setMenuClicked(true);
            }}
          >
            <span
              className={`w-full h-0.5 bg-gray-800 rounded-full transition-default duration-500 ${
                activeMenu ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              className={`w-full h-0.5 bg-gray-800 rounded-full transition-default duration-500 ${
                activeMenu
                  ? "rotate-45 translate-x- translate-y-[0.2rem]"
                  : "rotate-0"
              }`}
            ></span>
            <span
              className={`w-full h-0.5 bg-gray-800 rounded-full transition-default duration-500  ${
                activeMenu
                  ? "-rotate-45 translate-x-[0.0rem] -translate-y-[0.2rem]"
                  : "rotate-0"
              }`}
            ></span>
            <span
              className={`w-full h-0.5 bg-gray-800 rounded-full transition-default duration-500 ${
                activeMenu ? "opacity-0" : "opacity-100"
              }`}
            ></span>
          </button>
        </div>
      </nav>
      <MobileMenu activeMenu={activeMenu} setActiveMenu={setActiveMenu} menuClicked={menuClicked} setMenuClicked={setMenuClicked}  />
    </header>
  );
};

export default Navbar;
