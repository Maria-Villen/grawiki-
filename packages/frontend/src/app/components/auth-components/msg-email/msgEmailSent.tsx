import { EmailImage } from "../../../assets/index.ts";
import { LayoutCardForm } from "../../../ui";

/**
 * Message component for mail sent (below to recover password)
 */
const MsgEmailSent = () => {
  return (
    <LayoutCardForm withLogo>
      <p className="centered">
        Se ha enviado un correo. Revise su casilla para recuperar su contraseña.
      </p>
      <img src={EmailImage} alt="Correo enviado con éxito" />
    </LayoutCardForm>
  );
};

export default MsgEmailSent;
