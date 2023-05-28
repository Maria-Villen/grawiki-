import { BaseInput, ErrorFormMsg } from "../../../ui";
import { IChamp } from "../../../interfaces/champs";

const UserNameChamp = ({ className, isTouched, isError, ...props }: IChamp) => {
  return (
    <div className={className && className}>
      <BaseInput type="text" {...props} />
      {isTouched && isError && <ErrorFormMsg text={isError} />}
    </div>
  );
};

export default UserNameChamp;
