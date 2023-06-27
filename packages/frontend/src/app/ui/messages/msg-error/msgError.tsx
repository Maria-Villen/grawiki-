import { FailImage } from "../../../assets/index.ts";
import { LayoutCardForm, BasicButton } from "../..";
import { MouseEventHandler } from "react";

interface IMsgError {
  message: string;
  label: string;
  link: string;
  cb?: MouseEventHandler<HTMLButtonElement> | undefined;
  linkInit?: boolean;
}

const MsgError = ({ message, label, link, linkInit, cb }: IMsgError) => {
  return (
    <LayoutCardForm withLogo>
      <h2>{message}</h2>
      <img src={FailImage} alt="Acción realizada ha fallado" />
      <BasicButton
        type="button"
        category="primary"
        label={label}
        value={link}
        onClick={cb}
      />
      {linkInit && (
        <BasicButton
          type="button"
          category="primary"
          label="Ir a inicio"
          value="/"
          onClick={cb}
        />
      )}
    </LayoutCardForm>
  );
};

export default MsgError;
