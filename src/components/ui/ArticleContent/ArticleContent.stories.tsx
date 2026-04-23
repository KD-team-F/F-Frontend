import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { ArticleContent } from './ArticleContent'

const meta: Meta<typeof ArticleContent> = {
  title: 'UI/ArticleContent',
  component: ArticleContent,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof ArticleContent>

const sampleMarkdown = `# 見出し1

## 見出し2

通常のテキストです。**太字**や*斜体*も使えます。

### リスト

- アイテム1
- アイテム2
- アイテム3

### コードブロック

\`\`\`typescript
const greet = (name: string) => \`Hello, \${name}!\`
\`\`\`

### リンク

[Qiita](https://qiita.com)
`

export const Default: Story = {
  args: {
    content: sampleMarkdown,
  },
}

export const ShortContent: Story = {
  args: {
    content: `# タイトル\n\n短い記事の本文です。`,
  },
}

export const Empty: Story = {
  args: {
    content: '',
  },
}
