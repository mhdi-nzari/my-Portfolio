
import CouteUpHook from "@/Hook/CountUp";
import { achievementItem } from "@/constants";
import Image from "next/image";
import React from "react";

const Achievement = () => {
  return (
    <section className="container">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center justify-center gap-10">
        {achievementItem &&
          achievementItem.map((item, i) => (
            <figure key={i} className="flex  flex-1 flex-col md:flex-row items-center md:gap-5">
              <div
                className={`flex  rounded-xl p-5`}
                style={{ backgroundColor: `${item.colorIcon}` }}
              >
                <Image
                  src={item.icon}
                  width={36}
                  height={36}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full"
                />
              </div>

              <figcaption className="mt-5 flex flex-col items-center  lg:items-start">
                <p className="pb-2 text-center  text-3xl font-semibold text-primary line-clamp-2">
                  <CouteUpHook startNum={0} finishNum={item.number} />

                  {item?.titleOfNumber}
                </p>
                <p className="text-base font-normal text-grey-600 line-clamp-1">
                  {item.title}
                </p>
              </figcaption>
            </figure>
          ))}
      </div>
    </section>
  );
};

export default Achievement;
