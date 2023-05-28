import { createSlice, PayloadAction, SerializedError } from "@reduxjs/toolkit";
import { userLogin, userRegister, userChangePass } from "./authActions";
import { IUserLoggedIn } from "../../../interfaces/auth";

interface IInitialState {
  loggedUser: IUserLoggedIn | null;
  loading: boolean;
  error: SerializedError;
}

const initialState: IInitialState = {
  loggedUser: null,
  loading: false,
  error: {},
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: () => {
      console.log("logout");
      return { ...initialState };
    },
  },
  extraReducers: (builder) => {
    /**
     * Login the user
     */
    builder.addCase(userLogin.pending, (state) => {
      state.loggedUser = null;
      state.error = {};
      state.loading = true;
    }),
      builder.addCase(
        userLogin.fulfilled,
        (state, action: PayloadAction<IUserLoggedIn>) => {
          state.loggedUser = action.payload;
          state.error = {};
          state.loading = false;
        }
      ),
      builder.addCase(userLogin.rejected, (state, action) => {
        if (action.payload) {
          state.error = action.payload;
        } else {
          state.error = action.error;
        }
        state.loggedUser = null;
        state.loading = false;
      }),
      /**
       * Register the user
       */
      builder.addCase(userRegister.pending, (state) => {
        state.loggedUser = null;
        state.error = {};
        state.loading = true;
      }),
      builder.addCase(
        userRegister.fulfilled,
        (state, action: PayloadAction<IUserLoggedIn>) => {
          state.loggedUser = action.payload;
          state.error = {};
          state.loading = false;
        }
      ),
      builder.addCase(userRegister.rejected, (state, action) => {
        if (action.payload) {
          state.error = action.payload;
        } else {
          state.error = action.error;
        }
        state.loggedUser = null;
        state.loading = false;
      });
    /**
     * Change Password user
     */
    builder.addCase(userChangePass.pending, (state) => {
      state.loggedUser = null;
      state.error = {};
      state.loading = true;
    }),
      builder.addCase(
        userChangePass.fulfilled,
        (state, action: PayloadAction<IUserLoggedIn>) => {
          state.loggedUser = action.payload;
          state.error = {};
          state.loading = false;
        }
      ),
      builder.addCase(userChangePass.rejected, (state, action) => {
        if (action.payload) {
          state.error = action.payload;
        } else {
          state.error = action.error;
        }
        state.loggedUser = null;
        state.loading = false;
      });
  },
});

export default authSlice.reducer;
export const { logout } = authSlice.actions;
