import classes from "./iconButton.module.sass";
import { MouseEventHandler } from "react";
import Icon from "../../iconComponent/Icon";
import { IIcon } from "../../iconComponent/interfaceofIcon";

interface IIconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Optional: The category of the button.Can be "primary", "secondary", or "default".
   */
  category?: "default" | "primary" | "secondary" | "disabled";
  /**
   * Optional: The URL of the icon to display on the button.
   */
  icon: IIcon;
  /**
   * Optional: The dimension size of the button. Can be "small", "medium", "large", or "xlarge".
   */
  dimension?: "small" | "normal" | "medium" | "big";
  /**
   * The event handler for the button click event.
   */
  onClick?: MouseEventHandler<HTMLButtonElement>;
  rounded?: boolean;
}

/**
 * BasicButton component.
 * The rendered BasicButton component.
 */

const IconButton = ({
  category,
  icon,
  rounded,
  dimension,
  onClick,
  ...props
}: IIconButtonProps) => {
  return (
    <button
      className={`
        ${classes.button} 
        ${category && classes[category]} 
        ${dimension && classes[dimension]}
        ${rounded && classes.rounded}
        `}
      onClick={onClick || undefined}
      {...props}
    >
      <Icon name={icon.name} className={classes.icon} {...icon.props} />
    </button>
  );
};

export default IconButton;
