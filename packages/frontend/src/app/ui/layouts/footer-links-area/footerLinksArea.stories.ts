import type { Meta, StoryObj } from "@storybook/react";
import { withRouter } from "storybook-addon-react-router-v6";
import FooterLinksArea from "./footerLinksArea";

const meta = {
  title: "Layouts/footer/FooterLinksArea",
  component: FooterLinksArea,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  decorators: [withRouter],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
    backgrounds: {
      default: "light",
    },
  },
} satisfies Meta<typeof FooterLinksArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    title: "Title",
    links: [
      {
        id: "01",
        icon: { name: "ToysIcon" },
        text: "Categoría Juguetes",
        link: "#",
      },
      { id: "02", text: "Texto de ejemplo", link: "#" },
    ],
  },
};
