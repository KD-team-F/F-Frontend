"use client";

import { useState } from "react";
import { Title } from "@/components/ui/Title/Title";
import { Button } from "@/components/ui/Button/Button";
import { Input } from "@/components/ui/Input/Input";
import { MarkdownEditor } from "@/features/submission/components/MarkdownEditor/MarkdownEditor";
import { DeleteIcon } from "@/components/ui/Delete-icon/delete-icon";
import { updateArticleWithMockApi } from "@/features/article/actions/updateArticleWithMockApi";
import { Header } from "@/components/layouts/Header/Header";

type ArticleEditProps = {
  articleId?: string;
  defaultTitle?: string;
  defaultContent?: string;
  onSubmit?: (title: string, content: string) => void | Promise<void>;
  onDelete?: () => void;
};

export function ArticleEdit({
  articleId,
  defaultTitle = "",
  defaultContent = "",
  onSubmit,
  onDelete,
}: ArticleEditProps) {
  const [title, setTitle] = useState(defaultTitle);
  const [content, setContent] = useState(defaultContent);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleSubmit = async () => {
    try {
      setIsSubmitting(true);
      setSubmitError(null);

      if (onSubmit) {
        await onSubmit(title, content);
      } else if (articleId) {
        const result = await updateArticleWithMockApi(
          articleId,
          title,
          content,
        );

        if (!result.ok) {
          setSubmitError(result.message);
        }
      }
    } catch (error) {
      setSubmitError(
        error instanceof Error ? error.message : "更新に失敗しました",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Header />

      <section className="max-w-3xl mx-auto px-4 py-8">
        {submitError ? (
          <p role="alert" className="mb-6 text-center text-sm text-red-600">
            {submitError}
          </p>
        ) : null}

        <div className="mb-8">
          <Title>記事を編集する</Title>
        </div>

        <div className="mb-8">
          <Input
            id="article-title"
            name="title"
            label="タイトル"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
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
          {onDelete && <DeleteIcon onClick={onDelete} />}

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
    </>
  );
}
