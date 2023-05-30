import { Bank, Government, Health, Toys, Create } from "../../assets";

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
    link: "/category/health",
  },
  {
    id: "2",
    icon: Toys,
    text: "Juguetes",
    link: "/category/Toys",
  },
  {
    id: "3",
    icon: Bank,
    text: "Bancos",
    link: "/category/banks",
  },
  {
    id: "4",
    icon: Government,
    text: "Gobierno",
    link: "/category/government",
  },
];
