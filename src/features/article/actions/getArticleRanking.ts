import { articles } from '@/mocks/data/articles'
import type { ArticleCategory } from '@/types/article'
import type { ArticleItem } from '@/types/articleItem'

export type ArticleRankingData = {
  questionItems: ArticleItem[]
  workItems: ArticleItem[]
}

function toRankingItems(category: ArticleCategory): ArticleItem[] {
  return articles
    .filter((article) => article.item === category)
    .map(({ id, title, content, date, tags, likeCount, isLikedByCurrentUser }) => ({
      id,
      title,
      content,
      date,
      tags,
      likeCount,
      isLikedByCurrentUser,
    }))
}

/**
 * ランキングページ（RSC）用。mocks の `articleRanking` と同じデータを直接取得。
 */
export async function getArticleRanking(): Promise<ArticleRankingData> {
  return {
    questionItems: toRankingItems('question'),
    workItems: toRankingItems('work'),
  }
}
