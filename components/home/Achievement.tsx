
import CouteUpHook from "@/Hook/CountUp";
import { achievementItem } from "@/constants";
import Image from "next/image";
import React from "react";

const Achievement = () => {
  return (
    <section className="container">
      <div className="flex flex-col items-center justify-center gap-10">
        {achievementItem &&
          achievementItem.map((item, i) => (
            <figure key={i} className="flex w-full flex-col items-center">
              <div
                className={`flex w-fit rounded-xl p-5`}
                style={{ backgroundColor: `${item.colorIcon}` }}
              >
                <Image
                  src={item.icon}
                  width={27}
                  height={27}
                  alt={item.title}
                />
              </div>

              <figcaption className="mt-5 flex flex-col items-center">
                <p className="pb-2 text-center  text-xl font-semibold text-primary line-clamp-2">
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
