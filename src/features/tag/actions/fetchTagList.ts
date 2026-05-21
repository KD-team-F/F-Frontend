import type { Tag } from '@/types/tag'

/**
 * タグ一覧取得（クライアント）。mocks の `GET /api/tags` と同じ。
 */
export async function fetchTagList(): Promise<Tag[]> {
  const res = await fetch('/api/tags')
  if (!res.ok) {
    const body = (await res.json().catch(() => ({}))) as { message?: string }
    throw new Error(
      typeof body.message === 'string'
        ? body.message
        : `タグの取得に失敗しました (${res.status})`,
    )
  }

  const data = (await res.json()) as unknown
  if (!Array.isArray(data)) {
    throw new Error('タグの取得に失敗しました（不正なレスポンス）')
  }

  return data as Tag[]
}
