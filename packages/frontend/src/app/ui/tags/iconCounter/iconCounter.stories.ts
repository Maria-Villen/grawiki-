import type { Meta, StoryObj } from "@storybook/react";
import IconCounter from "./IconCounter";

const meta = {
  title: "Components/IconCounter",
  component: IconCounter,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  args: {
    icon: { name: "ThumbsUp3DIcon" },
  },
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
    backgrounds: { default: "dark" },
  },
} satisfies Meta<typeof IconCounter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
