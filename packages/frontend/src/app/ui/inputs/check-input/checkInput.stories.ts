import CheckInput from "./checkInput";
import type { Meta, StoryObj } from "@storybook/react";
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction

const meta = {
  title: "Fields/CheckInput",
  component: CheckInput,

  tags: ["autodocs"],
  args: {},
  parameters: {
    backgrounds: { default: "light" },
  },
  argTypes: {
    className: {
      table: { disable: "true" },
    },
  },
} satisfies Meta<typeof CheckInput>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const Normal: Story = {
  args: {},
};

Normal.parameters = {
  layout: "centered",
  design: {
    type: "figma",
    url: "https://www.figma.com/file/lrjhxEoXZotJLOOwukMgzy/11---Grawiki---Screens?type=design&node-id=609-4908&t=cVYTp6YN9bkAe2Ro-4",
  },
};
