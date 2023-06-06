import { IIcon } from "../../ui/iconComponent/interfaceofIcon";

export interface IFooterLink {
  id: string;
  icon?: IIcon;
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
      { id: "01", text: "Quienes sómos?", link: "/aboutus" },
      { id: "02", text: "Misión y Visión", link: "/mission" },
      { id: "03", text: "Aviso Legal", link: "/legal" },
    ],
  },
  {
    id: "1",
    title: "Información",
    links: [
      { id: "11", text: "Acerca de", link: "/aboutof" },
      {
        id: "12",
        text: "Política de Privacidad",
        link: "/privacy",
      },
      {
        id: "13",
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
        text: "Instrucciones de Uso",
        link: "/guide",
      },
      { id: "22", text: "Contacto", link: "/contact" },
      { id: "23", text: "F.A.Q.", link: "/faq" },
    ],
  },
  // {
  //   id: "3",
  //   title: "Idiomas",
  //   links: [
  //     { id: "31", icon: {name: "EnglishIcon", props:"fill:true}", text: "Inglés", link: "/en" },
  //     { id: "32", icon: {name: "SpanishIcon"}, text: "Español", link: "/es" },
  //   ],
  // },
];

export { footerLinkMenu };
