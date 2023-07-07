import { servicesItem } from "@/constants";
import Image from "next/image";
import React from "react";

interface itemType {
  icon: string;
  title: string;
  desc: string;
  backgroundIcon: string;
  ContainerClass: string;
}

const ServiceItem = ({
  icon,
  title,
  desc,
  backgroundIcon,
  ContainerClass,
}: itemType) => {
  return (
    <figure
      className={`relative h-fit w-[200px] rounded-2xl  bg-white shadow-default md:w-[218px] flex flex-wrap first-of-type:mt-10  ${ContainerClass}`}
    >
      <div className="w-full  px-4 pb-[30px] ">
        <div
          className={` absolute left-0 right-0 top-0 mx-auto w-fit -translate-y-1/2 rounded-2xl p-3 flex justify-center items-center lg:w-16 lg:h-16`}
          style={{ backgroundColor: backgroundIcon }}
        >
          <Image loading="lazy" src={icon} width={34} height={34} alt={title} />
        </div>
        <figcaption className="pt-[52px]">
          <h4 className="pb-2 text-center text-[14px] lg:text-xl font-[990] text-grey-1000">
            {title}
          </h4>
          <p className="text-center text-xs lg:text-sm font-normal text-grey-500">
            {desc}
          </p>
        </figcaption>
      </div>
    </figure>
  );
};

export default ServiceItem;
