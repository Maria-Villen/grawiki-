import { SuccessImage } from "../../../assets";
import { LayoutCardForm, BasicBtnLink } from "../..";

interface IMsgSuccess {
  message: string;
  label: string;
  link: string;
}

const MsgSuccess = ({ message, label, link }: IMsgSuccess) => {
  return (
    <LayoutCardForm withLogo>
      <h2>{message}</h2>
      <img src={SuccessImage} alt="Acción realizada con éxito" />
      <BasicBtnLink type="button" category="primary" label={label} to={link} />
    </LayoutCardForm>
  );
};

export default MsgSuccess;
