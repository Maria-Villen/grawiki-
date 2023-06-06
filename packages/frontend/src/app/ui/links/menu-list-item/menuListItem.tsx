import { Link } from "react-router-dom";
import classes from "./menuListItem.module.sass";
import { IIcon } from "../../iconComponent/interfaceofIcon";
import Icon from "../../iconComponent/Icon";

interface IMenuListItemProps extends React.LiHTMLAttributes<HTMLLIElement> {
  link: string;
  icon: IIcon;
  text: string;
  fluid?: boolean;
  className?: string;
  dark?: boolean;
}

const MenuListItem = ({
  link,
  icon,
  text,
  fluid,
  className,
  dark,
  ...props
}: IMenuListItemProps) => {
  return (
    <li
      className={`${classes.menulist} ${fluid && classes.fluid} ${className}`}
      {...props}
    >
      <Link className={classes.menulist_link} to={link}>
        <span className={classes.text}>{text}</span>
        <span className={`${classes.icon} ${dark && classes.dark}`}>
          <Icon name={icon.name} {...icon.props} />
        </span>
      </Link>
    </li>
  );
};

export default MenuListItem;

MenuListItem.defaultProps = {
  link: "/",
};
