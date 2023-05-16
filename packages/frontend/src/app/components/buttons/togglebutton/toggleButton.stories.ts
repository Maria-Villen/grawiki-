import ToggleButton from "./toggleButton";
import { MenuIcon, ArrowDown, ArrowUp } from "../../../assets";
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction

export default {
  title: "Buttons/ToggleButton",
  component: ToggleButton,
  tags: ["autodocs"],
  parameters: {
    backgrounds: { default: "light" },
  },
  argTypes: {
    className: {
      table: { disable: true },
    },
    onClick: {
      control: false,
    },
  },
};

export const Menu = {
  args: {
    iconClose: MenuIcon,
    isOpen: false,
  },
};

export const Arrow = {
  args: {
    iconOpen: ArrowUp,
    iconClose: ArrowDown,
    isOpen: false,
  },
};
