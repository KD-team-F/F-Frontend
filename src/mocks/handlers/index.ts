import { articleListHandlers } from '@/mocks/handlers/articleList'
import { articleDetailHandlers } from '@/mocks/handlers/articleDetail'
import { articleCommentHandlers } from '@/mocks/handlers/articleComment'
import { articlePostHandlers } from '@/mocks/handlers/articlePost'

export const handlers = [
  ...articleListHandlers,
  ...articleDetailHandlers,
  ...articleCommentHandlers,
  ...articlePostHandlers,
]
