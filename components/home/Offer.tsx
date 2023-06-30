

import CountDownTimer from "@/Hook/CountDownTimer";
import CustomButton from "../CustomButton";
import Image from "next/image";

const Offer = () => {
  return (
    <section className="container">
      <div className="lg:max-w-ful relative mx-auto flex w-full max-w-md flex-col items-center rounded-xl bg-offer bg-cover  bg-center  bg-no-repeat pb-5 px-4 pt-14 ">
        <p className="pb-4 pt-3 text-center text-20 font-[990] text-white sm:text-2xl">
          تخفیف ویژه دوره آموزش برنامه نویسی
        </p>

        <CountDownTimer />

        <div className="w-full pt-4">
          <CustomButton
            title="مشاهده دوره"
            leftIcon="/images/icon/arrow_left_white.svg"
            textStyles="text-white text-base"
            btnType={"button"}
            containerStyles={"bg-secondary mx-auto !px-[17px] py-[16px] hover:outline-secondary"}
          />
        </div>

        {/*  image element */}
        <div className="absolute -right-0 -top-12">
          <Image
            height="176"
            width="175"
            className=" h-[105px] w-[86px] lg:h-[176px] lg:w-[175px]"
            src="/images/offer_element.png"
            alt="offer elemenet"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default Offer;
