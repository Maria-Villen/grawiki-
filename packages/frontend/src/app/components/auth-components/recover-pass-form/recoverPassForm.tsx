import classes from "./recoverPassForm.module.sass";
import { LayoutCardForm, BasicButton, MsgError } from "../../../ui";
import { MsgEmailSent } from "../..";
import { EmailField } from "../../../ui";
import useRecoverPassDataForm from "./recoverDataForm";

/**
 * Recover password component (email form to send link to recover password)
 */
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
        message="No se ha podido realizar el envío. Es posible que no exista una cuenta con ese e-mail, o que se haya producido un error. Reintente nuevamente."
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
          <p className="centered">
            Ingrese su correo electrónico asociado con la cuenta para
            recuperarla. Le enviaremos un enlace para restablecer la contraseña
            a esa dirección de correo electrónico
          </p>
          <form className={classes.form} onSubmit={handleSubmit}>
            <EmailField
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
