import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { ArticleSubmission } from './ArticleSubmission'
import type { ArticleCategory } from '@/types/article'
import type { Tag } from '@/types/tag'

const meta: Meta<typeof ArticleSubmission> = {
  title: 'Features/Submission/ArticleSubmission',
  component: ArticleSubmission,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj<typeof ArticleSubmission>

const successSubmit = async (
  title: string,
  content: string,
  item: ArticleCategory,
  tags: Tag[],
): Promise<void> => {
  await new Promise((resolve) => setTimeout(resolve, 500))
  console.log('カテゴリ:', item)
  console.log('投稿タイトル:', title)
  console.log('投稿内容:', content)
  console.log('タグ:', tags)
}

const failureSubmit = async (): Promise<void> => {
  await new Promise((resolve) => setTimeout(resolve, 500))
  throw new Error('投稿に失敗しました')
}

const loadingSubmit = async (): Promise<void> => {
  return new Promise(() => {})
}

/** 初期状態（未入力） */
export const Default: Story = {
  args: {
    onSubmit: successSubmit,
  },
}

/** 制作物カテゴリで初期表示 */
export const WorkCategory: Story = {
  args: {
    defaultItem: 'work',
    onSubmit: successSubmit,
  },
}

/** 投稿ボタンを押すと永続的にローディング状態になる（本文を入力して投稿を押して確認） */
export const Loading: Story = {
  args: {
    onSubmit: loadingSubmit,
  },
}

/** 投稿ボタンを押すとエラーがスローされる（本文を入力して投稿を押して確認） */
export const WithFailure: Story = {
  args: {
    onSubmit: failureSubmit,
  },
}

/** onSubmit を渡さないケース（mock API へ POST する） */
export const WithoutHandler: Story = {
  args: {},
}
