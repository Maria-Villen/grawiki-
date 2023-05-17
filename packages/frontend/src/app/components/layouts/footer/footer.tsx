import { footerLinkMenu } from "./footerConfig";
import { FooterLinksArea, FooterMobile } from "../..";
import classes from "./footer.module.sass";

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
