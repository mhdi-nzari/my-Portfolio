import { MouseEventHandler } from "react";

export interface customButtonProps {
  title?: string;
  leftIcon?: string;
  btnType: "button" | "submit";
  isDisabled?: boolean;
  containerStyles: string;
  textStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  children?: React.ReactNode;
  link?: string | undefined;
}

export interface activeMenyProps {
  activeMenu: boolean;
  setActiveMenu: any;
  menuClicked: boolean;
  setMenuClicked: any;
}

export interface titleBarPropsWithBgPattern extends titleBarProps {
  bgPattern: string;
}

export interface titleBarProps {
  title: string;
  desc: string;
  sufixTitle: string;
  sufixIsBreak?: boolean;
  bgPattern?: string;
}

export interface categoryItem {
  title: string;
  image: string;
  student: number;
  star: number;
  isRecord: boolean;
  courseTime: string;
  releasePlatform: string;
  epizodNumber: string;
  price: string;
  offer: string;
  priceOffer: string;
  productLink: string;
}

export interface portfolioItem {
  title: string;
  image: string;
  hashtag: string;
  timeperView: number;
  view: string;
  desc: string;
  time: string;
  link: string;
  author: string;
  hashtagLink: string;
}

export interface detailCommentProps {
  customerName: string;
  courseTitle: string;
  desc: string;
  time: string;
  courseLink: string;
  customerImage: string;
}
