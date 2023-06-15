import { MouseEventHandler } from "react";

export interface customButtonProps {
  title: string;
  leftIcon?: string;
  btnType?: "button" | "submit";
  isDisabled?: boolean;
  containerStyles: string;
  textStyles: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}
