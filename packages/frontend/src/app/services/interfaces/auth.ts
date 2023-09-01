export interface IUserLogin {
  email: string;
  password: string;
}

export interface IUserResponseLogin {
  id: string;
  role: string;
  token: string;
}

export interface IUserRegister {
  userName: string;
  email: string;
  password: string;
}
export interface IUserRegisterForm extends IUserRegister {
  confirmPass: string;
  terms: boolean;
}

export interface IChangePassForm {
  password: string;
  confirmPass: string;
}
