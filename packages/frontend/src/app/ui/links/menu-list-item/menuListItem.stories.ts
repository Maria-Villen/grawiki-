import type { Meta, StoryObj } from "@storybook/react";
import MenuListItem from "./menuListItem";
import { withRouter } from "storybook-addon-react-router-v6";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Links/MenuListItem",
  component: MenuListItem,
  tags: ["autodocs"],
  decorators: [withRouter],
  args: {
    dark: true,
  },
  argTypes: {
    dark: {
      control: "boolean",
    },
    className: {
      table: { disable: true },
    },
  },
  parameters: {
    backgrounds: { default: "ligth" },
    layout: "centered",
  },
} satisfies Meta<typeof MenuListItem>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const BankButtonFluid: Story = {
  parameters: {
    layout: "fullscreen",
  },
  args: {
    icon: Bank,
    link: "/category/bank",
    text: "Button",
    fluid: true,
  },
};

export const BankButton: Story = {
  args: {
    icon: Bank,
    link: "/category/bank",
    text: "Bancos",
    fluid: false,
  },
};

export const ToyButton: Story = {
  args: {
    icon: Toys,
    link: "/category/toys",
    text: "Juguetes",
    fluid: false,
  },
};

export const HealthButton: Story = {
  args: {
    icon: Health,
    link: "/category/health",
    text: "Salud",
    fluid: false,
  },
};

export const GovernmentButton: Story = {
  args: {
    icon: Government,
    link: "/category/government",
    text: "Gobierno",
    fluid: false,
  },
};
