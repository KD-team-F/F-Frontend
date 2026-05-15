export async function register(formData: {
  userId: string
  grade: number
  department: string
  email: string
  password: string
}) {
  const response = await fetch('/api/auth/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  })

  const data = await response.json()
  if (!response.ok) {
    throw new Error(data.message ?? '登録に失敗しました')
  }

  return data
}
