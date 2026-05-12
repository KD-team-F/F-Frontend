import { articleListHandlers } from '@/mocks/handlers/articleList'
import { articleDetailHandlers } from '@/mocks/handlers/articleDetail'
import { articleCommentHandlers } from '@/mocks/handlers/articleComment'
import { registerHandlers } from '@/mocks/handlers/register'
import { loginHandlers } from '@/mocks/handlers/login'

export const handlers = [
  ...articleListHandlers,
  ...articleDetailHandlers,
  ...articleCommentHandlers,
  ...registerHandlers,
  ...loginHandlers,
]
