import classes from "./basicButton.module.sass";
import { FC, MouseEventHandler } from "react";

interface IBasicButton extends React.HTMLProps<HTMLButtonElement> {
  category?: "primary" | "secondary" | "default";
  label: string;
  fluid?: boolean;
  icon?: string;
  reverse?: boolean;
  dimension?: "small" | "medium" | "large" | "xlarge";
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const BasicButton: FC<IBasicButton> = ({
  category,
  label,
  fluid,
  icon,
  reverse,
  dimension,
  onClick,
}) => {
  return (
    <button
      className={`
        ${classes.button} 
        ${category && classes[category]} 
        ${fluid && classes.fluid} 
        ${reverse && classes.reverse}
        ${dimension && classes[dimension]}
        `}
      onClick={onClick || null}
    >
      {icon && <img src={icon} alt={label} />}
      <span>{label}</span>
    </button>
  );
};

export default BasicButton;

BasicButton.defaultProps = {
  label: "Button",
  type: "button",
  fluid: false,
  reverse: false,
  category: "default",
  dimension: "medium",
};
