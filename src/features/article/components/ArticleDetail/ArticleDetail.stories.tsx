import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { ArticleDetail } from './ArticleDetail'

const meta: Meta<typeof ArticleDetail> = {
  title: 'Features/Article/ArticleDetail',
  component: ArticleDetail,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta

type Story = StoryObj<typeof ArticleDetail>

const mockComments = [
  {
    id: '1',
    content: 'とても参考になりました！',
    createdAt: '2026-05-13',
    date: '2026-05-13',
    author: '田中',
  },
  {
    id: '2',
    content: '続きを楽しみにしています。',
    createdAt: '2026-05-13',
    date: '2026-05-13',
    author: '佐藤',
  },
]

export const Default: Story = {
  args: {
    title: 'Article Detail Sample',
    date: '2026-05-13',
    content: `
# 見出し

これは記事詳細画面のサンプルです。

- 編集ボタン
- 評価ボタン
- コメント欄

を表示しています。
    `,
    initialComments: mockComments,
    onSubmit: async (content: string) => {
      const timestamp = new Date().toISOString()
      return {
        id: crypto.randomUUID(),
        content,
        createdAt: timestamp,
        date: timestamp,
        author: 'ゲストユーザー',
      }
    },
  },
}