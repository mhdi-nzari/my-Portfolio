"use client"


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
        direction:"horizontal",
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
      </div>
      <div className="mt-11 w-full pb-16">
        <div className="swiper-container">
          <div className="swiper-wrapper">
            <SwiperWrapper />
          </div>
        </div>
        {/* Navigation buttons */}
      </div>
    </section>
  );
};

export default NewsestCat;
