import type { Meta, StoryObj } from "@storybook/react";
import TabProfile from "./TabProfile";
import { withRouter } from "storybook-addon-react-router-v6";

const meta = {
  title: "Components/TabProfile",
  component: TabProfile,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  args: {
    children: "Hola",
  },
  decorators: [withRouter],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: "padded",
    backgrounds: { default: "light" },
  },
} satisfies Meta<typeof TabProfile>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
