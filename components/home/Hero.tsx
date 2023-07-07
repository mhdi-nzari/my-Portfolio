import Image from "next/image";
import React from "react";
import CustomButton from "../CustomButton";

const Hero = () => {
  return (
    <section className="container bg-hero bg-right bg-repeat-x">
      <div className="flex w-full flex-col items-center justify-center gap-5 sm:gap-7 md:gap-12 lg:flex-row">
        <div className="flex  max-w-md flex-col items-center justify-center md:w-7/12 lg:max-w-full lg:items-start">
          <p className="flex text-center text-20 font-normal text-grey-600 sm:text-xl ">
            سلام
            <span className="flex items-center justify-center px-1">
              <Image
                alt="hand icon"
                src={"/images/hi.png"}
                width={20}
                height={20}
                loading="lazy"
              />
            </span>
            <span className="font-black text-primary"> مهدی نظری</span> هستم!
          </p>
          <div className="mt-2 flex h-[38px] w-[240px] items-center justify-center rounded-full bg-grey-900 px-4 py-2 sm:h-fit sm:w-fit">
            <p className="font-[popinsLight] text-sm text-white sm:text-20 ">
              <span className="px-1 font-medium text-secondary">
                Front End Developer
              </span>
              Expert
            </p>
          </div>

          <div className="flex flex-col items-center pb-7 pt-5 lg:items-start">
            <p className="whitespace-nowrap pb-5 text-center text-3xl  font-[950] text-primary sm:text-34 lg:text-5xl 2xl:text-68">
              یه برنامه نویس شاد و پر انرژی
            </p>
            <div className="relative w-fit border-2 border-secondary px-5 py-3">
              <p className="whitespace-nowrap text-center text-3xl font-[950] text-secondary sm:text-32 md:text-4xl 2xl:text-56">
                توسعه وب و رابط کاربری
              </p>

              <span className="absolute -right-2 -top-2 h-4 w-4 border-2 border-secondary bg-white"></span>

              <span className="absolute -left-2 -top-2 h-4 w-4 border-2 border-secondary bg-white"></span>

              <span className="absolute -bottom-2 -left-2 h-4 w-4 border-2 border-secondary bg-white"></span>

              <span className="absolute -bottom-2 -right-2 h-4 w-4 border-2 border-secondary bg-white"></span>
            </div>

            <p className="px-6 pt-7  text-center text-sm  font-medium leading-6 text-grey-500 sm:text-18 md:px-0 lg:text-right">
              گاهی اوقات
              <span className="inline-flex px-0.5 font-semibold text-primary">
                رابط کاربری
              </span>
              طراحی میکنم ، گاهی اوقاتم نه همون رابط رو
              <span className="inline-flex px-0.5 font-semibold text-primary">
                توسعه
              </span>
              میدم و
              <span className="inline-flex px-0.5 font-semibold text-primary">
                برنامه نویسی
              </span>
              میکنم ، گاهی وقتا آموزش میبینم و به آدمای اطرافم جهت پیشرفتشون کمک
              میکنم و
              <span className="inline-flex px-0.5 font-semibold text-primary">
                مشاوره برنامه نویسی
              </span>
              میدم.
            </p>
          </div>

          <div className="w-full">
            <svg
              className="mx-auto block md:hidden"
              width="101"
              height="35"
              viewBox="0 0 101 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M91.4406 9.92604C94.5093 10.3375 97.3534 10.0941 99.4675 8.46892C102.078 6.47603 101.437 2.77273 96.7699 1.81891C93.9926 1.32087 91.1822 1.02964 88.3618 0.947628L89.57 4.47088C94.3988 4.61544 99.3118 5.13365 99.0679 6.55665C98.6201 8.70828 94.7354 8.3717 90.5805 7.41784L91.4406 9.92604ZM1.00187 34.8573C16.6944 18.7245 56.3992 6.30196 74.4287 5.28642C79.0031 6.14033 85.685 9.19176 91.4406 9.92604L90.576 7.40475C86.5965 6.47128 82.3667 4.95759 80.8154 4.55277C81.6751 4.4775 85.5867 4.38036 89.5722 4.47743L88.3685 0.967274C81.6662 0.691307 74.9525 0.973888 68.297 1.81209C61.8148 0.090084 52.6436 -0.402445 43.3794 1.26674L43.4463 1.65368C50.4301 0.789837 57.5059 1.01777 64.4197 2.32929C41.724 6.57708 12.4839 19.9561 0.366217 34.2629L1.00187 34.8573Z"
                fill="#F1891E"
              />
            </svg>
          </div>

          <div className="flex  w-full items-center py-7 md:pt-2 lg:justify-between ">
            <div className="flex w-full flex-col items-center gap-4 px-10 sm:flex-row sm:justify-start md:px-0">
              <CustomButton
                textStyles="text-white whitespace-nowrap text-16 font-normal pl-2"
                containerStyles="lg:px-[20px] xl:px-[31px] py-4 px-12 bg-primary w-full mx-0 lg:w-fit hover:outline-primary"
                leftIcon="/images/icon/files-pdf.svg"
                title="رزومه من"
                btnType="button"
              />
              <CustomButton
                textStyles="text-primary whitespace-nowrap text-16 font-normal pl-2 group-hover:text-white"
                containerStyles="lg:px-[20px] xl:px-[31px] py-4 px-12 w-full mx-0 lg:w-fit border border-primary hover:bg-primary  border-primary "
                title="تماس با من"
                btnType="button"
              />
            </div>
            <div className="hidden lg:block">
              <svg
                className="h-32 w-32 lg:h-auto lg:w-auto"
                width="196"
                height="75"
                viewBox="0 0 196 75"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.925 6.79987C17.473 2.67883 12.6419 -0.139696 7.42155 0.0790449C0.991706 0.327308 -2.15994 6.98285 4.24128 13.7761C8.12889 17.7072 12.3029 21.3442 16.7289 24.6574L18.7679 17.6498C11.1949 11.9708 3.90835 5.59804 5.90444 3.59343C9.04921 0.651545 14.893 5.57315 20.4735 11.7885L21.925 6.79987ZM194.941 68.8839C151.6 77.0268 73.976 52.137 43.9456 33.4245C37.5803 26.896 30.3177 14.4693 21.925 6.79987L20.4659 11.8146C25.7884 17.7995 30.8572 24.9962 32.8859 27.3949C31.4236 26.5456 25.0473 22.2885 18.7717 17.6368L16.7403 24.6183C27.1667 32.6215 38.2414 39.7426 49.8496 45.9079C58.292 55.9795 72.4293 67.1147 89.1544 74.8917L89.4839 74.1964C77.3206 67.7017 66.2417 59.3542 56.6448 49.4534C97.7973 68.2516 159.736 79.8036 195.289 70.5533L194.941 68.8839Z"
                  fill="#F1891E"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="w-full h-auto">
          <picture >
          
            <source
              media="(min-width: 0px) and (max-width: 768px)"
              src="/images/hero_sm.svg"
            />
            <source
              media="(min-width: 768px) and (max-width: 1024px)"
              src="/images/hero_image.png"
            />
            <img className="mx-auto" src="/images/hero_image.svg" alt="mahdi nazari hero" />
          </picture>
          {/* <Image
            src={""}
            className="mx-auto "
            width={465}
            loading="lazy"
            height={433}
            alt="introduction mahdi nazari"
          /> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
