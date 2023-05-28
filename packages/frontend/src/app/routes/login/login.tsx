import { LoginForm, RegisterCall2Action } from "../../components";
import CheckUserLogged from "../check-user-logged/checkUserLogged";

const Login = () => {
  return (
    <div className="centeredPages">
      <CheckUserLogged>
        <LoginForm />
        <RegisterCall2Action />
      </CheckUserLogged>
    </div>
  );
};

export default Login;
