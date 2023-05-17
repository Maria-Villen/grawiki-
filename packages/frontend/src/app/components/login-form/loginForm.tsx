import classes from "./loginForm.module.sass";
import { Link } from "react-router-dom";
import {
  Logo,
  BaseInput,
  CheckInput,
  PassInput,
  BasicButton,
  ErrorFormMsg,
} from "..";

const LoginForm = () => {
  const SubmitEventHandler = () => {
    console.log("login");
  };

  return (
    <div className={classes.loginForm}>
      <Logo className={classes.loginForm_icon} type="horizontal" />
      <p>Inicia sesión para ingresar tu cuenta</p>
      <form className={classes.loginForm_form}>
        <div className={classes.loginForm_content}>
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
              text="Ingrese una contraseña válida."
            />
          </div>
        </div>
        <div className={classes.loginForm_politics}>
          <CheckInput text="Recordarme" />
          <Link to="/passchange">Olvidé mi contraseña</Link>
        </div>
        <BasicButton
          category="primary"
          type="submit"
          fluid
          onClick={SubmitEventHandler}
        />
      </form>
    </div>
  );
};

export default LoginForm;
