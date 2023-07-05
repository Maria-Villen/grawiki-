import classes from "./reactionButton.module.sass";
import { IIcon } from "../../iconComponent/interfaceofIcon";
import { ButtonHTMLAttributes } from "react";
import Icon from "../../iconComponent/Icon";

interface ReactionButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Icon when the reaction is not active
   */
  icon: IIcon;
  /**
   * Icon when the reaction is active
   */
  iconActive?: IIcon;
  /**
   * To change to isSelected or not
   */
  isActive: boolean;
}

function ReactionButton({
  icon,
  iconActive,
  isActive = false,
  ...props
}: ReactionButtonProps) {
  return (
    <button type="button" className={classes.reaction} {...props}>
      <Icon
        className={classes.reaction_icon}
        name={isActive && iconActive ? iconActive.name : icon.name}
      />
    </button>
  );
}

export default ReactionButton;
