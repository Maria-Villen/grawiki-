import { PassInput, ErrorFormMsg } from "..";
import { IChamp } from "../../interfaces/champs";

/** Pass champ with error message */
const PassField = ({ className, isTouched, isError, ...props }: IChamp) => {
  return (
    <div className={className && className}>
      <PassInput {...props} />
      {isTouched && isError && <ErrorFormMsg text={isError} />}
    </div>
  );
};

export default PassField;
