import { IIcon } from "../../ui/iconComponent/interfaceofIcon";

interface TagData {
  icon: IIcon;
  text: string;
}

export const tags: Array<TagData> = [
  {
    icon: { name: "BankIcon" },
    text: "Banco",
  },
  {
    icon: { name: "ToysIcon" },
    text: "Juguetes",
  },
  {
    icon: { name: "HealthIcon" },
    text: "Salud",
  },
  {
    icon: { name: "GovernmentIcon" },
    text: "Gobierno",
  },
];
