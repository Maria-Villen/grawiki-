import { FC } from "react";
import { Link } from "react-router-dom";
import classes from "./menuListItem.module.sass";

interface IMenuListItemProps {
  link: string;
  icon: string;
  text: string;
  fluid?: boolean;
  className?: string;
}

const MenuListItem: FC<IMenuListItemProps> = ({
  link,
  icon,
  text,
  fluid,
  className,
  ...props
}) => {
  return (
    <li
      className={`${classes.menulist} ${fluid && classes.fluid} ${className}`}
      {...props}
    >
      <Link className={classes.menulist_link} to={link}>
        <span className={classes.text}>{text}</span>
        <img className={classes.icon} src={icon} />
      </Link>
    </li>
  );
};

export default MenuListItem;
