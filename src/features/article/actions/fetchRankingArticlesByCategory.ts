import type { ArticleCategory } from '@/types/article'
import type { ArticleItem } from '@/types/articleItem'

/**
 * ランキング用記事一覧（クライアント）。mocks の `GET /api/articles/ranking?type=` と同じ。
 */
export async function fetchRankingArticlesByCategory(
  type: ArticleCategory,
): Promise<ArticleItem[]> {
  try {
    const res = await fetch(`/api/articles/ranking?type=${type}`)
    if (!res.ok) {
      const body = (await res.json().catch(() => ({}))) as { message?: string }
      throw new Error(
        typeof body.message === 'string'
          ? body.message
          : `取得に失敗しました (${res.status})`,
      )
    }
    return res.json() as Promise<ArticleItem[]>
  } catch (error) {
    throw new Error(
      error instanceof Error ? error.message : '取得に失敗しました',
    )
  }
}
