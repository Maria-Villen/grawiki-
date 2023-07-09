import { Link } from "react-router-dom";
import { BasicLink, CategoryTag } from "..";
import CheckField from "./checkField";
import type { Meta, StoryObj } from "@storybook/react";
import { withRouter } from "storybook-addon-react-router-v6";

const meta = {
  title: "Fields/CheckField",
  component: CheckField,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    backgrounds: {
      default: "dark",
    },
  },
  argTypes: {
    children: {
      control: false,
    },
    className: { table: { disable: true } },
  },
  decorators: [withRouter],
  args: {
    name: "check",
    isTouched: false,
    disabled: false,
    isError: "",
  },
  render: (args) => (
    <CheckField {...args}>
      <CategoryTag icon={{ name: "BankIcon", props: { fill: true } }}>
        Banco
      </CategoryTag>
    </CheckField>
  ),
} satisfies Meta<typeof CheckField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithCategoryTag: Story = {};

export const WithText: Story = {
  render: (args) => (
    <CheckField {...args}>
      <span style={{ color: "white" }}>😊 Hola! </span>
    </CheckField>
  ),
};

export const WithLink: Story = {
  render: (args) => (
    <CheckField {...args}>
      Debes aceptar las
      <BasicLink
        style={{ fontSize: "1rem", color: "white" }}
        to="/terms"
        label="condiciones generales y de privacidad"
      />
      para continuar.
    </CheckField>
  ),
};
