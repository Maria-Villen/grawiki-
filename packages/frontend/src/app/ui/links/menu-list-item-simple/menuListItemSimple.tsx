import { Link } from "react-router-dom";
import classes from "./menuListItemSimple.module.sass";

interface IMenuListItemProps extends React.LiHTMLAttributes<HTMLLIElement> {
  link: string;
  icon: string;
  text: string;
  fluid?: boolean;
  className?: string;
  inverse?: boolean;
}

const MenuListItem = ({
  link,
  icon,
  text,
  fluid,
  className,
  inverse,
  ...props
}: IMenuListItemProps) => {
  return (
    <li
      className={`${classes.menulist} ${fluid && classes.fluid} ${
        inverse && classes.inverse
      } ${className}`}
      {...props}
    >
      <Link className={classes.menulist_link} to={link}>
        <span className={classes.icon}>
          <img src={icon} alt={text} />
        </span>
        <span className={classes.text}>{text}</span>
      </Link>
    </li>
  );
};

export default MenuListItem;

MenuListItem.defaultProps = {
  link: "/",
};
