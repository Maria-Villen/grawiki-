import type { Meta, StoryObj } from "@storybook/react";
import TabTag from "./TagTab";
import tags from "../../../services/data/tags.data";
const meta = {
  title: "Components/TabTag",
  component: TabTag,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  args: {
    tags: tags,
  },
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
    backgrounds: { default: "light" },
  },
} satisfies Meta<typeof TabTag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
