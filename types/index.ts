import { MouseEventHandler } from "react";

export interface ButtonProps {
    title: string;
    containerStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    btnType?: "button" | "submit";

    // isDisabled?: boolean;
    // textStyles?: string;
    // rightIcon?: string;
}

export interface SearchManufacturerProps {
    manufacturer: string;
    setManufacturer: (manufacturer: string) => void;
  }