import classes from "./slipButton.module.sass";
import { ToggleButton } from "../../index";
import { useState, InputHTMLAttributes, Ref, forwardRef } from "react";
import { IIcon } from "../../iconComponent/interfaceofIcon";
import Icon from "../../iconComponent/Icon";
/**
 * Component ListInput
 * Description: A selector with suggestions
 */

interface SlipButtonProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: IIcon;
  opened?: boolean;
  fluid?: boolean;
  onClose?: () => void;
}
const SlipButton = forwardRef<HTMLInputElement, SlipButtonProps>(
  (
    { icon, children, opened, fluid, ...props }: SlipButtonProps,
    ref: Ref<HTMLInputElement>
  ) => {
    const [isOpen, setIsOpen] = useState(opened);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

    return (
      <div className={classes.container}>
        <div
          className={`${classes.dataList} ${isOpen ? classes.open : null} ${
            fluid && classes.fluid
          }`}
        >
          {icon && (
            <Icon
              name={icon.name}
              {...icon?.props}
              className={classes.dataList_valueIcon}
            />
          )}
          <input
            className={`${isOpen ? classes.open : ""} ${
              icon ? classes.inputWithIcon : ""
            }`}
            {...props}
            ref={ref}
          />
          <ToggleButton
            className={classes.dataList_icon}
            iconClose={{ name: "ArrowIcon", props: { direction: "down" } }}
            iconOpen={{ name: "ArrowIcon", props: { direction: "up" } }}
            isOpen={isOpen}
            onClick={toggleMenu}
          />
        </div>

        <div
          className={
            isOpen ? classes.dataList_list_open : classes.dataList_list
          }
        >
          <ul>{children}</ul>
        </div>
      </div>
    );
  }
);

export default SlipButton;
