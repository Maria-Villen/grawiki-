import { Link, LinkProps } from "react-router-dom";
import classes from "./iconLink.module.sass";
import { IIcon } from "../../iconComponent/interfaceofIcon";
import Icon from "../../iconComponent/Icon";

interface IIconLinkProps extends LinkProps {
  /**
   * Icon to display
   */
  icon: IIcon;
  /**
   * Alternative link to display if icon not loaded
   */
  altText?: string;
  className?: string;
}
/**
 * Link - And icon that link to a site when clicked
 */
const IconLink = ({ icon, altText, className, ...props }: IIconLinkProps) => {
  return (
    <Link className={`${classes.iconLink} ${className}`} {...props}>
      <Icon name={icon.name} {...icon.props} aria-label={altText} />
    </Link>
  );
};

export default IconLink;

IconLink.defaultProps = {
  to: "#",
};
