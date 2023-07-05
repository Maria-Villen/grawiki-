import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import AuthReducer from "./slices/auth/authSlice";
import CategoryReducer from "./slices/categories/categorySlice";

const store = configureStore({
  reducer: {
    auth: AuthReducer,
    category: CategoryReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;

export default store;
