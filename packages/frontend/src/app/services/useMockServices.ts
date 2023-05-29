import { users } from "./data/users.data";
import { IUserLogin, IUserRegister, IUserLoggedIn } from "../interfaces/auth";
import { IUserWithToken } from "../interfaces/user";

// AUTH API CALL

export const auth = {
  // via reducer auth
  login: ({ email, password }: IUserLogin) => {
    const userFounded: undefined | IUserWithToken = users.find(
      (user) => user.email === email && user.password === password
    );
    if (userFounded) {
      return {
        id: userFounded.id,
        role: userFounded.role,
        token: userFounded.token,
      };
    } else {
      throw { message: "User Not Found" };
    }
  },
  // via reducer auth
  register: ({ userName, email, password }: IUserRegister) => {
    console.log(password, userName, email);
    return { id: "100", role: "user", token: "secret-token" };
  },
  // via direct call
  checkEmailExists: (email: string): boolean => {
    const emailExists = users.find(
      (user) => user.email.toLowerCase() === email.toLowerCase()
    );
    if (emailExists) {
      return true;
    } else {
      return false;
    }
  },
  // via direct call
  checkUserName: (userName: string): boolean => {
    const usernameExists = users.find(
      (user) => user.userName.toLowerCase() === userName.toLowerCase()
    );
    if (usernameExists) {
      return true;
    } else {
      return false;
    }
  },
  // via reducer user
  changePass: (password: string): IUserLoggedIn => {
    console.log(password);
    return { id: "100", role: "user", token: "secret-token" };
  },
  // via direct call
  tokenPassVerify: (token: string): boolean => {
    if (token === "mocktoken") {
      return true;
    } else {
      return false;
    }
  },

  // via direct call
  userRecoverPass: (email: string): boolean => {
    const emailExists = users.find(
      (user) => user.email.toLowerCase() === email.toLowerCase()
    );
    if (emailExists) {
      return true;
    } else {
      return false;
    }
  },
};
