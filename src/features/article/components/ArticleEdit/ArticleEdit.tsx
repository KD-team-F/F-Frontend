"use client";

import { useEffect, useState } from "react";

import { useRouter } from "next/navigation";

import BackButton from "@/components/assets/backbutton";

import { Title } from "@/components/ui/Title/Title";
import { Button } from "@/components/ui/Button/Button";
import { Input } from "@/components/ui/Input/Input";

import { MarkdownEditor } from "@/features/submission/components/MarkdownEditor/MarkdownEditor";

import { DeleteIcon } from "@/components/ui/Delete-icon/delete-icon";

import { updateArticleWithMockApi } from "@/features/article/actions/updateArticleWithMockApi";

import { useArticleById } from "@/features/article/hooks/useArticleById";

type ArticleEditProps = {
  articleId?: string;
  defaultTitle?: string;
  defaultContent?: string;
  onSubmit?: (
    title: string,
    content: string
  ) => void | Promise<void>;
  onDelete?: () => void;
};

export function ArticleEdit({
  articleId,
  defaultTitle,
  defaultContent,
  onSubmit,
  onDelete,
}: ArticleEditProps) {

  const router = useRouter();

  const shouldFetch =
    articleId !== undefined &&
    defaultTitle === undefined &&
    defaultContent === undefined;

  const {
    article,
    isLoading,
    error,
  } = useArticleById(
    shouldFetch ? articleId : undefined,
  );

  const [title, setTitle] =
    useState(defaultTitle ?? "");

  const [content, setContent] =
    useState(defaultContent ?? "");

  const [isSubmitting, setIsSubmitting] =
    useState(false);

  const [submitError, setSubmitError] =
    useState<string | null>(null);

  useEffect(() => {
    if (article) {
      setTitle(article.title);
      setContent(article.content);
    }
  }, [article]);

  const handleSubmit = async () => {

    try {

      setIsSubmitting(true);

      setSubmitError(null);

      if (onSubmit) {

        await onSubmit(title, content);

      } else if (articleId) {

        const result =
          await updateArticleWithMockApi(
            articleId,
            title,
            content,
          );

        if (!result.ok) {

          setSubmitError(result.message);

        } else {

          router.push(`/articles/${articleId}`);

        }
      }

    } catch (error) {

      setSubmitError(
        error instanceof Error
          ? error.message
          : "更新に失敗しました",
      );

    } finally {

      setIsSubmitting(false);

    }
  };

  if (isLoading) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-16 text-center text-gray-500">
        読み込み中…
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-16 text-center text-red-500">
        記事の読み込み中にエラーが発生しました:
        {error.message}
      </div>
    );
  }

  if (shouldFetch && !article) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-16 text-center text-gray-500">
        記事が見つかりませんでした。
      </div>
    );
  }

  return (

    <section className="relative max-w-3xl mx-auto px-4 py-8">

      <div className="absolute -left-16 top-6">

        <BackButton
          href={`/articles/${articleId}`}
        />

      </div>

      {submitError ? (

        <p
          role="alert"
          className="mb-6 text-center text-sm text-red-600"
        >
          {submitError}
        </p>

      ) : null}

      <div className="mb-8">

        <Title>
          記事を編集する
        </Title>

      </div>

      <div className="mb-8">

        <Input
          id="article-title"
          name="title"
          label="タイトル"
          required
          value={title}
          onChange={(e) =>
            setTitle(e.target.value)
          }
          placeholder="記事のタイトルを入力してください"
        />

      </div>

      <div className="mb-8">

        <MarkdownEditor
          id="article-content"
          name="content"
          label="内容"
          required
          value={content}
          onChange={setContent}
          placeholder="内容を入力してください（マークダウン可）"
        />

      </div>

      <div className="flex justify-end items-center gap-4">

        {onDelete && (
          <DeleteIcon onClick={onDelete} />
        )}

        <Button
          label="更新"
          onClick={handleSubmit}
          disabled={
            isSubmitting ||
            !title.trim() ||
            !content.trim() ||
            (!onSubmit && !articleId)
          }
        />

      </div>

    </section>
  );
}