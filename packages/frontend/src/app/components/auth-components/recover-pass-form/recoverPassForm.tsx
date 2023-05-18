import classes from "./recoverPassForm.module.sass";

import {
  LayoutCardForm,
  BaseInput,
  BasicButton,
  ErrorFormMsg,
} from "../../../ui";

function RecoverPassForm() {
  const submitHanlder = () => {
    console.log("submit");
  };
  return (
    <LayoutCardForm withLogo>
      <h2>Recuperación de contraseña</h2>
      <p className={classes.centered}>
        Ingrese su correo electrónico asociado con la cuenta para recuperarla.
        Le enviaremos un enlace para restablecer la contraseña a esa dirección
        de correo electrónico
      </p>
      <form className={classes.form}>
        <div className={classes.form_group}>
          <BaseInput type="email" placeholder="E-mail" />
          <ErrorFormMsg text="Ingrese una dirección de e-mail válida" />
        </div>
        <BasicButton
          category="primary"
          label="Recuperar contraseña"
          fluid
          type="submit"
          onClick={submitHanlder}
        />
      </form>
    </LayoutCardForm>
  );
}

export default RecoverPassForm;
