import type { Article, ArticleCategory, ArticleRequestBody } from "@/types/article";
import type { Tag } from "@/types/tag";

export type CreateArticleResult =
  | { ok: true; article: Pick<Article, "id"> }
  | { ok: false; message: string };

/**
 * `articlePost` の `POST /api/article/post?item=` で記事を作成する。
 */
export async function createArticleWithMockApi(
  item: ArticleCategory,
  title: string,
  content: string,
  tags: Tag[] = [],
): Promise<CreateArticleResult> {
  try {
    const body: ArticleRequestBody = {
      title,
      content,
      tag: tags,
    };

    const res = await fetch(`/api/article/post?item=${item}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      const err = (await res.json().catch(() => ({}))) as {
        message?: string;
      };
      return {
        ok: false,
        message:
          typeof err.message === "string"
            ? err.message
            : `投稿に失敗しました (${res.status})`,
      };
    }

    const article = (await res.json()) as { id: string };
    return { ok: true, article: { id: article.id } };
  } catch (error) {
    return {
      ok: false,
      message:
        error instanceof Error && error.message
          ? error.message
          : "投稿に失敗しました",
    };
  }
}
