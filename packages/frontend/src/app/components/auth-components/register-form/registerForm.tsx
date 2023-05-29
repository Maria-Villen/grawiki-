import classes from "./registerForm.module.sass";
import { Link } from "react-router-dom";
import {
  LayoutCardForm,
  CheckInput,
  BasicButton,
  ErrorFormMsg,
} from "../../../ui";
import { PassChamp, EmailChamp, UserNameChamp } from "../champs";
import useRegisterDataForm from "./registerDataForm";
import { useAppSelector } from "../../../redux/store";
import { MsgSuccess } from "../../../ui";

const RegisterForm = () => {
  const { handleSubmit, handleBlurWithAction, errors, touched, getFieldProps } =
    useRegisterDataForm();

  const {
    loggedUser: user,
    error,
    loading,
  } = useAppSelector((state) => state.auth);

  if (user) {
    return (
      <MsgSuccess
        message="Registro realizado con éxito"
        label="Ir a perfil"
        link="/profile"
      />
    );
  } else if (error.message) {
    return <p>Error ${error.message}</p>;
  } else {
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
              autoComplete="name"
              {...getFieldProps("userName")}
              onBlur={handleBlurWithAction}
            />

            <EmailChamp
              className={classes.contentForm_group}
              placeholder="E-mail"
              isTouched={touched.email}
              isError={errors.email}
              autoComplete="email"
              {...getFieldProps("email")}
            />

            <PassChamp
              className={classes.contentForm_group}
              placeholder="Contraseña"
              isTouched={touched.password}
              isError={errors.password}
              autoComplete="off"
              {...getFieldProps("password")}
            />

            <PassChamp
              className={classes.contentForm_group}
              placeholder="Repetir contraseña"
              isTouched={touched.confirmPass}
              isError={errors.confirmPass}
              autoComplete="off"
              {...getFieldProps("confirmPass")}
            />
          </div>

          <div className={classes.contentForm_group}>
            <div className={classes.checkbox}>
              <CheckInput id="terms" {...getFieldProps("terms")} />
              <Link to="/terms">Acepto los Terminos y condiciones de uso</Link>
            </div>
            {touched.terms && errors.terms && (
              <ErrorFormMsg text={errors.terms} />
            )}
          </div>

          <BasicButton
            category="primary"
            type="submit"
            fluid
            label="Registrarse"
          />
        </form>
        {loading && <p>Loading</p>}
      </LayoutCardForm>
    );
  }
};

export default RegisterForm;
