"use client";

import BackButton from "@/components/assets/backbutton";
import { ArticleContent } from "@/components/ui/ArticleContent/ArticleContent";
import { PostDate } from "@/components/ui/PostDate/PostDate";
import { Title } from "@/components/ui/Title/Title";
import { Tag as TagUI } from "@/components/ui/tag/tag";
import { CommentSection } from "@/features/comment/components/CommentSection/CommentSection";
import type { Comment } from "@/features/comment/types/comment";
import { RatingHeart } from "@/components/ui/rating/rating";
import type { Tag as TagType } from "@/types/tag";
import { EditButton } from "@/components/ui/EditButton/editbutton";
import { useArticleById } from "@/features/article/hooks/useArticleById";
import { useSearchParams } from "next/navigation";
import { CreatePostButton } from "@/components/ui/PostButton/CreatePostButton";
import {
  DEFAULT_IS_LIKED,
  DEFAULT_LIKE_COUNT,
} from "@/constants/articleLike";

type ArticleDetailProps = {
  articleId: string;
  title?: string;
  date?: string;
  content?: string;
  tags?: TagType[];
  likeCount?: number;
  isLikedByCurrentUser?: boolean;
  initialComments?: Comment[];
  onSubmit?: (content: string) => Promise<Comment>;
};

export function ArticleDetail({
  articleId: articleId,
  title: initialTitle,
  date: initialDate,
  content: initialContent,
  tags: initialTags,
  likeCount: initialLikeCount,
  isLikedByCurrentUser: initialIsLikedByCurrentUser,
  initialComments: initialCommentsProp,
  onSubmit,
}: ArticleDetailProps) {
  const searchParams = useSearchParams();
  const from = searchParams.get("from");

  const shouldFetch = articleId !== undefined && initialTitle === undefined;
  const { article, isLoading, error } = useArticleById(
    shouldFetch ? articleId : undefined,
  );

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
        記事の読み込み中にエラーが発生しました: {error.message}
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

  const title = shouldFetch ? article!.title : (initialTitle ?? "");
  const date = shouldFetch ? article!.date : (initialDate ?? "");
  const content = shouldFetch ? article!.content : (initialContent ?? "");
  const tags = shouldFetch ? article!.tags : (initialTags ?? []);
  const initialComments = shouldFetch
    ? article!.initialComments
    : initialCommentsProp;
  const likeCount = shouldFetch
    ? article!.likeCount
    : (initialLikeCount ?? DEFAULT_LIKE_COUNT);
  const isLikedByCurrentUser = shouldFetch
    ? article!.isLikedByCurrentUser
    : (initialIsLikedByCurrentUser ?? DEFAULT_IS_LIKED);

  return (
    <>
    <article className="relative max-w-3xl mx-auto px-4 py-8">
      <div className="absolute -left-16 top-6">
        <BackButton
          href={from === "ranking" ? "/articles/ranking" : "/articles"}
        />
      </div>
      <Title>{title}</Title>
      <div className="flex items-center justify-between mt-2">
        <PostDate date={date} />
        <div className="flex items-center gap-2">
          <EditButton id={articleId} />
          <RatingHeart
            articleId={articleId}
            defaultCount={likeCount}
            defaultLiked={isLikedByCurrentUser}
          />
        </div>
      </div>

      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-4 mb-8">
          {tags.map((tag: TagType) => (
            <TagUI key={tag.id} tagId={tag.id} label={tag.label} />
          ))}
        </div>
      )}

      <ArticleContent content={content} />
      <hr className="my-8 border-gray-200" />

      <CommentSection
        key={initialComments?.length ?? 0}
        initialComments={initialComments}
        onSubmit={onSubmit}
      />
    </article>
    <CreatePostButton />
    </>
  );
}
