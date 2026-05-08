import type { Meta, StoryObj } from "@storybook/react";
import { Item } from "./Item";

const meta: Meta<typeof Item> = {
  title: "Components/Item",
  component: Item,
  tags: ["autodocs"],
  argTypes: {
    title: { control: "text" },
    content: { control: "text" },
    date: { control: "text" },
  },
};

export default meta;

type Story = StoryObj<typeof Item>;

export const Default: Story = {
  args: {
    title: "質問題名(仮)",
    content: `質問内容
ooooooooooooooo
ooooooooooooooo`,
    date: "20xx/xx/xx",
  },
};

export const WithTags: Story = {
  args: {
    title: "ReactのuseEffectはいつ使うべきですか？",
    content: "useEffectの適切な使いどころが分からず困っています。",
    date: "2026-04-24",
    tags: [
      { id: "react", label: "React" },
      { id: "typescript", label: "TypeScript" },
    ],
  },
};

export const WithActiveTags: Story = {
  args: {
    title: "ReactのuseEffectはいつ使うべきですか？",
    content: "useEffectの適切な使いどころが分からず困っています。",
    date: "2026-04-24",
    tags: [
      { id: "react", label: "React" },
      { id: "typescript", label: "TypeScript" },
    ],
    selectedTagIds: ["react"],
  },
};

export const LongContent: Story = {
  args: {
    title: "長文テスト",
    content: `これは長い質問内容です。
改行もちゃんと表示されるかテストしています。
Tailwindのwhitespace-pre-wrapが効いているか確認。`,
    date: "2026/04/23",
  },
};
  // 評価数0・自分も未評価
export const NoRating: Story = {
  args: {
    title: "質問題名(仮)",
    content: "質問内容\nooooooooooooooo",
    date: "20xx/xx/xx",
    likeCount: 0,
    isLikedByCurrentUser: false,
  },
};

// 評価数1・自分のみ評価済み
export const LikedByUserOnly: Story = {
  args: {
    title: "質問題名(仮)",
    content: "質問内容\nooooooooooooooo",
    date: "20xx/xx/xx",
    likeCount: 1,
    isLikedByCurrentUser: true,
  },
};

// 評価数5・他ユーザーが評価済み・自分は未評価
export const LikedByOthers: Story = {
  args: {
    title: "質問題名(仮)",
    content: "質問内容\nooooooooooooooo",
    date: "20xx/xx/xx",
    likeCount: 5,
    isLikedByCurrentUser: false,
  },
};

// 評価数10・他ユーザーも自分も評価済み
export const LikedByAll: Story = {
  args: {
    title: "質問題名(仮)",
    content: "質問内容\nooooooooooooooo",
    date: "20xx/xx/xx",
    likeCount: 10,
    isLikedByCurrentUser: true,
  },
};