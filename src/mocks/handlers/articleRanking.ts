import { http, HttpResponse } from 'msw'
import { articles } from '../data/articles'
import type { ArticleCategory } from '@/types/article'

function isArticleItem(value: string | null): value is ArticleCategory {
  return value === "question" || value === "work";
}

export const articleRankingHandlers = [
  http.get('/api/articles/ranking', async ({ request }) => {
    try {
      const url = new URL(request.url);
      const item = url.searchParams.get("type");

      if (!isArticleItem(item)) {
        return HttpResponse.json(
          { message: "type パラメータには question または work を指定してください" },
          { status: 400 }
        );
      }

      const data = articles
        .filter((article) => article.item === item)
        .map(({ id, title, content, date, tags, likeCount, isLikedByCurrentUser }) => ({
          id,
          title,
          content,
          date,
          tags,
          likeCount,
          isLikedByCurrentUser,
        }));

      return HttpResponse.json(data);

    } catch (error) {
      console.error('Ranking API Error:', error);
      return HttpResponse.json(
        { 
          message: "予期せぬエラーが発生しました",
          details: error instanceof Error ? error.message : "Internal Server Error"
        },
        { status: 500 }
      );
    }
  }),
]
