export type DeleteArticleResult = { ok: true } | { ok: false; message: string };

export async function deleteArticleWithMockApi(
  id: string,
): Promise<DeleteArticleResult> {
  try {
    const res = await fetch(`/api/article/delete/${id}`, {
      method: "DELETE",
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
            : `削除に失敗しました (${res.status})`,
      };
    }
    return { ok: true };
  } catch (error) {
    return {
      ok: false,
      message:
        error instanceof Error && error.message
          ? error.message
          : "削除に失敗しました",
    };
  }
}
