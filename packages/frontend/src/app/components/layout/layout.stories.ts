import type { Meta, StoryObj } from "@storybook/react";
import { withRouter } from "storybook-addon-react-router-v6";
import Layout from "./layout";
import { Home } from "../../routes";
import { withRedux } from "../../../stories/decorators";

const meta = {
  title: "Layouts/Layout",
  component: Layout,
  decorators: [withRouter, withRedux],
  args: { withFooter: true },
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Layout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithoutFooter: Story = {
  parameters: {
    reactRouter: {
      outlet: Home,
    },
  },
  args: {
    withFooter: false,
  },
};

export const WithFooter: Story = {
  parameters: {
    reactRouter: {
      outlet: Home,
    },
  },
  args: {
    withFooter: true,
  },
};
// export const LoggedOut: Story = {};
