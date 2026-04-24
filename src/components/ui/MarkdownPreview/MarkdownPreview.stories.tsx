import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { MarkdownPreview } from './MarkdownPreview'

const meta: Meta<typeof MarkdownPreview> = {
  title: 'UI/MarkdownPreview',
  component: MarkdownPreview,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
}

export default meta
type Story = StoryObj<typeof MarkdownPreview>

const sampleMarkdown = `## 発生している問題

Next.js 16 で \`use client\` を付けたコンポーネントから *Server Action* を呼ぶと、エラーが出ます。

\`\`\`ts
Error: Server Actions must be async functions.
\`\`\`

- \`async\` を付け直した
- ビルドキャッシュを削除した
`

export const Default: Story = {
  args: {
    content: sampleMarkdown,
  },
}

export const Empty: Story = {
  args: {
    content: '',
  },
}
