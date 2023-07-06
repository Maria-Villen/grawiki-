import { HTMLAttributes } from "react";
import classes from "./circleButton.module.sass";

/**
 * Circle Button is only for the pagination bar
 */
interface ICirculeButtonProps extends HTMLAttributes<HTMLButtonElement> {
  active?: boolean;
}

const CircleButton = ({ active = false, ...props }: ICirculeButtonProps) => {
  return (
    <button
      {...props}
      className={`${classes.button} ${active && classes.active}`}
    ></button>
  );
};

export default CircleButton;
