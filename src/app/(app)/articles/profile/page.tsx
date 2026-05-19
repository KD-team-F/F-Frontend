import type { ComponentProps } from 'react'
import { Profile } from '@/components/ui/Profile/Profile'

const profileProps = {
  userName: 'User Name',
  grade: 'Grade',
  specialty: 'Specialty',
  bio: 'Bio description',
  items: [],
  questionItems: [],
  workItems: [],
} as ComponentProps<typeof Profile>

export default function ProfilePage() {
  return <Profile {...profileProps} />
}
