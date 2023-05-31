import RegisterForm from "./registerForm";
import { withRouter } from "storybook-addon-react-router-v6";
import type { Meta, StoryObj } from "@storybook/react";
import { withRedux } from "../../../../stories/decorators";
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction

const meta = {
  title: "Forms/Register",
  component: RegisterForm,
  tags: ["autodocs"],
  args: {},
  decorators: [withRouter, withRedux],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    onClick: {
      control: false,
    },
  },
} satisfies Meta<typeof RegisterForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {};

Normal.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/lrjhxEoXZotJLOOwukMgzy/11---Grawiki---Screens?type=design&node-id=1502-9388&t=0g41u4YcLjzSx1YV-4",
  },
};
