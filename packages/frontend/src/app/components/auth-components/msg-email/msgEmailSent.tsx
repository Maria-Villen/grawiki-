import { EmailImage } from "../../../assets";
import { LayoutCardForm } from "../../../ui";
import classes from "./megEmailSent.module.sass";

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
