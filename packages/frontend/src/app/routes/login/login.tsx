import { LoginForm, RegisterCall2Action } from "../../components";
import CheckUserLogged from "../check-user-logged/checkUserLogged";

const Login = () => {
  return (
    <CheckUserLogged>
      <div className="centeredPages">
        <LoginForm />
        <RegisterCall2Action />
      </div>
    </CheckUserLogged>
  );
};

export default Login;
