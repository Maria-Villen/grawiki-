import { BaseInput, ErrorFormMsg } from "..";
import { IChamp } from "../../interfaces/champs";

/** Email champ with error message */
const EmailField = ({ className, isTouched, isError, ...props }: IChamp) => {
  return (
    <div className={className && className}>
      <BaseInput type="email" {...props} />
      {isTouched && isError && <ErrorFormMsg text={isError} />}
    </div>
  );
};

export default EmailField;
