import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { ArticleList } from './ArticleList'

const meta: Meta<typeof ArticleList> = {
  title: 'Features/ArticleList',
  component: ArticleList,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
  },
}

export default meta
type Story = StoryObj<typeof ArticleList>

const sampleItems = [
  {
    title: 'ReactのuseEffectはいつ使うべきですか？',
    content: 'useEffectの適切な使いどころが分からず困っています。どのような場合に使うべきか教えてください。',
    date: '2026-04-24',
  },
  {
    title: 'TypeScriptのジェネリクスについて',
    content: 'ジェネリクスの概念は理解しているつもりですが、実際のコードでどう活用すればいいか分かりません。',
    date: '2026-04-23',
  },
  {
    title: 'Next.jsのApp RouterとPages Routerの違いは？',
    content: '既存プロジェクトをApp Routerに移行すべきか悩んでいます。メリット・デメリットを教えてください。',
    date: '2026-04-22',
  },
]

// 質問一覧
export const Question: Story = {
  args: {
    title: '質問',
    items: sampleItems,
  },
}

// 制作物一覧
export const Works: Story = {
  args: {
    title: '制作物',
    items: [
      {
        title: 'ポートフォリオサイト',
        content: 'Next.js + TailwindCSSで制作した個人ポートフォリオです。Storybookも導入しています。',
        date: '2026-04-24',
      },
      {
        title: 'タスク管理アプリ',
        content: 'ReactとFirebaseを使ったリアルタイムタスク管理アプリです。認証機能も実装しています。',
        date: '2026-04-20',
      },
      {
        title: 'ECサイトLP',
        content: 'クライアント案件で制作したランディングページです。レスポンシブ対応済み。',
        date: '2026-04-15',
      },
    ],
  },
}

// アイテム1件
export const SingleItem: Story = {
  args: {
    title: '質問',
    items: [sampleItems[0]],
  },
}

// アイテム多数
export const ManyItems: Story = {
  args: {
    title: '質問',
    items: [
      ...sampleItems,
      {
        title: 'CSSのflexboxとgridはどう使い分けるべきですか？',
        content: '一次元か二次元かで使い分けると聞きましたが、具体的な判断基準が知りたいです。',
        date: '2026-04-21',
      },
      {
        title: 'Gitのrebaseとmergeはどちらを使うべきですか？',
        content: 'チーム開発でどちらを採用すべきか議論になっています。それぞれのメリットを教えてください。',
        date: '2026-04-20',
      },
      {
        title: 'Dockerの基本的な使い方を教えてください',
        content: '開発環境をDocker化したいと思っているのですが、何から始めればよいか分かりません。',
        date: '2026-04-19',
      },
    ],
  },
}

// アイテムなし（空状態）
export const Empty: Story = {
  args: {
    title: '質問',
    items: [],
  },
}

// タイトルが長いアイテム
export const LongTitle: Story = {
  args: {
    title: '質問',
    items: [
      {
        title: 'これは非常に長いタイトルのテストです。タイトルが折り返された場合にレイアウトが崩れないか確認するためのストーリーです。',
        content: '通常の内容です。',
        date: '2026-04-24',
      },
    ],
  },
}

// 11件以上（...表示）
export const OverLimit: Story = {
  args: {
    title: '質問',
    items: [
      ...sampleItems,
      {
        title: 'CSSのflexboxとgridはどう使い分けるべきですか？',
        content: '一次元か二次元かで使い分けると聞きましたが、具体的な判断基準が知りたいです。',
        date: '2026-04-21',
      },
      {
        title: 'Gitのrebaseとmergeはどちらを使うべきですか？',
        content: 'チーム開発でどちらを採用すべきか議論になっています。それぞれのメリットを教えてください。',
        date: '2026-04-20',
      },
      {
        title: 'Dockerの基本的な使い方を教えてください',
        content: '開発環境をDocker化したいと思っているのですが、何から始めればよいか分かりません。',
        date: '2026-04-19',
      },
      {
        title: 'REST APIとGraphQLはどちらを選ぶべきですか？',
        content: '新規プロジェクトでAPIの設計方針を決めています。それぞれのユースケースを教えてください。',
        date: '2026-04-18',
      },
      {
        title: 'JestとVitestどちらを使うべきか',
        content: 'テストフレームワークの選定で悩んでいます。Vite環境ではVitestが良いと聞きましたが実際どうでしょうか。',
        date: '2026-04-17',
      },
      {
        title: 'Zustandの状態管理はどこに書くべきですか？',
        content: 'グローバルな状態とローカルな状態の使い分けが分かりません。設計指針を教えてください。',
        date: '2026-04-16',
      },
      {
        title: 'SSRとSSGはどう使い分けるべきですか？',
        content: 'Next.jsを使っていますが、ページごとにどちらを選ぶか判断基準が知りたいです。',
        date: '2026-04-15',
      },
      {
        title: 'この件もAPIで取得されるか確認用（11件目）',
        content: '10件を超えたとき...が表示されるかテストするためのアイテムです。',
        date: '2026-04-14',
      },
    ],
  },
}

// 内容が長いアイテム
export const LongContent: Story = {
  args: {
    title: '質問',
    items: [
      {
        title: '長文コンテンツのテスト',
        content: `これは非常に長い内容のテストです。
複数行にわたる内容が正しく表示されるか確認します。

1. 箇条書きの項目1
2. 箇条書きの項目2
3. 箇条書きの項目3

改行やスペースが意図通りに表示されているか、レイアウトが崩れていないかを確認してください。`,
        date: '2026-04-24',
      },
    ],
  },
}
