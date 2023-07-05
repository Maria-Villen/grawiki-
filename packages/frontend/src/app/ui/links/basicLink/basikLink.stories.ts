import type { Meta, StoryObj } from "@storybook/react";
import BasicLink from "./basicLink";
import { withRouter } from "storybook-addon-react-router-v6";

const meta = {
  title: "Links/BasicLink",
  component: BasicLink,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  args: {
    label: "Read More",
    to: "#",
    disabled: false,
    reverse: false,
    dark: false,
  },
  argTypes: {
    reverse: {
      control: "boolean",
      if: { arg: "icon" },
    },
    className: {
      table: { disable: true },
    },
    to: {
      table: { disable: true },
    },
  },
  decorators: [withRouter],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
    backgrounds: { default: "light" },
  },
} satisfies Meta<typeof BasicLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  argTypes: {
    icon: {
      table: { disable: true },
    },
    reverse: {
      table: { disable: true },
    },
  },
  args: { label: "Read More" },
};

export const WithIcon: Story = {
  args: { ...Default.args, icon: { name: "ReadMoreIcon" } },
};

export const Reverse: Story = {
  args: { ...WithIcon.args, reverse: true },
};

export const Disabled: Story = {
  args: { ...Default.args, disabled: true },
};

export const DefaultDark: Story = {
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
  args: {
    ...Default.args,
    dark: true,
  },
};

export const WithIconDark: Story = {
  parameters: { ...DefaultDark.parameters },
  args: { ...DefaultDark.args, icon: { name: "ReadMoreIcon" } },
};

export const ReverseDark: Story = {
  parameters: { ...DefaultDark.parameters },
  args: { ...WithIconDark.args, reverse: true },
};

export const DisabledDark: Story = {
  parameters: { ...DefaultDark.parameters },
  args: { ...DefaultDark.args, disabled: true },
};
