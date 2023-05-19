import * as Yup from "yup";

interface IUserLogin {
  email: string;
  password: string;
}

export const initialValues: IUserLogin = {
  email: "",
  password: "",
};

export const validationSchema = Yup.object({
  email: Yup.string().email("It should be a valid email").required("Required"),
  password: Yup.string().min(6, "Min. 6 characters").required("Required"),
});

export const onSubmit = (values: IUserLogin) => {
  console.log(values);
};
