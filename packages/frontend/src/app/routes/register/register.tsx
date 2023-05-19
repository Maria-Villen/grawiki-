import classes from "./register.module.sass";
import { RegisterForm } from "../../components";

const Register = () => {
  return (
    <div className={classes.register}>
      <RegisterForm />
    </div>
  );
};

export default Register;
