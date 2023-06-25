import { BaseInput, ErrorFormMsg } from "..";
import { IChamp } from "../../interfaces/champs";
import classes from "./fieldstates.module.sass";

/** Email champ with error message */
const EmailField = ({
  className,
  isTouched,
  disabled,
  isError,
  ...props
}: IChamp) => {
  return (
    <div className={`${className} ${disabled && classes.disabled}`}>
      <BaseInput
        type="email"
        {...props}
        disabled={disabled}
        className={isTouched ? (isError ? classes.error : classes.success) : ""}
      />
      {isTouched && isError && <ErrorFormMsg text={isError} />}
    </div>
  );
};

export default EmailField;
