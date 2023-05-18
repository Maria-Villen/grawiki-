import { SuccessImage } from "../../../assets";
import { LayoutCardForm, BasicButton } from "../..";

interface IMsgSuccess {
  message: string;
}

const MsgSuccess = ({ message }: IMsgSuccess) => {
  const handleGoToProfile = () => {
    console.log("click");
  };
  return (
    <LayoutCardForm withLogo>
      <h2>{message}</h2>
      <img src={SuccessImage} alt="Acción realizada con éxito" />
      <BasicButton
        type="button"
        category="primary"
        label="Ir a perfil"
        onClick={handleGoToProfile}
      />
    </LayoutCardForm>
  );
};

export default MsgSuccess;
