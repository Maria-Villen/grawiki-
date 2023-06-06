import BasicBtnLink from "./basicBtnLink";
import { designLink } from "../../../../stories/designLinks";
import { withRouter } from "storybook-addon-react-router-v6";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Buttons/BasicBtnLink",
  component: BasicBtnLink,
  tags: ["autodocs"],
  decorators: [withRouter],
  parameters: {
    layout: "centered",
  },
  args: {
    label: "Button",
    category: "primary",
    dimension: "normal",
    fluid: false,
    reverse: false,
    to: "#",
  },
  argTypes: {
    dimension: {
      control: "radio",
      options: ["small", "normal", "medium", "big"],
    },
    category: {
      control: "radio",
      options: ["primary", "secondary", "disabled"],
    },
    reverse: {
      control: "boolean",
      if: { arg: "icon" },
    },
  },
} satisfies Meta<typeof BasicBtnLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PrimarySmall: Story = {
  args: {
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
    dimension: "small",
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
    dimension: "small",
    icon: { name: "CreateIcon" },
    reverse: true,
  },
};

PrimarySmallWithIconReverse.parameters = {
  design: {
    type: "figma",
    url: designLink.buttons.basicButton.primarySmallWithIconReverse,
  },
};

// PRIMARY NORMAL

export const PrimaryNormal: Story = {
  args: {
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
    dimension: "normal",
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
    dimension: "normal",
    icon: { name: "CreateIcon" },
    reverse: true,
  },
};

PrimaryNormalWithIconReverse.parameters = {
  design: {
    type: "figma",
    url: designLink.buttons.basicButton.primaryNormalWithIconReverse,
  },
};

// PRIMARY MEDIUM

export const PrimaryMedium: Story = {
  args: {
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
    dimension: "medium",
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
    dimension: "medium",
    icon: { name: "CreateIcon" },
    reverse: true,
  },
};

PrimaryMediumWithIconReverse.parameters = {
  design: {
    type: "figma",
    url: designLink.buttons.basicButton.primaryMediumWithIconReverse,
  },
};

// Primary Big

export const PrimaryBig: Story = {
  args: {
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
    dimension: "big",
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
    dimension: "big",
    icon: { name: "CreateIcon" },
    reverse: true,
  },
};

PrimaryBigWithIconReverse.parameters = {
  design: {
    type: "figma",
    url: designLink.buttons.basicButton.primaryBigWithIconReverse,
  },
};

// SECONDARY

// Secondary Small

export const SecondarySmall: Story = {
  args: {
    dimension: "small",
    category: "secondary",
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
    dimension: "small",
    icon: { name: "CreateIcon" },
    category: "secondary",
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
    dimension: "small",
    icon: { name: "CreateIcon" },
    reverse: true,
    category: "secondary",
  },
};

SecondarySmallWithIconReverse.parameters = {
  design: {
    type: "figma",
    url: designLink.buttons.basicButton.secondarySmallWithIconReverse,
  },
};

// Secondary NORMAL

export const SecondaryNormal: Story = {
  args: {
    dimension: "normal",
    category: "secondary",
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
    dimension: "normal",
    icon: { name: "CreateIcon" },
    category: "secondary",
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
    dimension: "normal",
    icon: { name: "CreateIcon" },
    reverse: true,
    category: "secondary",
  },
};

SecondaryNormalWithIconReverse.parameters = {
  design: {
    type: "figma",
    url: designLink.buttons.basicButton.secondaryNormalWithIconReverse,
  },
};

// Secondary MEDIUM

export const SecondaryMedium: Story = {
  args: {
    dimension: "medium",
    category: "secondary",
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
    dimension: "medium",
    icon: { name: "CreateIcon" },
    category: "secondary",
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
    dimension: "medium",
    icon: { name: "CreateIcon" },
    reverse: true,
    category: "secondary",
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
    dimension: "big",
    icon: { name: "CreateIcon" },
    category: "secondary",
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
    dimension: "big",
    icon: { name: "CreateIcon" },
    reverse: true,
    category: "secondary",
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
    dimension: "small",
    icon: { name: "CreateIcon" },
    category: "disabled",
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
    dimension: "small",
    icon: { name: "CreateIcon" },
    category: "disabled",
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
    dimension: "normal",
    icon: { name: "CreateIcon" },
    category: "disabled",
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
    dimension: "normal",
    icon: { name: "CreateIcon" },
    reverse: true,
    category: "disabled",
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
    dimension: "medium",
    icon: { name: "CreateIcon" },
    category: "disabled",
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
    dimension: "medium",
    icon: { name: "CreateIcon" },
    reverse: true,
    category: "disabled",
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
    dimension: "big",
    icon: { name: "CreateIcon" },
    category: "disabled",
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
    dimension: "big",
    icon: { name: "CreateIcon" },
    reverse: true,
    category: "disabled",
  },
};

DisabledBigWithIconReverse.parameters = {
  design: {
    type: "figma",
    url: designLink.buttons.basicButton.disabledBigWithIconReverse,
  },
};
