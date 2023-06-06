import type { Meta, StoryObj } from "@storybook/react";
import MenuListItemSimple from "./menuListItemSimple";
import { withRouter } from "storybook-addon-react-router-v6";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Links/MenuListItemSimple",
  component: MenuListItemSimple,
  tags: ["autodocs"],
  decorators: [withRouter],
  args: { inverse: true },
  argTypes: {
    className: {
      table: { disable: true },
    },
  },
  parameters: {
    backgrounds: { default: "ligth" },
    layout: "centered",
  },
} satisfies Meta<typeof MenuListItemSimple>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const BankButtonFluid: Story = {
  parameters: {
    layout: "fullscreen",
  },
  args: {
    icon: { name: "BankIcon" },
    link: "/category/bank",
    text: "Button",
    fluid: true,
  },
};

export const BankButton: Story = {
  args: {
    icon: { name: "BankIcon" },
    link: "/category/bank",
    text: "Bancos",
    fluid: false,
  },
};

export const ToyButton: Story = {
  args: {
    icon: { name: "ToysIcon" },
    link: "/category/toys",
    text: "Juguetes",
    fluid: false,
  },
};

export const HealthButton: Story = {
  args: {
    icon: { name: "HealthIcon" },
    link: "/category/health",
    text: "Salud",
    fluid: false,
  },
};

export const GovernmentButton: Story = {
  args: {
    icon: { name: "GovernmentIcon" },
    link: "/category/government",
    text: "Gobierno",
    fluid: false,
  },
};

export const CreateTheme: Story = {
  args: {
    icon: { name: "CreateIcon" },
    link: "/create",
    text: "Crear",
    fluid: false,
  },
};

export const User: Story = {
  args: {
    icon: { name: "AvatarIcon" },
    link: "/profile",
    text: "Perfil",
    fluid: false,
  },
};
