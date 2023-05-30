import type { Meta, StoryObj } from "@storybook/react";
import { withRouter } from "storybook-addon-react-router-v6";
import Layout from "./layout";
import { Home } from "../../routes";

const meta = {
  title: "Layouts/Layout",
  component: Layout,
  decorators: [withRouter],
  args: { withFooter: true },
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Layout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const HomePage: Story = {
  parameters: {
    reactRouter: {
      outlet: Home,
    },
  },
};
// export const LoggedOut: Story = {};
