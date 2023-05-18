import { ReactNode } from "react";
import classes from "./checkInput.module.sass";

interface ICheckInput {
  name?: string;
  children: ReactNode;
}

const CheckInput = ({ name, children }: ICheckInput) => {
  return (
    <label htmlFor={name} className={classes.checkbox}>
      <input name={name} type="checkbox" className={classes.checkbox_input} />
      {children}
    </label>
  );
};

export default CheckInput;

CheckInput.defaultProps = {
  name: "CheckInput",
  children: "Label",
};
