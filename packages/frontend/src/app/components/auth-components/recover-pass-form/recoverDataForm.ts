import * as Yup from "yup";
import { auth } from "../../../services/useMockServices";
import { useFormik } from "formik";
import { Dispatch, SetStateAction } from "react";

const useRecoverPassDataForm = (setState: Dispatch<SetStateAction<string>>) => {
  const { userRecoverPass } = auth;
  interface IRecoverPassForm {
    email: string;
  }

  const initialValues: IRecoverPassForm = {
    email: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Ingrese una dirección de e-mail válida.")
      .required("El email es obligatorio."),
  });

  const onSubmit = (values: IRecoverPassForm) => {
    setState("loading");
    try {
      const response = userRecoverPass(values.email);
      if (response) {
        setState("success");
      } else {
        setState("error");
      }
    } catch (err) {
      setState("error");
    }
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

export default useRecoverPassDataForm;
