import { IIcon } from "../../ui/iconComponent/interfaceofIcon";

export interface IMenuItem {
  id: string;
  icon: IIcon;
  text: string;
  link: string;
}

export const menuItems: Array<IMenuItem> = [
  {
    id: "1",
    icon: { name: "HealthIcon" },
    text: "Salud",
    link: "/category/health",
  },
  {
    id: "2",
    icon: { name: "ToysIcon" },
    text: "Juguetes",
    link: "/category/Toys",
  },
  {
    id: "3",
    icon: { name: "BankIcon" },
    text: "Bancos",
    link: "/category/banks",
  },
  {
    id: "4",
    icon: { name: "GovernmentIcon" },
    text: "Gobierno",
    link: "/category/government",
  },
];
