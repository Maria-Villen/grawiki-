import { users, categories } from "./data";
import {
  IUserLogin,
  IUserRegister,
  IUserResponseLogin,
} from "./interfaces/auth";

// AUTH API CALL

export const auth = {
  // via reducer auth
  login: ({ email, password }: IUserLogin) => {
    const userFounded: undefined | IUserResponseLogin = users.find(
      (user) => user.email === email && user.password === password
    );
    if (userFounded) {
      localStorage.setItem("auth.token", JSON.stringify(userFounded.token));
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

  // via reducer auth
  changePass: (password: string): IUserResponseLogin => {
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
  getNewToken: () => {
    const token = localStorage.getItem("auth.token");
    if (token) {
      return {
        id: "1",
        role: "user",
        token: "secret-token",
      };
    } else {
      throw new Error("Oups, se ha producido un error");
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

export const category = {
  getAll: () => categories,
};
