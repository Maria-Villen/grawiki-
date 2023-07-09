import type { Meta, StoryObj } from "@storybook/react";
import CategoryTag from "./CategoryTag";

const meta = {
  title: "Components/CategoryTag",
  component: CategoryTag,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  args: {
    icon: { name: "HealthIcon" },
  },
  render: (args) => <CategoryTag {...args}> Salud </CategoryTag>,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
    backgrounds: { default: "dark" },
  },
} satisfies Meta<typeof CategoryTag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
