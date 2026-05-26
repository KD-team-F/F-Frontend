import { Header } from '@/components/layouts/Header/Header'
import { Footer } from '@/components/layouts/Footer/Footer'
import { ArticleDetailContainer } from '@/features/article/components/ArticleDetail/ArticleDetailContainer'

type Props = {
  params: Promise<{ id: string }>
}

export default async function ArticleDetailPage({ params }: Props) {
  const { id } = await params

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1">
        <ArticleDetailContainer articleId={id} />
      </main>

      <Footer />
    </div>
  )
}
