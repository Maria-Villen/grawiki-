import PassInput from "./passInput";
import type { Meta, StoryObj } from "@storybook/react";
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction

const meta = {
  title: "Fields/PassInput",
  component: PassInput,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    background: { default: "light" },
  },
  argTypes: {
    fluid: {
      table: { disable: true },
    },
    className: {
      table: { disable: true },
    },
  },
  args: {
    placeholder: "Contraseña",
    disabled: false,
  },
} satisfies Meta<typeof PassInput>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const Normal: Story = {};

Normal.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/8OFb5MbFJaMxxch3lVx1nd/Grawiki-Design-System-UI-KIT?type=design&node-id=206-23056&mode=dev",
  },
};

export const Fluid: Story = {
  args: {
    fluid: true,
  },
};

Fluid.parameters = {
  layout: "fullscreen",
  design: {
    type: "figma",
    url: "https://www.figma.com/file/lrjhxEoXZotJLOOwukMgzy/11---Grawiki---Screens?type=design&node-id=609-4908https://www.figma.com/file/lrjhxEoXZotJLOOwukMgzy/11---Grawiki---Screens?type=design&node-id=1757-15899&t=umPaY8DNPB3fMhOb-4&t=cVYTp6YN9bkAe2Ro-4",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

Disabled.parameters = {
  layout: "centered",
  design: {
    type: "figma",
    url: "https://www.figma.com/file/8OFb5MbFJaMxxch3lVx1nd/Grawiki-Design-System-UI-KIT?type=design&node-id=206-23085&mode=dev",
  },
};
