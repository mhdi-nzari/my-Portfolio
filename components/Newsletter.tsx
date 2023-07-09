"use client";
import Image from "next/image";
import React from "react";
import CustomButton from "./CustomButton";
import { RegisterOptions, useForm } from "react-hook-form";

const Newsletter = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <div className=" w-[calc(100vh_-_20px] absolute left-0 right-0 top-0 -translate-y-1/2  mx-5 rounded-2xl bg-newsletter bg-cover bg-center bg-no-repeat overflow-hidden md:overflow-visible">
      <div className="flex flex-col md:flex-row items-center justify-center px-4 pt-5 md:py-6 lg:gap-10">
     <div className="flex flex-col md:w-7/12 md:pr-48 md:items-start">
        <p className="text-center text-xl sm:text-2xl font-black text-white whitespace-nowrap">
          خبرنامه هفتگی برنامه نویسان
        </p>
        <p className="pt-3 text-center text-base  sm:px-20 md:px-0 md:text-sm font-medium text-white md:whitespace-nowrap">
          با مشترک شدن در خبرنامه هفتگی از اخبار و رویداد های برنامه نویسی که
          شرکت میکنم میتونید مطلع بشین.
        </p>
     </div>

        <form onSubmit={handleSubmit(onSubmit)} className="w-full pt-6 md:w-4/12">
          <div className="flex w-full  items-center justify-center sm:justify-between gap-2 rounded-2xl  sm:rounded-full bg-white pl-2 pr-4 py-2 shadow-default transition-all duration-500">
            <input
              {...register("email", {
                required: true,
                pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              } as RegisterOptions)}
              autoComplete="on"
              className="placeholder:text-grey-300 w-[80%] appearance-none border-none text-base font-normal text-neutral-800 outline-none placeholder:text-sm placeholder:font-normal"
              placeholder="ایمیل خود را وارد کنید"
              name="email"
              id="email"
            />
            <CustomButton
              btnType="submit"
              title="عضویت"
              containerStyles="bg-secondary w-fit hover:translate-y-0 hover:outline-secondary"
              textStyles="text-white text-base font-normal px-6 "
            />
          </div>
          <div className="px-5 pt-2">
            {errors.email && errors.email.type === "required" && (
              <p className=" text-sm font-bold text-red-400">
                این فیلد ضروری میباشد.
              </p>
            )}
            {errors.email && errors.email.type === "pattern" && (
              <p className=" text-sm font-bold text-red-400">
                فرمت ایمیل نامعتبر است
              </p>
            )}

            {isSubmitSuccessful && (
              <p className="pt-1 text-sm font-bold text-green-500">
                حله رفیق ! این درسته
              </p>
            )}
          </div>
        </form>

        <div className="flex h-auto w-fit items-center justify-center pt-7 md:absolute md:right-5 md:bottom-0 md:pt-0 ">
          <Image
            src={"/images/messageBox.svg"}
            loading="lazy"
            width={194}
            height={159}
            className="object-cover lg:w-48 lg:h-40"
            alt="message box"

          />
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
