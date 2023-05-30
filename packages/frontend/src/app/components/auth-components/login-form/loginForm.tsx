import classes from "./loginForm.module.sass";
import { Link } from "react-router-dom";
import { LayoutCardForm, CheckInput, BasicButton, MsgError } from "../../../ui";
import useLoginDataForm from "./useLoginDataForm";
import { EmailChamp, PassChamp } from "../champs";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import { useNavigate } from "react-router-dom";
import { reset } from "../../../redux/slices/auth/authSlice";

/**
 * Login Form Component
 */
const LoginForm = () => {
  const { handleSubmit, errors, touched, getFieldProps } = useLoginDataForm();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const resetStates = () => {
    dispatch(reset());
  };

  const {
    loggedUser: user,
    error,
    loading,
  } = useAppSelector((state) => state.auth);

  if (user) {
    navigate("/profile");
  } else if (error.message) {
    return (
      <MsgError
        message={error.message}
        label="Aceptar"
        link="/login"
        cb={resetStates}
      />
    );
  }

  return (
    <LayoutCardForm withLogo>
      <p>Inicia sesión para ingresar tu cuenta</p>
      <form className={classes.loginForm_form} onSubmit={handleSubmit}>
        <div className={classes.loginForm_content}>
          <EmailChamp
            className={classes.loginForm_group}
            placeholder="E-mail"
            isTouched={touched.email}
            isError={errors.email}
            {...getFieldProps("email")}
          />
          <PassChamp
            className={classes.loginForm_group}
            placeholder="Contraseña"
            isTouched={touched.password}
            isError={errors.password}
            {...getFieldProps("password")}
          />
        </div>
        <div className={classes.loginForm_politics}>
          <label htmlFor="rememberMe" className={classes.checkbox}>
            <CheckInput id="rememberMe" /> Recordarme
          </label>
          <Link to="/recover">Olvidé mi contraseña</Link>
        </div>
        <BasicButton
          category="primary"
          type="submit"
          fluid
          label="Iniciar Sesión"
        />
      </form>
      {loading && <p>Loading</p>}
    </LayoutCardForm>
  );
};

export default LoginForm;
