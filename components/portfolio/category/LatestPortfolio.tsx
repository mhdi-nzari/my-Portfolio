"use client";

import React, { useRef, useState } from "react";
import CustomButton from "@/components/CustomButton";

import { Navigation, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import PortfolioItem from "./PortfolioItem";

const LatestPortfolio = () => {
  const navigationNextRef = useRef(null);
  const navigationPrevRef = useRef(null);

  const [isFirstSlide, setIsFirstSlide] = useState(true);
  const [isLastSlide, setIsLastSlide] = useState(false);

  const handleReachEnd = () => {
    setIsLastSlide(true);
    setIsFirstSlide(false);
  };

  const handleSlideChange = () => {
    setIsFirstSlide(false);
    setIsLastSlide(false);
  };

  return (
    <div>
      <Swiper
        modules={[Autoplay, Navigation]}
        spaceBetween={50}
        slidesPerView={1}
        centeredSlides={true}
        dir="rtl"
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        onBeforeInit={(swiper) => {
          if (navigationNextRef.current && navigationPrevRef.current) {
            swiper.navigation.nextEl = navigationNextRef.current;
            swiper.navigation.prevEl = navigationPrevRef.current;
          }
        }}
        onReachEnd={handleReachEnd}
        onSlideChange={handleSlideChange}
      >
        <SwiperSlide>
          <PortfolioItem />
        </SwiperSlide>
        <SwiperSlide>
          <PortfolioItem />
        </SwiperSlide>

        <SwiperSlide>
          <PortfolioItem />
        </SwiperSlide>
      </Swiper>

      <div className="flex w-full items-center justify-center gap-5 pt-10">
        <button ref={navigationNextRef}>
          <svg
            width="56"
            height="56"
            viewBox="0 0 56 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="28" cy="28" r="28" fill={"#E5E7EA"} />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M30.7071 18.2929C30.3166 17.9024 29.6834 17.9024 29.2929 18.2929C28.9024 18.6834 28.9024 19.3166 29.2929 19.7071L36.5858 27H17C16.4477 27 16 27.4477 16 28C16 28.5523 16.4477 29 17 29H36.5858L29.2929 36.2929C28.9024 36.6834 28.9024 37.3166 29.2929 37.7071C29.6834 38.0976 30.3166 38.0976 30.7071 37.7071L39.7071 28.7071C39.8902 28.524 39.9874 28.2877 39.9989 28.048C39.9996 28.032 40 28.016 40 28M40 27.9908C39.9976 27.7379 39.9 27.4858 39.7071 27.2929L30.7071 18.2929"
              fill="#676E76"
            />
          </svg>
        </button>
        <button ref={navigationPrevRef}>
          <svg
            width="56"
            height="56"
            viewBox="0 0 56 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="28"
              cy="28"
              r="28"
              transform="matrix(-1 0 0 1 56 0)"
              fill="#F1891E"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M25.2929 18.2929C25.6834 17.9024 26.3166 17.9024 26.7071 18.2929C27.0976 18.6834 27.0976 19.3166 26.7071 19.7071L19.4142 27H39C39.5523 27 40 27.4477 40 28C40 28.5523 39.5523 29 39 29H19.4142L26.7071 36.2929C27.0976 36.6834 27.0976 37.3166 26.7071 37.7071C26.3166 38.0976 25.6834 38.0976 25.2929 37.7071L16.2929 28.7071C16.1098 28.524 16.0126 28.2877 16.0011 28.048C16.0004 28.032 16 28.016 16 28M16 27.9908C16.0024 27.7379 16.1 27.4858 16.2929 27.2929L25.2929 18.2929"
              fill="white"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default LatestPortfolio;
