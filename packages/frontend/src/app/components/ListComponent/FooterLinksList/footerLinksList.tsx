import { Link } from "react-router-dom";
import classes from "./footerLinksList.module.sass";
import { IFooterLink } from "../../layouts/footer/footerConfig";
import { FC } from "react";

/**
 * @Component
 * @Description A section that contains a title and various links to use with or without icon
 */

interface IFooterLinksListProps {
  title: string;
  links: Array<IFooterLink>;
}

const FooterLinksList: FC<IFooterLinksListProps> = ({
  title,
  links,
}: IFooterLinksListProps) => {
  return (
    <div className={classes.footerLinks}>
      <p className={classes.footerLinks_title}>{title}</p>
      <ul className={classes.footerLinks_list}>
        {links.map(({ id, icon, text, link }: IFooterLink) => (
          <li key={id} className={classes.footerLinks_item}>
            <Link to={link}>
              {icon ? <img src={icon} alt="icon" /> : null}
              <span>{text}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinksList;
