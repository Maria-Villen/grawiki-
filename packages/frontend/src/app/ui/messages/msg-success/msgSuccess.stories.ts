import MsgSuccess from "./msgSuccess";
import { withRouter } from "storybook-addon-react-router-v6";
import type { Meta, StoryObj } from "@storybook/react";
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction

const meta = {
  title: "Messages/MsgSuccess",
  component: MsgSuccess,
  tags: ["autodocs"],
  args: {},
  parameters: {
    layout: "centered",
  },
  decorators: [withRouter],
  argTypes: {},
} satisfies Meta<typeof MsgSuccess>;

export default meta;
type Story = StoryObj<typeof meta>;

export const EmailRecover: Story = {
  args: {
    message: "Se ha cambiado la contraseña.",
    label: "Ir a iniciar sesión",
    link: "/login",
  },
};

EmailRecover.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/lrjhxEoXZotJLOOwukMgzy/11---Grawiki---Screens?type=design&node-id=1542-15596&t=IRAndxFoJHhugrfB-4",
  },
};

export const RegisterSuccess: Story = {
  args: {
    message: "Registro realizado con éxito",
    label: "Ir a pefil",
    link: "/profile",
  },
};

RegisterSuccess.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/lrjhxEoXZotJLOOwukMgzy/11---Grawiki---Screens?type=design&node-id=1542-15596&t=IRAndxFoJHhugrfB-4",
  },
};
