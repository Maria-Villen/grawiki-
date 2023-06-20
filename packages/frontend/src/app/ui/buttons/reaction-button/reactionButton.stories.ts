import ReactionButton from "./reactionButton";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Buttons/ReactionButton",
  component: ReactionButton,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {
    icon: { name: "SettingIcon" },
    isActive: false,
  },
  argTypes: {
    onClick: {
      control: false,
    },
  },
} satisfies Meta<typeof ReactionButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// DEFAULT CATEGORY

export const Pinched: Story = {
  args: {
    icon: { name: "PinchedIcon" },
    iconActive: { name: "Pinched3DIcon" },
  },
};
