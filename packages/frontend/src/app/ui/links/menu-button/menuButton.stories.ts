import type { Meta, StoryObj } from "@storybook/react";
import MenuButton from "./menuButton";
import { withRouter } from "storybook-addon-react-router-v6";
import { withLayout } from "../../../../stories/decorators";
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Links/MenuButton",
  component: MenuButton,
  tags: ["autodocs"],
  decorators: [withRouter],
} satisfies Meta<typeof MenuButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const EditButton: Story = {
  parameters: {
    layout: "centered",
    backgrounds: { value: "#fff" },
  },
  args: {
    icon: { name: "Create" },
    to: "/create",
    text: "Crear",
    fluid: false,
  },
};

export const EditFluidButton: Story = {
  decorators: [withLayout],
  args: {
    icon: { name: "Create" },
    to: "/create",
    text: "Crear",
    fluid: true,
  },
};
