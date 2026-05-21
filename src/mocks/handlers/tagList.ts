import { http, HttpResponse } from "msw";
import { tags } from "@/mocks/data/tags";
import type { ArticleCategory } from "@/types/article";
import type { Tag } from "@/types/tag";

function isArticleItem(value: string | null): value is ArticleCategory {
  return value === "question" || value === "work";
}

function isValidTag(value: unknown): value is Tag {
  if (!value || typeof value !== "object") return false;
  const { id, label } = value as Tag;
  return typeof id === "string" && typeof label === "string";
}

export const tagListHandlers = [
  http.get("/api/tags", async ({ request }) => {
    try {
      const url = new URL(request.url);
      const item = url.searchParams.get("item");

      if (item !== null && !isArticleItem(item)) {
        return HttpResponse.json(
          {
            message:
              "item クエリパラメータには question または work を指定してください",
          },
          { status: 400 },
        );
      }

      if (!Array.isArray(tags)) {
        return HttpResponse.json(
          { message: "タグデータの形式が不正です" },
          { status: 500 },
        );
      }

      const invalid = tags.some((tag) => !isValidTag(tag));
      if (invalid) {
        return HttpResponse.json(
          { message: "タグデータの形式が不正です" },
          { status: 500 },
        );
      }

      return HttpResponse.json(tags);
    } catch (error) {
      console.error("MSW Handler Error:", error);
      return HttpResponse.json(
        {
          message: "タグの取得に失敗しました",
          details: error instanceof Error ? error.message : String(error),
        },
        { status: 500 },
      );
    }
  }),
];
