import { articleListHandlers } from '@/mocks/handlers/articleList'
import { articleDetailHandlers } from '@/mocks/handlers/articleDetail'

export const handlers = [...articleListHandlers, ...articleDetailHandlers]
