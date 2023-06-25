import SlipButton from "./SlipButton";
import type { Meta, StoryObj } from "@storybook/react";
import { withLayout } from "../../../../stories/decorators";

const meta = {
  title: "Buttons/SlipButton",
  component: SlipButton,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "dark",
    },
  },
  argTypes: {
    onClick: {
      control: false,
    },
  },
} satisfies Meta<typeof SlipButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// DEFAULT CATEGORY

export const Normal: Story = {
  args: {
    placeholder: "Categories",
  },
};

export const Fluid: Story = {
  decorators: [withLayout],
  parameters: {
    layout: "fullscreen",
  },
  args: {
    placeholder: "Categories",
    fluid: true,
  },
};

export const Icon: Story = {
  args: {
    placeholder: "Categories",
    icon: { name: "BankIcon" },
    value: "Bank",
  },
};
