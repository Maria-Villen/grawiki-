export interface IUser {
  userId: string;
  username: string;
  email: string;
  password: string;
  passToken?: string;
  avatar?: string;
  role: string;
  token?: string[];
}
