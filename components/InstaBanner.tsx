import React from "react";
import Image from "next/image";
import CustomButton from "./CustomButton";

const InstaBanner = () => {
  return (
    <section className=" container relative z-10 w-full overflow-hidden">
      <div className="rounded-3xl bg-instagram_banner bg-cover bg-center px-3 pb-5 pt-20 md:py-6 flex flex-col md:flex-row items-center lg:justify-around">
        <p className="inline-block font-light pb-4 md:pb-0 md:text-3xl text-center text-lg line-clamp-4 text-white whitespace-nowrap pr-60">
          من هر روز کلی
          <a
            href="http://instagram.com/mhdi_nzari"
            className="inline-block px-0.5 font-bold "
          >
            مطلب آموزشی جالب در اینستاگرام
          </a>
          منتشر میکنم!
        </p>

        <a href="http://instagram.com/mhdi_nzari" className="">
          <CustomButton
            textStyles="text-white font-semibold"
            containerStyles="mx-auto bg-secondary hover:outline-secondary md:py-4 px-9"
            btnType="button"
            title="دنبال کنید"
          />
        </a>
      </div>

      <Image
        src={"/images/instagramIcon.svg"}
        width={137}
        height={151}
        alt="instagram icon"
        loading="lazy"
        className=" absolute -top-5 right-10 w-28 h-28 md:w-40 md:h-36 md:top-5 md:right-24"
        
      />
    </section>
  );
};

export default InstaBanner;
