import { BaseInput, ErrorFormMsg } from "../../../ui";
import { IChamp } from "./interfaces";

const UserNameChamp = ({ className, isTouched, isError, ...props }: IChamp) => {
  return (
    <div className={className && className}>
      <BaseInput type="text" {...props} />
      {isTouched && isError && (
        <ErrorFormMsg text="El nombre de usuario ya existe. Ingrese otro." />
      )}
    </div>
  );
};

export default UserNameChamp;
