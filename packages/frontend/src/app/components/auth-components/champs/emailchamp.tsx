import { BaseInput, ErrorFormMsg } from "../../../ui";
import { IChamp } from "./interfaces";

const EmailInput = ({ className, isTouched, isError, ...props }: IChamp) => {
  return (
    <div className={className && className}>
      <BaseInput id="email" type="email" {...props} />
      {isTouched && isError && (
        <ErrorFormMsg text="Ingrese una dirección de e-mail válida." />
      )}
    </div>
  );
};

export default EmailInput;
