import type { Meta, StoryObj } from "@storybook/react";
import { RatingHeart } from "./rating";

const meta: Meta<typeof RatingHeart> = {
  title: "Components/RatingHeart",
  component: RatingHeart,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof RatingHeart>;

/** 初期状態：未いいね */
export const Default: Story = {
  args: {
    defaultLiked: false,
  },
};

/** 初期状態：いいね済み */
export const Liked: Story = {
  args: {
    defaultLiked: true,
  },
};
