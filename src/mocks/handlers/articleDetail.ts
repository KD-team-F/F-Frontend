import { http, HttpResponse } from 'msw'
import { articles } from '@/mocks/data/articles'

const FORCE_ERROR_ID = 'error-500'

export const articleDetailHandlers = [
  http.get('/api/article/detail/:id', async ({ params }) => {
    try {
      const id = params.id as string

      if (id === FORCE_ERROR_ID) {
        throw new Error('動作確認用の意図的な例外です')
      }

      const article = articles.find((a) => a.id === id)

      if (!article) {
        return HttpResponse.json(
          { message: `id: ${id} の記事は存在しません` },
          { status: 404 },
        )
      }

      return HttpResponse.json(article)
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
