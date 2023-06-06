import { MouseEventHandler } from "react";
import classes from "./toggleButton.module.sass";
import Icon from "../../iconComponent/Icon";
import { IIcon } from "../../iconComponent/interfaceofIcon";

interface IToggleButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  iconOpen?: IIcon;
  iconClose: IIcon;
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
      <Icon
        name={isOpen ? iconOpen?.name || iconClose.name : iconClose.name}
        {...(isOpen ? iconOpen?.props || iconClose?.props : iconClose?.props)}
      />
    </button>
  );
};
export default ToggleButton;

ToggleButton.defaultProps = {
  iconClose: { name: "ArrowIcon", props: { direction: "up" } },
  isOpen: false,
};
