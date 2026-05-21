import type { ArticleCategory } from '@/types/article'
import type { Tag } from '@/types/tag'

export type ArticleSubmissionOnSubmit = (
  title: string,
  content: string,
  item: ArticleCategory,
  tags: Tag[],
) => void | Promise<void>

export type ArticleSubmissionProps = {
  item?: ArticleCategory
  onSubmit?: ArticleSubmissionOnSubmit
}
