import { Header } from '@/components/layouts/Header/Header'
import { Footer } from '@/components/layouts/Footer/Footer'
import { ArticleList } from '@/features/article/components/ArticleList/ArticleList'

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1 pb-24">
        <ArticleList />
      </main>

      <Footer />
    </div>
  )
}
