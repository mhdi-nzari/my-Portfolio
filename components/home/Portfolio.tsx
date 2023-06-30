import React from "react";
import TitleBar from "../TitleBar";
import CustomButton from "../CustomButton";
import LatestPortfolio from "../portfolio/category/LatestPortfolio";

const Portfolio = () => {
  return (
    <section className="container bg-circle_empty bg-center  bg-no-repeat">
      <div className="flex  flex-col">
        <TitleBar
          bgPattern="/images/icon/outline-monitor.svg"
          sufixIsBreak
          title="پروژه های من"
          sufixTitle="آخرین"
          desc="آخرین پروژه‌هایی که انجام دادم رو به همراه جزییات 
       کامل و به صورت آنلاین از این بخش میتونید مشاهده کنید."
        />

        <div className="w-full">
          <CustomButton
            title="مشاهده همه پروژه ها"
            leftIcon="/images/icon/arrow_left_white.svg"
            textStyles="text-white text-base"
            btnType={"button"}
            containerStyles={"bg-primary mx-auto !px-[17px] py-[16px]"}
          />
        </div>
      </div>
      <div className="mt-11 w-full">
        <LatestPortfolio />
      </div>
    </section>
  );
};

export default Portfolio;
