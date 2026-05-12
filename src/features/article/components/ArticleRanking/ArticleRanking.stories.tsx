import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { ArticleRanking } from './ArticleRanking'

const meta: Meta<typeof ArticleRanking> = {
  title: 'Features/ArticleRanking',
  component: ArticleRanking,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof ArticleRanking>

// --- ダミーデータ作成用ヘルパー ---
const createMockItems = (prefix: string, count: number) => {
  return Array.from({ length: count }).map((_, i) => ({
    id: `${prefix}-${i + 1}`,
    title: `${prefix}ランキング ${i + 1}位のタイトル`,
    content: `${prefix}のコンテンツ内容です。評価順に並んでいるか確認するためのテストデータです。`,
    date: `2026-05-${30 - i}`, // 日付に差をつけてソート順を確認
    tags: [
      { id: 'tag1', label: prefix === '質問' ? 'React' : 'Next.js' },
      { id: 'tag2', label: 'TypeScript' },
    ],
    likeCount: (count - i) * 10, // 順位通りにいいね数を設定
    isLikedByCurrentUser: i < 3, // 上位3つだけいいね済み
  }))
}

// 共通で使用するデータ
const questionItems = createMockItems('質問', 12)
const workItems = createMockItems('制作物', 12)

// --- Stories ---

export const Default: Story = {
  args: {
    questionItems,
    workItems,
  },
}

// 制作物ランキングの10位までを確認するストーリー
export const RankingTop10: Story = {
  args: {
    questionItems,
    workItems,
  },
  parameters: {
  }
}

// 大量のデータがある場合の表示確認
export const FullData: Story = {
  args: {
    questionItems,
    workItems,
  },
}

// 同値データ検証用のストーリー
export const SameLikesOrdering: Story = {
  args: {
    questionItems: [
      {
        id: 'q-high-like',
        title: 'この記事が絶対1位（いいね50）',
        content: '本文が必要です',
        likeCount: 50,
        date: '2026-01-01',
        tags: [],
      },
      {
        id: 'q-newest',
        title: '2位に表示されるべき（いいね10 / 最新）',
        content: '2026年5月の新しい記事です',
        likeCount: 10,
        date: '2026-05-12',
        tags: [],
      },
      {
        id: 'q-middle',
        title: '3位に表示されるべき（いいね10 / 中間）',
        content: '2026年3月の記事です',
        likeCount: 10,
        date: '2026-03-15',
        tags: [],
      },
      {
        id: 'q-old',
        title: '4位番目に表示されるべき（いいね10 / 最古）',
        content: '2026年1月の古い記事です',
        likeCount: 10,
        date: '2026-01-01',
        tags: [],
      },
    ],
    workItems: [],
  },
}

// データがない場合の確認用
export const Empty: Story = {
  args: {
    questionItems: [],
    workItems: [],
  },
}