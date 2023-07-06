import CountDownTimer from "@/Hook/CountDownTimer";
import CustomButton from "../CustomButton";
import Image from "next/image";

const Offer = () => {
  return (
    <section className="container">
      <div className="relative mx-auto flex w-full flex-col items-center rounded-3xl bg-offer bg-cover bg-center  bg-no-repeat  px-4 pb-5 pt-14 md:flex-row lg:justify-between lg:py-16 lg:px-5 xl:pl-16 xl:pr-56">
        <p className="whitespace-nowrap pb-4 pt-3 text-center text-20 font-[990] text-white sm:text-2xl">
          تخفیف ویژه دوره آموزش برنامه نویسی
        </p>

        <CountDownTimer />

        <div className="w-full pt-4 md:w-fit md:p-0">
          <CustomButton
            title="مشاهده دوره"
            leftIcon="/images/icon/arrow_left_white.svg"
            textStyles="text-white text-base"
            btnType={"button"}
            containerStyles={
              "bg-secondary mx-auto !px-[17px] py-[16px] hover:outline-secondary"
            }
          />
        </div>

        {/*  image element */}
        <div className="absolute -top-12 right-5 ">
          <Image
            height="175"
            width="157"
            className=" h-[105px] w-[86px] lg:w-40 lg:h-32 xl:h-[176px] xl:w-[175px]"
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
