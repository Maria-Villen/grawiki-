import classes from "./recoverPassForm.module.sass";
import useStateCall from "../../../services/useStateCall";
import { LayoutCardForm, BasicButton } from "../../../ui";
import { EmailChamp } from "../champs";
import useRecoverPassDataForm from "./recoverDataForm";
import { MsgEmailSent } from "../..";
import { useEffect } from "react";

function RecoverPassForm() {
  const { setState, loading, error, success } = useStateCall();
  const { handleSubmit, errors, touched, getFieldProps } =
    useRecoverPassDataForm(setState);

  useEffect(() => {
    console.log("rendering");
    console.log("error", error);
    console.log("loading", loading);
    console.log("success", success);
  }, [loading, error, success]);

  if (error) {
    return <p>Se produjo un error</p>;
  } else if (success) {
    return <MsgEmailSent />;
  } else
    return (
      <>
        {loading && <p>Cargando...</p>}
        <LayoutCardForm withLogo>
          <h2>Recuperación de contraseña</h2>
          <p className={classes.centered}>
            Ingrese su correo electrónico asociado con la cuenta para
            recuperarla. Le enviaremos un enlace para restablecer la contraseña
            a esa dirección de correo electrónico
          </p>
          <form className={classes.form} onSubmit={handleSubmit}>
            <EmailChamp
              className={classes.contentForm_group}
              placeholder="E-mail"
              isTouched={touched.email}
              isError={errors.email}
              {...getFieldProps("email")}
            />
            <BasicButton
              category="primary"
              label="Recuperar contraseña"
              fluid
              type="submit"
            />
          </form>
        </LayoutCardForm>
      </>
    );
}

export default RecoverPassForm;
