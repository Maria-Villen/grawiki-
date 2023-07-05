// LOGIN USER
import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { category } from "../../../services/useMockServices";

export const getCategories = createAsyncThunk(
  "categorySlice/getCategories",
  async (_, { rejectWithValue }) => {
    try {
      const data = await category.getAll();
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
