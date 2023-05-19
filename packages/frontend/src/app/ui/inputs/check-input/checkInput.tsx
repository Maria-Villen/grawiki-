import classes from "./checkInput.module.sass";

interface ICheckInput extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const CheckInput = ({ className, ...props }: ICheckInput) => {
  return (
    <input
      type="checkbox"
      className={`${classes.checkbox_input} ${className}`}
      {...props}
    />
  );
};

export default CheckInput;
