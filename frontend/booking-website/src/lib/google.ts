"use client"
import { Client } from "@googlemaps/google-maps-services-js"

const client = new Client()

export const autoComplete = async (input: string) => {
  if (!input) return []

  try {
    const response = await client.placeAutocomplete({
      params: {
        input,
        key: import.meta.env.VITE_GOOGLE_MAP_API_KEY,
      },
    })
    console.log("response", response);
    
    return response?.data?.predictions
  } catch (error) {
    console.error(error)
  }
}
