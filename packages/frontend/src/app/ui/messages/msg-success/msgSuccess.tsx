import { SuccessImage } from "../../../assets/index.ts";
import { LayoutCardForm, BasicButton } from "../..";
import { MouseEventHandler } from "react";

interface IMsgSuccess {
  message: string;
  label: string;
  link: string;
  cb?: MouseEventHandler<HTMLButtonElement> | undefined;
}

const MsgSuccess = ({ message, label, link, cb }: IMsgSuccess) => {
  return (
    <LayoutCardForm withLogo>
      <h2>{message}</h2>
      <img src={SuccessImage} alt="Acción realizada con éxito" />
      <BasicButton
        type="button"
        category="primary"
        label={label}
        value={link}
        onClick={cb}
      />
    </LayoutCardForm>
  );
};

export default MsgSuccess;
