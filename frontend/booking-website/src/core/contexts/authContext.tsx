import { createContext, useContext, useState } from "react"
import { ACCESS_TOKEN, REFRESH_TOKEN, USER } from "../constants"

type User = {
  id: string
  name: string
  email: string
}

type LoginData = {
  accessToken: string
  refreshToken: string
  user: User
}

type AuthContextType = {
  user: User | null
  login: (data: LoginData) => void
  logout: () => void
}

const AuthContext = createContext<AuthContextType | null>(null)

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(() => {
    const stored = localStorage.getItem("user")
    return stored ? JSON.parse(stored) : null
  })

  const login = (data: LoginData) => {
    localStorage.setItem(ACCESS_TOKEN, data.accessToken)
    localStorage.setItem(REFRESH_TOKEN, data.refreshToken)
    localStorage.setItem(USER, JSON.stringify(data.user))
    setUser(data.user)
  }

  const logout = () => {
    localStorage.clear()
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
