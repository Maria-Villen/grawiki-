import type { Meta, StoryObj } from "@storybook/react";
import { withRouter } from "storybook-addon-react-router-v6";
import BasicListWithLink from "./basicListWithLink";
import { English } from "../../../assets";

const meta = {
  title: "ListComponents/BasicListWithLink",
  component: BasicListWithLink,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  decorators: [withRouter],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
    backgrounds: { default: "light" },
  },
} satisfies Meta<typeof BasicListWithLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    text: "List Basic With Link",
    link: "#",
  },
};

export const WithIcon: Story = {
  args: {
    text: "English",
    link: "#",
    icon: English,
  },
};
