import classes from "./recoverPassForm.module.sass";
import { LayoutCardForm, BasicButton, MsgError } from "../../../ui";
import { MsgEmailSent } from "../..";
import { EmailChamp } from "../champs";
import useRecoverPassDataForm from "./recoverDataForm";

function RecoverPassForm() {
  const {
    handleSubmit,
    errors,
    touched,
    getFieldProps,
    error,
    loading,
    success,
    setState,
  } = useRecoverPassDataForm();

  if (error) {
    return (
      <MsgError
        message="Hubo un error"
        label="Reintentar"
        link="/recover"
        cb={() => setState("reset")}
        linkInit
      />
    );
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
