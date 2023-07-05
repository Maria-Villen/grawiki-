import { CheckInput, ErrorFormMsg } from "..";
import { IChamp } from "../../interfaces/champs";
import classes from "./fieldstates.module.sass";

/** Email champ with error message */
const CheckField = ({
  className,
  name,
  isTouched,
  disabled,
  isError,
  children,
  ...props
}: IChamp) => {
  return (
    <div className={`${className} ${disabled && classes.disabled}`}>
      <div>
        <label htmlFor={name} className={classes.content}>
          <CheckInput
            {...props}
            name={name}
            disabled={disabled}
            className={
              isTouched ? (isError ? classes.error : classes.success) : ""
            }
          />
          {children}
        </label>
      </div>
      {isTouched && isError && <ErrorFormMsg text={isError} />}
    </div>
  );
};

export default CheckField;
