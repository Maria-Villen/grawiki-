import { Spanish, English } from "../../assets";

export interface IFooterLink {
  id: string;
  icon: string | undefined;
  text: string;
  link: string;
}

export interface IFooterLinks {
  id: string;
  title: string;
  links: Array<IFooterLink>;
}

const footerLinkMenu: Array<IFooterLinks> = [
  {
    id: "0",
    title: "Institucional",
    links: [
      { id: "01", icon: undefined, text: "Quienes sómos?", link: "/aboutus" },
      { id: "02", icon: undefined, text: "Misión y Visión", link: "/mission" },
      { id: "03", icon: undefined, text: "Aviso Legal", link: "/legal" },
    ],
  },
  {
    id: "1",
    title: "Información",
    links: [
      { id: "11", icon: undefined, text: "Acerca de", link: "/aboutof" },
      {
        id: "12",
        icon: undefined,
        text: "Política de Privacidad",
        link: "/privacy",
      },
      {
        id: "13",
        icon: undefined,
        text: "Política de Cookies",
        link: "/cookies",
      },
    ],
  },
  {
    id: "2",
    title: "Ayuda",
    links: [
      {
        id: "21",
        icon: undefined,
        text: "Instrucciones de Uso",
        link: "/guide",
      },
      { id: "22", icon: undefined, text: "Contacto", link: "/contact" },
      { id: "23", icon: undefined, text: "F.A.Q.", link: "/faq" },
    ],
  },
  // {
  //   id: "3",
  //   title: "Idiomas",
  //   links: [
  //     { id: "31", icon: English, text: "Inglés", link: "/en" },
  //     { id: "32", icon: Spanish, text: "Español", link: "/es" },
  //   ],
  // },
];

export { footerLinkMenu };
