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

const mockSubmit = async (content: string) => {
  return {
    id: crypto.randomUUID(),
    content,
    date: new Date().toISOString(),
    author: {
      id: 'user-1',
      name: 'テストユーザー',
    },
  }
}

export const Default: Story = {
  args: {
    title: 'ReactとNext.jsで記事詳細ページを作成する',
    date: '2026-05-14',
    content: `
# 見出しサンプル

これは記事本文のサンプルです。

- Tailwind CSS
- Storybook
- TypeScript

などを利用しています。
`,
    tags: [
      {
        id: '1',
        label: 'React',
      },
      {
        id: '2',
        label: 'Next.js',
      },
      {
        id: '3',
        label: 'TypeScript',
      },
    ],
    initialComments: [
      {
        id: 'comment-1',
        content: 'とても参考になりました！',
        date: '2026-05-14',
      },
      {
        id: 'comment-2',
        content: '編集ボタンのデザインが良いですね。',
        date: '2026-05-14',
      },
    ],
    onSubmit: mockSubmit,
  },
}
