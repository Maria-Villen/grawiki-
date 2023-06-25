import classes from "./baseInput.module.sass";

interface IBaseInput extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  fluid?: boolean;
}

/**
 * BasicInput
 * component.
 * The rendered BasicInput
 * component.
 */

const BaseInput = ({ className, fluid, ...props }: IBaseInput) => {
  return (
    <input
      className={`${classes.input} ${fluid && classes.fluid} ${className}`}
      {...props}
    />
  );
};

export default BaseInput;
