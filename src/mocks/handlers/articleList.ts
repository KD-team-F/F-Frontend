import { http, HttpResponse } from "msw";
import { articles, type ArticleItem } from "@/mocks/data/articles";

function isArticleItem(value: string | null): value is ArticleItem {
  return value === "question" || value === "work";
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

      const data = articles
        .filter((article) => article.item === item)
        .map(({ id, title, content, date }) => ({ id, title, content, date }));

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
];
