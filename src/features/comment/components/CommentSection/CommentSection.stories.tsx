import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { CommentSection } from './CommentSection'
import type { Comment } from '@/features/comment/types/comment'

const meta: Meta<typeof CommentSection> = {
  title: 'Features/CommentSection',
  component: CommentSection,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof CommentSection>

const sampleComments: Comment[] = [
  {
    id: '1',
    content:
      'たしかにチャット長くなると重くなりますよね\n引き継ぎプロンプト参考になります\n\nほんとはサービス提供元のほうで解決策だしてくれればいいのですが',
    date: '2026-03-29',
  },
  {
    id: '2',
    content: '## 補足\n\nこの手法は **コンテキストウィンドウ** の制約を回避するためのものです。\n\n```\n/コンテキスト引き継ぎ\n```\n\nで試してみてください。',
    date: '2026-04-01',
  },
]

const successSubmit = async (content: string): Promise<Comment> => {
  await new Promise((resolve) => setTimeout(resolve, 500))
  return {
    id: crypto.randomUUID(),
    content,
    date: new Date().toISOString().split('T')[0],
  }
}

const failureSubmit = async (_content: string): Promise<Comment> => {
  await new Promise((resolve) => setTimeout(resolve, 500))
  throw new Error('投稿に失敗しました')
}

export const Default: Story = {
  args: {
    initialComments: sampleComments,
    onSubmit: successSubmit,
  },
}

export const Empty: Story = {
  args: {
    initialComments: [],
    onSubmit: successSubmit,
  },
}

export const WithFailure: Story = {
  args: {
    initialComments: sampleComments,
    onSubmit: failureSubmit,
  },
}
