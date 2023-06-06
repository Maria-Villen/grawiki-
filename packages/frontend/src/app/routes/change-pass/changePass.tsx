import { redirect, useParams } from "react-router-dom";
import { ChangePassForm } from "../../components";
import { auth } from "../../services/useMockServices";
import { useEffect } from "react";
import { useAppSelector } from "../../redux/store";
import useStateCall from "../../services/useStateCall";
import { LayoutCardForm, MsgError } from "../../ui";

const ChangePass = () => {
  const { loggedUser: user } = useAppSelector((state) => state.auth);
  const { tokenPassVerify } = auth;
  const {
    setState,
    error: errorOnGettingToken,
    success: tokenSuccess,
  } = useStateCall();
  const params = useParams();

  useEffect(() => {
    if (!params.token && !user) {
      redirect("/password");
    } else if (params.token) {
      try {
        const response = tokenPassVerify(params.token);
        if (response) {
          setState("success");
        } else {
          setState("error");
        }
      } catch (err) {
        setState("error");
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (tokenSuccess || user) {
    return (
      <div className="centeredPages">
        <ChangePassForm />
      </div>
    );
  } else if (errorOnGettingToken && !user) {
    return (
      <div className="centeredPages">
        <MsgError
          message="Token invalido o expirado"
          label="Aceptar"
          link="/recover"
        />
      </div>
    );
  } else {
    return (
      <div className="centeredPages">
        <LayoutCardForm withLogo>
          <p>spinner</p>
          <p className="centered">
            Verificando el link de recuperación de contraseña
          </p>
        </LayoutCardForm>
      </div>
    );
  }
};
export default ChangePass;
