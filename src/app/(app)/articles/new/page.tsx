import { Header } from '@/components/layouts/Header/Header'
import { Footer } from '@/components/layouts/Footer/Footer'
import { ArticleSubmission } from '@/features/submission/components/ArticleSubmission/ArticleSubmission'

export default function ArticleCreatePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1">
        <ArticleSubmission />
      </main>

      <Footer />
    </div>
  )
}
