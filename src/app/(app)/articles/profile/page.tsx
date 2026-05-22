'use client'

import { useEffect, useState } from 'react'
import type { ComponentProps } from 'react'

import { Profile } from '@/components/ui/Profile/Profile'

type ProfileData = ComponentProps<typeof Profile>

export default function ProfilePage() {
  const [profile, setProfile] = useState<ProfileData | null>(null)

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch('/api/profile');
        if (!response.ok) {
          // 例: HTTPエラーレスポンスの場合
          const errorData = await response.json().catch(() => ({ message: '不明なエラー' }));
          throw new Error(`Failed to fetch profile: ${response.status} ${response.statusText}. ${errorData.message}`);
        }

      const data = await response.json()
      setProfile(data)
    } catch (error) {
      console.error('プロフィール情報の取得に失敗しました:', error)
      setProfile(null)
    }
    }

    fetchProfile()
  }, [])

  if (!profile) {
    return <p>Loading...</p>
  }

  return (
    <div className="relative">
      <Profile {...profile} />
    </div>
  )
}
