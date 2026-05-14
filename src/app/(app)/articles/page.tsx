import { Header } from '@/components/layouts/Header/Header'
import { Footer } from '@/components/layouts/Footer/Footer'
import { ArticleRanking } from '@/features/article/components/ArticleRanking/ArticleRanking'

const questionItems = [
  {
    id: '1',
    title: 'ReactのuseStateについて',
    content: 'useStateの使い方を教えてください。',
    date: '2026-05-08',
  },
  {
    id: '2',
    title: 'Tailwind CSSについて',
    content: '中央寄せの方法が知りたいです。',
    date: '2026-05-07',
  },
]

const workItems = [
  {
    id: '3',
    title: 'ポートフォリオサイト',
    content: 'Next.jsで制作しました。',
    date: '2026-05-01',
  },
  {
    id: '4',
    title: 'Todoアプリ',
    content: 'ReactとTypeScriptで作成しました。',
    date: '2026-04-28',
  },
]

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1">
        <ArticleRanking
          questionItems={questionItems}
          workItems={workItems}
        />
      </main>

      <Footer />
    </div>
  )
}
