import { BaseInput, ErrorFormMsg } from "..";
import { IChamp } from "../../interfaces/champs";

/** UserName champ with error message */
const TextField = ({ className, isTouched, isError, ...props }: IChamp) => {
  return (
    <div className={className && className}>
      <BaseInput type="text" {...props} />
      {isTouched && isError && <ErrorFormMsg text={isError} />}
    </div>
  );
};

export default TextField;
