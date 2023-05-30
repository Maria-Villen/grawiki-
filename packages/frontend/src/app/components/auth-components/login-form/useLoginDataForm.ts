import * as Yup from "yup";
import { IUserLogin } from "../../../interfaces/auth";
import { useAppDispatch } from "../../../redux/store";
import { userLogin } from "../../../redux/slices/auth/authActions";
import { useFormik } from "formik";

/**
 * Handles de logic of Login Form
 */

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
    dispatch(userLogin({ email: values.email, password: values.password }));
  };

  const { handleSubmit, errors, touched, getFieldProps } = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return {
    handleSubmit,
    errors,
    touched,
    getFieldProps,
  };
};

export default useLoginDataForm;
