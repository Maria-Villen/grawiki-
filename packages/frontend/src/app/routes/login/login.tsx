import classes from "./login.module.sass";
import { LoginForm, RegisterCall2Action } from "../../components";

const Login = () => {
  return (
    <div className={classes.login}>
      <LoginForm />
      <RegisterCall2Action />
    </div>
  );
};

export default Login;
