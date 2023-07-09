import DropdownField from "./DropdownField";
import type { Meta, StoryObj } from "@storybook/react";
import { withRouter } from "storybook-addon-react-router-v6";

const myData = [
  {
    id: "1",
    icon: { name: "HealthIcon" },
    text: "Salud",
    link: "/category/health",
    tags: ["9", "13"],
  },
  {
    id: "2",
    icon: { name: "ToysIcon" },
    text: "Juguetes",
    link: "/category/Toys",
    tags: ["10", "11", "12"],
  },
];

const meta = {
  title: "Fields/DropdownField",
  component: DropdownField,
  tags: ["autodocs"],
  args: {
    data: myData,
    onChange: () => {
      console.log("changed");
    },
  },
  decorators: [withRouter],
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
