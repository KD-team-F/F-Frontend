import { http, HttpResponse } from 'msw'
import { articles } from '@/mocks/data/articles'

export const articleDetailHandlers = [
  http.get('/api/article/detail/:id', async ({ params }) => {
    try {
      const id = params.id as string

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
