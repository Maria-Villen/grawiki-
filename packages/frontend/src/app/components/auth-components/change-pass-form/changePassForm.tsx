import classes from "./changePassForm.module.sass";
import { LayoutCardForm, BasicButton, MsgSuccess, MsgError } from "../../../ui";
import { PassChamp } from "../champs";
import useChangePassDataForm from "./changePassDataForm";
import { useAppSelector, useAppDispatch } from "../../../redux/store";
import { reset } from "../../../redux/slices/auth/authSlice";

/**
 * Form for the change of the password
 */

function ChangePassForm() {
  // get token from url and see if url matches with some user.
  const dispatch = useAppDispatch();

  // Hook for the logic of the form
  const { handleSubmit, errors, touched, getFieldProps } =
    useChangePassDataForm();

  // reset the states of the redux auth data
  const resetStates = () => {
    dispatch(reset());
  };

  // get Auth redux info
  const {
    loggedUser: user,
    error,
    loading,
  } = useAppSelector((state) => state.auth);

  if (user) {
    return (
      <MsgSuccess
        message="Se ha cambiado la contraseña"
        label="Ir al perfil"
        link="/profile"
      />
    );
  } else if (error.message) {
    return (
      <MsgError
        message={
          error.message || "Hubo un problema. Intenta mas tarde nuevamente."
        }
        label="Ir a iniciar sesión"
        link="/password"
        cb={resetStates}
      />
    );
  } else {
    return (
      <LayoutCardForm withLogo>
        <h2>Se ha verificado su cuenta</h2>
        <p className={classes.centered}>
          Ingrese su nueva contraseña. Por favor, asegúrese de que contenta al
          menos 8 caracteres, una letra mayúscula, una letra minúscula y un
          caracter especial.
        </p>
        <form className={classes.form} onSubmit={handleSubmit}>
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
            {...getFieldProps("confirmPass")}
          />
          <BasicButton
            category="primary"
            label="Modificar contraseña"
            fluid
            type="submit"
          />
        </form>
        {loading && <p>Loading</p>}
      </LayoutCardForm>
    );
  }
}

export default ChangePassForm;
