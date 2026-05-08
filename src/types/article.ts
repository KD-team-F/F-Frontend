import type { Tag } from '@/types/tag'

export type ArticleItem = {
  title: string
  content: string
  date: string
  tags?: Tag[]
  likes?: number
  liked?: boolean
}
