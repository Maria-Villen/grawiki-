import { BaseInput, ErrorFormMsg } from "../../../ui";
import { IChamp } from "../../../interfaces/champs";

/** Email champ with error message */
const EmailInput = ({ className, isTouched, isError, ...props }: IChamp) => {
  return (
    <div className={className && className}>
      <BaseInput id="email" type="email" {...props} />
      {isTouched && isError && <ErrorFormMsg text={isError} />}
    </div>
  );
};

export default EmailInput;
