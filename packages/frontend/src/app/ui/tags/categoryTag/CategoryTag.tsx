import classes from "./categoryTag.module.sass";
import Icon from "../../iconComponent/Icon";
import { HTMLAttributes } from "react";
import { IIcon } from "../../iconComponent/interfaceofIcon";

interface CategoryTag extends HTMLAttributes<HTMLDivElement> {
  icon: IIcon;
}

const CategoryTag = ({ icon, children, ...props }: CategoryTag) => {
  return (
    <div className={classes.categoryTag}>
      <Icon
        className={classes.icon}
        name={icon.name}
        {...icon.props}
        {...props}
      />
      <span>{children}</span>
    </div>
  );
};

export default CategoryTag;
