export interface IFillIcon {
  fill?: boolean;
  className?: string;
}

export interface IIcon extends IFillIcon {
  name: string;
  props?: object;
  className?: string;
}
