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
  link?:string
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
