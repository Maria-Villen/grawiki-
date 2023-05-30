import { SuccessImage } from "../../../assets";
import { LayoutCardForm, BasicBtnLink } from "../..";

interface IMsgSuccess {
  message: string;
  label: string;
  link: string;
  cb?: () => void;
}

const MsgSuccess = ({ message, label, link, cb }: IMsgSuccess) => {
  return (
    <LayoutCardForm withLogo>
      <h2>{message}</h2>
      <img src={SuccessImage} alt="Acción realizada con éxito" />
      <BasicBtnLink
        type="button"
        category="primary"
        label={label}
        to={link}
        onClick={cb}
      />
    </LayoutCardForm>
  );
};

export default MsgSuccess;
