import classes from "./checkInput.module.sass";

interface ICheckInput {
  name?: string;
}

const CheckInput = ({ name }: ICheckInput) => {
  return (
    <label htmlFor={name} className={classes.checkbox}>
      <input name={name} type="checkbox" className={classes.checkbox_input} />
      Label
    </label>
  );
};

export default CheckInput;

CheckInput.defaultProps = {
  name: "CheckInput",
};
