import SweetProfileAlert from "./SweetProfileAlert";
import type { Meta, StoryObj } from "@storybook/react";
import { withLayout } from "../../../stories/decorators";

const meta = {
  title: "Alerts/SweetProfileAlert",
  component: SweetProfileAlert,
  tags: ["autodocs"],
  decorators: [withLayout],
  parameters: {
    layout: "fullScreen",
    backgrounds: {
      default: "dark",
    },
  },
  args: {
    message: "default",
    fluid: false,
  },
  argTypes: {
    fluid: {
      control: "boolean",
    },
  },
} satisfies Meta<typeof SweetProfileAlert>;

export default meta;
type Story = StoryObj<typeof meta>;

// DEFAULT CATEGORY

export const Default: Story = {
  args: {
    message:
      "😊Estás creando un nuevo tema👏, estás ayudando a la comunidad de Grawiki🙏 ",
    fluid: false,
  },
};
