import { Provider } from "react-redux";
import store from "../app/redux/store";
import { ComponentType } from "react";

export const withRedux = (Story: ComponentType) => (
  <Provider store={store}>
    <Story />
  </Provider>
);

const styleLayout = {
  display: "flex",
};
export const withLayout = (Story: ComponentType) => (
  <div style={styleLayout}>
    <Story />
  </div>
);
