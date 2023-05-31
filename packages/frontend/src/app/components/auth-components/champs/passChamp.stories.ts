import PassChamp from "./passChamp";
import { withRouter } from "storybook-addon-react-router-v6";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Forms/Champs/PassChamp",
  component: PassChamp,
  tags: ["autodocs"],
  args: {
    placeholder: "Contraseña",
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
} satisfies Meta<typeof PassChamp>;

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
    url: "https://www.figma.com/file/lrjhxEoXZotJLOOwukMgzy/11---Grawiki---Screens?type=design&node-id=2079-23607&t=0g41u4YcLjzSx1YV-4",
  },
};

export const Error: Story = {
  args: {
    isTouched: true,
    isError: "Ingrese una contraseña válida.",
  },
};

Error.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/lrjhxEoXZotJLOOwukMgzy/11---Grawiki---Screens?type=design&node-id=2079-25093&t=0g41u4YcLjzSx1YV-4",
  },
};
