import categories from "../../../../services/data/category.data";
import DropdownField from "./DropdownField";
import type { Meta, StoryObj } from "@storybook/react";

const myData = categories;

const meta = {
  title: "Fields/DropdownField",
  component: DropdownField,
  tags: ["autodocs"],
  args: {
    data: myData,
  },
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof DropdownField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {};

// Normal.parameters = {
//   design: {
//     type: "figma",
//     url: "https://www.figma.com/file/lrjhxEoXZotJLOOwukMgzy/11---Grawiki---Screens?type=design&node-id=1541-12644&t=0g41u4YcLjzSx1YV-4",
//   },
// };
