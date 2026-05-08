import { Header } from '@/components/layouts/Header/Header'
import { Footer } from '@/components/layouts/Footer/Footer'
import { ArticleDetail } from '@/features/article/components/ArticleDetail/ArticleDetail'

type Props = {
  params: Promise<{ id: string }>
}

export default async function ArticleDetailPage({ params }: Props) {
  const { id } = await params

  // TODO: API取得（idでfetch）
  const article = {
    title: 'サンプル記事タイトル',
    date: '2026-04-23',
    content: '## はじめに\n\nここに記事の本文が入ります。',
  }

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