import CountDownTimer from "@/Hook/CountDownTimer";
import CustomButton from "../CustomButton";
import Image from "next/image";

const Offer = () => {
  return (
    <section className="container">
      <div className="relative mx-auto flex w-full flex-col items-center rounded-3xl bg-offer bg-cover bg-center  bg-no-repeat  px-4 pb-5 pt-14 md:flex-row lg:justify-between lg:px-5 md:!py-5 xl:pl-16  xl:pr-56 md:justify-around">
        <p className="md:whitespace-nowrap  pb-4 pt-3 text-xl sm:text-xl text-center md:text-2xl 2xl:text-3xl font-[990] text-white">
          تخفیف ویژه دوره آموزش برنامه نویسی
        </p>

        <CountDownTimer />

        <div className="w-full pt-4 md:w-fit lg:p-0">
          <CustomButton
            title="مشاهده دوره"
            leftIcon="/images/icon/arrow_left_white.svg"
            textStyles="text-white text-base md:text-xs lg:text-base"
            btnType={"button"}
            containerStyles={
              "bg-secondary mx-auto px-[17px] py-[16px] hover:outline-secondary "
            }
          />
        </div>

        {/*  image element */}
        <div className="absolute -top-12 right-2  sm:-top-16 sm:right-5 ">
          <Image
            height="175"
            width="157"
            className=" w-full h-24 lg:hidden lg:w-40 xl:h-[175px] xl:w-[157px]"
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
