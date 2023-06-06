import classes from "./passInput.module.sass";
import { PasswordEyeIcon } from "../../icons";
import { useState } from "react";

interface IPassInput extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  fluid?: boolean;
}

const PassInput = ({ className, fluid, ...props }: IPassInput) => {
  const [hidePass, setHidePass] = useState<boolean>(true);
  const toggleHiddenPass = () => {
    setHidePass(!hidePass);
  };

  return (
    <div className={`${classes.pass} ${fluid && classes.fluid} ${className}`}>
      <input
        type={hidePass ? "password" : "text"}
        className={classes.pass_input}
        {...props}
      />
      <button
        className={classes.pass_icon}
        type="button"
        onClick={toggleHiddenPass}
      >
        <PasswordEyeIcon hidden={hidePass} />
      </button>
    </div>
  );
};

export default PassInput;
