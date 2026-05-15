'use client'

import { useRouter } from 'next/navigation'
import { SignUp } from '@/features/user/components/SignUp/SignUp'
import { register } from '@/features/user/actions/register'

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
    await register({
      userId: formData.userId,
      grade: formData.grade,
      department: formData.department,
      email: formData.email,
      password: formData.password,
    })
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
