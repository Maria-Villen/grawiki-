import classes from "./basicButton.module.sass";
import { MouseEventHandler } from "react";

interface IBasicButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Optional: The category of the button.Can be "primary", "secondary", or "default".
   */
  category?: "primary" | "secondary" | "default";
  /**
   * The label text of the button.
   */
  label: string;
  /**
   * Optional: Indicates whether the button should expand to fill the available width.
   */
  fluid?: boolean;
  /**
   * Optional: The URL of the icon to display on the button.
   */
  icon?: string;
  /**
   * Optional: Indicates whether the icon should be displayed before the label.
   */
  reverse?: boolean;
  /**
   * Optional: The dimension size of the button. Can be "small", "medium", "large", or "xlarge".
   */
  dimension?: "small" | "medium" | "large" | "xlarge";
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
  return (
    <button
      className={`
        ${classes.button} 
        ${category && classes[category]} 
        ${fluid && classes.fluid} 
        ${reverse && classes.reverse}
        ${dimension && classes[dimension]}
        `}
      onClick={onClick || undefined}
      {...props}
    >
      {icon && <img src={icon} alt={label} />}
      <span>{label}</span>
    </button>
  );
};

export default BasicButton;

/**
 * Default props for the BasicButton component.
 */
BasicButton.defaultProps = {
  category: "default" as const,
  label: "Button",
  fluid: false,
  reverse: false,
  dimension: "medium" as const,
};
