'use client'

import { useEffect, useState } from 'react'
import type { ComponentProps } from 'react'

import { Profile } from '@/components/ui/Profile/Profile'

type ProfileData = ComponentProps<typeof Profile>

export default function ProfilePage() {
  const [profile, setProfile] = useState<ProfileData | null>(null)

  useEffect(() => {
    const fetchProfile = async () => {
      const response = await fetch('/api/profile')
      const data = await response.json()

      setProfile(data)
    }

    fetchProfile()
  }, [])

  if (!profile) {
    return <p>Loading...</p>
  }

  return <Profile {...profile} />
}