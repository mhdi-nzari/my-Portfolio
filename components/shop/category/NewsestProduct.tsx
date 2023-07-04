"use client";

import React, { useEffect, useRef, useState } from "react";
import TitleBar from "../../TitleBar";
import CustomButton from "../../../components/CustomButton";
import CategoryItem from "./CategoryItem";
import { SwiperSlide } from "swiper/react";
import Swiper, { Autoplay, Navigation } from "swiper";

const SwiperWrapper = () => {
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

  useEffect(() => {
    if (navigationNextRef.current && navigationPrevRef.current) {
      Swiper.use([Autoplay, Navigation]);

      new Swiper(".swiper-container", {
        spaceBetween: 50,
        slidesPerView: 1,
        centeredSlides: true,
        direction: "horizontal",
        autoplay: {
          delay: 4000,
          disableOnInteraction: false,
        },
        navigation: {
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        },
        on: {
          reachEnd: handleReachEnd,
          slideChange: handleSlideChange,
        },
      });
    }
  }, []);

  return (
    <SwiperSlide>
      <CategoryItem
        title={"دوره متخصص ریکت و ریداکس"}
        image={"/images/product.svg"}
        student={68}
        star={4.9}
        isRecord={true}
        courseTime={"۵۵:۴۵:۰۰"}
        releasePlatform={"اسپات پلیر"}
        epizodNumber={"۵۰۰ درس"}
        price={"2,999,000"}
        offer={"50%"}
        priceOffer={"1,499,000"}
        productLink={"/shop/id"}
      />
    </SwiperSlide>
  );
};

const NewsestCat = () => {
  return (
    <section className="container bg-circle_empty bg-center  bg-no-repeat">
      <div className="flex  flex-col">
        {/* TitleBar and CustomButton components */}
        <TitleBar
          bgPattern="/images/icon/teacher.svg"
          title="دوره آموزشی من"
          sufixIsBreak
          sufixTitle="جدیدترین"
          desc="تو هرزمینه تخصص دارم و میتونم به کسب و کار شما کمک کنم خوشحال میشم حتما بهم پیام بده ."
        />

        <div className="mx-auto w-full">
          <CustomButton
            title="مشاهده همه دوره ها"
            leftIcon="/images/icon/arrow_left_white.svg"
            textStyles="text-white text-base"
            btnType={"button"}
            containerStyles={
              "bg-primary mx-auto px-8 py-[16px] hover:outline-primary"
            }
          />
        </div>
      </div>
      <div className="mt-11 w-full pb-16">
        <div className="swiper-container">
          <div className="swiper-wrapper">
            <SwiperWrapper />
          </div>
        </div>
        {/* Navigation buttons */}
        <div className="flex w-full items-center justify-center gap-5 pt-10">
          <button >
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
          <button >
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
    </section>
  );
};

export default NewsestCat;
