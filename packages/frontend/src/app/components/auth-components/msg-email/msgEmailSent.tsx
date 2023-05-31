import { EmailImage } from "../../../assets";
import { LayoutCardForm } from "../../../ui";
import classes from "./megEmailSent.module.sass";

/**
 * Message component for mail sent (below to recover password)
 */
const MsgEmailSent = () => {
  return (
    <LayoutCardForm withLogo>
      <p className={classes.centered}>
        Se ha enviado un correo. Revise su casilla para recuperar su contraseña.
      </p>
      <img src={EmailImage} alt="Correo enviado con éxito" />
    </LayoutCardForm>
  );
};

export default MsgEmailSent;
