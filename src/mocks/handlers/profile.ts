import { http, HttpResponse } from 'msw'
import { profile } from '@/mocks/data/profile'

export const profileHandlers = [
  http.get('/api/profile', () => {
    return HttpResponse.json(profile)
  }),
]
