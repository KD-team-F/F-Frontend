import { http, HttpResponse } from "msw";
import { articles } from "@/mocks/data/articles";
import { additionalArticles } from "@/mocks/data/additionalArticles";
import type { ArticleCategory } from "@/types/article";

function isArticleItem(value: string | null): value is ArticleCategory {
  return value === "question" || value === "work";
}

function toResponse(list: typeof articles) {
  return list.map(({ id, title, content, date, tags }) => ({
    id,
    title,
    content,
    date,
    tags,
  }));
}

export const articleListHandlers = [
  http.get("/api/articles", async ({ request }) => {
    try {
      const url = new URL(request.url);
      const item = url.searchParams.get("item");

      if (!isArticleItem(item)) {
        return HttpResponse.json(
          {
            message:
              "item クエリパラメータには question または work を指定してください",
          },
          { status: 400 },
        );
      }

      const data = toResponse(articles.filter((a) => a.item === item));

      return HttpResponse.json(data);
    } catch (error) {
      console.error("MSW Handler Error:", error);
      return HttpResponse.json(
        {
          message: "Internal Server Error (MSW)",
          details: error instanceof Error ? error.message : String(error),
        },
        { status: 500 },
      );
    }
  }),

  http.post("/api/articles/update", async () => {
    try {
      const updatedArticles = [...articles, ...additionalArticles];

      const questionItems = toResponse(
        updatedArticles.filter((a) => a.item === "question"),
      );
      const workItems = toResponse(
        updatedArticles.filter((a) => a.item === "work"),
      );

      return HttpResponse.json({ questionItems, workItems });
    } catch (error) {
      console.error("MSW Handler Error:", error);
      return HttpResponse.json(
        {
          message: "Internal Server Error (MSW)",
          details: error instanceof Error ? error.message : String(error),
        },
        { status: 500 },
      );
    }
  }),
];
