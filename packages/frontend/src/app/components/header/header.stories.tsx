import type { Meta, StoryObj } from "@storybook/react";
import Header from "./header";
import { withRouter } from "storybook-addon-react-router-v6";
import { withRedux } from "../../../stories/decorators";
const meta = {
  title: "Layouts/Header",
  component: Header,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  decorators: [withRedux, withRouter],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

Default.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/lrjhxEoXZotJLOOwukMgzy/11---Grawiki---Screens?type=design&node-id=609-3131&t=0g41u4YcLjzSx1YV-4",
  },
};
