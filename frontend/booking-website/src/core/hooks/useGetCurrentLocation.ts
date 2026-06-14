import { useNavigate } from "react-router"
import { useLocationContext } from "../contexts/locationContext"
import useGetLocationDetails from "./useGetLocationDetails"
import { appRoutes } from "@/routes"

type Props = {
  onSuccess: () => void
}

export default function useGetCurrentLocation({ onSuccess }: Props) {
  const { mutateAsync: getLocationDetails, isPending } = useGetLocationDetails()
  const { setLocation } = useLocationContext()
  const navigate = useNavigate()

  const getCurrentLocation = () => {
    try {
      if (!navigator.geolocation) {
        alert("Geolocation is not supported by your browser")
        return
      }

      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords

          const data = await getLocationDetails({
            lat: latitude,
            lon: longitude,
          })
          if (data) {
            setLocation(data)
            onSuccess()
            navigate(
              appRoutes.homeWithPlace?.replace(
                ":place",
                data?.features[0]?.properties?.city?.toLowerCase()
              )
            )
          }
        },
        (error) => {
          console.error(error)

          switch (error.code) {
            case error.PERMISSION_DENIED:
              alert("Location permission denied")
              break
            case error.POSITION_UNAVAILABLE:
              alert("Location information unavailable")
              break
            case error.TIMEOUT:
              alert("Location request timed out")
              break
            default:
              alert("An unknown error occurred")
          }
        }
      )
    } catch (error) {
      console.log(error)
    }
  }

  return { getCurrentLocation, isLoading: isPending }
}
