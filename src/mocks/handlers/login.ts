import { http, HttpResponse } from 'msw'
import { users } from '@/mocks/data/users'
import { tokens } from '@/mocks/data/tokens'
import { ALLOWED_EMAIL_DOMAIN } from '@/constants/auth'

type LoginRequestBody = {
  email: string
  password: string
}

export const loginHandlers = [
  http.post('/api/auth/login', async ({ request }) => {
    try {
      const body = (await request.json()) as LoginRequestBody
      const { email, password } = body

      if (!email || typeof email !== 'string' || !email.endsWith(ALLOWED_EMAIL_DOMAIN)) {
        return HttpResponse.json(
          { message: 'メールアドレスまたはパスワードが正しくありません' },
          { status: 400 },
        )
      }
      if (!password || typeof password !== 'string') {
        return HttpResponse.json(
          { message: 'メールアドレスまたはパスワードが正しくありません' },
          { status: 400 },
        )
      }

      const user = users.find((u) => u.email === email && u.password === password)
      if (!user) {
        return HttpResponse.json(
          { message: 'メールアドレスまたはパスワードが正しくありません' },
          { status: 401 },
        )
      }

      const token = crypto.randomUUID()
      tokens.set(token, user.userId)

      return HttpResponse.json({ token, userId: user.userId })
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
