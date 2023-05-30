export interface IUserLogin {
  /**
   * Email del usuario
   */
  email: string;
  /**
   * Password del usuario
   */
  password: string;
}

export interface IUserLoggedIn {
  id: string;
  role: string;
  token: string;
}

export interface IUserRegister {
  userName: string;
  email: string;
  password: string;
}

export interface IChangePassForm {
  password: string;
  confirmPass: string;
}

export interface IUserRegisterForm extends IUserRegister {
  confirmPass: string;
  terms: boolean;
}
