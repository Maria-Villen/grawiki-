import classes from "./checkInput.module.sass";

interface ICheckInput {
  name?: string;
  text: string;
}

const CheckInput = ({ name, text }: ICheckInput) => {
  return (
    <label htmlFor={name} className={classes.checkbox}>
      <input name={name} type="checkbox" className={classes.checkbox_input} />
      {text}
    </label>
  );
};

export default CheckInput;

CheckInput.defaultProps = {
  name: "CheckInput",
  text: "Label",
};
