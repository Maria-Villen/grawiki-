import { Link, LinkProps } from "react-router-dom";
import classes from "./menuButton.module.sass";
import { IIcon } from "../../iconComponent/interfaceofIcon";
import Icon from "../../iconComponent/Icon";

interface IMenuButtonProps extends LinkProps {
  /**
   * The icon for the button
   */
  icon: IIcon;
  /**
   * The text in the button
   */
  text: string;
  /**
   * An button that can adapt to the parent container
   */
  fluid?: boolean;
}

/** Link acting as button */

const MenuButton = ({ icon, text, fluid, ...props }: IMenuButtonProps) => {
  return (
    <Link
      className={`${classes.menuButton} ${fluid && classes.fluid}`}
      {...props}
    >
      <Icon name={icon.name} {...icon.props} /> <span>{text}</span>
    </Link>
  );
};

export default MenuButton;

MenuButton.defaultProps = {
  fluid: false,
  to: "#",
};
