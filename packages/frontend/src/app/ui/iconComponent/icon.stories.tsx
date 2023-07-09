import type { Meta, StoryObj } from "@storybook/react";
import Icon from "./Icon";
import "../../../stories/stylesStorybook.css";
const meta = {
  title: "Icons/IconComponent",
  component: Icon,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "light",
    },
  },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: "ToysIcon",
  },
};

export const Fill: Story = {
  args: {
    name: "ToysIcon",
    fill: true,
  },
};

export const BackgroundBehaviour: Story = {
  args: {
    name: "ToysIcon",
    fill: true,
  },
  render: (args) => <Icon className="StoryBookBackgroundColor" {...args} />,
};

export const IconRounded: Story = {
  args: {
    name: "ToysIcon",
    fill: true,
    rounded: true,
  },
  render: (args) => <Icon className="StoryBookBackgroundColor" {...args} />,
};
