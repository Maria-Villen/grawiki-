import classes from "./loginForm.module.sass";
import { Link } from "react-router-dom";
import { LayoutCardForm, CheckInput, BasicButton } from "../../../ui";
import { useFormik } from "formik";
import { validationSchema, initialValues, onSubmit } from "./loginDataForm";
import { EmailChamp, PassChamp } from "../champs";

const LoginForm = () => {
  const { handleSubmit, errors, touched, getFieldProps } = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

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
    </LayoutCardForm>
  );
};

export default LoginForm;
