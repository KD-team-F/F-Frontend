import { http, HttpResponse, delay } from 'msw'
import { mockQuestionItems, mockWorkItems } from '../data/ranking'

export const articleRankingHandlers = [
  http.get('/api/articles/ranking', async ({ request }) => {
    const url = new URL(request.url)
    const type = url.searchParams.get('type')

    if (type === 'work') {
      return HttpResponse.json(mockWorkItems)
    }

    return HttpResponse.json(mockQuestionItems)
  }),
]