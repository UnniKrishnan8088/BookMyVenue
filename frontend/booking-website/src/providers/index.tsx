import { type ReactNode } from "react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { AuthProvider } from "@/core/contexts/authContext"
import { LocationProvider } from "@/core/contexts/locationContext"

type Props = {
  children: ReactNode
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})

export default function Providers({ children }: Props) {
  return (
    <QueryClientProvider client={queryClient}>
      <LocationProvider>
        <AuthProvider>{children}</AuthProvider>
      </LocationProvider>
    </QueryClientProvider>
  )
}
