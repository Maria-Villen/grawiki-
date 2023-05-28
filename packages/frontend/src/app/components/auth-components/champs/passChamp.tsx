import { PassInput, ErrorFormMsg } from "../../../ui";
import { IChamp } from "../../../interfaces/champs";

const PassChamp = ({ className, isTouched, isError, ...props }: IChamp) => {
  return (
    <div className={className && className}>
      <PassInput {...props} />
      {isTouched && isError && <ErrorFormMsg text={isError} />}
    </div>
  );
};

export default PassChamp;
