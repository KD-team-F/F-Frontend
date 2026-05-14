import { articleListHandlers } from '@/mocks/handlers/articleList'
import { articleDetailHandlers } from '@/mocks/handlers/articleDetail'
import { articleCommentHandlers } from '@/mocks/handlers/articleComment'
import { articlePostHandlers } from '@/mocks/handlers/articlePost'
import { articleDeleteHandlers } from '@/mocks/handlers/articleDelete'
import { registerHandlers } from '@/mocks/handlers/register'
import { loginHandlers } from '@/mocks/handlers/login'
import { articleRankingHandlers } from '@/mocks/handlers/articleRanking'
import { articleEditHandlers } from '@/mocks/handlers/articleEdit'

export const handlers = [
  ...articleListHandlers,
  ...articleDetailHandlers,
  ...articleCommentHandlers,
  ...articlePostHandlers,
  ...articleDeleteHandlers,
  ...articleEditHandlers,
  ...registerHandlers,
  ...loginHandlers,
  ...articleRankingHandlers,
]
