import { detailCommentProps } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CommentItem = ({
  customerName,
  courseTitle,
  desc,
  time,
  courseLink,
  customerImage
}: detailCommentProps) => {
  return (
    <figure className=" w-full rounded-2xl bg-white mt-14 ">
      <div className="relative  px-4 pb-6 pt-12 shadow-default">
        <div className="absolute w-fit h-fit right-10 -top-12  border-4 border-white rounded-full">
          <Image
            src={customerImage}
            width={85}
            height={85}
            loading="lazy"
            className="object-cover"
            alt="avatar"
          />
        </div>

        <figcaption className="flex w-full flex-col">
          {/* title && description */}
          <div className="flex flex-col">
            <h4 className="text-base font-normal text-grey-800">
              {customerName} در مورد
              <Link href={courseLink} className="mx-1 inline-block text-lg font-bold text-primary">
                {courseTitle}
              </Link>
              گفته:
            </h4>
            <p className="pb-6 pt-3 text-base font-normal line-clamp-6">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
              ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
              و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
            </p>
          </div>

          <div className="flex w-full flex-wrap justify-between">
            {/* course name */}
            <div className="flex items-center gap-1">
              <span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.025 13.0332C14.5834 12.6666 15.3167 13.0666 15.3167 13.7332V14.8082C15.3167 15.8666 14.4917 16.9999 13.5 17.3332L10.8417 18.2166C10.375 18.3749 9.61668 18.3749 9.15835 18.2166L6.50002 17.3332C5.50002 16.9999 4.68335 15.8666 4.68335 14.8082V13.7249C4.68335 13.0666 5.41668 12.6666 5.96668 13.0249L7.68335 14.1416C8.34168 14.5832 9.17502 14.7999 10.0084 14.7999C10.8417 14.7999 11.675 14.5832 12.3334 14.1416L14.025 13.0332Z"
                    fill="#9EA5AD"
                  />
                  <path
                    d="M16.65 5.3833L11.6583 2.1083C10.7583 1.51663 9.27502 1.51663 8.37502 2.1083L3.35835 5.3833C1.75002 6.42497 1.75002 8.7833 3.35835 9.8333L4.69168 10.7L8.37502 13.1C9.27502 13.6916 10.7583 13.6916 11.6583 13.1L15.3167 10.7L16.4583 9.94997V12.5C16.4583 12.8416 16.7417 13.125 17.0833 13.125C17.425 13.125 17.7083 12.8416 17.7083 12.5V8.39997C18.0417 7.32497 17.7 6.07497 16.65 5.3833Z"
                    fill="#9EA5AD"
                  />
                </svg>
              </span>
              <Link
                href={courseLink}
                className="text-sm font-normal text-primary"
              >
                {courseTitle}
              </Link>
            </div>
            {/* course name */}
            <div className="flex items-center gap-1">
              <span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.29167 1.66675C7.29167 1.32157 7.01184 1.04175 6.66667 1.04175C6.32149 1.04175 6.04167 1.32157 6.04167 1.66675V2.94272C4.06187 3.16856 2.52099 4.83976 2.50021 6.87508H17.4998C17.479 4.83976 15.9381 3.16856 13.9583 2.94272V1.66675C13.9583 1.32157 13.6785 1.04175 13.3333 1.04175C12.9882 1.04175 12.7083 1.32157 12.7083 1.66675V2.91675H7.29167L7.29167 1.66675ZM2.5 8.12508H17.5V14.3334C17.5 16.5426 15.7091 18.3334 13.5 18.3334H6.5C4.29086 18.3334 2.5 16.5426 2.5 14.3334V8.12508ZM10 13.3334C10.4602 13.3334 10.8333 12.9603 10.8333 12.5001C10.8333 12.0398 10.4602 11.6667 10 11.6667C9.53976 11.6667 9.16667 12.0398 9.16667 12.5001C9.16667 12.9603 9.53976 13.3334 10 13.3334ZM14.1667 12.5001C14.1667 12.9603 13.7936 13.3334 13.3333 13.3334C12.8731 13.3334 12.5 12.9603 12.5 12.5001C12.5 12.0398 12.8731 11.6667 13.3333 11.6667C13.7936 11.6667 14.1667 12.0398 14.1667 12.5001ZM6.66667 13.3334C7.1269 13.3334 7.5 12.9603 7.5 12.5001C7.5 12.0398 7.1269 11.6667 6.66667 11.6667C6.20643 11.6667 5.83333 12.0398 5.83333 12.5001C5.83333 12.9603 6.20643 13.3334 6.66667 13.3334Z"
                    fill="#9EA5AD"
                  />
                </svg>
              </span>
              <p className="text-sm font-normal text-primary">{time}</p>
            </div>
          </div>
        </figcaption>
      </div>
    </figure>
  );
};

export default CommentItem;
