import classes from "./basicButton.module.sass";
import { MouseEventHandler } from "react";
import Icon from "../../iconComponent/Icon";
import { IIcon } from "../../iconComponent/interfaceofIcon";

interface IBasicButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Optional: The category of the button.Can be "primary", "secondary", or "default".
   */
  category?: "default" | "primary" | "secondary" | "disabled";
  /**
   * The label text of the button.
   */
  label?: string;
  /**
   * Optional: Indicates whether the button should expand to fill the available width.
   */
  fluid?: boolean;
  /**
   * Optional: The URL of the icon to display on the button.
   */
  icon?: IIcon;
  /**
   * Optional: Indicates whether the icon should be displayed before the label.
   */
  reverse?: boolean;
  /**
   * Optional: The dimension size of the button. Can be "small", "medium", "large", or "xlarge".
   */
  dimension?: "small" | "normal" | "medium" | "big";
  /**
   * The event handler for the button click event.
   */
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

/**
 * BasicButton component.
 * The rendered BasicButton component.
 */

const BasicButton = ({
  category,
  label,
  fluid,
  icon,
  reverse,
  dimension,
  onClick,
  ...props
}: IBasicButton) => {
  let onlyIcon = false;
  if (!icon && !label) {
    label = "Add a label";
  }
  if (!label && icon) {
    onlyIcon = true;
  }
  return (
    <button
      className={`
        ${classes.button} 
        ${category && classes[category]} 
        ${fluid && classes.fluid} 
        ${reverse && classes.reverse}
        ${dimension && classes[dimension]}
        ${onlyIcon && classes.onlyIcon}
        `}
      onClick={onClick || undefined}
      {...props}
    >
      {icon && (
        <Icon name={icon.name} {...icon.props} className={classes.icon} />
      )}
      {label && <span>{label}</span>}
    </button>
  );
};

export default BasicButton;
