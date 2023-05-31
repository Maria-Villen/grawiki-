import type { Meta, StoryObj } from "@storybook/react";
import { withRouter } from "storybook-addon-react-router-v6";
import { withLayout } from "../../../stories/decorators";

import FooterMobile from "./footerMobile";

const meta = {
  title: "Layouts/FooterMobile",
  component: FooterMobile,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  decorators: [withLayout, withRouter],
} satisfies Meta<typeof FooterMobile>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

Default.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/lrjhxEoXZotJLOOwukMgzy/11---Grawiki---Screens?type=design&node-id=609-4537&t=0g41u4YcLjzSx1YV-4",
  },
};
