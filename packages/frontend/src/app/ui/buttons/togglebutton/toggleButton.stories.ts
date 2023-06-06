import ToggleButton from "./toggleButton";
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction

export default {
  title: "Buttons/ToggleButton",
  component: ToggleButton,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
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

export const Arrow = {
  args: {
    iconOpen: { name: "ArrowIcon", props: { direction: "up" } },
    iconClose: { name: "ArrowIcon", props: { direction: "down" } },
    isOpen: false,
  },
};

export const Menu = {
  args: {
    iconClose: { name: "MenuIcon" },
    isOpen: false,
  },
};
