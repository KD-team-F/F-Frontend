import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { ArticleEdit } from './ArticleEdit'

const meta: Meta<typeof ArticleEdit> = {
  title: 'Features/Article/ArticleEdit',
  component: ArticleEdit,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta

type Story = StoryObj<typeof ArticleEdit>

/**
 * 標準の編集画面（削除あり）
 */
export const Default: Story = {
  args: {
    defaultTitle: '記事タイトルのサンプル',
    defaultContent: 'これはサンプル本文です。\n\nMarkdownも使えます。',
    onSubmit: async (title, content) => {
      console.log('submit:', { title, content })
      await new Promise((res) => setTimeout(res, 1000))
    },
    onDelete: () => {
      console.log('delete clicked')
    },
  },
}

/**
 * 削除ボタンなし
 */
export const WithoutDelete: Story = {
  args: {
    defaultTitle: '削除不可の記事',
    defaultContent: '削除ボタンが表示されないパターンです。',
    onSubmit: async (title, content) => {
      console.log('submit:', { title, content })
      await new Promise((res) => setTimeout(res, 1000))
    },
  },
}

/**
 * 新規作成に近い空状態
 */
export const Empty: Story = {
  args: {
    defaultTitle: '',
    defaultContent: '',
    onSubmit: async (title, content) => {
      console.log('submit:', { title, content })
      await new Promise((res) => setTimeout(res, 1000))
    },
    onDelete: () => {
      console.log('delete clicked')
    },
  },
}

/**
 * ローディング状態（送信中確認用）
 */
export const LoadingLike: Story = {
  args: {
    defaultTitle: 'ローディングテスト',
    defaultContent: '送信中の挙動を確認するストーリーです。',
    onSubmit: async () => {
      console.log('submit start')
      await new Promise((res) => setTimeout(res, 3000))
      console.log('submit end')
    },
    onDelete: () => {
      console.log('delete clicked')
    },
  },
}