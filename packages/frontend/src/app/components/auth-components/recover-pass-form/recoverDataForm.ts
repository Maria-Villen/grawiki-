import * as Yup from "yup";

interface IUserLogin {
  email: string;
}

export const initialValues: IUserLogin = {
  email: "",
};

export const validationSchema = Yup.object({
  email: Yup.string().email("It should be a valid email").required("Required"),
});

export const onSubmit = (values: IUserLogin) => {
  console.log(values);
};
