import { FailImage } from "../../../assets/index.ts";
import { LayoutCardForm, BasicBtnLink } from "../..";

interface IMsgError {
  message: string;
  label: string;
  link: string;
  cb?: () => void;
  linkInit?: boolean;
}

const MsgError = ({ message, label, link, linkInit, cb }: IMsgError) => {
  return (
    <LayoutCardForm withLogo>
      <h2>{message}</h2>
      <img src={FailImage} alt="Acción realizada ha fallado" />
      <BasicBtnLink
        type="button"
        category="primary"
        label={label}
        to={link}
        onClick={cb}
      />
      {linkInit && (
        <BasicBtnLink
          type="button"
          category="primary"
          label="Ir a inicio"
          to="/"
        />
      )}
    </LayoutCardForm>
  );
};

export default MsgError;
