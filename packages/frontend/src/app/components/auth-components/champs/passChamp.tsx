import { PassInput, ErrorFormMsg } from "../../../ui";
import { IChamp } from "./interfaces";

const PassChamp = ({ className, isTouched, isError, ...props }: IChamp) => {
  return (
    <div className={className && className}>
      <PassInput {...props} />
      {isTouched && isError && (
        <ErrorFormMsg text="Contraseña insegura. Requisitos: 8 caracteres, mayúscula, minúscula y caracter especial." />
      )}
    </div>
  );
};

export default PassChamp;
