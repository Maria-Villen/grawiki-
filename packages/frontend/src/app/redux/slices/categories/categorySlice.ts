import { createSlice, PayloadAction, SerializedError } from "@reduxjs/toolkit";
import { ICategory } from "../../../interfaces/categories";
import { getCategories } from "./categoryActions";

interface IInitialState {
  categories: Array<ICategory> | null;
  loading: boolean;
  error: SerializedError;
}

const initialState: IInitialState = {
  categories: null,
  loading: false,
  error: {},
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    /**
     * Get Categories
     */

    builder.addCase(getCategories.pending, (state) => {
      state.categories = null;
      state.error = {};
      state.loading = true;
    }),
      builder.addCase(
        getCategories.fulfilled,
        (state, action: PayloadAction<Array<ICategory>>) => {
          state.categories = action.payload;
          state.error = {};
          state.loading = false;
        }
      ),
      builder.addCase(getCategories.rejected, (state, action) => {
        if (action.payload) {
          state.error = action.payload;
        } else {
          state.error = action.error;
        }
        state.categories = null;
        state.loading = false;
      });
  },
});

export default categorySlice.reducer;
//export const { add reducers, not extrareducers } = categorySlice.actions;
