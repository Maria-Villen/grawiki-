import { IIcon } from "../ui/iconComponent/interfaceofIcon";

export interface ICategory {
  id: string;
  icon?: IIcon | URL;
  label: string;
  tags?: string[];
}

export interface ITag {
  id: string;
  label: string;
}
