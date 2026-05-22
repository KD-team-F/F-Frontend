import { http, HttpResponse } from 'msw'
import { mockarticles } from '@/mocks/data/db'
import type { Comment } from '@/features/comment/types/comment'

type ArticleCommentRequestBody = {
  content: string
}

export const articleCommentHandlers = [
  http.post('/api/articles/:id/comments', async ({ params, request }) => {
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

      const now = new Date()
      const jstDate = now.toLocaleDateString('ja-JP', { year: 'numeric', month: '2-digit', day: '2-digit' }).replace(/\//g, '-')
      const jstTime = now.toLocaleTimeString('ja-JP', { hour: '2-digit', minute: '2-digit', hour12: false })
      
      const article = mockarticles.find((a) => a.id === id)
      if (!article) {
        return HttpResponse.json(
          { message: `id: ${id} の記事は存在しません` },
          { status: 404 },
        )
      }

      const newComment: Comment = {
        id: crypto.randomUUID(),
        content,
        date: `${jstDate} ${jstTime}`,
      }

      if (!article.initialComments) {
        article.initialComments = []
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
