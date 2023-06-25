import { PassInput, ErrorFormMsg } from "..";
import { IChamp } from "../../interfaces/champs";
import classes from "./fieldstates.module.sass";

/** Pass champ with error message */
const PassField = ({
  className,
  disabled,
  isTouched,
  isError,
  ...props
}: IChamp) => {
  return (
    <div className={`${className} ${disabled && classes.disabled}`}>
      <PassInput
        {...props}
        disabled={disabled}
        className={isTouched ? (isError ? classes.error : classes.success) : ""}
      />
      {isTouched && isError && <ErrorFormMsg text={isError} />}
    </div>
  );
};

export default PassField;
