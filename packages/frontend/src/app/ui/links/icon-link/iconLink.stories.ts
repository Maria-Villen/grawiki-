import type { Meta, StoryObj } from "@storybook/react";
import { Facebook, Instagram, Twitter } from "../../../assets";
import { withRouter } from "storybook-addon-react-router-v6";
import IconLink from "./iconLink";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Links/IconLink",
  component: IconLink,
  tags: ["autodocs"],
  decorators: [withRouter],
  parameters: {
    backgrounds: { default: "light" },
    layout: "centered",
  },
} satisfies Meta<typeof IconLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FacebookIconLink: Story = {
  args: {
    icon: Facebook,
    to: "https://facebook.com",
    altText: "Facebook",
  },
};

export const InstagramIconLink: Story = {
  args: {
    icon: Instagram,
    to: "https://Instagram.com",
    altText: "Instagram",
  },
};
export const TwitterIconLink: Story = {
  args: {
    icon: Twitter,
    to: "https://Twitter.com",
    altText: "Twitter",
  },
};
