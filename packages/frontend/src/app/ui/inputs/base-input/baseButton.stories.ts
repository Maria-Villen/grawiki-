import BaseInput from "./baseInput";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Fields/BaseInput",
  component: BaseInput,
  tags: ["autodocs"],
  parameters: {
    backgrounds: { default: "light" },
  },
  args: {
    fluid: false,
    placeholder: "Escribe aquí",
  },
  argTypes: {
    fluid: {
      control: "boolean",
    },
    onClick: {
      control: false,
    },
  },
} satisfies Meta<typeof BaseInput>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const Normal: Story = {};

Normal.parameters = {
  layout: "centered",
  design: {
    type: "figma",
    url: "https://www.figma.com/file/lrjhxEoXZotJLOOwukMgzy/11---Grawiki---Screens?type=design&node-id=1439-16041&t=QlBHq9Tjq7HUQSCQ-4",
  },
};

export const Fluid: Story = {
  args: {
    fluid: true,
  },
};

Fluid.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/lrjhxEoXZotJLOOwukMgzy/11---Grawiki---Screens?type=design&node-id=1440-13461&t=QlBHq9Tjq7HUQSCQ-4",
  },
};
