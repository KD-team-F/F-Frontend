import { articleListHandlers } from '@/mocks/handlers/articleList'
import { articleDetailHandlers } from '@/mocks/handlers/articleDetail'
import { articleCommentHandlers } from '@/mocks/handlers/articleComment'

export const handlers = [
  ...articleListHandlers,
  ...articleDetailHandlers,
  ...articleCommentHandlers,
]
