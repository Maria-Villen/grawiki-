import { FC } from "react";
import { Link } from "react-router-dom";
import classes from "./iconLink.module.sass";

interface IIconLinkProps {
  link: string;
  icon: string;
  altText: string;
  className?: string | undefined;
}

const IconLink: FC<IIconLinkProps> = ({
  className,
  link,
  icon,
  altText,
  ...props
}) => {
  return (
    <Link to={link} className={`${classes.iconLink} ${className}`} {...props}>
      <img src={icon} alt={altText} />
    </Link>
  );
};

export default IconLink;
