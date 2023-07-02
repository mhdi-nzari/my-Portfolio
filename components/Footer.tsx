"use client";

import React from "react";
import Newsletter from "./Newsletter";
import Link from "next/link";
import { footerLinks } from "@/constants";

import SwiperCore, { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import 'swiper/css/pagination';

import Image from "next/image";
SwiperCore.use([Autoplay, Pagination]);

const Footer = () => {
  const showZPTrust = () => {
    window.open(
      "https://www.zarinpal.com/trustPage/" + window.location.hostname,
      "width=450, height=600, scrollbars=no, resizable=no"
    );
  };

  function gregorianToJalaliYear(gy: any) {
    var jy = gy - 621;
    return jy;
  }

  var gregorianYear = 2023;
  var jalaliYear = gregorianToJalaliYear(gregorianYear);

  return (
    <footer className="relative mt-48 bg-slate-900">
      <Newsletter />
      <div className="container  grid w-full grid-cols-1 pb-10 pt-60 md:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-wrap gap-4">
          <div>
            <div className="flex flex-1 flex-col pb-8">
              <p className="pb-5 text-right text-lg font-semibold text-white">
                من کی هستم ؟
              </p>
              <p className="text-right text-lg font-light text-white">
                من مهدی نظری طراح و برنامه نویس وبسایت یا بقولی فرانت اند
                دولوپرم که از سال ۱۳۹۸ تا الان توی حوضه تکنولوژی و استارت آپ
                دارم فعالیت میکنم . هدف من کمک به علاقمندانی هست که مسیر برنامه
                نویسی رو میخوان طی کنن و بدنبال منتور و مشاور برای حل چالش ها و
                داشتن یه راهنمای مطمئن برای مسیرشونه در کنار اون تو...
              </p>
            </div>
            <div className="w-full flex-1">
              <ul className="flex w-full flex-col items-start [&>*]:mb-5">
                <li className="w-full">
                  <a href="" className="flex w-full gap-2">
                    <span>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M21 10.8889C21 15.7981 15.375 22 12 22C8.625 22 3 15.7981 3 10.8889C3 5.97969 7.02944 2 12 2C16.9706 2 21 5.97969 21 10.8889Z"
                          stroke="#F1891E"
                          strokeWidth="1.5"
                        />
                        <path
                          d="M15 11C15 12.6569 13.6569 14 12 14C10.3431 14 9 12.6569 9 11C9 9.34315 10.3431 8 12 8C13.6569 8 15 9.34315 15 11Z"
                          stroke="#F1891E"
                          strokeWidth="1.5"
                        />
                      </svg>
                    </span>
                    <p className=" text-base font-normal text-grey-300">
                      ایران،اصفهان،کاشان
                    </p>
                  </a>
                </li>

                <li className="w-full">
                  <a href="tel:+9809162890084" className="flex w-full gap-2">
                    <span>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="5"
                          y="2"
                          width="14"
                          height="20"
                          rx="3"
                          stroke="#F1891E"
                          strokeWidth="1.5"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M11 19H13"
                          stroke="#F1891E"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                      </svg>
                    </span>
                    <p className=" text-base font-normal text-grey-300">
                      09162890084
                    </p>
                  </a>
                </li>

                <li className="w-full">
                  <a
                    href="mailto:info@mahdi-nazari.ir"
                    className="flex w-full gap-2"
                  >
                    <span>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="2"
                          y="3"
                          width="20"
                          height="18"
                          rx="4"
                          stroke="#F1891E"
                          strokeWidth="1.5"
                        />
                        <path
                          d="M2 7L9.50122 13.001C10.9621 14.1697 13.0379 14.1697 14.4988 13.001L22 7"
                          stroke="#F1891E"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <p className=" text-base font-normal text-grey-300">
                      info@mahdi-nazari.ir
                    </p>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* quick access */}
          <div className="flex-1 ">
            <p className="pb-5 text-right text-lg font-semibold text-white">
              دسترسی سریع
            </p>

            <ul className="flex flex-col gap-4">
              {footerLinks[0].links.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.url}
                    className="text-base font-normal text-[#D6D6D6] transition-all duration-500 hover:text-white"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* namad */}
          <div className="flex-1 ">
            <p className="pb-5 text-right text-lg font-semibold text-white">
              مجوزها
            </p>
            <div className="h-[180px] w-40 rounded-2xl bg-[#16191B] p-3">
              <Swiper
                modules={[Autoplay, Pagination]}
                spaceBetween={50}
                slidesPerView={1}
                centeredSlides={true}
                pagination={{
                  clickable: true,
                  el: ".swiper-pagination",
                }}
                autoplay={{
                  delay: 4000,
                  disableOnInteraction: false,
                }}
              >
                {/* samandehi */}
                <SwiperSlide>
                  <a href={""} title="لوگو ساماندهی" className="h-44 w-full">
                    <Image
                      src={"/images/samandehi.svg"}
                      width={127}
                      loading="lazy"
                      height={127}
                      alt="samandehi logo"
                    />
                  </a>
                </SwiperSlide>
                {/* zarinpal */}
                <SwiperSlide>
                  <div
                    onClick={showZPTrust}
                    title=" زرین پال - دروازه پرداخت معتبر"
                    className="h-44 w-full"
                  >
                    <Image
                      src={"/images/zaringPal.svg"}
                      width={127}
                      loading="lazy"
                      height={127}
                      className="h-[127px] w-full"
                      alt="zarinpal logo"
                    />
                  </div>
                </SwiperSlide>

                {/* namad */}
                <SwiperSlide>
                  <a target="_blank" title="اینماد" className="h-44 w-full">
                    <Image
                      src={"/images/enamad_ico.png"}
                      width={127}
                      loading="lazy"
                      height={127}
                      className="h-[127px] w-full"
                      alt="zarinpal logo"
                    />
                  </a>
                </SwiperSlide>
              <div className="swiper-pagination" id="footer-pagination"></div>

              </Swiper>
            </div>
          </div>

          {/* cast */}
          <div className="w-full">
            <p className="pb-5 text-right text-lg font-semibold text-white">
              آخرین پادکست هفته
            </p>
            <div></div>
          </div>

          <div className="w-full">
            <p className="pb-5 text-right text-lg font-semibold text-white">
              شبکه های اجتماعی
            </p>
            <ul className="flex w-full flex-wrap gap-3">
              {/* instagram */}
              <li className="rounded-xl border-2 border-transparent bg-[rgba(14,16,17,0.56)] p-2 transition-all duration-500 hover:-translate-y-2 hover:border-white hover:bg-primary">
                <a href="">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="2.33331"
                      y="2.33325"
                      width="23.3333"
                      height="23.3333"
                      rx="4"
                      stroke="white"
                      stroke-width="2"
                    />
                    <ellipse
                      cx="21"
                      cy="6.99992"
                      rx="1.16667"
                      ry="1.16667"
                      fill="white"
                    />
                    <circle
                      cx="14"
                      cy="14.0001"
                      r="5.83333"
                      stroke="white"
                      stroke-width="2"
                    />
                  </svg>
                </a>
              </li>

              <li className="rounded-xl border-2 border-transparent bg-[rgba(14,16,17,0.56)] p-2 transition-all duration-500 hover:-translate-y-2 hover:border-white hover:bg-primary">
                <a href="">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14 25.6666C20.4434 25.6666 25.6667 20.4432 25.6667 13.9999C25.6667 7.5566 20.4434 2.33325 14 2.33325C7.55672 2.33325 2.33337 7.5566 2.33337 13.9999C2.33337 15.7633 2.72458 17.4352 3.42493 18.9338L2.55636 24.2911C2.44684 24.9665 3.03288 25.55 3.70787 25.4375L9.01816 24.5525C10.529 25.267 12.2178 25.6666 14 25.6666Z"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="square"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M18.6667 17.6295V17.1206C18.6667 16.4885 18.2818 15.92 17.6949 15.6853L17.1506 15.4676C16.5421 15.2242 15.8486 15.4878 15.5556 16.074C15.5556 16.074 14.2593 15.8147 13.2222 14.7777C12.1852 13.7407 11.9259 12.4444 11.9259 12.4444C12.5121 12.1513 12.7758 11.4578 12.5324 10.8493L12.3147 10.305C12.0799 9.71812 11.5114 9.33325 10.8793 9.33325H10.3704C9.79764 9.33325 9.33334 9.79755 9.33334 10.3703C9.33334 14.9522 13.0477 18.6666 17.6296 18.6666C18.2024 18.6666 18.6667 18.2023 18.6667 17.6295Z"
                      fill="white"
                    />
                  </svg>
                </a>
              </li>
              <li className="rounded-xl border-2 border-transparent bg-[rgba(14,16,17,0.56)] p-2 transition-all duration-500 hover:-translate-y-2 hover:border-white hover:bg-primary">
                <a href="">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.5604 12.9444L22.5138 5.18535C23.3581 4.82047 24.2729 5.53048 24.129 6.4389L21.6742 21.9275C21.5226 22.8843 20.3386 23.2502 19.6736 22.5458L15.7844 18.3982C14.9944 17.5614 14.9325 16.2736 15.6385 15.3648L18.3437 11.5846C18.5063 11.3753 18.2496 11.1 18.0295 11.2477L12.3743 15.0415C11.4146 15.6853 10.2502 15.9501 9.10647 15.7847L4.85623 15.17C3.69192 15.0016 3.4805 13.4111 4.5604 12.9444Z"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </a>
              </li>

              <li className="rounded-xl border-2 border-transparent bg-[rgba(14,16,17,0.56)] p-2 transition-all duration-500 hover:-translate-y-2 hover:border-white hover:bg-primary">
                <a href="">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="4.66668"
                      cy="4.66659"
                      r="2.33333"
                      stroke="white"
                      stroke-width="2"
                    />
                    <path
                      d="M2.33334 9.91675H7.00001V25.6667H2.33334V9.91675Z"
                      stroke="white"
                      stroke-width="2"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M10.5 25.6667H15.1667V17.5001C15.1667 16.2114 16.2113 15.1667 17.5 15.1667C18.7887 15.1667 19.8333 16.2114 19.8333 17.5001V25.6667H24.5V17.5001C24.5 13.6341 21.366 10.5001 17.5 10.5001C16.6819 10.5001 15.8965 10.6404 15.1667 10.8984V9.91675H10.5V25.6667ZM10.5 25.6667V17.5001"
                      stroke="white"
                      stroke-width="2"
                      stroke-linejoin="round"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-grey-900 px-7 py-6 text-center text-xs text-white ">
        زندگی مثل کدنویسی هست هر چه ساده تر باشه ، بیشترین کارایی رو خواهد داشت
        . پس بیایید کدهامون رو ساده و قابل فهم بنویسیم تا همه بتونن به کدهامون
        لبخند بزنن و از نتایجشون لذت ببرن ❤️
      </div>
    </footer>
  );
};

export default Footer;
