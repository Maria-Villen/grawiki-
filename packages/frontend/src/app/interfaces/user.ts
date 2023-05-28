export interface IUser {
  id: string;
  userName: string;
  email: string;
  role: string;
}
export interface IUserWithPass extends IUser {
  password: string;
}

export interface IUserWithToken extends IUserWithPass, IUser {
  token: string;
}
