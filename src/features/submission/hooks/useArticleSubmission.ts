'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { getContentFields } from '@/features/submission/constants/articleSubmission'
import { useTagSelection } from '@/features/submission/hooks/useTagSelection'
import type { ArticleSubmissionProps } from '@/features/submission/types/articleSubmission'
import { createArticleWithMockApi } from '@/features/article/actions/createArticleWithMockApi'
import { useTagList } from '@/features/tag/hooks/useTagList'
import type { ArticleCategory } from '@/types/article'

export function useArticleSubmission({ item, onSubmit }: ArticleSubmissionProps) {
  const router = useRouter()
  const {
    tags: availableTags,
    isLoading: isTagsLoading,
    error: tagsError,
    retry: retryTags,
  } = useTagList()

  const [selectedItem, setSelectedItem] = useState<ArticleCategory>(
    item ?? 'question',
  )
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const tagSelection = useTagSelection(availableTags)
  const { label: contentLabel, placeholder: contentPlaceholder } =
    getContentFields(selectedItem)

  const handleSubmit = async () => {
    try {
      setIsSubmitting(true)
      setSubmitError(null)
      if (onSubmit) {
        await onSubmit(
          title,
          content,
          selectedItem,
          tagSelection.selectedTags,
        )
      } else {
        const result = await createArticleWithMockApi(
          selectedItem,
          title,
          content,
          tagSelection.selectedTags,
        )
        if (!result.ok) {
          setSubmitError(result.message)
          return
        }
        router.push('/articles')
      }
    } catch (error) {
      setSubmitError(
        error instanceof Error ? error.message : '投稿に失敗しました',
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  return {
    selectedItem,
    setSelectedItem,
    title,
    setTitle,
    content,
    setContent,
    contentLabel,
    contentPlaceholder,
    isSubmitting,
    submitError,
    handleSubmit,
    isSubmitDisabled:
      isSubmitting || !title.trim() || !content.trim(),
    isTagsLoading,
    tagsError,
    retryTags,
    ...tagSelection,
  }
}
