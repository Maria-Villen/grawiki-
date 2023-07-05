import { HTMLAttributes } from "react";

export interface IFillIcon extends HTMLAttributes<HTMLDivElement> {
  fill?: boolean;
  direction?: string;
  className?: string;
}

export interface IIcon extends IFillIcon {
  name: string;
  props?: object;
  className?: string;
  rounded?: boolean;
}
