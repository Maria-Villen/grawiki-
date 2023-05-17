import classes from "./passInput.module.sass";
import { PassHidden, PassOpen } from "../../../assets";
import { useState } from "react";

interface IPassInput extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  fluid?: boolean;
}

const Searchbar = ({ className, fluid, ...props }: IPassInput) => {
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
        <img
          src={hidePass ? PassHidden : PassOpen}
          alt={hidePass ? "Mostrar Password" : "Ocultar Password"}
        />
      </button>
    </div>
  );
};

export default Searchbar;
