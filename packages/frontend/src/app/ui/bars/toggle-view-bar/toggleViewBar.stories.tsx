import { CategoryTag, Tag } from "../..";
import ToggleViewBar from "./ToggleViewBar";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Bars/ToggleViewBar",
  component: ToggleViewBar,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    backgrounds: {
      default: "dark",
    },
  },
  argTypes: {
    selected: {
      control: "radio",
      options: ["list", "card"],
    },
    onChoice: {
      control: false,
    },
    children: {
      control: false,
    },
    className: { table: { disable: true } },
  },
  args: {
    selected: "list",
    onChoice: (value: string) => {
      console.log(value);
    },
  },
  render: (args) => (
    <ToggleViewBar {...args}>
      <CategoryTag icon={{ name: "BankIcon", props: { fill: true } }}>
        Banco
      </CategoryTag>
    </ToggleViewBar>
  ),
} satisfies Meta<typeof ToggleViewBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithCategoryTag: Story = {};

export const WithText: Story = {
  render: (args) => (
    <ToggleViewBar {...args}>
      <span style={{ color: "white" }}>😊 Hola! </span>
    </ToggleViewBar>
  ),
};
