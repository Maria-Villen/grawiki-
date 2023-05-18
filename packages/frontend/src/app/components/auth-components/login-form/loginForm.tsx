import classes from "./loginForm.module.sass";
import { Link } from "react-router-dom";
import {
  LayoutCardForm,
  BaseInput,
  CheckInput,
  PassInput,
  BasicButton,
  ErrorFormMsg,
} from "../../../ui";

const LoginForm = () => {
  const SubmitEventHandler = () => {
    console.log("login");
  };

  return (
    <LayoutCardForm withLogo>
      <p>Inicia sesión para ingresar tu cuenta</p>
      <form className={classes.loginForm_form}>
        <div className={classes.loginForm_content}>
          <div className={classes.loginForm_group}>
            <BaseInput type="email" placeholder="E-mail" />
            <ErrorFormMsg text="Ingrese una dirección de e-mail válida." />
          </div>
          <div className={classes.loginForm_group}>
            <PassInput placeholder="Contraseña" />
            <ErrorFormMsg text="Ingrese una contraseña válida." />
          </div>
        </div>
        <div className={classes.loginForm_politics}>
          <CheckInput>Recordarme</CheckInput>
          <Link to="/passchange">Olvidé mi contraseña</Link>
        </div>
        <BasicButton
          category="primary"
          type="submit"
          fluid
          label="Iniciar Sesión"
          onClick={SubmitEventHandler}
        />
      </form>
    </LayoutCardForm>
  );
};

export default LoginForm;
