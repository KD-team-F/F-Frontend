import { http, HttpResponse } from 'msw'
import { articles } from '@/mocks/data/articles'

export const articleDeleteHandlers = [
  http.delete('/api/article/delete/:id', async ({ params }) => {
    try {
      const id = params.id as string

      const index = articles.findIndex((article) => article.id === id)

      if (index === -1) {
        return HttpResponse.json(
          { message: `id: ${id} の記事は存在しません` },
          { status: 404 },
        )
      }

      const [deleted] = articles.splice(index, 1)

      return HttpResponse.json(deleted)
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
