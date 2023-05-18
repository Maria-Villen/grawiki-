import classes from "./registerCall2Action.module.sass";
import { LayoutCardForm, BasicButton } from "../../../ui";

const RegisterCall2Action = () => {
  const SubmitEventHandler = () => {
    console.log("Register");
  };

  return (
    <LayoutCardForm className={classes.registercall}>
      <p className={classes.title}>
        !Regístrate ahora y disfruta de todas las ventajas que tenemos para
        ofrecerte!
      </p>
      <p>
        ¿Te gustaría poder publicar y editar tus temas en nuestra plataforma?
      </p>
      <p>
        Al registrarte, tendrás acceso a una amplia variedad de herramientas y
        funciones que te permitirán interactuar con otros usuarios de manera más
        eficiente.
      </p>
      <p>!No esperes más para unirte a nuestra comunidad!</p>

      <BasicButton
        category="primary"
        type="submit"
        fluid
        label="!Quiero registrarme!"
        onClick={SubmitEventHandler}
      />
    </LayoutCardForm>
  );
};

export default RegisterCall2Action;
