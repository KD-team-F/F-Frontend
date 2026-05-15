export async function login(formData: {
  email: string
  password: string
}) {
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

  return data
}