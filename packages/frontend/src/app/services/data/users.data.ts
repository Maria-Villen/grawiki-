import { IUserWithToken } from "../../interfaces/user";

export const users: Array<IUserWithToken> = [
  {
    id: "1",
    userName: "John",
    email: "john@gmail.com",
    role: "user",
    password: "123456",
    token: "secret token",
  },
  {
    id: "2",
    userName: "Mary",
    email: "mary@gmail.com",
    role: "admin",
    password: "123456",
    token: "secret token",
  },
  {
    id: "3",
    userName: "Mike",
    email: "mike@gmail.com",
    role: "user",
    password: "123456",
    token: "secret token",
  },
  {
    id: "4",
    userName: "Nataly",
    email: "nataly@gmail.com",
    role: "user",
    password: "123456",
    token: "secret token",
  },
];
