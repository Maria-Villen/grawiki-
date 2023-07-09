import type { Preview } from "@storybook/react";
import { withRouter } from "storybook-addon-react-router-v6";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { withRedux } from "../src/stories/decorators";

import "../src/app/ui/styles/reset.sass";

const preview: Preview = {
  parameters: {
    // zeplinLink: "https://app.zeplin.io/project/644325fc6c3cec23e0985ad3",
    backgrounds: {
      default: "light",
      values: [
        { name: "light", value: "#fff" },
        { name: "dark", value: "#1e1e1e" },
      ],
    },
    reactRouter: {
      routePath: "/",
    },
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
    layout: "centered",
    decorators: [withRouter, withRedux],
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};
console.log(preview);

export default preview;
