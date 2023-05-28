import classes from "./loginForm.module.sass";
import { Link } from "react-router-dom";
import { LayoutCardForm, CheckInput, BasicButton } from "../../../ui";
import { useFormik } from "formik";
import useLoginDataForm from "./useLoginDataForm";
import { EmailChamp, PassChamp } from "../champs";
import { useAppSelector } from "../../../redux/store";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const { initialValues, validationSchema, onSubmit } = useLoginDataForm();

  const { handleSubmit, errors, touched, getFieldProps } = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  const navigate = useNavigate();

  const {
    loggedUser: user,
    error,
    loading,
  } = useAppSelector((state) => state.auth);

  useEffect(() => {
    if (user) {
      navigate("/profile");
    }
    if (error.message) {
      alert(`error: ${error.message}`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, error]);

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
          <Link to="/passchange">Olvidé mi contraseña</Link>
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
