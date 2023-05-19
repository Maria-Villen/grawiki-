import * as Yup from "yup";

interface IUserRegister {
  userName: string;
  email: string;
  password: string;
  confirmPass: string;
  terms: boolean;
}

export const initialValues: IUserRegister = {
  userName: "",
  email: "",
  password: "",
  confirmPass: "",
  terms: false,
};

export const validationSchema = Yup.object({
  userName: Yup.string().required(),
  email: Yup.string().email("It should be a valid email").required("Required"),
  password: Yup.string().min(6, "Min. 6 characters").required("Required"),
  confirmPass: Yup.string().when("password", (password, field) =>
    password ? field.required().oneOf([Yup.ref("password")]) : field
  ),
  terms: Yup.boolean().required("required"),
});

export const onSubmit = (values: IUserRegister) => {
  console.log(values);
};
