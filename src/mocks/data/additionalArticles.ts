import type { MockArticle } from '@/mocks/data/articles'

// 更新ボタン押下時に追加されるデータ（質問3件・制作物3件）
export const additionalArticles: MockArticle[] = [
  {
    id: 'q-8',
    item: 'question',
    title: 'Reactのエラーバウンダリの使い方',
    date: '2026-05-10',
    tags: [
      { id: 'react', label: 'React' },
      { id: 'typescript', label: 'TypeScript' },
    ],
    content: `## 困っていること

\`ErrorBoundary\` を使ってコンポーネントのエラーをキャッチしたいのですが、クラスコンポーネントで書く必要があるのでしょうか？

## 試したこと

- \`react-error-boundary\` ライブラリを試してみた
- \`useErrorBoundary\` フックの使い方を調べた

## 質問

- 関数コンポーネントで同じことを実現する方法はありますか？
- Suspense と組み合わせる場合の注意点があれば教えてください。`,
    initialComments: [],
  },
  {
    id: 'q-9',
    item: 'question',
    title: 'Vitestで非同期テストを書く方法',
    date: '2026-05-09',
    tags: [
      { id: 'vitest', label: 'Vitest' },
      { id: 'typescript', label: 'TypeScript' },
    ],
    content: `## 質問

Vitest で非同期処理をテストするとき、\`resolves\` / \`rejects\` と \`async/await\` はどう使い分けるのでしょうか？

\`\`\`ts
// パターン A
await expect(fetchUser()).resolves.toEqual({ name: 'taro' })

// パターン B
const user = await fetchUser()
expect(user).toEqual({ name: 'taro' })
\`\`\`

どちらが推奨でしょうか？`,
    initialComments: [],
  },
  {
    id: 'q-10',
    item: 'question',
    title: 'Zustandのsliceパターンについて',
    date: '2026-05-08',
    tags: [
      { id: 'zustand', label: 'Zustand' },
      { id: 'typescript', label: 'TypeScript' },
    ],
    content: `## 質問

Zustand でストアが大きくなってきたので slice パターンに分割したいのですが、TypeScript での型定義が難しくて困っています。

\`\`\`ts
const useStore = create<BearSlice & FishSlice>()((...a) => ({
  ...createBearSlice(...a),
  ...createFishSlice(...a),
}))
\`\`\`

型推論がうまく効く書き方を教えてください。`,
    initialComments: [],
  },
  {
    id: 'w-6',
    item: 'work',
    title: 'AIチャットアプリを作りました',
    date: '2026-05-10',
    tags: [
      { id: 'openai', label: 'OpenAI' },
      { id: 'nextjs', label: 'Next.js' },
      { id: 'typescript', label: 'TypeScript' },
    ],
    content: `## 概要

OpenAI API と Next.js App Router で作ったストリーミング対応のチャットアプリです。

## 使った技術

- Next.js 15 (App Router)
- OpenAI API (gpt-4o)
- Vercel AI SDK
- Tailwind CSS v4

## こだわりポイント

- **ストリーミング対応**: \`streamText\` でリアルタイム表示
- **会話履歴の保持**: ローカルストレージで永続化
- **マークダウン表示**: コードブロックのシンタックスハイライト付き`,
    initialComments: [],
  },
  {
    id: 'w-7',
    item: 'work',
    title: 'ブラウザ拡張機能を作りました',
    date: '2026-05-07',
    tags: [
      { id: 'chrome-extension', label: 'Chrome Extension' },
      { id: 'typescript', label: 'TypeScript' },
      { id: 'react', label: 'React' },
    ],
    content: `## 概要

GitHub の PR レビューを効率化するブラウザ拡張機能です。

## 機能

- PR のファイル変更をツリー表示
- レビュー済みファイルをチェック管理
- コメントの未読バッジ表示

## 技術スタック

- React + TypeScript (Popup UI)
- Chrome Extension Manifest V3
- Content Scripts でページに注入`,
    initialComments: [],
  },
  {
    id: 'w-8',
    item: 'work',
    title: 'デザインシステムを構築しました',
    date: '2026-05-05',
    tags: [
      { id: 'storybook', label: 'Storybook' },
      { id: 'react', label: 'React' },
      { id: 'tailwind', label: 'Tailwind CSS' },
    ],
    content: `## 概要

社内プロジェクト向けにコンポーネントライブラリ + デザインシステムを構築しました。

## 構成

- **コンポーネント**: Button, Input, Modal など 20+ コンポーネント
- **ドキュメント**: Storybook でインタラクティブなカタログ
- **テーマ**: Tailwind CSS カスタムテーマで一元管理

## 工夫した点

- アクセシビリティ (ARIA 属性、キーボード操作) を全コンポーネントに対応
- Chromatic で Visual Regression Test を自動化`,
    initialComments: [],
  },
]
