import { http, HttpResponse } from 'msw'
import { users } from '@/mocks/data/users'
import type { User } from '@/types/user/user'

export const registerHandlers = [
  http.post('/api/auth/register', async ({ request }) => {
    try {
      const body = (await request.json()) as User
      const { userId, grade, department, email, password } = body

      if (!userId || typeof userId !== 'string' || userId.trim() === '') {
        return HttpResponse.json(
          { message: 'userId は必須です' },
          { status: 400 },
        )
      }
      if (typeof grade !== 'number' || grade < 1 || grade > 4) {
        return HttpResponse.json(
          { message: 'grade は 1〜4 の数値で指定してください' },
          { status: 400 },
        )
      }
      if (!['1', '2', '3', '4'].includes(department)) {
        return HttpResponse.json(
          { message: 'department は必須です' },
          { status: 400 },
        )
      }
      if (!email || typeof email !== 'string' || !email.includes('@')) {
        return HttpResponse.json(
          { message: 'email は有効なメールアドレスを指定してください' },
          { status: 400 },
        )
      }
      if (!password || typeof password !== 'string' || password.length < 8) {
        return HttpResponse.json(
          { message: 'password は8文字以上で指定してください' },
          { status: 400 },
        )
      }

      if (users.some((u) => u.userId === userId)) {
        return HttpResponse.json(
          { message: 'この userId はすでに使用されています' },
          { status: 409 },
        )
      }
      if (users.some((u) => u.email === email)) {
        return HttpResponse.json(
          { message: 'このメールアドレスはすでに登録されています' },
          { status: 409 },
        )
      }

      users.push({ userId, grade, department, email, password })

      return HttpResponse.json(
        { userId, grade, department, email },
        { status: 201 },
      )
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
