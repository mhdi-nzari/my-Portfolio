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
}: portfolioItem) => {
  return (
    <figure className="group relative  w-full rounded-2xl p-4">
      <div className="aspect-w-13 aspect-9">
        <Image src={image} width={376} height={181} alt="title" />
      </div>

      <figcaption className="flex pt-3"></figcaption>
    </figure>
  );
};

export default BlogItem;
