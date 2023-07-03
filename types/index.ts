import { MouseEventHandler } from "react";

export interface ButtonProps {
    title: string;
    containerStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;

    // isDisabled?: boolean;
    // btnType?: "button" | "submit";
    // textStyles?: string;
    // rightIcon?: string;
  }