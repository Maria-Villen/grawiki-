import { HTMLAttributes } from "react";
import classes from "./returnBar.module.sass";
import Icon from "../../iconComponent/Icon";

const ReturnBar = ({ children, onClick }: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={classes.returnBar}>
      <Icon
        name="ArrowIcon"
        direction="left"
        className={classes.returnBar_icon}
        onClick={onClick}
      />
      <div className={classes.returnBar_child}>{children}</div>
    </div>
  );
};

export default ReturnBar;
