import { MouseEventHandler } from "react";
import { MenuIcon } from "../../../assets";
import classes from "./toggleButton.module.sass";

interface IToggleButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  iconOpen?: string;
  iconClose: string;
  isOpen?: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const ToggleButton = ({
  className,
  iconOpen,
  iconClose,
  isOpen,
  onClick,
  ...props
}: IToggleButtonProps) => {
  return (
    <button
      type="button"
      className={`${classes.button} ${className}`}
      onClick={onClick}
      {...props}
    >
      <img src={isOpen ? iconOpen || iconClose : iconClose} alt="" />
    </button>
  );
};
export default ToggleButton;

ToggleButton.defaultProps = {
  iconClose: MenuIcon,
  isOpen: false,
  onClick: undefined,
};
