import Image from "next/image";
import Link from "next/link";
import React from "react";

const MobileMenu = () => {
  return (
    <>
      <div className="absolute top-28 left-0 w-full h-[500px] p-10 bg-white shadow-sm rounded-tr-[24px] rounded-tl-[24px]  block md:hidden">
        <nav className="w-full flex flex-col">
          <div className="pb-7 ">
            <button
              type="button"
              className="relative flex"
              aria-label="basket-shop"
            >
              <Image
                src={"/images/icon/basket_ico.svg"}
                width={20}
                height={20}
                alt="basket shop"
              />

              <span className="bg-basketGreen rounded-full flex justify-center items-center w-6 h-6 text-xs absolute -top-[0.75rem] -right-[0.7rem] text-white border-2 border-white">
                4
              </span>
              <p className="text-16 text-gray-900 font-light pr-4">سبد خرید</p>
            </button>
          </div>
          <div className="w-full">
            <img src="/images/Line_navbar.png"  loading="lazy" alt="line" />
          </div>
        </nav>
      </div>
    </>
  );
};

export default MobileMenu;
