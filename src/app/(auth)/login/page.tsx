'use client'

import { SignIn } from '@/features/user/components/SignIn/SignIn'
import { login } from '@/features/user/actions/login'

export default function LoginPage() {
  const handleSubmit = async (formData: {
    email: string
    password: string
  }) => {
    await login(formData)
  }

  return (
    <SignIn onSubmit={handleSubmit} />
  )
}
