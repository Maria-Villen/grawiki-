import classes from "./slipButton.module.sass";
import { ToggleButton } from "../../index";
import {
  useState,
  InputHTMLAttributes,
  Ref,
  forwardRef,
  useEffect,
  ReactNode,
} from "react";
import { IIcon } from "../../iconComponent/interfaceofIcon";
import Icon from "../../iconComponent/Icon";

/**
 * Component SlipButton
 * Description: A selector with suggestions
 */

export interface SlipButtonProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: IIcon;
  fluid?: boolean;
  closeControler?: boolean;
  children?: ReactNode;
}
const SlipButton = forwardRef<HTMLInputElement, SlipButtonProps>(
  (
    { icon, children, fluid, closeControler, ...props }: SlipButtonProps,
    ref: Ref<HTMLInputElement>
  ) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

    useEffect(() => {
      if (isOpen) {
        setIsOpen(false);
      }
    }, [closeControler]);

    return (
      <div className={classes.container}>
        <div
          className={`${classes.dataList} ${isOpen ? classes.open : ""} ${
            fluid ? classes.fluid : ""
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
          <ul className={classes.dataList_containerList}>{children}</ul>
        </div>
      </div>
    );
  }
);

export default SlipButton;
