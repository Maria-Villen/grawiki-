import { Facebook, Instagram, Twitter, Copyright } from "../../../../assets";
import classes from "./footerMobile.module.sass";
import { IconLink } from "../../..";

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
          link="https://instagram.com/"
          icon={Instagram}
          altText="Instagram"
        />
        <IconLink
          link="https://Facebook.com/"
          icon={Facebook}
          altText="Facebook"
        />
        <IconLink
          link="https://twitter.com/"
          icon={Twitter}
          altText="Twitter"
        />
      </div>
      <div className={classes.footerMobile_copyright}>
        <img src={Copyright} alt="Copyright" />
        <span>Derechos Reservados 2022</span>
      </div>
    </div>
  );
};

export default FooterMobile;
