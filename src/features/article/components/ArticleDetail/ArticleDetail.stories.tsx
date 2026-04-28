import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { ArticleDetail, type ArticleTag } from './ArticleDetail'
import type { Comment } from '@/features/comment/types/comment'

const meta: Meta<typeof ArticleDetail> = {
  title: 'Features/ArticleDetail',
  component: ArticleDetail,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof ArticleDetail>

// --- Mock article content ---

const standardMarkdown = `## はじめに

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

const richMarkdown = `# 完全ガイド：Next.js App Router

## 概要

App Router は Next.js 13 から導入された新しいルーティング方式です。

## ファイル構成

| ファイル | 役割 |
|--------|------|
| \`page.tsx\` | ページコンポーネント |
| \`layout.tsx\` | レイアウト |
| \`loading.tsx\` | ローディングUI |
| \`error.tsx\` | エラーUI |

## Server Components

\`\`\`tsx
// デフォルトでサーバーコンポーネント
export default async function Page() {
  const data = await fetch('https://api.example.com/data')
  return <div>{data}</div>
}
\`\`\`

## クライアントコンポーネント

\`\`\`tsx
'use client'

import { useState } from 'react'

export function Counter() {
  const [count, setCount] = useState(0)
  return <button onClick={() => setCount(c => c + 1)}>{count}</button>
}
\`\`\`

> **注意**: \`'use client'\` はコンポーネントツリーの境界を定義します。

## まとめ

1. デフォルトはサーバーコンポーネント
2. インタラクションが必要な場合のみ \`'use client'\` を追加
3. データフェッチはサーバーサイドで行う
`

// --- Mock tag data ---

const sampleTags: ArticleTag[] = [
  { id: '485c14aa-d1f5-0124-e12a-8dbb56eb5703', label: 'TypeScript' },
  { id: 'df8479fb-ef2b-c227-3511-229bd0dd8cb9', label: 'Next.js' },
  { id: 'a2d0798c-5e2e-d4c0-37a7-cbf14cb8f8e0', label: 'React' },
]

const manyTags: ArticleTag[] = [
  { id: 'tag-1', label: 'TypeScript' },
  { id: 'tag-2', label: 'Next.js' },
  { id: 'tag-3', label: 'React' },
  { id: 'tag-4', label: 'App Router' },
  { id: 'tag-5', label: 'Server Components' },
  { id: 'tag-6', label: 'Tailwind CSS' },
  { id: 'tag-7', label: 'Storybook' },
]

// --- Mock comment data ---

const plainComment: Comment = {
  id: '1',
  content: 'たしかにチャット長くなると重くなりますよね\n引き継ぎプロンプト参考になります',
  date: '2026-03-29',
}

const markdownComment: Comment = {
  id: '2',
  content: '## 補足\n\nこの手法は **コンテキストウィンドウ** の制約を回避するためのものです。\n\n```\n/コンテキスト引き継ぎ\n```',
  date: '2026-04-01',
}

const manyComments: Comment[] = [
  { id: '1', content: 'とても参考になりました！', date: '2026-01-10' },
  { id: '2', content: '同じ問題で悩んでいました。助かりました！', date: '2026-01-15' },
  { id: '3', content: '実装してみたら上手くいきました。', date: '2026-01-20' },
  { id: '4', content: 'もう少し詳しく教えていただけますか？', date: '2026-02-01' },
  { id: '5', content: '**修正されました。** ありがとうございます。', date: '2026-02-10' },
]

// --- Mock API functions ---

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

const loadingSubmit = async (_content: string): Promise<Comment> => {
  return new Promise(() => {})
}

// --- Stories ---

/** 標準的な記事・コメントなし */
export const Default: Story = {
  args: {
    title: '記事タイトル',
    date: '2026-04-23',
    content: standardMarkdown,
    initialComments: [],
    onSubmit: successSubmit,
  },
}

/** 長いタイトルの記事 */
export const LongTitle: Story = {
  args: {
    title: 'これは非常に長いタイトルのサンプルです。記事タイトルが長くなった場合の表示を確認します。',
    date: '2026-04-23',
    content: standardMarkdown,
    initialComments: [],
    onSubmit: successSubmit,
  },
}

/** 短い本文の記事 */
export const ShortContent: Story = {
  args: {
    title: '短い記事',
    date: '2026-01-01',
    content: '## 概要\n\n短い内容の記事です。',
    initialComments: [],
    onSubmit: successSubmit,
  },
}

/** 見出し・表・コードブロック・引用を含むリッチなMarkdown記事 */
export const RichMarkdown: Story = {
  args: {
    title: '完全ガイド：Next.js App Router',
    date: '2026-04-01',
    content: richMarkdown,
    initialComments: [],
    onSubmit: successSubmit,
  },
}

/** 記事にコメントが1件ある状態 */
export const WithSingleComment: Story = {
  args: {
    title: '記事タイトル',
    date: '2026-04-23',
    content: standardMarkdown,
    initialComments: [plainComment],
    onSubmit: successSubmit,
  },
}

/** 記事にコメントが複数件ある状態（プレーン＋Markdown混在） */
export const WithMultipleComments: Story = {
  args: {
    title: '記事タイトル',
    date: '2026-04-23',
    content: standardMarkdown,
    initialComments: [plainComment, markdownComment],
    onSubmit: successSubmit,
  },
}

/** 記事にコメントが大量にある状態 */
export const WithManyComments: Story = {
  args: {
    title: '記事タイトル',
    date: '2026-04-23',
    content: standardMarkdown,
    initialComments: manyComments,
    onSubmit: successSubmit,
  },
}

/** 投稿ボタンを押すと永続的にローディング状態になる（Textareaに入力して投稿を押して確認） */
export const CommentLoading: Story = {
  args: {
    title: '記事タイトル',
    date: '2026-04-23',
    content: standardMarkdown,
    initialComments: [plainComment],
    onSubmit: loadingSubmit,
  },
}

/** 投稿ボタンを押すとエラーメッセージが表示される（Textareaに入力して投稿を押して確認） */
export const CommentFailure: Story = {
  args: {
    title: '記事タイトル',
    date: '2026-04-23',
    content: standardMarkdown,
    initialComments: [plainComment],
    onSubmit: failureSubmit,
  },
}

/** タグが付いている記事 */
export const WithTags: Story = {
  args: {
    title: '記事タイトル',
    date: '2026-04-23',
    content: standardMarkdown,
    tags: sampleTags,
    initialComments: [],
    onSubmit: successSubmit,
  },
}

/** タグが1つだけ付いている記事 */
export const WithSingleTag: Story = {
  args: {
    title: '記事タイトル',
    date: '2026-04-23',
    content: standardMarkdown,
    tags: [{ id: 'tag-only', label: 'TypeScript' }],
    initialComments: [],
    onSubmit: successSubmit,
  },
}

/** タグが多数付いている記事（折り返し確認） */
export const WithManyTags: Story = {
  args: {
    title: '記事タイトル',
    date: '2026-04-23',
    content: standardMarkdown,
    tags: manyTags,
    initialComments: [],
    onSubmit: successSubmit,
  },
}

/** タグ付き＋コメントありのフル表示 */
export const WithTagsAndComments: Story = {
  args: {
    title: '完全ガイド：Next.js App Router',
    date: '2026-04-01',
    content: richMarkdown,
    tags: sampleTags,
    initialComments: [plainComment, markdownComment],
    onSubmit: successSubmit,
  },
}
