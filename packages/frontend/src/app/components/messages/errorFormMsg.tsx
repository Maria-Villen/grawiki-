import classes from "./errorFormMsg.module.sass";
import { Exclamation } from "../../assets";
interface IErrorFormMsg {
  className?: string;
  text: string;
}

/**
 * BasicInput
 * component.
 * The rendered BasicInput
 * component.
 */

const BaseInput = ({ className, text }: IErrorFormMsg) => {
  return (
    <div className={`${classes.errorMsg} ${className}`}>
      <img src={Exclamation} alt="Error" className={classes.errorMsg_icon} />
      <span className={classes.errorMsg_text}>{text}</span>
    </div>
  );
};

export default BaseInput;
