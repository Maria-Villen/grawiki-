import EmailField from "./emailField";
import { withRouter } from "storybook-addon-react-router-v6";
import type { Meta, StoryObj } from "@storybook/react";
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction

const meta = {
  title: "Fields/EmailField",
  component: EmailField,
  tags: ["autodocs"],
  args: {
    placeholder: "E-mail",
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
} satisfies Meta<typeof EmailField>;

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
    url: "https://www.figma.com/file/lrjhxEoXZotJLOOwukMgzy/11---Grawiki---Screens?type=design&node-id=2079-23483&t=0g41u4YcLjzSx1YV-4",
  },
};

export const Error: Story = {
  args: {
    isTouched: true,
    isError: "Ingrese una dirección de e-mail válida.",
  },
};

Error.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/lrjhxEoXZotJLOOwukMgzy/11---Grawiki---Screens?type=design&node-id=2079-25092&t=0g41u4YcLjzSx1YV-4",
  },
};
