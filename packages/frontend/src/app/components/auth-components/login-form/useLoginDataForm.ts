import * as Yup from "yup";
import { IUserLogin } from "../../../interfaces/auth";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import {
  addPersistence,
  removePersistence,
} from "../../../redux/slices/auth/authSlice";
import { userLogin } from "../../../redux/slices/auth/authActions";
import { useFormik } from "formik";
import { ChangeEvent, useState } from "react";

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
    if (rememberMe) {
      dispatch(addPersistence());
    } else {
      dispatch(removePersistence());
    }
  };

  const { handleSubmit, errors, touched, getFieldProps } = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  const {
    loading,
    error,
    loggedUser: user,
    persist,
  } = useAppSelector((state) => state.auth);

  const [rememberMe, setRememberMe] = useState(persist ? true : false);

  return {
    handleSubmit,
    errors,
    touched,
    getFieldProps,
    setRememberMe,
    rememberMe,
    user,
    loading,
    error,
    persist,
  };
};

export default useLoginDataForm;
