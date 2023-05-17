import type { Preview } from "@storybook/react";
import { withRouter } from "storybook-addon-react-router-v6";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

const preview: Preview = {
  parameters: {
    zeplinLink: "https://app.zeplin.io/project/644325fc6c3cec23e0985ad3",
    backgrounds: {
      default: "dark",
      values: [
        { name: "light", value: "#fff" },
        { name: "dark", value: "#1e1e1e" },
      ],
    },
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
    layout: "padding",
    decorators: [withRouter],
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
