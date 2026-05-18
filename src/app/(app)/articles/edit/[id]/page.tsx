import { Header } from '@/components/layouts/Header/Header'
import { Footer } from '@/components/layouts/Footer/Footer'
import { ArticleEdit } from '@/features/article/components/ArticleEdit/ArticleEdit'
import { getArticleForEdit } from '@/features/article/actions/getArticleForEdit'

type Props = {
  params: Promise<{ id: string }>
}

export default async function ArticleEditPage({ params }: Props) {
  const { id } = await params
  const article = await getArticleForEdit(id)

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1">
        <ArticleEdit
          articleId={id}
          defaultTitle={article.title}
          defaultContent={article.content}
        />
      </main>

      <Footer />
    </div>
  )
}
