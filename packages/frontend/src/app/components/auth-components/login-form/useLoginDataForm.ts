import * as Yup from "yup";
import { IUserLogin } from "../../../interfaces/auth";
import { useAppDispatch } from "../../../redux/store";
import { userLogin } from "../../../redux/slices/auth/authActions";

//
// onclick = ()=>dispatch(login({email:"dfjd", password:"DEfdsfa"}));
// const user = useAppSelector(state => state.auth.loggedUser);

const useLoginDataForm = () => {
  const dispatch = useAppDispatch();

  const initialValues: IUserLogin = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Ingrese una dirección de e-mail válida.")
      .required("El email es obligatorio."),
    password: Yup.string().required("El password es obligatorio."),
  });

  const onSubmit = (values: IUserLogin) => {
    console.log("login");
    dispatch(userLogin({ email: values.email, password: values.password }));
  };

  return {
    initialValues,
    validationSchema,
    onSubmit,
  };
};

export default useLoginDataForm;
