import { Header } from '@/components/layouts/Header/Header'
import { Footer } from '@/components/layouts/Footer/Footer'
import { ArticleRanking } from '@/features/article/components/ArticleRanking/ArticleRanking'
import { getArticleRanking } from '@/features/article/actions/getArticleRanking'

export default async function RankingPage() {
  const { questionItems, workItems } = await getArticleRanking()

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <ArticleRanking questionItems={questionItems} workItems={workItems} />
      </main>

      <Footer />
    </div>
  )
}
