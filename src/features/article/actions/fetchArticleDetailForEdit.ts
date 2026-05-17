import type { Tag } from '@/types/tag'

export type FetchArticleDetailForEditResult =
  | { ok: true; title: string; content: string; tags: Tag[] }
  | { ok: false; message: string }

/**
 * 編集前データ取得（クライアント）。mocks の `articleDetail` と同じ `GET /api/article/detail/:id`。
 */
export async function fetchArticleDetailForEdit(
  id: string,
): Promise<FetchArticleDetailForEditResult> {
  const res = await fetch(`/api/article/detail/${id}`)
  if (!res.ok) {
    const body = (await res.json().catch(() => ({}))) as { message?: string }
    return {
      ok: false,
      message:
        typeof body.message === 'string'
          ? body.message
          : `取得に失敗しました (${res.status})`,
    }
  }

  const article = (await res.json()) as {
    title: string
    content: string
    tags?: Tag[]
  }

  return {
    ok: true,
    title: article.title,
    content: article.content,
    tags: article.tags ?? [],
  }
}
