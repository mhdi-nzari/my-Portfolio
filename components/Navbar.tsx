"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import CustomButton from "./CustomButton";
import MobileMenu from "./MobileMenu";
import { useCartContext } from "@/context/CartContext";

const Navbar = () => {
  const { cartQty } = useCartContext();

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
    <header ref={menuRef} className={`  transition-all  duration-500`}>
      <div
        className={` container w-screen  ${
          isHeaderFixed
            ? " fixed left-0 right-0 top-0 z-40 rounded-ee-2xl rounded-es-2xl bg-white/50  shadow-default backdrop-blur-2xl"
            : "relative"
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
            <div className="relative hidden lg:flex">
              <span className="flex items-center justify-center">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18.1896 6.00295L15.6 2.55004C15.3514 2.21867 14.8813 2.15152 14.55 2.40004C14.2186 2.64857 14.1514 3.11867 14.4 3.45004L16.3124 6H7.68749L9.59996 3.45004C9.84848 3.11867 9.78133 2.64857 9.44996 2.40004C9.11859 2.15152 8.64848 2.21867 8.39996 2.55004L5.81028 6.00295C3.91171 6.07556 2.40389 7.481 2.06934 9.25H21.9305C21.5959 7.48103 20.0882 6.07561 18.1896 6.00295ZM20.2819 18.808C19.902 20.6666 18.2805 22 16.4001 22H7.59969C5.71933 22 4.09778 20.6666 3.71795 18.808L2.08303 10.808C2.07908 10.7887 2.07527 10.7693 2.07161 10.75H21.9282C21.9245 10.7693 21.9207 10.7887 21.9168 10.808L20.2819 18.808ZM8.99976 13.25C9.41397 13.25 9.74976 13.5858 9.74976 14L9.74976 18C9.74976 18.4142 9.41397 18.75 8.99976 18.75C8.58554 18.75 8.24976 18.4142 8.24976 18L8.24976 14C8.24976 13.5858 8.58554 13.25 8.99976 13.25ZM15.7498 14C15.7498 13.5858 15.414 13.25 14.9998 13.25C14.5855 13.25 14.2498 13.5858 14.2498 14V18C14.2498 18.4142 14.5855 18.75 14.9998 18.75C15.414 18.75 15.7498 18.4142 15.7498 18V14Z"
                    fill="#28303F"
                  />
                </svg>
              </span>

              <div className="absolute -right-3 -top-3  flex h-7 w-7 items-center justify-center rounded-full  border border-white bg-[#2F9461] text-base text-white">
                {cartQty}
              </div>
            </div>
            <CustomButton
              btnType="button"
              containerStyles="burger bg-primary  hover:bg-transparent !px-3 hover:border-primary "
              textStyles="text-white font-normal group-hover:text-primary !text-12 sm:text-sm hover:outline-primary"
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
      </div>
    </header>
  );
};

export default Navbar;
