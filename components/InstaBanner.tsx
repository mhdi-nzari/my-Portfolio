import React from "react";
import Image from "next/image";
import CustomButton from "./CustomButton";

const InstaBanner = () => {
  return (
    <section className=" container relative z-10 w-full">
      <div className="rounded-3xl bg-instagram_banner bg-cover bg-center px-3 pb-5 pt-20 flex flex-col md:flex-row">
        <p className="inline-block pb-4 text-center text-lg line-clamp-4 text-white whitespace-nowrap">
          من هر روز کلی
          <a
            href="http://instagram.com/mhdi_nzari"
            className="inline-block px-0.5 font-black "
          >
            مطلب آموزشی جالب در اینستاگرام
          </a>
          منتشر میکنم!
        </p>

        <a href="http://instagram.com/mhdi_nzari" className="w-full">
          <CustomButton
            textStyles="text-white font-semibold"
            containerStyles="mx-auto bg-secondary hover:outline-secondary"
            btnType="button"
            title="دنبال کنید"
          />
        </a>
      </div>

      <Image
        src={"/images/instagramIcon.svg"}
        width={98}
        height={105}
        alt="instagram icon"
        loading="lazy"
        className=" absolute -top-5 right-10 w-[98px] h-[105px]"
        
      />
    </section>
  );
};

export default InstaBanner;
