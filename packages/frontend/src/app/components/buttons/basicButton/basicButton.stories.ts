import BasicButton from "./basicButton";
import type { Meta, StoryObj } from "@storybook/react";
import { Edit } from "../../../assets";
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction

const meta = {
  title: "Buttons/BasicButton",
  component: BasicButton,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {
    label: "Button",
    dimension: "medium",
    fluid: false,
  },
  argTypes: {
    dimension: {
      control: "radio",
      options: ["small", "medium", "large", "xlarge"],
    },
    category: {
      control: "radio",
      options: ["default", "primary", "secondary"],
    },
    reverse: {
      control: "boolean",
      if: { arg: "icon" },
    },
    onClick: {
      control: false,
    },
  },
} satisfies Meta<typeof BasicButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const Normal: Story = {};

Normal.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/lrjhxEoXZotJLOOwukMgzy/11---Grawiki?type=design&node-id=1480-9519&t=QRXAkNlTBMlFfIr8-4",
  },
};

export const NormalIcon: Story = {
  args: {
    label: "Button",
    icon: Edit,
    reverse: false,
    dimension: "medium",
  },
};

NormalIcon.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/lrjhxEoXZotJLOOwukMgzy/11---Grawiki?type=design&node-id=1480-9523&t=QRXAkNlTBMlFfIr8-4",
  },
};

export const Primary: Story = {
  parameters: {
    backgrounds: { default: "light" },
  },
  args: {
    label: "Button",
    dimension: "medium",
    category: "primary",
  },
};

Primary.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/lrjhxEoXZotJLOOwukMgzy/11---Grawiki?type=design&node-id=1332-13765&t=en2YeTdExG9ojx4C-4",
  },
};

export const PrimaryIcon: Story = {
  args: {
    label: "Button",
    icon: Edit,
    reverse: false,
    dimension: "medium",
    category: "primary",
  },
};

PrimaryIcon.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/lrjhxEoXZotJLOOwukMgzy/11---Grawiki?type=design&node-id=1332-13769&t=en2YeTdExG9ojx4C-4",
  },
};

export const PrimaryIconReverse: Story = {
  args: {
    label: "Button",
    icon: Edit,
    reverse: true,
    dimension: "medium",
    category: "primary",
  },
};

PrimaryIconReverse.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/lrjhxEoXZotJLOOwukMgzy/11---Grawiki?type=design&node-id=1332-13707&t=en2YeTdExG9ojx4C-4",
  },
};

export const PrimaryIconSmall: Story = {
  args: {
    label: "Button",
    icon: Edit,
    reverse: false,
    dimension: "small",
    category: "primary",
  },
};

PrimaryIconSmall.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/lrjhxEoXZotJLOOwukMgzy/11---Grawiki?type=design&node-id=1332-13793&t=en2YeTdExG9ojx4C-4",
  },
};

export const PrimaryIconLarge: Story = {
  args: {
    label: "Button",
    icon: Edit,
    reverse: false,
    dimension: "large",
    category: "primary",
  },
};

PrimaryIconLarge.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/lrjhxEoXZotJLOOwukMgzy/11---Grawiki?type=design&node-id=1332-13793&t=en2YeTdExG9ojx4C-4",
  },
};

export const PrimaryIconXlarge: Story = {
  args: {
    label: "Button",
    icon: Edit,
    reverse: false,
    dimension: "xlarge",
    category: "primary",
  },
};

PrimaryIconXlarge.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/lrjhxEoXZotJLOOwukMgzy/11---Grawiki?type=design&node-id=1332-13739&t=en2YeTdExG9ojx4C-4",
  },
};

export const Secondary: Story = {
  args: {
    label: "Button",
    dimension: "medium",
    category: "secondary",
  },
};

Secondary.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/lrjhxEoXZotJLOOwukMgzy/11---Grawiki?type=design&node-id=1332-13699&t=en2YeTdExG9ojx4C-4",
  },
};

export const SecondaryIcon: Story = {
  args: {
    label: "Button",
    icon: Edit,
    reverse: false,
    dimension: "medium",
    category: "secondary",
  },
};

SecondaryIcon.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/lrjhxEoXZotJLOOwukMgzy/11---Grawiki?type=design&node-id=1332-13703&t=en2YeTdExG9ojx4C-4",
  },
};

export const Fluid = {
  args: {
    fluid: true,
  },
};
