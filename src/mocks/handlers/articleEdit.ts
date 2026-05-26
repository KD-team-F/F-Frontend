import { http, HttpResponse } from 'msw'
import { articles } from '@/mocks/data/articles'
import type { Tag } from '@/types/tag'
import type { ArticleRequestBody } from '@/types/article'

const ARTICLE_NOT_FOUND = -1

function normalizeTag(value: unknown): Tag | null {
  if (!value || typeof value !== 'object') return null
  const { id, label } = value as Tag
  return { id, label }
}

export const articleEditHandlers = [
  http.put('/api/article/edit/:id', async ({ params, request }) => {
    try {
      const id = params.id as string

      const index = articles.findIndex((article) => article.id === id)
      if (index === ARTICLE_NOT_FOUND) {
        return HttpResponse.json(
          { message: `id: ${id} の記事は存在しません` },
          { status: 404 },
        )
      }

      const body = (await request.json()) as ArticleRequestBody
      const title = body?.title
      const content = body?.content
      const rawTag = body?.tag

      if (typeof title !== 'string' || title.trim() === '') {
        return HttpResponse.json(
          { message: 'title は必須です' },
          { status: 400 },
        )
      }

      if (typeof content !== 'string' || content.trim() === '') {
        return HttpResponse.json(
          { message: 'content は必須です' },
          { status: 400 },
        )
      }

      if (!Array.isArray(rawTag)) {
        return HttpResponse.json(
          { message: 'tag は配列で指定してください' },
          { status: 400 },
        )
      }

      const tags = rawTag
        .map(normalizeTag)
        .filter((tag): tag is Tag => tag !== null)

      const articleUpdated = {
        ...articles[index],
        title,
        content,
        tags,
        date: new Date().toISOString().slice(0, 10),
      }

      articles[index] = articleUpdated

      return HttpResponse.json(articleUpdated)
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
