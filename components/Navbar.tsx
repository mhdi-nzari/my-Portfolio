"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import CustomButton from "./CustomButton";
import MobileMenu from "./MobileMenu";


const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(false);
  const [menuClicked, setMenuClicked] = useState(false);
  const menuRef = useRef(null);
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);

  useEffect(() => {
  

    const handleScroll = () => {
      const scrollY = window.scrollY,
        threshold = 100;

      setIsHeaderFixed(scrollY >= threshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      ref={menuRef}
      className={`container z-40 w-full transition-all  duration-500 ${
        isHeaderFixed ? "fixed top-0 bg-white shadow-default  rounded-ee-2xl rounded-es-2xl" : "relative"
      }`}
    >
      <nav
        className={`flex items-center justify-between gap-x-5 ${
          isHeaderFixed ? "py-4" : "py-7"
        }`}
      >
        <Link href={"/"}>
          <Image
            alt="logo"
            src="/images/logo.png"
            width={77}
            loading="lazy"
            height={39}
          />
        </Link>

        <div className="flex items-center justify-center gap-5 ">
          <CustomButton
            btnType="button"
            containerStyles="burger bg-primary  hover:bg-transparent !px-3 hover:border-primary "
            textStyles="text-white font-normal group-hover:text-primary !text-12 sm:text-sm "
            title="ثبت نام | ورود"
          />
          <button
            type="button"
            className="flex h-8 w-8 flex-col justify-center gap-1 lg:hidden "
            onClick={() => {
              setActiveMenu((prevActiveMenu) => !prevActiveMenu);
              setMenuClicked(true);
            }}
          >
            <span
              className={`transition-default h-0.5 w-full rounded-full bg-gray-800 duration-500 ${
                activeMenu ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              className={`transition-default h-0.5 w-full rounded-full bg-gray-800 duration-500 ${
                activeMenu
                  ? "translate-x- translate-y-[0.2rem] rotate-45"
                  : "rotate-0"
              }`}
            ></span>
            <span
              className={`transition-default h-0.5 w-full rounded-full bg-gray-800 duration-500  ${
                activeMenu
                  ? "-translate-y-[0.2rem] translate-x-[0.0rem] -rotate-45"
                  : "rotate-0"
              }`}
            ></span>
            <span
              className={`transition-default h-0.5 w-full rounded-full bg-gray-800 duration-500 ${
                activeMenu ? "opacity-0" : "opacity-100"
              }`}
            ></span>
          </button>
        </div>
      </nav>
      <MobileMenu
        activeMenu={activeMenu}
        setActiveMenu={setActiveMenu}
        menuClicked={menuClicked}
        setMenuClicked={setMenuClicked}
      />
    </header>
  );
};

export default Navbar;
