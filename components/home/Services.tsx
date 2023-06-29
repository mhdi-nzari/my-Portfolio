import React from "react";
import TitleBar from "../TitleBar";
import { servicesItem } from "@/constants";
import ServiceItem from "./ServiceItem";
import CustomButton from "../CustomButton";

const Services = () => {
  return (
    <section className="container bg-circle_empty bg-center  bg-no-repeat">
      <TitleBar
      bgPattern="/images/icon/flash.svg"
        title="من"
        sufixTitle="خدمات تخصصی"
        desc="تو هرزمینه تخصص دارم و میتونم به کسب و کار شما کمک کنم خوشحال میشم حتما بهم پیام بده ."
      />

      {/* service item */}
      <div className="mt-8 flex w-full flex-wrap justify-center  gap-x-5 gap-y-16">
        {servicesItem.slice(0, 2).map((item, i) => (
          <>
          
              <ServiceItem
                key={i}
                title={item.title}
                desc={item.desc}
                icon={item.icon}
                backgroundIcon={item.colorIcon}
                ContainerClass=""
              />
          
          </>
        ))}

        {servicesItem.slice(2, 4).map((item, i) => (
          <>
            <div className="flex flex-wrap last:-mt-10">
              <ServiceItem
                key={i}
                title={item.title}
                desc={item.desc}
                icon={item.icon}
                backgroundIcon={item.colorIcon}
                ContainerClass=""
              />
            </div>
          </>
        ))}
      </div>

      <div className="w-full pt-12">
          <CustomButton
            title="اطلاعات بیشتر"
            leftIcon="/images/icon/arrow_left_white.svg"
            textStyles="text-white text-base"
            btnType={"button"}
            containerStyles={"bg-primary mx-auto !px-[17px] py-[16px]"}
          />
        </div>
    </section>
  );
};

export default Services;
