import { notFound } from 'next/navigation'
import type { MockArticle } from '@/mocks/data/articles'
import { articles } from '@/mocks/data/articles'

/**
 * 編集ページ（RSC）用。モックの `articles` から直接取得（`articleDetail` と同じデータ源）。
 */
export async function getArticleForEdit(id: string): Promise<MockArticle> {
  const article = articles.find((a) => a.id === id)
  if (!article) {
    notFound()
  }
  return article
}
