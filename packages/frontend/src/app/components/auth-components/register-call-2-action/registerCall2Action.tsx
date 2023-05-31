import classes from "./registerCall2Action.module.sass";
import { LayoutCardForm, BasicButton } from "../../../ui";
import { useNavigate } from "react-router-dom";

/**
 * Call to Register Action Component
 */
const RegisterCall2Action = () => {
  const navigate = useNavigate();
  const SubmitEventHandler = () => {
    navigate("/register");
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
        type="button"
        fluid
        label="!Quiero registrarme!"
        onClick={SubmitEventHandler}
      />
    </LayoutCardForm>
  );
};

export default RegisterCall2Action;
