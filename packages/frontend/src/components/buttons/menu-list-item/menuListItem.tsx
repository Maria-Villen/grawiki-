import { FC } from "react";
import { Link } from "react-router-dom";
import classes from "./menuListItem.module.sass";

interface IMenuListItemProps {
  link: string;
  icon: string;
  text: string;
}

const MenuListItem: FC<IMenuListItemProps> = ({
  link,
  icon,
  text,
  ...props
}) => {
  return (
    <li className={classes.menulist} {...props}>
      <Link className={classes.menulist_link} to={link}>
        <span className={classes.text}>{text}</span>
        <img className={classes.icon} src={icon} />
      </Link>
    </li>
  );
};

export default MenuListItem;
