import { ICategory } from "../interfaces/categories";

const categories: Array<ICategory> = [
  {
    id: "1",
    icon: { name: "HealthIcon" },
    label: "Salud",
    tags: ["9", "13"],
  },
  {
    id: "2",
    icon: { name: "ToysIcon" },
    label: "Juguetes",
    tags: ["10", "11", "12"],
  },
  {
    id: "3",
    icon: { name: "BankIcon" },
    label: "Bancos",
    tags: ["1", "3", "4", "5", "6", "7", "8"],
  },
  {
    id: "4",
    icon: { name: "GovernmentIcon" },
    label: "Gobierno",
    tags: ["1", "2", "8"],
  },
];
export default categories;
