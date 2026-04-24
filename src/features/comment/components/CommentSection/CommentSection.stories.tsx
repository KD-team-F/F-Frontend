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

// --- Mock data ---

const plainComment: Comment = {
  id: '1',
  content:
    'たしかにチャット長くなると重くなりますよね\n引き継ぎプロンプト参考になります\n\nほんとはサービス提供元のほうで解決策だしてくれればいいのですが',
  date: '2026-03-29',
}

const markdownComment: Comment = {
  id: '2',
  content:
    '## 補足\n\nこの手法は **コンテキストウィンドウ** の制約を回避するためのものです。\n\n```\n/コンテキスト引き継ぎ\n```\n\nで試してみてください。',
  date: '2026-04-01',
}

const longComment: Comment = {
  id: '3',
  content:
    'これは非常に長いコメントです。実際の運用では、詳細な説明や背景情報、再現手順などを含む長文コメントが投稿されることがあります。' +
    'コンテキストウィンドウが長くなるにつれて、モデルの応答速度が低下したり、前半の内容を参照できなくなるケースがあります。' +
    'そのため、引き継ぎプロンプトを活用することで、重要な情報を要約して新しいセッションに持ち越す手法が有効です。' +
    'この手法を使うことで、長期にわたる作業でも一貫した品質を保つことができます。ぜひ試してみてください。',
  date: '2026-04-10',
}

const richMarkdownComment: Comment = {
  id: '4',
  content: `# 詳細な技術解説

## 背景

このアプローチは以下の理由で有効です：

- **パフォーマンス向上**: レスポンス速度が改善される
- **コスト削減**: APIコールを最小化できる
- **品質維持**: コンテキストの一貫性が保たれる

## コード例

\`\`\`typescript
function continueContext(previousSummary: string): string {
  return \`引き継ぎ: \${previousSummary}\`
}
\`\`\`

## まとめ

| 項目 | 説明 |
|------|------|
| メリット | コンテキスト保持 |
| デメリット | 手動操作が必要 |

> 重要: この手法はモデルの種類によって効果が異なります。`,
  date: '2026-04-15',
}

const manyComments: Comment[] = [
  { id: '1', content: 'とても参考になりました。ありがとうございます！', date: '2026-01-10' },
  { id: '2', content: '同じ問題で悩んでいました。助かりました！', date: '2026-01-15' },
  { id: '3', content: '実装してみたら上手くいきました。', date: '2026-01-20' },
  { id: '4', content: 'もう少し詳しく教えていただけますか？', date: '2026-02-01' },
  { id: '5', content: '## フォローアップ\n\n追加で試したところ、`temperature` を下げると安定しました。', date: '2026-02-10' },
  { id: '6', content: 'バグ報告です。特定の環境で動かないケースがあります。', date: '2026-02-20' },
  { id: '7', content: '**修正されました。** ありがとうございます。', date: '2026-03-01' },
  { id: '8', content: '翻訳版を作りました。参考にしてください。', date: '2026-03-15' },
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

/** コメントが0件の初期状態 */
export const Empty: Story = {
  args: {
    initialComments: [],
    onSubmit: successSubmit,
  },
}

/** コメントが1件（プレーンテキスト） */
export const SingleComment: Story = {
  args: {
    initialComments: [plainComment],
    onSubmit: successSubmit,
  },
}

/** コメントが複数件（プレーンテキスト＋Markdown混在） */
export const Default: Story = {
  args: {
    initialComments: [plainComment, markdownComment],
    onSubmit: successSubmit,
  },
}

/** コメントが大量にある場合（8件） */
export const ManyComments: Story = {
  args: {
    initialComments: manyComments,
    onSubmit: successSubmit,
  },
}

/** 非常に長いプレーンテキストのコメント */
export const LongComment: Story = {
  args: {
    initialComments: [longComment],
    onSubmit: successSubmit,
  },
}

/** 見出し・コードブロック・表・引用を含むリッチなMarkdown */
export const RichMarkdown: Story = {
  args: {
    initialComments: [richMarkdownComment],
    onSubmit: successSubmit,
  },
}

/** 投稿ボタンを押すと永続的にローディング状態になる（Textareaに入力して投稿を押して確認） */
export const Loading: Story = {
  args: {
    initialComments: [plainComment],
    onSubmit: loadingSubmit,
  },
}

/** 投稿ボタンを押すとエラーメッセージが表示される（Textareaに入力して投稿を押して確認） */
export const WithFailure: Story = {
  args: {
    initialComments: [plainComment],
    onSubmit: failureSubmit,
  },
}
