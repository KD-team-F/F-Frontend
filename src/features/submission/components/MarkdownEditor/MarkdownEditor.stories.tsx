import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { useState } from 'react'
import { MarkdownEditor } from './MarkdownEditor'

const meta: Meta<typeof MarkdownEditor> = {
  title: 'Features/Submission/MarkdownEditor',
  component: MarkdownEditor,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
}

export default meta
type Story = StoryObj<typeof MarkdownEditor>

function ControlledWrapper({
  initialValue = '',
  label = '質問の内容',
  required = true,
  placeholder = 'エラーメッセージ、期待する動作、試したことなどを詳しく記載してください（マークダウン形式が使えます）...',
}: {
  initialValue?: string
  label?: string
  required?: boolean
  placeholder?: string
}) {
  const [value, setValue] = useState(initialValue)
  return (
    <div className="max-w-3xl">
      <MarkdownEditor
        label={label}
        required={required}
        placeholder={placeholder}
        value={value}
        onChange={setValue}
      />
    </div>
  )
}

export const Default: Story = {
  render: () => <ControlledWrapper />,
}

export const WithInitialContent: Story = {
  render: () => (
    <ControlledWrapper
      initialValue={`## 発生している問題

Next.js 16 で \`use client\` を付けたコンポーネントから *Server Action* を呼ぶと、以下のエラーが出ます。

\`\`\`ts
Error: Server Actions must be async functions.
\`\`\`

## 期待する動作

- Server Action が正常に呼び出せる
- フォームが送信できる

## 試したこと

1. \`async\` を付け直した
2. ビルドキャッシュを削除した
3. [公式ドキュメント](https://nextjs.org/docs) を確認した
`}
    />
  ),
}

export const NotRequired: Story = {
  render: () => (
    <ControlledWrapper
      label="投稿"
      required={false}
      placeholder="投稿があれば入力してください..."
    />
  ),
}

export const ShortContent: Story = {
  render: () => (
    <ControlledWrapper
      initialValue={`\`useEffect\` の依存配列に関数を入れると、毎レンダリングで再実行されてしまいます。どう回避すればいいですか？`}
    />
  ),
}

export const CodeHeavy: Story = {
  render: () => (
    <ControlledWrapper
      label="実装サンプル"
      initialValue={`## 現在の実装

\`\`\`tsx
'use client'

import { useState } from 'react'

export function Counter() {
  const [count, setCount] = useState(0)

  return (
    <button onClick={() => setCount((c) => c + 1)}>
      count: {count}
    </button>
  )
}
\`\`\`

## エラーログ

\`\`\`bash
$ npm run build

Failed to compile.
./src/app/page.tsx
Type error: Property 'count' does not exist on type 'Props'.
\`\`\`

インラインコード \`setCount\` も表示確認できます。
`}
    />
  ),
}

export const RichFormatting: Story = {
  render: () => (
    <ControlledWrapper
      label="記事本文"
      initialValue={`# DevHub へようこそ

**DevHub** は開発者のための *Q&A* プラットフォームです。

---

## できること

- 質問の投稿とマークダウン記法での整形
- タグを使った絞り込み
- ベストアンサーの選定

## 対応する記法一覧

| 記法        | 例              |
| ----------- | --------------- |
| 見出し      | \`# H1\` ~ \`### H3\` |
| リスト      | \`- item\`        |
| 引用        | \`> quote\`       |
| リンク      | \`[text](url)\`   |

> マークダウンに慣れていない方は [公式ガイド](https://www.markdownguide.org/) を参考にしてください。

### チェックリスト

1. タイトルを決める
2. 本文を書く
3. タグを付ける
4. 投稿する

---

お困りの際は [ヘルプページ](https://example.com/help) をご覧ください。
`}
    />
  ),
}

export const LongContent: Story = {
  render: () => (
    <ControlledWrapper
      label="調査ログ"
      initialValue={Array.from({ length: 12 })
        .map(
          (_, i) => `## セクション ${i + 1}

これはスクロール動作を確認するためのダミー本文です。段落を十分な量で繰り返し、プレビュー領域が想定どおりに伸びるかを検証します。

- 項目 A-${i + 1}
- 項目 B-${i + 1}
- 項目 C-${i + 1}
`,
        )
        .join('\n')}
    />
  ),
}
