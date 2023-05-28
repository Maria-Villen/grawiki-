import classes from "./changePassForm.module.sass";
import { LayoutCardForm, BasicButton } from "../../../ui";
import { PassChamp } from "../champs";
import useChangePassDataForm from "./changePassDataForm";
import { useAppSelector } from "../../../redux/store";
import { useEffect } from "react";

function ChangePassForm() {
  const { handleSubmit, errors, touched, getFieldProps } =
    useChangePassDataForm();

  const {
    loggedUser: user,
    error,
    loading,
  } = useAppSelector((state) => state.auth);

  useEffect(() => {
    if (user) {
      console.log("success!");
    }
    if (error.message) {
      console.log(error.message);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, error]);

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

export default ChangePassForm;
