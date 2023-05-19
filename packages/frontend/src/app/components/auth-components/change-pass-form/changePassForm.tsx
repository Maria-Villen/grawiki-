import classes from "./changePassForm.module.sass";

import { LayoutCardForm, BasicButton } from "../../../ui";
import { useFormik } from "formik";
import {
  validationSchema,
  initialValues,
  onSubmit,
} from "./changePassDataForm";
import { PassChamp } from "../champs";

function ChangePassForm() {
  const { handleSubmit, errors, touched, getFieldProps } = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });
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
        />
        <BasicButton
          category="primary"
          label="Modificar contraseña"
          fluid
          type="submit"
        />
      </form>
    </LayoutCardForm>
  );
}

export default ChangePassForm;
