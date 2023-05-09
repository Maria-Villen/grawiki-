import { FC } from "react";
import { Link } from "react-router-dom";
import classes from "./menuButton.module.sass";

interface IMenuButtonProps {
  link: string;
  icon: string;
  text: string;
}

const MenuButton: FC<IMenuButtonProps> = ({ link, icon, text, ...props }) => {
  return (
    <Link to={link} className={classes.menuButton} {...props}>
      <img src={icon} alt="Crear un artículo" /> <span>{text}</span>
    </Link>
  );
};

export default MenuButton;
