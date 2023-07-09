import type { Meta, StoryObj } from "@storybook/react";
import Suggestions from "./suggestions";
import { categories } from "../../../services/data";

const meta = {
  title: "Layouts/Suggestions",
  component: Suggestions,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  args: {
    data: categories,
    onSelect: () => {
      console.log("selected");
    },
  },
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
    backgrounds: { default: "light" },
  },
} satisfies Meta<typeof Suggestions>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
