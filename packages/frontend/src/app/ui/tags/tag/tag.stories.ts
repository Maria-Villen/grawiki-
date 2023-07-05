import type { Meta, StoryObj } from "@storybook/react";
import Tag from "./Tag";

const meta = {
  title: "Components/Tag",
  component: Tag,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  args: {
    label: "Tag",
    action: false,
  },
  argTypes: {
    onClick: {
      control: false,
    },
  },
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
    backgrounds: { default: "light" },
  },
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Action: Story = {
  args: { ...Default.args, action: true },
};
