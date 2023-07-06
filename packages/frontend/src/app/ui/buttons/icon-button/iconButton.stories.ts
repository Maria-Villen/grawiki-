import IconButton from "./IconButton";
import { designLink } from "../../../../stories/designLinks";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Buttons/IconButton",
  component: IconButton,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {
    category: "default",
    icon: { name: "NotificationIcon" },
  },
  argTypes: {
    dimension: {
      control: "radio",
      options: ["small", "normal", "medium", "big"],
    },
    category: {
      control: "radio",
      options: ["default", "primary", "secondary", "disabled"],
    },
    onClick: {
      control: false,
    },
  },
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// DEFAULT CATEGORY

export const DefaultSmall: Story = {
  args: {
    dimension: "small",
  },
};

export const DefaultNormal: Story = {
  args: {
    dimension: "normal",
  },
};

export const DefaultMedium: Story = {
  args: {
    dimension: "medium",
  },
};

export const DefaultBig: Story = {
  args: {
    dimension: "big",
  },
};

export const DefaultSmallRounded: Story = {
  args: {
    ...DefaultSmall.args,
    rounded: true,
  },
};

export const DefaultNormalRounded: Story = {
  args: {
    ...DefaultSmallRounded.args,
    dimension: "normal",
  },
};

export const DefaultMediumRounded: Story = {
  args: {
    ...DefaultSmallRounded.args,
    dimension: "medium",
  },
};

export const DefaultBigRounded: Story = {
  args: {
    ...DefaultSmallRounded.args,
    dimension: "big",
  },
};

export const PrimarySmall: Story = {
  args: {
    category: "primary",
    dimension: "small",
  },
};

export const PrimaryNormal: Story = {
  args: {
    ...PrimarySmall.args,
    dimension: "normal",
  },
};

export const PrimaryMedium: Story = {
  args: {
    ...PrimarySmall.args,
    dimension: "medium",
  },
};

export const PrimaryBig: Story = {
  args: {
    ...PrimarySmall.args,
    dimension: "big",
  },
};

export const PrimarySmallRounded: Story = {
  args: {
    ...PrimarySmall.args,
    rounded: true,
  },
};

export const PrimaryNormalRounded: Story = {
  args: {
    ...PrimarySmallRounded.args,
    dimension: "normal",
  },
};

export const PrimaryMediumRounded: Story = {
  args: {
    ...PrimarySmallRounded.args,
    dimension: "medium",
  },
};

export const PrimaryBigRounded: Story = {
  args: {
    ...PrimarySmallRounded.args,
    dimension: "big",
  },
};

export const SecondarySmall: Story = {
  args: {
    category: "secondary",
    dimension: "small",
  },
};

export const SecondaryNormal: Story = {
  args: {
    ...SecondarySmall.args,
    dimension: "normal",
  },
};

export const SecondaryMedium: Story = {
  args: {
    ...SecondarySmall.args,
    dimension: "medium",
  },
};

export const SecondaryBig: Story = {
  args: {
    ...SecondarySmall.args,
    dimension: "big",
  },
};

export const SecondarySmallRounded: Story = {
  args: {
    ...SecondarySmall.args,
    rounded: true,
  },
};

export const SecondaryNormalRounded: Story = {
  args: {
    ...SecondarySmallRounded.args,
    dimension: "normal",
  },
};

export const SecondaryMediumRounded: Story = {
  args: {
    ...SecondarySmallRounded.args,
    dimension: "medium",
  },
};

export const SecondaryBigRounded: Story = {
  args: {
    ...SecondarySmallRounded.args,
    dimension: "big",
  },
};

export const DisabledSmall: Story = {
  args: {
    category: "disabled",
    dimension: "small",
  },
};

export const DisabledNormal: Story = {
  args: {
    ...DisabledSmall.args,
    dimension: "normal",
  },
};

export const DisabledMedium: Story = {
  args: {
    ...DisabledSmall.args,
    dimension: "medium",
  },
};

export const DisabledBig: Story = {
  args: {
    ...DisabledSmall.args,
    dimension: "big",
  },
};

export const DisabledSmallRounded: Story = {
  args: {
    ...DisabledSmall.args,
    rounded: true,
  },
};

export const DisabledNormalRounded: Story = {
  args: {
    ...DisabledSmallRounded.args,
    dimension: "normal",
  },
};

export const DisabledMediumRounded: Story = {
  args: {
    ...DisabledSmallRounded.args,
    dimension: "medium",
  },
};

export const DisabledBigRounded: Story = {
  args: {
    ...DisabledSmallRounded.args,
    dimension: "big",
  },
};
