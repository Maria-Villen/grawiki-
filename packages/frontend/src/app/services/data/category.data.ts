import { ICategory } from "../../interfaces/categories";

const categories: Array<ICategory> = [
  {
    id: "1",
    icon: { name: "HealthIcon" },
    text: "Salud",
    link: "/category/health",
    tags: ["9", "13"],
  },
  {
    id: "2",
    icon: { name: "ToysIcon" },
    text: "Juguetes",
    link: "/category/Toys",
    tags: ["10", "11", "12"],
  },
  {
    id: "3",
    icon: { name: "BankIcon" },
    text: "Bancos",
    link: "/category/banks",
    tags: ["1", "3", "4", "5", "6", "7", "8"],
  },
  {
    id: "4",
    icon: { name: "GovernmentIcon" },
    text: "Gobierno",
    link: "/category/government",
    tags: ["1", "2", "8"],
  },
];
export default categories;
