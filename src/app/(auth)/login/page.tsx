'use client'

import { useRouter } from 'next/navigation'
import { SignIn } from '@/features/user/components/SignIn/SignIn'
import { login } from '@/features/user/actions/login'

export default function LoginPage() {
  const router = useRouter()

  const handleSubmit = async (formData: {
    email: string
    password: string
  }) => {
    await login(formData)
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
