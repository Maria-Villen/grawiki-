import MsgError from "./msgError";
import { withRouter } from "storybook-addon-react-router-v6";
import type { Meta, StoryObj } from "@storybook/react";
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction

const meta = {
  title: "Messages/MsgError",
  component: MsgError,
  tags: ["autodocs"],
  args: {
    message: "Hubo un error.",
    label: "Volver",
    link: "#",
  },
  parameters: {
    layout: "centered",
  },
  decorators: [withRouter],
  argTypes: {},
} satisfies Meta<typeof MsgError>;

export default meta;
type Story = StoryObj<typeof meta>;

export const RecoverPassword: Story = {
  args: {
    message: "Hubo un error.",
    label: "Volver",
    link: "#",
    cb: () => {
      console.log("click");
    },
    linkInit: true,
  },
};
