import type { Meta, StoryObj } from "@storybook/react";
import { RatingHeart } from "./rating";

const meta: Meta<typeof RatingHeart> = {
  title: "Components/RatingHeart",
  component: RatingHeart,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof RatingHeart>;

const render: Story["render"] = (args) => (
  <RatingHeart
    key={`${args.defaultLiked}-${args.defaultCount}-${args.isReadOnly}`}
    {...args}
  />
);

export const Default: Story = {
  render,
  args: {
    defaultLiked: false,
    defaultCount: 0,
  },
};

export const Liked: Story = {
  render,
  args: {
    defaultLiked: true,
    defaultCount: 10,
  },
};

export const Count0: Story = {
  render,
  args: {
    defaultLiked: false,
    defaultCount: 0,
  },
};

export const Count5: Story = {
  render,
  args: {
    defaultLiked: false,
    defaultCount: 5,
  },
};

export const Count10: Story = {
  render,
  args: {
    defaultLiked: false,
    defaultCount: 10,
  },
};
