import MenuButton from "./MenuButton";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Buttons/MenuButton",
  component: MenuButton,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {
    fluid: false,
    label: "Button",
    icon: { name: "SettingIcon" },
    isActive: false,
  },
  argTypes: {
    fluid: {
      control: "boolean",
    },
    variant: {
      control: "radio",
      options: ["horizontal", "vertical", "responsive"],
    },
    onClick: {
      control: false,
    },
  },
} satisfies Meta<typeof MenuButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// DEFAULT CATEGORY

export const Horizontal: Story = {
  args: {
    icon: { name: "BankIcon" },
    label: "Banco",
    variant: "horizontal",
  },
};

export const Vertical: Story = {
  args: {
    icon: { name: "BankIcon" },
    label: "Banco",
    variant: "vertical",
  },
};

export const Active: Story = {
  args: {
    icon: { name: "BankIcon" },
    label: "Banco",
    variant: "vertical",
    isActive: true,
  },
};

export const ActiveHorizontal: Story = {
  args: {
    icon: { name: "BankIcon" },
    label: "Banco",
    variant: "horizontal",
    isActive: true,
  },
};
