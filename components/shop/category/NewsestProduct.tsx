"use client";

import React, { useRef, useState } from "react";
import TitleBar from "../../TitleBar";
import CustomButton from "../../../components/CustomButton";

import NewestSlider from "./NewsestSlider";

const NewsestProduct = () => {
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
    <section className="container flex flex-col  bg-circle_empty bg-center bg-no-repeat lg:flex-row lg:justify-between">
      <div className="flex  flex-col lg:w-3/12">
        {/* TitleBar and CustomButton components */}
        <TitleBar
          bgPattern="/images/icon/teacher.svg"
          title="دوره آموزشی من"
          sufixIsBreak
          textStyle="md:text-right"
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
              "bg-primary mx-auto px-8 py-[16px] hover:outline-primary md:ml-auto md:px-4 md:mr-0"
            }
          />
        </div>
      </div>
      <div className=" w-full pb-16 md:pb-16 px-10 lg:w-8/12">
        <NewestSlider />
      </div>
    </section>
  );
};

export default NewsestProduct;
