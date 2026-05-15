import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { ArticleList } from './ArticleList'

const meta: Meta<typeof ArticleList> = {
  title: 'Features/ArticleList',
  component: ArticleList,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof ArticleList>

const render: Story['render'] = (args) => (
  <ArticleList key={JSON.stringify(args)} {...args} />
)

const questionItems = [
  {
    title: 'ReactのuseEffectはいつ使うべきですか？',
    content: 'useEffectの適切な使いどころが分からず困っています。どのような場合に使うべきか教えてください。',
    date: '2026-04-24',
    tags: [
      { id: 'react', label: 'React' },
      { id: 'typescript', label: 'TypeScript' },
    ],
    likeCount: 5,
    isLikedByCurrentUser: true,
  },
  {
    title: 'TypeScriptのジェネリクスについて',
    content: 'ジェネリクスの概念は理解しているつもりですが、実際のコードでどう活用すればいいか分かりません。',
    date: '2026-04-23',
    tags: [
      { id: 'typescript', label: 'TypeScript' },
    ],
    likeCount: 3,
    isLikedByCurrentUser: false,
  },
  {
    title: 'Next.jsのApp RouterとPages Routerの違いは？',
    content: '既存プロジェクトをApp Routerに移行すべきか悩んでいます。メリット・デメリットを教えてください。',
    date: '2026-04-22',
    tags: [
      { id: 'nextjs', label: 'Next.js' },
    ],
    likeCount: 0,
    isLikedByCurrentUser: false,
  },
]

const workItems = [
  {
    title: 'ポートフォリオサイト',
    content: 'Next.js + TailwindCSSで制作した個人ポートフォリオです。Storybookも導入しています。',
    date: '2026-04-24',
    tags: [
      { id: 'nextjs', label: 'Next.js' },
      { id: 'tailwind', label: 'Tailwind' },
    ],
    likeCount: 10,
    isLikedByCurrentUser: true,
  },
  {
    title: 'タスク管理アプリ',
    content: 'ReactとFirebaseを使ったリアルタイムタスク管理アプリです。認証機能も実装しています。',
    date: '2026-04-20',
    tags: [
      { id: 'react', label: 'React' },
    ],
    likeCount: 2,
    isLikedByCurrentUser: false,
  },
  {
    title: 'ECサイトLP',
    content: 'クライアント案件で制作したランディングページです。レスポンシブ対応済み。',
    date: '2026-04-15',
    likeCount: 7,
    isLikedByCurrentUser: false,
  },
]

export const Default: Story = {
  render,
  args: {
    questionItems,
    workItems,
  },
}

export const OnlyQuestions: Story = {
  render,
  args: {
    questionItems,
    workItems: [],
  },
}

export const OnlyWorks: Story = {
  render,
  args: {
    questionItems: [],
    workItems,
  },
}

export const Empty: Story = {
  render,
  args: {
    questionItems: [],
    workItems: [],
  },
}

export const OverLimit: Story = {
  render,
  args: {
    questionItems: [
      ...questionItems,
      {
        title: 'CSSのflexboxとgridはどう使い分けるべきですか？',
        content: '一次元か二次元かで使い分けると聞きましたが、具体的な判断基準が知りたいです。',
        date: '2026-04-21',
        tags: [{ id: 'css', label: 'CSS' }],
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
        tags: [{ id: 'docker', label: 'Docker' }],
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
        tags: [{ id: 'typescript', label: 'TypeScript' }],
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
        tags: [{ id: 'nextjs', label: 'Next.js' }],
      },
      {
        title: 'この件もAPIで取得されるか確認用（11件目）',
        content: '10件を超えたとき...が表示されるかテストするためのアイテムです。',
        date: '2026-04-14',
      },
    ],
    workItems,
  },
}

// 評価数0・自分も未評価
export const RatingNoLikes: Story = {
  render,
  args: {
    questionItems: [
      {
        title: '質問題名(仮)',
        content: '質問内容\nooooooooooooooo',
        date: '20xx/xx/xx',
        likeCount: 0,
        isLikedByCurrentUser: false,
      },
    ],
    workItems: [],
  },
}

// 評価数1・自分のみ評価済み
export const RatingLikedByUserOnly: Story = {
  render,
  args: {
    questionItems: [
      {
        title: '質問題名(仮)',
        content: '質問内容\nooooooooooooooo',
        date: '20xx/xx/xx',
        likeCount: 1,
        isLikedByCurrentUser: true,
      },
    ],
    workItems: [],
  },
}

// 評価数5・他ユーザーが評価済み・自分は未評価
export const RatingLikedByOthers: Story = {
  render,
  args: {
    questionItems: [
      {
        title: '質問題名(仮)',
        content: '質問内容\nooooooooooooooo',
        date: '20xx/xx/xx',
        likeCount: 5,
        isLikedByCurrentUser: false,
      },
    ],
    workItems: [],
  },
}

// 評価数10・他ユーザーも自分も評価済み
export const RatingLikedByAll: Story = {
  render,
  args: {
    questionItems: [
      {
        title: '質問題名(仮)',
        content: '質問内容\nooooooooooooooo',
        date: '20xx/xx/xx',
        likeCount: 10,
        isLikedByCurrentUser: true,
      },
    ],
    workItems: [],
  },
}
