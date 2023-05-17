import { Link } from "react-router-dom";
import classes from "./menuListItem.module.sass";

interface IMenuListItemProps extends React.LiHTMLAttributes<HTMLLIElement> {
  link: string;
  icon: string;
  text: string;
  fluid?: boolean;
  className?: string;
}

const MenuListItem = ({
  link,
  icon,
  text,
  fluid,
  className,
  ...props
}: IMenuListItemProps) => {
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

MenuListItem.defaultProps = {
  link: "#",
};
