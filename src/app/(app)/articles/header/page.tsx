import { Header } from '@/components/layouts/Header/Header'
import { ArticleRanking } from '@/features/article/components/ArticleRanking/ArticleRanking'

const questionItems = [
  {
    id: '1',
    title: 'Reactについて質問です',
    content: 'useStateの使い方がわかりません',
    date: '2026-05-20',
    tags: [{ id: 'react', label: 'React' }, { id: 'typescript', label: 'TypeScript' }],
    likeCount: 15,
    isLikedByCurrentUser: false,
  },
]

const workItems = [
  {
    id: '2',
    title: 'ポートフォリオサイトを作成しました',
    content: 'Next.jsで制作しました',
    date: '2026-05-19',
    tags: [{ id: 'nextjs', label: 'Next.js' }],
    likeCount: 25,
    isLikedByCurrentUser: true,
  },
]

export default function RankingPage() {
  return (
    <>
      <Header />

      <ArticleRanking
        questionItems={questionItems}
        workItems={workItems}
      />
    </>
  )
}
