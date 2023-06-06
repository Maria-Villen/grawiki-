import BasicButton from "./basicButton";
import { designLink } from "../../../../stories/designLinks";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Buttons/BasicButton",
  component: BasicButton,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {
    category: "default",
    dimension: "normal",
    fluid: false,
    reverse: false,
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

// DEFAULT CATEGORY

export const DefaultSmall: Story = {
  args: {
    label: "Button",
    dimension: "small",
  },
};

DefaultSmall.parameters = {
  design: {
    type: "figma",
    url: designLink.buttons.basicButton.defaultSmall,
  },
};

export const DefaultSmallWithIcon: Story = {
  args: {
    ...DefaultSmall.args,
    icon: { name: "CreateIcon" },
  },
};

DefaultSmallWithIcon.parameters = {
  design: {
    type: "figma",
    url: designLink.buttons.basicButton.defaultSmallWithIcon,
  },
};

export const DefaultSmallWithIconReverse: Story = {
  args: {
    ...DefaultSmallWithIcon.args,
    reverse: true,
  },
};

DefaultSmallWithIconReverse.parameters = {
  design: {
    type: "figma",
    url: designLink.buttons.basicButton.defaultSmallWithIconReverse,
  },
};

export const DefaultSmallOnlyIcon: Story = {
  args: {
    dimension: "small",
    icon: { name: "CreateIcon" },
  },
};

DefaultSmallOnlyIcon.parameters = {
  design: {
    type: "figma",
    url: designLink.buttons.basicButton.defaultSmallOnlyIcon,
  },
};

// PRIMARY NORMAL

export const DefaultNormal: Story = {
  args: {
    dimension: "normal",
  },
};

DefaultNormal.parameters = {
  design: {
    type: "figma",
    url: designLink.buttons.basicButton.defaultNormal,
  },
};

export const DefaultNormalWithIcon: Story = {
  args: {
    ...DefaultNormal.args,
    icon: { name: "CreateIcon" },
  },
};

DefaultNormalWithIcon.parameters = {
  design: {
    type: "figma",
    url: designLink.buttons.basicButton.defaultNormalWithIcon,
  },
};

export const DefaultNormalWithIconReverse: Story = {
  args: {
    ...DefaultNormalWithIcon.args,
    reverse: true,
  },
};

DefaultNormalWithIconReverse.parameters = {
  design: {
    type: "figma",
    url: designLink.buttons.basicButton.defaultNormalWithIconReverse,
  },
};

export const DefaultNormalOnlyIcon: Story = {
  args: {
    dimension: "normal",
    icon: { name: "CreateIcon" },
  },
};

DefaultNormalOnlyIcon.parameters = {
  design: {
    type: "figma",
    url: designLink.buttons.basicButton.defaultNormalOnlyIcon,
  },
};
// PRIMARY MEDIUM

export const DefaultMedium: Story = {
  args: {
    label: "Button",
    dimension: "medium",
  },
};

DefaultMedium.parameters = {
  design: {
    type: "figma",
    url: designLink.buttons.basicButton.defaultMedium,
  },
};

export const DefaultMediumWithIcon: Story = {
  args: {
    ...DefaultMedium.args,
    icon: { name: "CreateIcon" },
  },
};

DefaultMediumWithIcon.parameters = {
  design: {
    type: "figma",
    url: designLink.buttons.basicButton.defaultMediumWithIcon,
  },
};

export const DefaultMediumWithIconReverse: Story = {
  args: {
    ...DefaultMediumWithIcon.args,
    reverse: true,
  },
};

DefaultMediumWithIconReverse.parameters = {
  design: {
    type: "figma",
    url: designLink.buttons.basicButton.defaultMediumWithIconReverse,
  },
};

export const DefaultMediumOnlyIcon: Story = {
  args: {
    dimension: "medium",
    icon: { name: "CreateIcon" },
  },
};

DefaultMediumOnlyIcon.parameters = {
  design: {
    type: "figma",
    url: designLink.buttons.basicButton.defaultMediumOnlyIcon,
  },
};

// Default Big

export const DefaultBig: Story = {
  args: {
    label: "Button",
    dimension: "big",
  },
};

DefaultBig.parameters = {
  design: {
    type: "figma",
    url: designLink.buttons.basicButton.defaultBig,
  },
};

export const DefaultBigWithIcon: Story = {
  args: {
    ...DefaultBig.args,
    icon: { name: "CreateIcon" },
  },
};

DefaultBigWithIcon.parameters = {
  design: {
    type: "figma",
    url: designLink.buttons.basicButton.defaultBigWithIcon,
  },
};

export const DefaultBigWithIconReverse: Story = {
  args: {
    ...DefaultBigWithIcon.args,
    reverse: true,
  },
};

DefaultBigWithIconReverse.parameters = {
  design: {
    type: "figma",
    url: designLink.buttons.basicButton.defaultBigWithIconReverse,
  },
};

export const DefaultBigOnlyIcon: Story = {
  args: {
    dimension: "big",
    icon: { name: "CreateIcon" },
  },
};

DefaultBigOnlyIcon.parameters = {
  design: {
    type: "figma",
    url: designLink.buttons.basicButton.defaultBigOnlyIcon,
  },
};

// PRIMARY CATEGORY

export const PrimarySmall: Story = {
  args: {
    label: "Primary",
    category: "primary",
    dimension: "small",
  },
};

PrimarySmall.parameters = {
  design: {
    type: "figma",
    url: designLink.buttons.basicButton.primarySmall,
  },
};

export const PrimarySmallWithIcon: Story = {
  args: {
    ...PrimarySmall.args,
    icon: { name: "CreateIcon" },
  },
};

PrimarySmallWithIcon.parameters = {
  design: {
    type: "figma",
    url: designLink.buttons.basicButton.primarySmallWithIcon,
  },
};

export const PrimarySmallWithIconReverse: Story = {
  args: {
    ...PrimarySmallWithIcon.args,
    reverse: true,
  },
};

PrimarySmallWithIconReverse.parameters = {
  design: {
    type: "figma",
    url: designLink.buttons.basicButton.primarySmallWithIconReverse,
  },
};

export const PrimarySmallOnlyIcon: Story = {
  args: {
    dimension: "small",
    category: "primary",
    icon: { name: "CreateIcon" },
  },
};

PrimarySmallOnlyIcon.parameters = {
  design: {
    type: "figma",
    url: designLink.buttons.basicButton.primarySmallOnlyIcon,
  },
};
// PRIMARY NORMAL

export const PrimaryNormal: Story = {
  args: {
    label: "Primary",
    category: "primary",
    dimension: "normal",
  },
};

PrimaryNormal.parameters = {
  design: {
    type: "figma",
    url: designLink.buttons.basicButton.primaryNormal,
  },
};

export const PrimaryNormalWithIcon: Story = {
  args: {
    ...PrimaryNormal.args,
    icon: { name: "CreateIcon" },
  },
};

PrimaryNormalWithIcon.parameters = {
  design: {
    type: "figma",
    url: designLink.buttons.basicButton.primaryNormalWithIcon,
  },
};

export const PrimaryNormalWithIconReverse: Story = {
  args: {
    ...PrimaryNormalWithIcon.args,
    reverse: true,
  },
};

PrimaryNormalWithIconReverse.parameters = {
  design: {
    type: "figma",
    url: designLink.buttons.basicButton.primaryNormalWithIconReverse,
  },
};

export const PrimaryNormalOnlyIcon: Story = {
  args: {
    dimension: "normal",
    category: "primary",
    icon: { name: "CreateIcon" },
  },
};

PrimaryNormalOnlyIcon.parameters = {
  design: {
    type: "figma",
    url: designLink.buttons.basicButton.primaryNormalOnlyIcon,
  },
};

// PRIMARY MEDIUM

export const PrimaryMedium: Story = {
  args: {
    label: "Primary",
    category: "primary",
    dimension: "medium",
  },
};

PrimaryMedium.parameters = {
  design: {
    type: "figma",
    url: designLink.buttons.basicButton.primaryMedium,
  },
};

export const PrimaryMediumWithIcon: Story = {
  args: {
    ...PrimaryMedium.args,
    icon: { name: "CreateIcon" },
  },
};

PrimaryMediumWithIcon.parameters = {
  design: {
    type: "figma",
    url: designLink.buttons.basicButton.primaryMediumWithIcon,
  },
};

export const PrimaryMediumWithIconReverse: Story = {
  args: {
    ...PrimaryMediumWithIcon.args,
    reverse: true,
  },
};

PrimaryMediumWithIconReverse.parameters = {
  design: {
    type: "figma",
    url: designLink.buttons.basicButton.primaryMediumWithIconReverse,
  },
};

export const PrimaryMediumOnlyIcon: Story = {
  args: {
    dimension: "medium",
    category: "primary",
    icon: { name: "CreateIcon" },
  },
};

PrimaryMediumOnlyIcon.parameters = {
  design: {
    type: "figma",
    url: designLink.buttons.basicButton.primaryMediumOnlyIcon,
  },
};
// Primary Big

export const PrimaryBig: Story = {
  args: {
    category: "primary",
    label: "Primary",
    dimension: "big",
  },
};

PrimaryBig.parameters = {
  design: {
    type: "figma",
    url: designLink.buttons.basicButton.primaryBig,
  },
};

export const PrimaryBigWithIcon: Story = {
  args: {
    ...PrimaryBig.args,
    icon: { name: "CreateIcon" },
  },
};

PrimaryBigWithIcon.parameters = {
  design: {
    type: "figma",
    url: designLink.buttons.basicButton.primaryBigWithIcon,
  },
};

export const PrimaryBigWithIconReverse: Story = {
  args: {
    ...PrimaryBigWithIcon.args,
    reverse: true,
  },
};

PrimaryBigWithIconReverse.parameters = {
  design: {
    type: "figma",
    url: designLink.buttons.basicButton.primaryBigWithIconReverse,
  },
};
export const PrimaryBigOnlyIcon: Story = {
  args: {
    dimension: "big",
    category: "primary",
    icon: { name: "CreateIcon" },
  },
};

PrimaryBigOnlyIcon.parameters = {
  design: {
    type: "figma",
    url: designLink.buttons.basicButton.primaryBigOnlyIcon,
  },
};

// SECONDARY

// Secondary Small

export const SecondarySmall: Story = {
  args: {
    dimension: "small",
    category: "secondary",
    label: "Secondary",
  },
};

SecondarySmall.parameters = {
  design: {
    type: "figma",
    url: designLink.buttons.basicButton.secondarySmall,
  },
};

export const SecondarySmallWithIcon: Story = {
  args: {
    ...SecondarySmall.args,
    icon: { name: "CreateIcon" },
  },
};

SecondarySmallWithIcon.parameters = {
  design: {
    type: "figma",
    url: designLink.buttons.basicButton.secondarySmallWithIcon,
  },
};

export const SecondarySmallWithIconReverse: Story = {
  args: {
    ...SecondarySmallWithIcon.args,
    reverse: true,
  },
};

SecondarySmallWithIconReverse.parameters = {
  design: {
    type: "figma",
    url: designLink.buttons.basicButton.secondarySmallWithIconReverse,
  },
};

export const SecondarySmallOnlyIcon: Story = {
  args: {
    category: "secondary",
    dimension: "small",
    icon: { name: "CreateIcon" },
  },
};

SecondarySmallOnlyIcon.parameters = {
  design: {
    type: "figma",
    url: designLink.buttons.basicButton.secondarySmallOnlyIcon,
  },
};

// Secondary NORMAL

export const SecondaryNormal: Story = {
  args: {
    dimension: "normal",
    category: "secondary",
    label: "Secondary",
  },
};

SecondaryNormal.parameters = {
  design: {
    type: "figma",
    url: designLink.buttons.basicButton.secondaryNormal,
  },
};

export const SecondaryNormalWithIcon: Story = {
  args: {
    ...SecondaryNormal.args,
    icon: { name: "CreateIcon" },
  },
};

SecondaryNormalWithIcon.parameters = {
  design: {
    type: "figma",
    url: designLink.buttons.basicButton.secondaryNormalWithIcon,
  },
};

export const SecondaryNormalWithIconReverse: Story = {
  args: {
    ...SecondaryNormalWithIcon.args,
    reverse: true,
  },
};

SecondaryNormalWithIconReverse.parameters = {
  design: {
    type: "figma",
    url: designLink.buttons.basicButton.secondaryNormalWithIconReverse,
  },
};

export const SecondaryNormalOnlyIcon: Story = {
  args: {
    category: "secondary",
    dimension: "normal",
    icon: { name: "CreateIcon" },
  },
};

SecondaryNormalOnlyIcon.parameters = {
  design: {
    type: "figma",
    url: designLink.buttons.basicButton.secondaryNormalOnlyIcon,
  },
};

// Secondary MEDIUM

export const SecondaryMedium: Story = {
  args: {
    dimension: "medium",
    category: "secondary",
    label: "Secondary",
  },
};

SecondaryMedium.parameters = {
  design: {
    type: "figma",
    url: designLink.buttons.basicButton.secondaryMedium,
  },
};

export const SecondaryMediumWithIcon: Story = {
  args: {
    ...SecondaryMedium.args,
    icon: { name: "CreateIcon" },
  },
};

SecondaryMediumWithIcon.parameters = {
  design: {
    type: "figma",
    url: designLink.buttons.basicButton.secondaryMediumWithIcon,
  },
};

export const SecondaryMediumWithIconReverse: Story = {
  args: {
    ...SecondaryMediumWithIcon.args,
    reverse: true,
  },
};

SecondaryMediumWithIconReverse.parameters = {
  design: {
    type: "figma",
    url: designLink.buttons.basicButton.secondaryMediumWithIconReverse,
  },
};

// Secondary Big

export const SecondaryBig: Story = {
  args: {
    dimension: "big",
    category: "secondary",
    label: "Secondary",
  },
};

SecondaryBig.parameters = {
  design: {
    type: "figma",
    url: designLink.buttons.basicButton.secondaryBig,
  },
};

export const SecondaryBigWithIcon: Story = {
  args: {
    ...SecondaryBig.args,
    icon: { name: "CreateIcon" },
  },
};

SecondaryBigWithIcon.parameters = {
  design: {
    type: "figma",
    url: designLink.buttons.basicButton.secondaryBigWithIcon,
  },
};

export const SecondaryBigWithIconReverse: Story = {
  args: {
    ...SecondaryBigWithIcon.args,
    reverse: true,
  },
};

SecondaryBigWithIconReverse.parameters = {
  design: {
    type: "figma",
    url: designLink.buttons.basicButton.secondaryBigWithIconReverse,
  },
};

// DISABLED

// Disabled Small

export const DisabledSmall: Story = {
  args: {
    dimension: "small",
    category: "disabled",
    label: "disabled",
  },
};

DisabledSmall.parameters = {
  design: {
    type: "figma",
    url: designLink.buttons.basicButton.disabledSmall,
  },
};

export const DisabledSmallWithIcon: Story = {
  args: {
    ...DisabledSmall.args,
    icon: { name: "CreateIcon" },
  },
};

DisabledSmallWithIcon.parameters = {
  design: {
    type: "figma",
    url: designLink.buttons.basicButton.disabledSmallWithIcon,
  },
};

export const DisabledSmallWithIconReverse: Story = {
  args: {
    ...DisabledSmallWithIcon.args,
    icon: { name: "CreateIcon" },
  },
};

DisabledSmallWithIconReverse.parameters = {
  design: {
    type: "figma",
    url: designLink.buttons.basicButton.disabledSmallWithIconReverse,
  },
};

// Disabled NORMAL

export const DisabledNormal: Story = {
  args: {
    dimension: "normal",
    category: "disabled",
    label: "disabled",
  },
};

DisabledNormal.parameters = {
  design: {
    type: "figma",
    url: designLink.buttons.basicButton.disabledNormal,
  },
};

export const DisabledNormalWithIcon: Story = {
  args: {
    ...DisabledNormal.args,
    icon: { name: "CreateIcon" },
  },
};

DisabledNormalWithIcon.parameters = {
  design: {
    type: "figma",
    url: designLink.buttons.basicButton.disabledNormalWithIcon,
  },
};

export const DisabledNormalWithIconReverse: Story = {
  args: {
    ...DisabledNormalWithIcon.args,
    reverse: true,
  },
};

DisabledNormalWithIconReverse.parameters = {
  design: {
    type: "figma",
    url: designLink.buttons.basicButton.disabledNormalWithIconReverse,
  },
};

// Disabled MEDIUM

export const DisabledMedium: Story = {
  args: {
    label: "disabled",
    dimension: "medium",
    category: "disabled",
  },
};

DisabledMedium.parameters = {
  design: {
    type: "figma",
    url: designLink.buttons.basicButton.disabledMedium,
  },
};

export const DisabledMediumWithIcon: Story = {
  args: {
    ...DisabledMedium.args,
    icon: { name: "CreateIcon" },
  },
};

DisabledMediumWithIcon.parameters = {
  design: {
    type: "figma",
    url: designLink.buttons.basicButton.disabledMediumWithIcon,
  },
};

export const DisabledMediumWithIconReverse: Story = {
  args: {
    ...DisabledMediumWithIcon.args,
    reverse: true,
  },
};

DisabledMediumWithIconReverse.parameters = {
  design: {
    type: "figma",
    url: designLink.buttons.basicButton.disabledMediumWithIconReverse,
  },
};

// Disabled Big

export const DisabledBig: Story = {
  args: {
    dimension: "big",
    label: "disabled",
    category: "disabled",
  },
};

DisabledBig.parameters = {
  design: {
    type: "figma",
    url: designLink.buttons.basicButton.disabledBig,
  },
};

export const DisabledBigWithIcon: Story = {
  args: {
    ...DisabledBig.args,
    icon: { name: "CreateIcon" },
  },
};

DisabledBigWithIcon.parameters = {
  design: {
    type: "figma",
    url: designLink.buttons.basicButton.disabledBigWithIcon,
  },
};

export const DisabledBigWithIconReverse: Story = {
  args: {
    ...DisabledBigWithIcon.args,
    reverse: true,
  },
};

DisabledBigWithIconReverse.parameters = {
  design: {
    type: "figma",
    url: designLink.buttons.basicButton.disabledBigWithIconReverse,
  },
};
