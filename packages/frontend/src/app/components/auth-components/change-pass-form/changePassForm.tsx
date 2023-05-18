import classes from "./changePassForm.module.sass";

import {
  LayoutCardForm,
  PassInput,
  BasicButton,
  ErrorFormMsg,
} from "../../../ui";

function ChangePassForm() {
  const submitHanlder = () => {
    console.log("submit");
  };
  return (
    <LayoutCardForm withLogo>
      <h2>Se ha verificado su cuenta</h2>
      <p className={classes.centered}>
        Ingrese su nueva contraseña. Por favor, asegúrese de que contenta al
        menos 8 caracteres, una letra mayúscula, una letra minúscula y un
        caracter especial.
      </p>
      <form className={classes.form}>
        <div className={classes.form_group}>
          <PassInput placeholder="Contraseña" />
          <ErrorFormMsg text="Contraseña insegura. Requisitos: 8 caracteres, mayúscula, minúscula y caracter especial." />
        </div>
        <div className={classes.form_group}>
          <PassInput placeholder="Contraseña" />
          <ErrorFormMsg text="Contraseña no coincide. Inténtelo de nuevo." />
        </div>
        <BasicButton
          category="primary"
          label="Modificar contraseña"
          fluid
          type="submit"
          onClick={submitHanlder}
        />
      </form>
    </LayoutCardForm>
  );
}

export default ChangePassForm;
