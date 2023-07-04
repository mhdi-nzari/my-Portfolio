import React from "react";
import CustomButton from "@/components/CustomButton";
import Link from "next/link";
import Image from "next/image";
import { portfolioItem } from "@/types";

const BlogItem = ({
  title,
  image,
  hashtag,
  timeperView,
  view,
  desc,
  time,
  link,
  author,
  hashtagLink,
}: portfolioItem) => {
  return (
    <figure className="group relative flex w-full  flex-col rounded-xl bg-white p-4 shadow-default">
      <div className="aspect-h-9 aspect-w-13">
        <Image
          src={image}
          width={376}
          height={181}
          alt="title"
          className="h-full w-full rounded-xl object-cover"
        />
      </div>

      <figcaption className="flex w-full flex-col pt-3">
        {/* detail item */}
        <div className="flex flex-wrap justify-between">
          {/* hashtag */}
          <Link
            href={hashtagLink}
            className="w-fit rounded-full bg-[#E9EAFF] px-3 py-2 text-xs font-medium  text-primary transtion-all duration-300 outline outline-2 outline-offset-2 outline-transparent hover:outline-[#E9EAFF]"
          >
            {hashtag}
          </Link>
          {/* timePerView */}
          <div className="flex items-center gap-2">
            <span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 1.66663C5.40833 1.66663 1.66667 5.40829 1.66667 9.99996C1.66667 14.5916 5.40833 18.3333 10 18.3333C14.5917 18.3333 18.3333 14.5916 18.3333 9.99996C18.3333 5.40829 14.5917 1.66663 10 1.66663ZM13.625 12.975C13.5083 13.175 13.3 13.2833 13.0833 13.2833C12.975 13.2833 12.8667 13.2583 12.7667 13.1916L10.1833 11.65C9.54167 11.2666 9.06667 10.425 9.06667 9.68329V6.26663C9.06667 5.92496 9.35 5.64163 9.69167 5.64163C10.0333 5.64163 10.3167 5.92496 10.3167 6.26663V9.68329C10.3167 9.98329 10.5667 10.425 10.825 10.575L13.4083 12.1166C13.7083 12.2916 13.8083 12.675 13.625 12.975Z"
                  fill="#596066"
                />
              </svg>
            </span>

            <p className="text-xs font-normal text-grey-400">
              مطالعه در {timeperView} دقیقه
            </p>
          </div>

          {/* view */}
          <div className="flex items-center gap-2">
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
                  d="M17.6086 11.789C18.5749 10.7723 18.5749 9.2276 17.6086 8.21087C15.9788 6.49607 13.1796 4.16663 10 4.16663C6.8204 4.16663 4.02124 6.49607 2.39142 8.21087C1.42508 9.2276 1.42508 10.7723 2.39142 11.789C4.02124 13.5038 6.8204 15.8333 10 15.8333C13.1796 15.8333 15.9788 13.5038 17.6086 11.789ZM10 12.5C11.3807 12.5 12.5 11.3807 12.5 9.99996C12.5 8.61925 11.3807 7.49996 10 7.49996C8.61929 7.49996 7.5 8.61925 7.5 9.99996C7.5 11.3807 8.61929 12.5 10 12.5Z"
                  fill="#596066"
                />
              </svg>
            </span>
            <p className="text-xs font-normal text-grey-400">{view}</p>
          </div>
        </div>

        {/* main detail */}

        <div className="flex flex-col pt-5">
          <div className="relative mb-2 after:absolute after:-right-4 after:bottom-0 after:top-0 after:h-full  after:w-[6px] after:rounded-ee-full after:rounded-se-full after:bg-gray-300 after:transition-all after:duration-500 group-hover:after:bg-secondary">
            <h3 className=" text-xl font-bold text-grey-700 transition-all duration-500 line-clamp-2  group-hover:pr-1">
              {title}
            </h3>
          </div>
          <p className="pb-6 text-xs font-normal leading-7 text-grey-500 line-clamp-3">
            {desc}
          </p>
        </div>

        <div className="flex w-full flex-wrap items-center justify-between">
          <p className="flex items-center text-xs font-normal text-[#909090]">
            {time} روز پیش
            <span className="mx-1 h-[6px] w-[6px] rounded-full bg-[#909090]"></span>
            توسط
            <span className="mx-1 font-semibold text-neutral-700">
              {author}
            </span>
          </p>
          <Link href={link} className="flex items-center transition-all duration-500  group-hover:-rotate-45 ">
            <button>
              <svg
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.57 18.8201C9.38 18.8201 9.19 18.7501 9.04 18.6001L2.97 12.5301C2.68 12.2401 2.68 11.7601 2.97 11.4701L9.04 5.40012C9.33 5.11012 9.81 5.11012 10.1 5.40012C10.39 5.69012 10.39 6.17012 10.1 6.46012L4.56 12.0001L10.1 17.5401C10.39 17.8301 10.39 18.3101 10.1 18.6001C9.96 18.7501 9.76 18.8201 9.57 18.8201Z"
                  fill="#262C9C"
                />
                <path
                  d="M20.5 12.75H3.67C3.26 12.75 2.92 12.41 2.92 12C2.92 11.59 3.26 11.25 3.67 11.25H20.5C20.91 11.25 21.25 11.59 21.25 12C21.25 12.41 20.91 12.75 20.5 12.75Z"
                  fill="#262C9C"
                />
              </svg>
            </button>
          </Link>
        </div>
      </figcaption>
    </figure>
  );
};

export default BlogItem;
