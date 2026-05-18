'use client'

import { SignUp } from '@/features/user/components/SignUp/SignUp'
import { register } from '@/features/user/actions/register'

export default function RegisterPage() {
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
  }

  return (
    <SignUp onSubmit={handleSubmit} />
  )
}
