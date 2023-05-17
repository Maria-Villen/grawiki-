import type { Meta, StoryObj } from "@storybook/react";
import { withRouter } from "storybook-addon-react-router-v6";

import FooterMobile from "./footerMobile";

const meta = {
  title: "Layouts/FooterMobile",
  component: FooterMobile,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  decorators: [withRouter],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    backgrounds: { default: "light" },
  },
} satisfies Meta<typeof FooterMobile>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
