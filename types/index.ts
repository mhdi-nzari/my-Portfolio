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
}


export interface activeMenyProps {
  activeMenu: boolean;
  setActiveMenu: any;
  menuClicked: boolean;
  setMenuClicked: any;
}

