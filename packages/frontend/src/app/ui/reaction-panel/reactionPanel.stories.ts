import ReactionPanel from "./ReactionPanel";
import { withRouter } from "storybook-addon-react-router-v6";
import type { Meta, StoryObj } from "@storybook/react";
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction

const countedReactions = [
  {
    icon: { name: "ThumbsUpIcon" },
    iconActive: { name: "ThumbsUp3DIcon" },
    quantity: 0,
  },
  {
    icon: { name: "ThumbsDownIcon" },
    iconActive: { name: "ThumbsDown3DIcon" },
    quantity: 100,
  },
];

export const UserReacted = ["ThumbsDownIcon"];

const meta = {
  title: "Components/ReactionPanel",
  component: ReactionPanel,
  tags: ["autodocs"],
  args: {
    data: countedReactions,
    userReacted: UserReacted,
  },
  parameters: {
    layout: "centered",
  },
  decorators: [withRouter],
  argTypes: {},
} satisfies Meta<typeof ReactionPanel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
