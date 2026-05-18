import { fetchRankingArticlesByCategory } from '@/features/article/actions/fetchRankingArticlesByCategory'
import type { ArticleItem } from '@/types/articleItem'

export type ArticleRankingData = {
  questionItems: ArticleItem[]
  workItems: ArticleItem[]
}

export async function fetchArticleRanking(): Promise<ArticleRankingData> {
  const [questionItems, workItems] = await Promise.all([
    fetchRankingArticlesByCategory('question'),
    fetchRankingArticlesByCategory('work'),
  ])

  return { questionItems, workItems }
}
