import { Provider } from "react-redux";
import store from "../app/redux/store";
import { ComponentType } from "react";

/** Decorators for storybook */

/** Add Redux to the component */
export const withRedux = (Story: ComponentType) => (
  <Provider store={store}>
    <Story />
  </Provider>
);

/** Add a div to the component */
const styleLayout = {
  padding: "1rem 0",
  "@media screen and (min-width: 520px)": {
    padding: "2rem",
  },
};
export const withLayout = (Story: ComponentType) => (
  <div style={styleLayout}>
    <Story />
  </div>
);
