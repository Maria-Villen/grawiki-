import ReturnBar from "./ReturnBar";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Bars/ReturnBar",
  component: ReturnBar,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "dark",
    },
  },
  render: () => (
    <ReturnBar>
      <p>Hola que tal</p>
    </ReturnBar>
  ),
} satisfies Meta<typeof ReturnBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {};
