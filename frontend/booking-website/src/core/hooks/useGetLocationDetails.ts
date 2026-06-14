import axios from "axios"
import { GEOAPIFY_API_KEY } from "../constants"
import { useMutation } from "@tanstack/react-query"
import type { LocationDetails } from "../types/location.types"

export default function useGetLocationDetails() {
  const getLocationDetails = async (lat: number, lon: number) => {
    try {
      const response = await axios.get<LocationDetails>(
        "https://api.geoapify.com/v1/geocode/reverse",
        {
          params: {
            lat,
            lon,
            apiKey: GEOAPIFY_API_KEY,
          },
        }
      )

      return response?.data
    } catch (error) {
      console.error(error)
    }
  }

  return useMutation({
    mutationFn: ({ lat, lon }: { lat: number; lon: number }) =>
      getLocationDetails(lat, lon),
  })
}
