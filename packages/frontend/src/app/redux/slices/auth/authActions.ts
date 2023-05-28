// LOGIN USER
import { createAsyncThunk } from "@reduxjs/toolkit";
import { IUserRegister, IUserLogin } from "../../../interfaces/auth";
import { auth } from "../../../services/useMockServices";
import { AxiosError } from "axios";

export const userLogin = createAsyncThunk(
  "authSlice/userLogin",
  async ({ email, password }: IUserLogin, { rejectWithValue }) => {
    try {
      const data = await auth.login({
        email,
        password,
      });
      return data;
    } catch (error: unknown) {
      // return custom error message from API if any
      if (
        error instanceof AxiosError &&
        error.response &&
        error.response.data.message
      ) {
        return rejectWithValue(error.response.data.message);
      } else {
        console.log("error no axios", error);
        return rejectWithValue(error);
      }
    }
  }
);

export const userRegister = createAsyncThunk(
  "authSlice/userRegister",
  async ({ email, password, userName }: IUserRegister, { rejectWithValue }) => {
    try {
      const data = await auth.register({
        email,
        password,
        userName,
      });
      console.log(data);
      return data;
    } catch (error: unknown) {
      // return custom error message from API if any
      if (
        error instanceof AxiosError &&
        error.response &&
        error.response.data.message
      ) {
        return rejectWithValue(error.response.data.message);
      } else {
        console.log("error no axios", error);
        return rejectWithValue(error);
      }
    }
  }
);

export const userChangePass = createAsyncThunk(
  "authSlice/userChangePass",
  async (password: string, { rejectWithValue }) => {
    try {
      const data = await auth.changePass(password);
      console.log(data);
      return data;
    } catch (error: unknown) {
      // return custom error message from API if any
      if (
        error instanceof AxiosError &&
        error.response &&
        error.response.data.message
      ) {
        return rejectWithValue(error.response.data.message);
      } else {
        console.log("error no axios", error);
        return rejectWithValue(error);
      }
    }
  }
);
