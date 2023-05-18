import LayoutCardForm from "./layoutCardForm";
import { withRouter } from "storybook-addon-react-router-v6";
import type { Meta, StoryObj } from "@storybook/react";
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction

const meta = {
  title: "Layouts/LayoutCardForm",
  component: LayoutCardForm,
  tags: ["autodocs"],
  args: {},
  decorators: [withRouter],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    withLogo: {
      control: "boolean",
    },
  },
} satisfies Meta<typeof LayoutCardForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithoutLogo: Story = {
  args: {
    children: "Hola soy un mensaje",
    withLogo: false,
  },
};

export const WithLogo: Story = {
  args: {
    children: "Hola soy un mensaje",
    withLogo: true,
  },
};
