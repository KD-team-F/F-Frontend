import type { ProfileData } from '@/types/profile'

export const getProfile = async (): Promise<ProfileData> => {
  const response = await fetch('/api/profile')

  if (!response.ok) {
    throw new Error('プロフィール情報の取得に失敗しました')
  }

  return response.json() as Promise<ProfileData>
}
