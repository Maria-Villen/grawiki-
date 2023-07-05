import type { Meta, StoryObj } from "@storybook/react";
import MenuNavbarCollapse from "./menu-navbarCollapse";

const meta = {
  title: "Layouts/MenuNavbarCollapse",
  component: MenuNavbarCollapse,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
    backgrounds: { default: "light" },
  },
} satisfies Meta<typeof MenuNavbarCollapse>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children:
      "Hola Soy el Menu del Navbar. Pone en modo movil y haz click sobre mi",
  },
};
