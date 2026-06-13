import jwt from "jsonwebtoken"

export const generateAccessToken = (
  user: {
    id: string
    email: string
    role: string
  }
) => {
  return jwt.sign(
    user,
    process.env.JWT_SECRET!,
    {
      expiresIn: "15m",
    }
  )
}

export const generateRefreshToken = (
  user: {
    id: string
    email: string
    role: string
  }
) => {
  return jwt.sign(
    user,
    process.env.JWT_REFRESH_SECRET!,
    {
      expiresIn: "30d",
    }
  )
}