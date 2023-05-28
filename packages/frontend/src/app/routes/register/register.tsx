import { RegisterForm } from "../../components";
import CheckUserLogged from "../check-user-logged/checkUserLogged";

const Register = () => {
  return (
    <div className="centeredPages">
      <CheckUserLogged>
        <RegisterForm />
      </CheckUserLogged>
    </div>
  );
};

export default Register;
