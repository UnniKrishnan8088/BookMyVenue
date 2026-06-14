import { createContext, useContext, useState, type ReactNode } from "react"
import type { LocationDetails } from "../types/location.types"
import { LOCATION_DETAILS } from "../constants"

type Props = {
  children: ReactNode
}

type LocationContextType = {
  location: LocationDetails | null
  setLocation: (location: LocationDetails) => void
  clearLocation: () => void
}

const LocationContext = createContext<LocationContextType | null>(null)

export function LocationProvider({ children }: Props) {
  const [locationData, setLocationData] = useState<LocationDetails | null>(
    () => {
      const storedLocation = localStorage.getItem(LOCATION_DETAILS)

      return storedLocation ? JSON.parse(storedLocation) : null
    }
  )

  const setLocation = (location: LocationDetails) => {
    setLocationData(location)
    localStorage.setItem(LOCATION_DETAILS, JSON.stringify(location))
  }

  const clearLocation = () => {
    setLocationData(null)
    localStorage.removeItem(LOCATION_DETAILS)
  }
  const value = {
    location: locationData,
    setLocation,
    clearLocation,
  }

  return (
    <LocationContext.Provider value={value}>
      {children}
    </LocationContext.Provider>
  )
}

export const useLocationContext = () => {
  const context = useContext(LocationContext)

  if (!context) {
    throw new Error("useLocationContext must be used within a LocationProvider")
  }

  return context
}
