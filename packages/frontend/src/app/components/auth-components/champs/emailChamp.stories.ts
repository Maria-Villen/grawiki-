import EmailChamp from "./emailchamp";
import { withRouter } from "storybook-addon-react-router-v6";
import type { Meta, StoryObj } from "@storybook/react";
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
import { useTranslation } from "react-i18next";

const meta = {
  title: "Forms/Champs/EmailChamp",
  component: EmailChamp,
  tags: ["autodocs"],
  args: {
    placeholder: "E-mail",
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
} satisfies Meta<typeof EmailChamp>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    isTouched: false,
    isError: "",
  },
};
