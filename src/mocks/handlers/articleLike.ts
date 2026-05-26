import { http, HttpResponse } from 'msw'
import { articles } from '@/mocks/data/articles'
import { LIKE_COUNT_STEP, MIN_LIKE_COUNT } from '@/constants/articleLike'

export const articleLikeHandlers = [
  http.post('/api/articles/:id/like', async ({ params }) => {
    try {
      const id = params.id as string
      const article = articles.find((a) => a.id === id)

      if (!article) {
        return HttpResponse.json(
          { message: `id: ${id} の記事は存在しません` },
          { status: 404 },
        )
      }

      if (article.isLikedByCurrentUser) {
        article.isLikedByCurrentUser = false
        article.likeCount = Math.max(
          MIN_LIKE_COUNT,
          article.likeCount - LIKE_COUNT_STEP,
        )
      } else {
        article.isLikedByCurrentUser = true
        article.likeCount += LIKE_COUNT_STEP
      }

      return HttpResponse.json({
        likeCount: article.likeCount,
        isLikedByCurrentUser: article.isLikedByCurrentUser,
      })
    } catch (error) {
      console.error('MSW Handler Error:', error)
      return HttpResponse.json(
        {
          message: 'Internal Server Error (MSW)',
          details: error instanceof Error ? error.message : String(error),
        },
        { status: 500 },
      )
    }
  }),
]
