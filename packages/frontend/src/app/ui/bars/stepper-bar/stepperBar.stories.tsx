import StepperBar from "./StepperBar";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Bars/StepperBar",
  component: StepperBar,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    backgrounds: {
      default: "dark",
    },
  },
  args: {
    pages: 3,
    active: 2,
  },
  render: (args) => (
    <div style={{ width: "100%" }}>
      <StepperBar {...args} />
    </div>
  ),
} satisfies Meta<typeof StepperBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    pages: 3,
    active: 2,
  },
};
