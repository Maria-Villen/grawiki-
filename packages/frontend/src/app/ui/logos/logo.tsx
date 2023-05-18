import {
  GrawikiLogo,
  GrawikiLogoHorizontal,
  GrawikiLogoVertical,
} from "../../assets";

import classes from "./logo.module.sass";

import { Link } from "react-router-dom";

interface ILogoProps {
  type?: string;
  className?: string;
}

const Logo = ({ type, className }: ILogoProps) => {
  const getLogo = () => {
    switch (type) {
      case "horizontal":
        return GrawikiLogoHorizontal;
      case "vertical":
        return GrawikiLogoVertical;
      default:
        return GrawikiLogo;
    }
  };

  return (
    <Link
      to="/"
      className={className ? className : classes.link}
      aria-label="Ir a la página principal de grawiki"
    >
      <img className={classes.logo} src={getLogo()} alt="Logo Grawiki" />
    </Link>
  );
};

export default Logo;

Logo.defaultProps = {
  type: "regular",
};
