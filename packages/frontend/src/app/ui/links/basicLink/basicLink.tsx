import { Link, LinkProps } from "react-router-dom";
import { IIcon } from "../../iconComponent/interfaceofIcon";
import classes from "./basicLink.module.sass";
import Icon from "../../iconComponent/Icon";

interface BasicLinkProps extends LinkProps {
  label: string;
  icon?: IIcon;
  reverse?: boolean;
  disabled?: boolean;
  dark?: boolean;
}

const BasicLink = ({
  label,
  icon,
  reverse,
  disabled,
  className,
  dark,
  ...props
}: BasicLinkProps) => {
  return (
    <Link
      {...props}
      className={`
      ${classes.basiclink} 
      ${disabled && classes.disabled} 
      ${reverse && classes.reverse} 
      ${dark && classes.dark}
      ${className && className}`}
    >
      {icon && (
        <Icon name={icon.name} {...icon.props} className={classes.icon} />
      )}
      <span>{label}</span>
    </Link>
  );
};

export default BasicLink;
