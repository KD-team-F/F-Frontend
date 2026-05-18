import { articles } from "@/mocks/data/articles";
import type { ArticleCategory } from "@/types/article";
import type { ArticleItem } from "@/types/articleItem";

export type ArticleRankingData = {
  questionItems: ArticleItem[];
  workItems: ArticleItem[];
};

function filterArticlesByCategory(category: ArticleCategory): ArticleItem[] {
  return articles
    .filter((article) => article.item === category)
    .map((article) => ({
      ...article,
      id: article.id,
      title: article.title,
      content: article.content,
      date: article.date,
      tags: article.tags,
      likeCount: article.likeCount,
      isLikedByCurrentUser: article.isLikedByCurrentUser,
    }));
}

/**
 * ランキングページ（RSC）用。mocks の `articleRanking` と同じデータを直接取得。
 */
export async function getArticleRanking(): Promise<ArticleRankingData> {
  return {
    questionItems: filterArticlesByCategory("question"),
    workItems: filterArticlesByCategory("work"),
  };
}
