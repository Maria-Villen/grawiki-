import { FC, MouseEventHandler } from "react";
import { MenuIcon } from "../../../assets";
import classes from "./toggleButton.module.sass";

interface IToggleButtonProps {
  className?: string | null;
  iconOpen?: string;
  iconClose: string;
  isOpen?: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const ToggleButton: FC<IToggleButtonProps> = ({
  className,
  iconOpen,
  iconClose,
  isOpen,
  onClick,
}) => {
  return (
    <button
      type="button"
      className={`${classes.button} ${className}`}
      onClick={onClick}
    >
      <img src={isOpen ? iconOpen || iconClose : iconClose} alt="" />
    </button>
  );
};
export default ToggleButton;

ToggleButton.defaultProps = {
  className: null,
  iconClose: MenuIcon,
  isOpen: false,
  onClick: undefined,
};
