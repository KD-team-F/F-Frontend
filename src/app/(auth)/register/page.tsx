'use client'

import { useRouter } from 'next/navigation'
import { SignUp } from '@/features/user/components/SignUp/SignUp'

export default function RegisterPage() {
  const router = useRouter()

  const handleSubmit = async (formData: {
    userId: string
    grade: number
    department: string
    email: string
    password: string
    passwordConfirm: string
  }) => {
    const response = await fetch('/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userId: formData.userId,
        grade: formData.grade,
        department: formData.department,
        email: formData.email,
        password: formData.password,
      }),
    })

    const data = await response.json()
    if (!response.ok) {
      throw new Error(data.message ?? '登録に失敗しました')
    }

    router.push('/login')
  }

  const navigateToLogin = () => {
    router.push('/login')
  }

  return (
    <SignUp
      onSubmit={handleSubmit}
      onNavigateToLogin={navigateToLogin}
    />
  )
}
