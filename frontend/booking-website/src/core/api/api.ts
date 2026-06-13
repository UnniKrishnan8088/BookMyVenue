import axios, {
  type AxiosInstance,
  type AxiosResponse,
  type InternalAxiosRequestConfig,
} from "axios"
import type { ApiError } from "../types/api.types"
import { getToken, clearToken, refreshAccessToken } from "../utils/auth"

// Extend config to support our _retry flag
declare module "axios" {
  interface InternalAxiosRequestConfig {
    _retry?: boolean
  }
}

interface QueueItem {
  resolve: (token: string) => void
  reject: (error: unknown) => void
}

let isRefreshing = false
let queue: QueueItem[] = []

const processQueue = (error: unknown, token: string | null = null): void => {
  queue.forEach((p) => (error ? p.reject(error) : p.resolve(token!)))
  queue = []
}

const api: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL as string,
  timeout: 10_000,
  headers: { "Content-Type": "application/json" },
})

// REQUEST interceptor
api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = getToken()
    if (token) config.headers.Authorization = `Bearer ${token}`
    return config
  },
  (error: unknown) => Promise.reject(error)
)

// RESPONSE interceptor
api.interceptors.response.use(
  (response: AxiosResponse) => response.data,
  async (error: unknown) => {
    if (!axios.isAxiosError(error)) return Promise.reject(error)

    const original = error.config as InternalAxiosRequestConfig
    const status = error.response?.status

    if (status === 401 && !original._retry) {
      if (isRefreshing) {
        return new Promise<string>((resolve, reject) => {
          queue.push({ resolve, reject })
        }).then((token) => {
          original.headers.Authorization = `Bearer ${token}`
          return api(original)
        })
      }

      original._retry = true
      isRefreshing = true

      try {
        const newToken = await refreshAccessToken()
        processQueue(null, newToken)
        original.headers.Authorization = `Bearer ${newToken}`
        return api(original)
      } catch (err) {
        processQueue(err, null)
        clearToken()
        window.location.href = "/login"
        return Promise.reject(err)
      } finally {
        isRefreshing = false
      }
    }

    const normalized: ApiError = {
      message: error.response?.data?.message ?? error.message,
      status: error.response?.status ?? 0,
      data: error.response?.data,
    }

    return Promise.reject(normalized)
  }
)

export default api
