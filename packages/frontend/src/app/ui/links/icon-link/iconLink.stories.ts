import type { Meta, StoryObj } from "@storybook/react";
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
    icon: { name: "FacebookIcon" },
    to: "https://facebook.com",
    altText: "Facebook",
  },
};

export const InstagramIconLink: Story = {
  args: {
    icon: { name: "InstagramIcon" },
    to: "https://Instagram.com",
    altText: "Instagram",
  },
};
export const TwitterIconLink: Story = {
  args: {
    icon: { name: "TwitterIcon" },
    to: "https://Twitter.com",
    altText: "Twitter",
  },
};
