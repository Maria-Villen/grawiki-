import MsgEmailSent from "./msgEmailSent";
import { withRouter } from "storybook-addon-react-router-v6";
import type { Meta, StoryObj } from "@storybook/react";
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction

const meta = {
  title: "Forms/MsgEmailSent",
  component: MsgEmailSent,
  tags: ["autodocs"],
  args: {},
  parameters: {
    layout: "centered",
  },
  decorators: [withRouter],
  argTypes: {
    onClick: {
      control: false,
    },
  },
} satisfies Meta<typeof MsgEmailSent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {};

Normal.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/lrjhxEoXZotJLOOwukMgzy/11---Grawiki---Screens?type=design&node-id=1541-12947&t=LYhyfabqOwT1ZqHE-4",
  },
};
