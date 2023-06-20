import { ButtonHTMLAttributes } from "react";
import Icon from "../../iconComponent/Icon";
import { IIcon } from "../../iconComponent/interfaceofIcon";
import classes from "./menuButton.module.sass";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The icon for the button
   */
  icon: IIcon;
  /**
   * The text in the button
   */
  label: string;
  /**
   * Variants of the button: horizontal, vertical, responsive. Responsive use horizontal in mobile and vertical in other breackpoints.
   */
  variant: "horizontal" | "vertical" | "responsive";
  /**
   * Indicate if the button is active
   */
  isActive?: boolean;
  /**
   * An button that can adapt to the parent container
   */
  fluid?: boolean;
}

const MenuButton = ({
  icon,
  label,
  variant = "responsive",
  isActive,
  fluid,
  ...props
}: Props) => {
  return (
    <button
      className={`
        ${classes.button} 
        ${classes[variant]} 
        ${fluid && classes.fluid}`}
      {...props}
    >
      <span className={classes.iconContainer}>
        <Icon className={classes.icon} name={icon.name} fill={isActive} />
      </span>
      <span className={classes.label}>{label}</span>
    </button>
  );
};

export default MenuButton;
