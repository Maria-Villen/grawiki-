import ArticleDetail from "./ArticleDetail";
import type { Meta, StoryObj } from "@storybook/react";
import { withLayout } from "../../../../stories/decorators";

const meta = {
  title: "Buttons/ArticleDetail",
  component: ArticleDetail,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "dark",
    },
  },
  argTypes: {
    placeholder: {
      control: false,
    },
    onClick: {
      control: false,
    },
  },
} satisfies Meta<typeof ArticleDetail>;

export default meta;
type Story = StoryObj<typeof meta>;

// DEFAULT CATEGORY

export const Normal: Story = {
  args: {},
};
export const Fluid: Story = {
  decorators: [withLayout],
  parameters: {
    layout: "fullscreen",
  },
  args: {
    fluid: true,
  },
};

export const Icon: Story = {
  args: {
    icon: { name: "BankIcon" },
    value: "Bank",
  },
};
