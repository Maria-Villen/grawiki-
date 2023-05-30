import { ComponentType } from "react";
import { Provider } from "react-redux";
import store from "../src/app/redux/store";

type StoryDecorator = (Story: ComponentType) => JSX.Element;

export const withProvider: StoryDecorator = (Story) => (
  <Provider store={store}>
    <Story />
  </Provider>
);
