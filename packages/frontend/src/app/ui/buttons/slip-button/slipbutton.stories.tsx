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
    placeholder: {
      control: false,
    },
    onClick: {
      control: false,
    },
  },
  render: () => (
    <SlipButton placeholder="Categorías">
      <ul>
        <li>Uno</li>
        <li>Dos</li>
      </ul>
    </SlipButton>
  ),
} satisfies Meta<typeof SlipButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// DEFAULT CATEGORY

export const Normal: Story = {
  args: {},
};
export const Fluid: Story = {
  decorators: [withLayout],
  parameters: {
    layout: "fullscreen",
  },
  args: {
    fluid: true,
  },
};

export const Icon: Story = {
  args: {
    icon: { name: "BankIcon" },
    value: "Bank",
  },
};
