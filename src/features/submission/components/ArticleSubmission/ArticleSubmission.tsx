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
 * 通常の編集画面
 */
export const Default: Story = {
  args: {
    defaultTitle: 'サンプル記事タイトル',
    defaultContent: 'これはサンプルの本文です。\n\nマークダウンも使えます。',
    onSubmit: async (title, content) => {
      console.log('submit:', { title, content })
      await new Promise((resolve) => setTimeout(resolve, 1000))
    },
    onDelete: () => {
      console.log('delete clicked')
    },
  },
}

/**
 * 削除ボタンなしバージョン
 */
export const WithoutDelete: Story = {
  args: {
    defaultTitle: '削除不可の記事',
    defaultContent: '削除ボタンが表示されないパターンです。',
    onSubmit: async (title, content) => {
      console.log('submit:', { title, content })
      await new Promise((resolve) => setTimeout(resolve, 1000))
    },
  },
}

/**
 * 初期値なし（新規編集に近い状態）
 */
export const Empty: Story = {
  args: {
    defaultTitle: '',
    defaultContent: '',
    onSubmit: async (title, content) => {
      console.log('submit:', { title, content })
      await new Promise((resolve) => setTimeout(resolve, 1000))
    },
    onDelete: () => {
      console.log('delete clicked')
    },
  },
}