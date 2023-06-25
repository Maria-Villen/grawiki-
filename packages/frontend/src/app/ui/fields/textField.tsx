import { BaseInput, ErrorFormMsg } from "..";
import { IChamp } from "../../interfaces/champs";
import classes from "./fieldstates.module.sass";
/** UserName champ with error message */
const TextField = ({
  className,
  disabled,
  isTouched,
  isError,
  ...props
}: IChamp) => {
  return (
    <div className={`${className} ${disabled && classes.disabled}`}>
      <BaseInput
        type="text"
        {...props}
        disabled={disabled}
        className={isTouched ? (isError ? classes.error : classes.success) : ""}
      />
      {isTouched && isError && <ErrorFormMsg text={isError} />}
    </div>
  );
};

export default TextField;
