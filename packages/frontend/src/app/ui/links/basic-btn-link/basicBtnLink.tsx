import classes from "./basicBtnLink.module.sass";
import { Link } from "react-router-dom";

interface IBasicBtnLink extends React.ComponentProps<typeof Link> {
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
}

/**
 * BasicBtnLink component.
 * The rendered BasicButton component but with link element
 */

const BasicBtnLink = ({
  category,
  label,
  fluid,
  icon,
  reverse,
  dimension,
  ...props
}: IBasicBtnLink) => {
  return (
    <Link
      className={`
        ${classes.button} 
        ${category && classes[category]} 
        ${fluid && classes.fluid} 
        ${reverse && classes.reverse}
        ${dimension && classes[dimension]}
        `}
      {...props}
    >
      {icon && <img src={icon} alt={label} />}
      <span>{label}</span>
    </Link>
  );
};

export default BasicBtnLink;

/**
 * Default props for the BasicButton component.
 */
BasicBtnLink.defaultProps = {
  category: "default" as const,
  label: "Button",
  fluid: false,
  reverse: false,
  dimension: "medium" as const,
  to: "/",
};
