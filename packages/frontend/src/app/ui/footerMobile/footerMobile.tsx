import classes from "./footerMobile.module.sass";
import { IconLink } from "..";

/**
 * @Component
 * @Description Footer Short Version Mobile with links to social networks
 */

const FooterMobile = () => {
  return (
    <div className={classes.footerMobile}>
      <div className={classes.footerMobile_follow}>
        <span>Síguenos en</span>
        <IconLink
          to="https://instagram.com/"
          icon={{ name: "InstagramIcon" }}
          altText="Instagram"
        />
        <IconLink
          to="https://Facebook.com/"
          icon={{ name: "FacebookIcon" }}
          altText="Facebook"
        />
        <IconLink
          to="https://twitter.com/"
          icon={{ name: "TwitterIcon" }}
          altText="Twitter"
        />
      </div>
      <div className={classes.footerMobile_copyright}>
        <span>© 2023 Grawiki</span>
      </div>
    </div>
  );
};

export default FooterMobile;
