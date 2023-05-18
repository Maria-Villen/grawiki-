import classes from "./registerForm.module.sass";
import { Link } from "react-router-dom";
import {
  LayoutCardForm,
  BaseInput,
  CheckInput,
  PassInput,
  BasicButton,
  ErrorFormMsg,
} from "../../../ui";

const RegisterForm = () => {
  const SubmitEventHandler = () => {
    console.log("login");
  };

  return (
    <LayoutCardForm withLogo>
      <p>Regístrate para poder publicar y editar temas</p>
      <form className={classes.loginForm_form}>
        <div className={classes.loginForm_content}>
          <div className={classes.loginForm_group}>
            <BaseInput type="text" placeholder="Nombre de usuario" />
            <ErrorFormMsg
              className={classes.error}
              text="El nombre de usuario ya existe. Ingrese otro."
            />
          </div>
          <div className={classes.loginForm_group}>
            <BaseInput type="email" placeholder="E-mail" />
            <ErrorFormMsg
              className={classes.error}
              text="Ingrese una dirección de e-mail válida."
            />
          </div>
          <div className={classes.loginForm_group}>
            <PassInput placeholder="Contraseña" />
            <ErrorFormMsg
              className={classes.loginForm_error}
              text="Contraseña insegura. Requisitos: 8 caracteres, mayúscula, minúscula y caracter especial."
            />
          </div>
          <div className={classes.loginForm_group}>
            <PassInput placeholder="Repetir contraseña" />
            <ErrorFormMsg
              className={classes.loginForm_error}
              text="Las contraseñas no coinciden."
            />
          </div>
        </div>
        <div className={classes.loginForm_politics}>
          <CheckInput>
            <Link to="/passchange">
              Acepto los Terminos y condiciones de uso
            </Link>
          </CheckInput>
        </div>
        <BasicButton
          category="primary"
          type="submit"
          fluid
          onClick={SubmitEventHandler}
        />
      </form>
    </LayoutCardForm>
  );
};

export default RegisterForm;
