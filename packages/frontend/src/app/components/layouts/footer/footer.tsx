import { footerLinkMenu } from "./footerConfig";
import { FooterLinksList, FooterMobile } from "../..";
import classes from "./footer.module.sass";

function Footer() {
  return (
    <div className={classes.container}>
      {footerLinkMenu.map(({ id, title, links }) => {
        return <FooterLinksList key={id} title={title} links={links} />;
      })}
      <FooterMobile />
    </div>
  );
}

export default Footer;
