import { articleListHandlers } from '@/mocks/handlers/articleList'
import { articleDetailHandlers } from '@/mocks/handlers/articleDetail'
import { articleCommentHandlers } from '@/mocks/handlers/articleComment'
import { articlePostHandlers } from '@/mocks/handlers/articlePost'
import { registerHandlers } from '@/mocks/handlers/register'
import { loginHandlers } from '@/mocks/handlers/login'

export const handlers = [
  ...articleListHandlers,
  ...articleDetailHandlers,
  ...articleCommentHandlers,
  ...articlePostHandlers,
  ...registerHandlers,
  ...loginHandlers,
]
