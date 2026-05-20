import type { MockArticle } from '@/mocks/data/articles'

export class ArticleNotFoundError extends Error {
  constructor() {
    super('記事が見つかりません')
    this.name = 'ArticleNotFoundError'
  }
}

/**
 * 記事詳細取得（クライアント）。mocks の `GET /api/article/detail/:id` と同じ。
 */
export async function fetchArticleDetail(id: string): Promise<MockArticle> {
  const res = await fetch(`/api/article/detail/${id}`)
  if (res.status === 404) {
    throw new ArticleNotFoundError()
  }
  if (!res.ok) {
    const body = (await res.json().catch(() => ({}))) as { message?: string }
    throw new Error(
      typeof body.message === 'string'
        ? body.message
        : `取得に失敗しました (${res.status})`,
    )
  }
  return res.json() as Promise<MockArticle>
}
