import SeeMoreBar from "./SeeMoreBar";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Bars/SeeMoreBar",
  component: SeeMoreBar,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    backgrounds: {
      default: "dark",
    },
  },
} satisfies Meta<typeof SeeMoreBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {};
