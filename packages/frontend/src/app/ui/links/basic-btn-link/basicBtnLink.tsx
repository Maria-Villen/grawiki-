import classes from "./basicBtnLink.module.sass";
import { Link } from "react-router-dom";
import Icon from "../../iconComponent/Icon";
import { IIcon } from "../../iconComponent/interfaceofIcon";

interface IBasicBtnLink extends React.ComponentProps<typeof Link> {
  /**
   * Optional: The category of the button.Can be "primary", "secondary", or "default".
   */
  category?: "primary" | "secondary" | "disabled";
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
  icon?: IIcon;
  /**
   * Optional: Indicates whether the icon should be displayed before the label.
   */
  reverse?: boolean;
  /**
   * Optional: The dimension size of the button. Can be "small", "medium", "large", or "xlarge".
   */
  dimension?: "small" | "normal" | "medium" | "big";
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
      {icon && (
        <Icon name={icon.name} {...icon.props} className={classes.icon} />
      )}
      <span>{label}</span>
    </Link>
  );
};

export default BasicBtnLink;

/**
 * Default props for the BasicButton component.
 */
BasicBtnLink.defaultProps = {
  category: "primary" as const,
  label: "Button",
  fluid: false,
  reverse: false,
  dimension: "normal" as const,
  to: "/",
};
