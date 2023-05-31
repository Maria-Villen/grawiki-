import { footerLinkMenu } from "./footerConfig";
import { FooterLinksArea } from "../../ui";
import { FooterMobile } from "../";
import classes from "./footer.module.sass";

/** Footer component of the app */
function Footer() {
  return (
    <div className={classes.container}>
      {footerLinkMenu.map(({ id, title, links }) => {
        return <FooterLinksArea key={id} title={title} links={links} />;
      })}
      <FooterMobile />
    </div>
  );
}

export default Footer;
