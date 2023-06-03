import { createSlice, PayloadAction, SerializedError } from "@reduxjs/toolkit";
import {
  userLogin,
  userRegister,
  userChangePass,
  getNewToken,
} from "./authActions";
import { IUserLoggedIn } from "../../../interfaces/auth";

interface IInitialState {
  loggedUser: IUserLoggedIn | null;
  persist: string;
  loading: boolean;
  error: SerializedError;
}

const initialState: IInitialState = {
  loggedUser: null,
  loading: false,
  error: {},
  persist: localStorage.getItem("rememberGrawiki") || "false",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: () => {
      console.log("logout");
      return { ...initialState };
    },
    reset: () => {
      return { ...initialState, loading: false, error: {} };
    },
    addPersistence: () => {
      localStorage.setItem("rememberGrawiki", "true");
      return { ...initialState, persist: "true" };
    },
    removePersistence: () => {
      localStorage.removeItem("rememberGrawiki");
      return { ...initialState, persist: "false" };
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
    /**
     * Ask for new access token if refresh token is ok
     */
    builder.addCase(getNewToken.pending, (state) => {
      state.loggedUser = null;
      state.error = {};
      state.loading = true;
    }),
      builder.addCase(
        getNewToken.fulfilled,
        (state, action: PayloadAction<IUserLoggedIn>) => {
          state.loggedUser = action.payload;
          state.error = {};
          state.loading = false;
        }
      ),
      builder.addCase(getNewToken.rejected, (state, action) => {
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
export const { logout, reset, addPersistence, removePersistence } =
  authSlice.actions;
