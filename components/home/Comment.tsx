import React from "react";

import CustomButton from "../CustomButton";
import TitleBar from "../TitleBar";
import LatestBlog from "../blog/LatestBlog";
import CommentList from "../comment/CommentList";
import Image from "next/image";

const Comment = () => {
  return (
    <section className="container bg-circle_empty bg-center  bg-no-repeat">
      <div className="flex  flex-col">
        <TitleBar
          bgPattern="/images/icon/messageComment.svg"
          title="کاربران"
          sufixTitle=" دیدگاه"
          desc="کاربران در مورد من چی گفتن؟"
        />

        <div className="w-full">
          <CustomButton
            title="مشاهده همه پروژه ها"
            leftIcon="/images/icon/arrow_left_white.svg"
            textStyles="text-white text-base"
            btnType={"button"}
            containerStyles={"bg-primary mx-auto !px-[17px] py-[16px]"}
            link={"/portfolio"}
          />
        </div>

        <div className="flex flex-wrap justify-center  pt-16">
          {/* avatar */}
          <div className="flex  w-full  flex-1 px-8 [&>*]:-ml-6">
            {/* avatar item */}
            <div className="">
              <Image
                src={"/images/avatar.png"}
                loading="lazy"
                width={60}
                height={60}
                className="h-full w-full"
                alt="avatar"
              />
            </div>
            {/* avatar item */}
            <div className="">
              <Image
                src={"/images/avatar.png"}
                loading="lazy"
                width={60}
                height={60}
                className="h-full w-full"
                alt="avatar"
              />
            </div>
            {/* avatar item */}
            <div className="">
              <Image
                src={"/images/avatar.png"}
                loading="lazy"
                width={60}
                height={60}
                className="h-full w-full"
                alt="avatar"
              />
            </div>
          </div>

          <div className="flex-1 flex flex-col items-center justify-center">
            <p className="text-center text-3xl font-bold text-primary">93+</p>
            <p className="text-center text-base font-normal text-grey-500">
              مشتری خوشحال
            </p>
          </div>
        </div>
      </div>
      <div className="mt-11 w-full">
        <CommentList />
      </div>
    </section>
  );
};

export default Comment;
