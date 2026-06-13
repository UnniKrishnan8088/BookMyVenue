import { autoComplete } from "@/lib/google"
import { useQuery } from "@tanstack/react-query"

export const usePlacesAutocomplete = (input: string) => {
  return useQuery({
    queryKey: ["places-autocomplete", input],
    queryFn: () => autoComplete(input),
    enabled: input.trim().length > 1,
    staleTime: 1000 * 30,
    placeholderData: (prev) => prev,
  })
}
