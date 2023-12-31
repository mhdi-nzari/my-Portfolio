import { navBarItem } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React, { useContext, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { activeMenyProps } from "@/types";
import { useCartContext } from "@/context/CartContext";
const MobileMenu: React.FC<activeMenyProps> = ({
  activeMenu,
  setActiveMenu,
  menuClicked,
  setMenuClicked,
}: activeMenyProps) => {
  const pathname = usePathname();
  const { cartQty } = useCartContext();
  let menuRef = useRef<HTMLDivElement | null>(null);

  const handleClickOutside = (event: MouseEvent | TouchEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setActiveMenu(false);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (
        menuClicked &&
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
        setActiveMenu(false);
        setMenuClicked(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [menuClicked, setActiveMenu, setMenuClicked]);

  return (
    <>
      <div
        ref={menuRef}
        className={`absolute left-0 right-0 top-28 mx-auto block h-[500px] w-[90%] rounded-[24px] bg-white p-10  shadow-sm transition-all  duration-500 lg:hidden   ${
          activeMenu
            ? "visible -translate-y-0 opacity-100 "
            : "invisible -translate-y-5 opacity-0"
        }`}
      >
        <nav className="flex h-full w-full flex-col">
          <div className=" ">
            {navBarItem.shop.map((item, i) => (
              <Link
                href={item.url}
                key={i}
                className="relative flex"
                aria-label="basket-shop"
              >
                <span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className=""
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M16.1896 4.00295L13.6 0.550044C13.3514 0.218673 12.8813 0.151516 12.55 0.400044C12.2186 0.648572 12.1514 1.11867 12.4 1.45004L14.3124 4H5.68749L7.59996 1.45004C7.84848 1.11867 7.78133 0.648572 7.44996 0.400044C7.11859 0.151516 6.64848 0.218673 6.39996 0.550044L3.81028 4.00295C1.91171 4.07556 0.403886 5.481 0.0693359 7.25H19.9305C19.5959 5.48103 18.0882 4.07561 16.1896 4.00295ZM18.2819 16.808C17.902 18.6666 16.2805 20 14.4001 20H5.59969C3.71933 20 2.09778 18.6666 1.71795 16.808L0.0830319 8.808C0.0790791 8.78865 0.0752712 8.76932 0.0716073 8.75H19.9282C19.9245 8.76932 19.9207 8.78865 19.9168 8.80799L18.2819 16.808ZM6.99976 11.25C7.41397 11.25 7.74976 11.5858 7.74976 12L7.74976 16C7.74976 16.4142 7.41397 16.75 6.99976 16.75C6.58554 16.75 6.24976 16.4142 6.24976 16L6.24976 12C6.24976 11.5858 6.58554 11.25 6.99976 11.25ZM13.7498 12C13.7498 11.5858 13.414 11.25 12.9998 11.25C12.5855 11.25 12.2498 11.5858 12.2498 12V16C12.2498 16.4142 12.5855 16.75 12.9998 16.75C13.414 16.75 13.7498 16.4142 13.7498 16V12Z"
                      fill="#28303F"
                    />
                  </svg>
                </span>

                <span className="absolute -right-[0.7rem] -top-[0.75rem] flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-basketGreen text-xs text-white">
                 {cartQty}
                </span>
                <p className="pr-4 text-16 font-light text-gray-900">
                  {item.title}
                </p>
              </Link>
            ))}

            <div className="w-full pt-5">
              <Image
                width={327}
                height={1}
                src="/images/Line_navbar.png"
                loading="lazy"
                alt="line"
                className="h-full w-full"
              />
            </div>
          </div>

          <div className="h-full w-full">
            <ul className="flex w-full flex-col justify-between pb-5">
              {navBarItem.menu.map((item, i) => (
                <li
                  key={i}
                  className="flex w-full border-b border-gray-100 py-5 last:border-0 "
                >
                  <div>
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={24}
                      height={24}
                      loading="lazy"
                    />
                  </div>
                  <Link
                    href={item.url}
                    className={`pr-3 text-16 transition-all duration-300 ${
                      pathname === item.url
                        ? "font-semibold  text-primary"
                        : "font-normal text-[#757B8A]"
                    }`}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default MobileMenu;
