import { BasicLink } from "../../ui";
import {
  InstagramIcon,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
} from "../../ui/icons";
import classes from "./footer.module.sass";
import { Link } from "react-router-dom";

/**
 * @Component
 * @Description Footer Short Version Mobile with links to social networks
 */

const Footer = ({ dark }: { dark?: boolean }) => {
  return (
    <div className={`${classes.container} ${dark && classes.dark}`}>
      <div className={classes.follow}>
        <span>Síguenos en</span>
        <Link to="https://linkedin.com/" aria-label="Linkedin">
          <LinkedinIcon className={classes.follow_icon} />
        </Link>
        <Link to="https://instagram.com/" aria-label="Instagram">
          <InstagramIcon className={classes.follow_icon} />
        </Link>
        <Link to="https://Facebook.com/" aria-label="Facebook">
          <FacebookIcon className={classes.follow_icon} />
        </Link>
        <Link to="https://twitter.com/" aria-label="Twitter">
          <TwitterIcon className={classes.follow_icon} />
        </Link>
      </div>
      <div className={classes.menu}>
        <BasicLink
          to="/terms"
          label="Aviso legal"
          className={classes.menu_item}
        />
        <BasicLink
          to="/aboutus"
          label="¿Quiénes somos?"
          className={classes.menu_item}
        />
        <BasicLink
          to="/privacy"
          label="Privacidad"
          className={classes.menu_item}
        />
        <BasicLink to="/help" label="Ayuda" className={classes.menu_item} />
        <BasicLink
          to="/contact"
          label="Contacto"
          className={classes.menu_item}
        />
      </div>
      <div className={classes.footerMobile_copyright}>
        <span>© 2023 Grawiki</span>
      </div>
    </div>
  );
};

export default Footer;
