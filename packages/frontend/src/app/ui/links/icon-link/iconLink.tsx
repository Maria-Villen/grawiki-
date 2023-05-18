import { Link, LinkProps } from "react-router-dom";
import classes from "./iconLink.module.sass";

interface IIconLinkProps extends LinkProps {
  /**
   * Icon to display
   */
  icon: string;
  /**
   * Alternative link to display if icon not loaded
   */
  altText: string;
}
/**
 * Link - And icon that link to a site when clicked
 */
const IconLink = ({ className, icon, altText, ...props }: IIconLinkProps) => {
  return (
    <Link className={`${classes.iconLink} ${className}`} {...props}>
      <img src={icon} alt={altText} />
    </Link>
  );
};

export default IconLink;

IconLink.defaultProps = {
  to: "#",
};
