import type { ArticleRequestBody } from "@/types/article";
import { fetchArticleDetailForEdit } from "@/features/article/actions/fetchArticleDetailForEdit";

export type UpdateArticleResult = { ok: true } | { ok: false; message: string };

/**
 * `articleDetail` で現状態を取得し、`articleEdit` の `PUT /api/article/edit/:id` で更新する。
 */
export async function updateArticleWithMockApi(
  id: string,
  title: string,
  content: string,
): Promise<UpdateArticleResult> {
  try {
    const detail = await fetchArticleDetailForEdit(id);
    if (!detail.ok) {
      return detail;
    }

    const body: ArticleRequestBody = {
      title,
      content,
      tag: detail.tags,
    };

    const putRes = await fetch(`/api/article/edit/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (!putRes.ok) {
      const err = (await putRes.json().catch(() => ({}))) as {
        message?: string;
      };
      return {
        ok: false,
        message:
          typeof err.message === "string"
            ? err.message
            : `更新に失敗しました (${putRes.status})`,
      };
    }
    return { ok: true };
  } catch (error) {
    return {
      ok: false,
      message:
        error instanceof Error && error.message
          ? error.message
          : "更新に失敗しました",
    };
  }
}
