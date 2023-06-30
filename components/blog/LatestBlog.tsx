import React from "react";
import CustomButton from "../CustomButton";
import TitleBar from "../TitleBar";

const LatestBlog = () => {
  return (
    <section className="container bg-circle_empty bg-center  bg-no-repeat">
      <div className="flex  flex-col">
        <TitleBar
          bgPattern="/images/icon/blogPattern.svg"
          title="مقالات"
          sufixTitle="آخرین"
          desc="آخرین پروژه‌هایی که انجام دادم رو به همراه جزییات کامل و به صورت آنلاین از این بخش میتونید مشاهده کنید.

          "
        />

        <div className="w-full">
          <CustomButton
            title="مشاهده همه مقالات"
            leftIcon="/images/icon/arrow_left_white.svg"
            textStyles="text-white text-base"
            btnType={"button"}
            containerStyles={"bg-primary mx-auto !px-[17px] py-[16px]"}
          />
        </div>
      </div>
      <div className="mt-11 w-full"></div>
    </section>
  );
};

export default LatestBlog;
