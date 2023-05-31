import ChangePassForm from "./changePassForm";
import type { Meta, StoryObj } from "@storybook/react";
import { withRedux } from "../../../../stories/decorators";
import { withRouter } from "storybook-addon-react-router-v6";

const meta = {
  title: "Forms/ChangePassForm",
  component: ChangePassForm,
  tags: ["autodocs"],
  args: {},
  decorators: [withRouter, withRedux],
  parameters: {
    layout: "centered",
  },
  argTypes: {},
} satisfies Meta<typeof ChangePassForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {};

Normal.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/lrjhxEoXZotJLOOwukMgzy/11---Grawiki---Screens?type=design&node-id=1541-12644&t=0g41u4YcLjzSx1YV-4",
  },
};
