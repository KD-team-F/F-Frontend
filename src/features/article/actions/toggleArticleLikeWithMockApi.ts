import { mutate } from 'swr'

export type LikeResponse = {
  likeCount: number
  isLikedByCurrentUser: boolean
}

export async function toggleArticleLikeWithMockApi(
  articleId: string,
): Promise<LikeResponse> {
  const response = await fetch(`/api/articles/${articleId}/like`, {
    method: 'POST',
  })

  if (!response.ok) {
    throw new Error('いいねの更新に失敗しました')
  }

  const result = (await response.json()) as LikeResponse

  await Promise.all([
    mutate('/api/articles?item=question'),
    mutate('/api/articles?item=work'),
    mutate('/api/articles/ranking?type=question'),
    mutate('/api/articles/ranking?type=work'),
    mutate(['article-detail', articleId]),
  ])

  return result
}
