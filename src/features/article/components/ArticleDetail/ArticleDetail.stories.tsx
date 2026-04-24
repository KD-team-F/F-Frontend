import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { ArticleDetail } from './ArticleDetail'

const meta: Meta<typeof ArticleDetail> = {
  title: 'Features/ArticleDetail',
  component: ArticleDetail,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof ArticleDetail>

const sampleMarkdown = `## はじめに

この記事では TypeScript の型システムについて解説します。**型安全**なコードを書くことで、バグを未然に防ぐことができます。

## 基本的な型

\`\`\`typescript
const name: string = 'TypeScript'
const version: number = 5
const isAwesome: boolean = true
\`\`\`

## まとめ

- 型を使うことでエディタの補完が強力になる
- コンパイル時にバグを検出できる
- チーム開発での可読性が上がる
`

export const Default: Story = {
  args: {
    title: '記事タイトル',
    date: '2026-04-23',
    content: sampleMarkdown,
  },
}

export const LongTitle: Story = {
  args: {
    title: 'これは非常に長いタイトルのサンプルです。記事タイトルが長くなった場合の表示を確認します。',
    date: '2026-04-23',
    content: sampleMarkdown,
  },
}

export const ShortContent: Story = {
  args: {
    title: '短い記事',
    date: '2026-01-01',
    content: '## 概要\n\n短い内容の記事です。',
  },
}
