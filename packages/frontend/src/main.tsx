import React from "react";
import ReactDOM from "react-dom/client";
import store from "./app/redux/store";
import { Provider } from "react-redux";
import {
  Home,
  NotFound,
  Login,
  Register,
  ChangePass,
  RecoverPass,
  AdminPannel,
  Unauthorised,
  ProtectedRoute,
  Profile,
} from "./app/routes";
import { Layout } from "./app/components";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import global_es from "./app/lang/locals/es/global.json";
import global_en from "./app/lang/locals/en/global.json";
import "./app/styles/reset.sass";

i18next.init({
  interpolation: { escapeValue: false },
  lng: "es",
  resources: {
    es: {
      global: global_es,
    },
    en: { global: global_en },
  },
});

const router = createBrowserRouter([
  {
    element: <Layout withFooter />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      { path: "/category/:type", element: <Home /> },
    ],
  },
  {
    element: <Layout withFooter={false} />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      { path: "/recover", element: <RecoverPass /> },
      { path: "/password/:token", element: <ChangePass /> },
      { path: "/unauthorized", element: <Unauthorised /> },
    ],
  },
  {
    element: <ProtectedRoute allowedRoles={["admin"]} />,
    children: [
      {
        element: <Layout />,
        children: [
          {
            path: "/adminPannel",
            element: <AdminPannel />,
          },
        ],
      },
    ],
  },
  {
    element: <ProtectedRoute allowedRoles={["user", "admin"]} />,
    children: [
      {
        element: <Layout />,
        children: [
          {
            path: "/profile",
            element: <Profile />,
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <I18nextProvider i18n={i18next}>
        <RouterProvider router={router} />
      </I18nextProvider>
    </Provider>
  </React.StrictMode>
);
