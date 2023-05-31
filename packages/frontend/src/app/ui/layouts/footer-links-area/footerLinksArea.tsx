import classes from "./footerLinksArea.module.sass";
import { FC } from "react";
import { BasicListWithLink } from "../..";

/**
 * @Component
 * @Description A section that contains a title and various links to use with or without icon
 */

export interface IFooterLink {
  id: string;
  icon: string | undefined;
  text: string;
  link: string;
}
interface IFooterLinksAreaProps {
  title: string;
  links: Array<IFooterLink>;
}

const FooterLinksArea: FC<IFooterLinksAreaProps> = ({
  title,
  links,
}: IFooterLinksAreaProps) => {
  return (
    <div className={classes.footerLinks}>
      <p className={classes.footerLinks_title}>{title}</p>
      <ul className={classes.footerLinks_list}>
        {links.map(({ id, icon, text, link }: IFooterLink) => (
          <BasicListWithLink key={id} link={link} icon={icon} text={text} />
        ))}
      </ul>
    </div>
  );
};

export default FooterLinksArea;
