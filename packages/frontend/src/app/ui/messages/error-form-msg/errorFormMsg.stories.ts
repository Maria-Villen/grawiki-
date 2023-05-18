import ErrorFormMsg from "./errorFormMsg";
import type { Meta, StoryObj } from "@storybook/react";
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction

const meta = {
  title: "Messages/ErrorFormMsg",
  component: ErrorFormMsg,
  tags: ["autodocs"],
  parameters: {
    backgrounds: { default: "light" },
  },
  args: {
    text: "Mensaje de error",
  },
  argTypes: {},
} satisfies Meta<typeof ErrorFormMsg>;

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
