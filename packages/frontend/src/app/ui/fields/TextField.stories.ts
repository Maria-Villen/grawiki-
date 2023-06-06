import TextField from "./textField";
import { withRouter } from "storybook-addon-react-router-v6";
import type { Meta, StoryObj } from "@storybook/react";
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction

const meta = {
  title: "Fields/TextField",
  component: TextField,
  tags: ["autodocs"],
  args: {
    placeholder: "Nombre de usuario",
  },
  parameters: {
    layout: "centered",
    backgrounds: { default: "light" },
  },
  decorators: [withRouter],
  argTypes: {
    className: {
      table: { disable: true },
    },
    isTouched: {
      control: "boolean",
    },
    onClick: {
      control: false,
    },
  },
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    isTouched: false,
    isError: "",
  },
};

Normal.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/lrjhxEoXZotJLOOwukMgzy/11---Grawiki---Screens?type=design&node-id=1991-18726&t=0g41u4YcLjzSx1YV-4",
  },
};

export const Error: Story = {
  args: {
    isTouched: true,
    isError: "Error de validación aquí.",
  },
};

Error.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/lrjhxEoXZotJLOOwukMgzy/11---Grawiki---Screens?type=design&node-id=1991-19655&t=0g41u4YcLjzSx1YV-4",
  },
};
