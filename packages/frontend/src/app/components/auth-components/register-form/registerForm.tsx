import classes from "./registerForm.module.sass";
import { Link } from "react-router-dom";
import {
  LayoutCardForm,
  CheckInput,
  BasicButton,
  ErrorFormMsg,
} from "../../../ui";
import { PassChamp, EmailChamp, UserNameChamp } from "../champs";
import { useFormik } from "formik";
import { validationSchema, initialValues, onSubmit } from "./registerDataForm";

const RegisterForm = () => {
  const { handleSubmit, errors, touched, getFieldProps } = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });
  return (
    <LayoutCardForm withLogo>
      <p>Regístrate para poder publicar y editar temas</p>
      <form className={classes.contentForm_form} onSubmit={handleSubmit}>
        <div className={classes.contentForm_content}>
          <UserNameChamp
            className={classes.contentForm_group}
            placeholder="Nombre de usuario"
            isTouched={touched.userName}
            isError={errors.userName}
            {...getFieldProps("userName")}
          />

          <EmailChamp
            className={classes.contentForm_group}
            placeholder="E-mail"
            isTouched={touched.email}
            isError={errors.email}
            {...getFieldProps("email")}
          />

          <PassChamp
            className={classes.contentForm_group}
            placeholder="Contraseña"
            isTouched={touched.password}
            isError={errors.password}
            {...getFieldProps("password")}
          />

          <PassChamp
            className={classes.contentForm_group}
            placeholder="Repetir contraseña"
            isTouched={touched.confirmPass}
            isError={errors.confirmPass}
          />
        </div>
        <div className={classes.contentForm_group}>
          <div className={classes.checkbox}>
            <CheckInput id="terms" {...getFieldProps("terms")} />
            <Link to="/passchange">
              Acepto los Terminos y condiciones de uso
            </Link>
          </div>
          {errors.terms && (
            <ErrorFormMsg text="Debes aceptar los términos y condiciones." />
          )}
        </div>
        <BasicButton category="primary" type="submit" fluid />
      </form>
    </LayoutCardForm>
  );
};

export default RegisterForm;
