import { Header } from '@/components/layouts/Header/Header'
import { Footer } from '@/components/layouts/Footer/Footer'
import { ArticleDetail } from '@/features/article/components/ArticleDetail/ArticleDetail'
import { getArticle } from '@/features/article/actions/getArticle'

type Props = {
  params: Promise<{ id: string }>
}

export default async function ArticleDetailPage({ params }: Props) {
  const { id } = await params
  const article = await getArticle(id);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1">
        <ArticleDetail {...article} />
      </main>

      <Footer />
    </div>
  )
}