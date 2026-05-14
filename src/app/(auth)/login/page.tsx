'use client'

import { useRouter } from 'next/navigation'
import { SignIn } from '@/features/user/components/SignIn/SignIn'

export default function LoginPage() {
  const router = useRouter()

  const handleSubmit = async (formData: {
    email: string
    password: string
  }) => {
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })

    const data = await response.json()
    if (!response.ok) {
      throw new Error(data.message ?? 'ログインに失敗しました')
    }

    router.push('/articles')
  }

  const navigateToRegister = () => {
    router.push('/register')
  }

  return (
    <SignIn
      onSubmit={handleSubmit}
      onNavigateToRegister={navigateToRegister}
    />
  )
}
