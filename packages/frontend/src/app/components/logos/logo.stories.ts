import type { Meta, StoryObj } from "@storybook/react";
import { withRouter } from "storybook-addon-react-router-v6";

import Logo from "./logo";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Assets/Logo",
  component: Logo,
  tags: ["autodocs"],
  decorators: [withRouter],
} satisfies Meta<typeof Logo>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const Basic: Story = {
  args: {
    type: "regular",
  },
};

export const Horizontal: Story = {
  args: {
    type: "horizontal",
  },
};

export const Vertical: Story = {
  args: {
    type: "vertical",
  },
};
