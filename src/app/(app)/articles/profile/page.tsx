'use client'

import { useEffect, useState } from 'react'
import { getProfile } from '@/features/profile/actions/getProfile'
import { Profile } from '@/components/ui/Profile/Profile'
import type { ProfileData } from '@/types/profile'

export default function ProfilePage() {
  const [profile, setProfile] = useState<ProfileData | null>(null)

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const data = await getProfile()
        setProfile(data)
      } catch (error) {
        console.error(error)
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
