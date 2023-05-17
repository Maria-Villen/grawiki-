import type { StorybookConfig } from "@storybook/react-vite";
const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  staticDirs: ["../public"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "storybook-addon-designs",
    "storybook-zeplin",
    "storybook-addon-react-router-v6",
    "@storybook/addon-a11y",
  ],
  typescript: {
    // Overrides the default Typescript configuration to allow multi-package components to be documented via Autodocs.
    reactDocgen: "react-docgen",
    skipBabel: true,
    check: false,
  },
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  core: {
    disableTelemetry: true,
  },
  docs: {
    autodocs: "tag",
  },
  refs: {
    "design-system": {
      title: "Storybook Design System",
      url: "https://6442d2d93473cf6d994da8a0-kagkunslld.chromatic.com/",
    },
  },
};
export default config;
