import type { Meta, StoryObj } from "@storybook/react";
import { withRouter } from "storybook-addon-react-router-v6";
import FooterLinksArea from "./footerLinksArea";
import { English } from "../../../assets";

const meta = {
  title: "Layouts/FooterLinksArea",
  component: FooterLinksArea,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  decorators: [withRouter],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} satisfies Meta<typeof FooterLinksArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    title: "Title",
    links: [
      { id: "01", icon: English, text: "Idioma Inlges", link: "#" },
      { id: "02", icon: undefined, text: "Texto de ejemplo", link: "#" },
    ],
  },
};
