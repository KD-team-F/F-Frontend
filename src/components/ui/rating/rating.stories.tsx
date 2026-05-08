import type { Meta, StoryObj } from "@storybook/react";
import { RatingHeart } from "./rating";

const meta: Meta<typeof RatingHeart> = {
  title: "Components/RatingHeart",
  component: RatingHeart,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof RatingHeart>;

export const Default: Story = {
  args: {
    initialLiked: false,
    initialLikeCount: 0,
  },
};

export const Liked: Story = {
  args: {
    initialLiked: true,
    initialLikeCount: 10,
  },
};
