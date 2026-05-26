import { http, HttpResponse } from "msw";
import { articles, type MockArticle } from "@/mocks/data/articles";
import type { Tag } from "@/types/tag";
import type { ArticleCategory, ArticleRequestBody } from "@/types/article";

function isArticleItem(value: string | null): value is ArticleCategory {
  return value === "question" || value === "work";
}

function normalizeTag(value: unknown): Tag | null {
  if (!value || typeof value !== "object") return null;
  const { id, label } = value as Tag;
  return { id, label };
}

export const articlePostHandlers = [
  http.post("/api/article/post", async ({ request }) => {
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

      const body = (await request.json()) as ArticleRequestBody;
      const title = body?.title;
      const content = body?.content;
      const rawTag = body?.tag;

      if (typeof title !== "string" || title.trim() === "") {
        return HttpResponse.json(
          { message: "title は必須です" },
          { status: 400 },
        );
      }

      if (typeof content !== "string" || content.trim() === "") {
        return HttpResponse.json(
          { message: "content は必須です" },
          { status: 400 },
        );
      }

      if (!Array.isArray(rawTag)) {
        return HttpResponse.json(
          { message: "tag は配列で指定してください" },
          { status: 400 },
        );
      }

      const tags = rawTag
        .map(normalizeTag)
        .filter((tag): tag is Tag => tag !== null);

      const prefix = item === "question" ? "q" : "w";
      const newArticle: MockArticle = {
        id: `${prefix}-${crypto.randomUUID()}`,
        item,
        title,
        content,
        date: new Date().toISOString(),
        tags,
        likeCount: 0,
        isLikedByCurrentUser: false,
        initialComments: [],
      };

      articles.unshift(newArticle);

      return HttpResponse.json(newArticle, { status: 201 });
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
