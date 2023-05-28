import * as Yup from "yup";
import { IChangePassForm } from "../../../interfaces/auth";
import { userChangePass } from "../../../redux/slices/auth/authActions";
import { useAppDispatch } from "../../../redux/store";
import { useFormik } from "formik";

const useChangePassDataForm = () => {
  const dispatch = useAppDispatch();

  const initialValues: IChangePassForm = {
    password: "",
    confirmPass: "",
  };

  const validationSchema = Yup.object({
    password: Yup.string()
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d!@#$%^&*()\-_+{}[\]:;\\/.]{8,20}$/,
        "Contraseña insegura. Requisitos: 8 caracteres, mayúscula, minúscula y caracter especial."
      )
      .required("La contraseña es obligatoria."),
    confirmPass: Yup.string()
      .required("Repite la contraseña.")
      .oneOf([Yup.ref("password")], "Las contraseñas no coinciden."),
  });

  const onSubmit = (values: IChangePassForm) => {
    dispatch(userChangePass(values.password));
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

export default useChangePassDataForm;
