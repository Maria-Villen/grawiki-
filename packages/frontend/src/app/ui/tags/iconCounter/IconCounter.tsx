import { HTMLAttributes } from "react";
import classes from "./iconCounter.module.sass";
import { IIcon } from "../../iconComponent/interfaceofIcon";
import Icon from "../../iconComponent/Icon";

interface IIconCounter extends HTMLAttributes<HTMLDivElement> {
  icon: IIcon;
  quantity?: number;
}

const IconCounter = ({ icon, quantity, ...props }: IIconCounter) => {
  return (
    <div className={classes.container}>
      <Icon name={icon.name} {...icon.props} {...props} />
      <span className={classes.quantity}>{quantity}</span>
    </div>
  );
};

IconCounter.defaultProps = {
  quantity: 0,
};

export default IconCounter;
