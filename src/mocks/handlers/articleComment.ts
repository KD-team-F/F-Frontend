import { http, HttpResponse } from 'msw'
import { articles } from '@/mocks/data/articles'
import type { Comment } from '@/features/comment/types/comment'

type ArticleCommentRequestBody = {
  content: string
}

export const articleCommentHandlers = [
  http.post('/api/article/:id/comments', async ({ params, request }) => {
    try {
      const id = params.id as string
      const body = (await request.json()) as ArticleCommentRequestBody
      const content = body?.content

      if (typeof content !== 'string' || content.trim() === '') {
        return HttpResponse.json(
          { message: 'content は必須です' },
          { status: 400 },
        )
      }

      const article = articles.find((a) => a.id === id)
      if (!article) {
        return HttpResponse.json(
          { message: `id: ${id} の記事は存在しません` },
          { status: 404 },
        )
      }

      const newComment: Comment = {
        id: crypto.randomUUID(),
        content,
        date: new Date().toISOString().slice(0, 10),
      }

      article.initialComments.push(newComment)

      return HttpResponse.json(newComment, { status: 201 })
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
