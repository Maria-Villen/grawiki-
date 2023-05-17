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
    <Link to="/" className={`${classes.link} ${className}`}>
      <img className={classes.logo} src={getLogo()} />
    </Link>
  );
};

export default Logo;

Logo.defaultProps = {
  type: "regular",
};
