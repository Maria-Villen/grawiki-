import classes from "./passInput.module.sass";
import { PasswordEyeIcon } from "../../icons";
import { useState } from "react";

interface IPassInput extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  fluid?: boolean;
  disabled?: boolean;
}

const PassInput = ({ className, fluid, disabled, ...props }: IPassInput) => {
  const [hidePass, setHidePass] = useState<boolean>(true);
  const toggleHiddenPass = () => {
    setHidePass(!hidePass);
  };

  return (
    <div
      className={`${classes.pass} ${fluid && classes.fluid} ${className} ${
        disabled && classes.disabled
      }`}
    >
      <input
        type={hidePass ? "password" : "text"}
        className={classes.pass_input}
        {...props}
        disabled={disabled}
      />
      <button
        className={classes.pass_icon}
        type="button"
        onClick={toggleHiddenPass}
        disabled={disabled}
      >
        <PasswordEyeIcon hidden={hidePass} />
      </button>
    </div>
  );
};

export default PassInput;
