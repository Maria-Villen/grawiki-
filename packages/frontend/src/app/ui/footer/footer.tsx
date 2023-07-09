import { footerLinkMenu } from "./footerConfig";
import { FooterLinksArea } from "../../ui";
import classes from "./footer.module.sass";
import { HTMLAttributes } from "react";

/** Footer component of the app */
function Footer({ children }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={classes.container}>
      {footerLinkMenu.map(({ id, title, links }) => {
        return <FooterLinksArea key={id} title={title} links={links} />;
      })}
      {children}
    </div>
  );
}

export default Footer;
