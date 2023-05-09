import { Bank, Government, Health, Toys } from "../../../assets";

export interface IMenuItem {
  id: string;
  icon: string;
  text: string;
  link: string;
}

export const menuItems: Array<IMenuItem> = [
  {
    id: "1",
    icon: Health,
    text: "Salud",
    link: "/health",
  },
  {
    id: "2",
    icon: Toys,
    text: "Juguetes",
    link: "/Toys",
  },
  {
    id: "3",
    icon: Bank,
    text: "Bancos",
    link: "/banks",
  },
  {
    id: "4",
    icon: Government,
    text: "Gobierno",
    link: "/government",
  },
];
