import classes from "./layoutCardForm.module.sass";
import { Logo } from "../..";
import { ReactNode } from "react";

interface ILayoutCardForm {
  className?: string;
  children: ReactNode;
  withLogo: boolean;
}
const LayoutCardForm = ({ children, className, withLogo }: ILayoutCardForm) => {
  return (
    <div className={`${classes.layout} ${className}`}>
      {withLogo && <Logo className={classes.logos} type="horizontal" />}
      {children}
    </div>
  );
};

export default LayoutCardForm;

LayoutCardForm.defaultProps = {
  withLogo: false,
};
