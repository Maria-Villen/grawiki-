import { HTMLAttributes } from "react";
import classes from "./seeMoreBar.module.sass";
import Icon from "../../iconComponent/Icon";

const SeeMoreBar = ({ onClick, className }: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={`${classes.seeMoreBar} ${className}`}>
      <span className={classes.read} onClick={onClick}>
        <span>Ver más</span>
        <Icon className={classes.icon} name="ArrowIcon" direction="right" />
      </span>
    </div>
  );
};

export default SeeMoreBar;
