import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants"

export const getToken = (): string | null => localStorage.getItem(ACCESS_TOKEN)

export const setToken = (token: string): void =>
  void localStorage.setItem(ACCESS_TOKEN, token)

export const clearToken = (): void => {
  localStorage.removeItem(ACCESS_TOKEN)
  localStorage.removeItem(REFRESH_TOKEN)
}

export const refreshAccessToken = async (): Promise<string> => {
  const refreshToken = localStorage.getItem(REFRESH_TOKEN)
  if (!refreshToken) throw new Error("No refresh token")

  const res = await fetch("/auth/refresh", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ refreshToken }),
  })

  if (!res.ok) throw new Error("Refresh failed")
  const { accessToken } = (await res.json()) as { accessToken: string }
  setToken(accessToken)
  return accessToken
}
