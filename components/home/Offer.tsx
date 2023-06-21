import CountDownTimer from "@/Hook/CountDownTimer";
import CustomButton from "../CustomButton";
import Image from "next/image";

const Offer = () => {
  return (
    <section className="container">
      <div className="relative flex w-full flex-col items-center rounded-xl bg-offer bg-center bg-no-repeat p-5 pt-14 ">
        <p className="pb-4 text-center text-base font-[990] text-white sm:text-2xl pt-3">
          تخفیف ویژه دوره آموزش برنامه نویسی
        </p>

        <CountDownTimer />

        <div className="w-full pt-4">
          <CustomButton
            title="مشاهده دوره"
            leftIcon="/images/icon/arrow_left_white.svg"
            textStyles="text-white text-base"
            btnType={"button"}
            containerStyles={"bg-secondary mx-auto !px-[17px] py-[16px]"}
          />
    
        </div>

        {/*  image element */}
        <div className="absolute -right-0 -top-12">
          <Image
            height="157"
            width="175"
            className=" h-[105px] w-[86px] md:h-[175px] md:w-[160px]"
            src="/images/offer_element.svg"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Offer;
