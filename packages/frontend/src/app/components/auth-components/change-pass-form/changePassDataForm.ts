import * as Yup from "yup";

interface IUserLogin {
  password: string;
  confirmPass: string;
}

export const initialValues: IUserLogin = {
  password: "",
  confirmPass: "",
};

export const validationSchema = Yup.object({
  password: Yup.string().min(6, "Min. 6 characters").required("Required"),
  confirmPass: Yup.string().when("password", (password, field) =>
    password ? field.required().oneOf([Yup.ref("password")]) : field
  ),
});

export const onSubmit = (values: IUserLogin) => {
  console.log(values);
};
