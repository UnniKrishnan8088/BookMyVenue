import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog"
import SearchInput from "../SearchInput"
import { Button } from "@/components/ui/button"
import {
  Building,
  Building2,
  Castle,
  Loader,
  Loader2,
  LocateFixed,
  Plane,
  PlaneLanding,
  PlaneTakeoff,
  Road,
  TrainFront,
  TreePalm,
} from "lucide-react"
import { Separator } from "@/components/ui/separator"
import useGetCurrentLocation from "@/core/hooks/useGetCurrentLocation"
import useGetLocationDetails from "@/core/hooks/useGetLocationDetails"
import { useLocationContext } from "@/core/contexts/locationContext"
import { useNavigate } from "react-router"
import { appRoutes } from "@/routes"

type Props = {
  open: boolean
  onOpenChange: (open: boolean) => void
}

const popularCities = [
  {
    label: "Mumbai",
    lat: 19.076,
    lng: 72.8777,
    icon: <Building2 className="size-9 stroke-1" />,
  },
  {
    label: "Delhi-NCR",
    lat: 28.6139,
    lng: 77.209,
    icon: <Plane className="size-9 stroke-1" />,
  },
  {
    label: "Bengaluru",
    lat: 12.9716,
    lng: 77.5946,
    icon: <Road className="size-9 stroke-1" />,
  },
  {
    label: "Hyderabad",
    lat: 17.385,
    lng: 78.4867,
    icon: <Building className="size-9 stroke-1" />,
  },
  {
    label: "Chandigarh",
    lat: 30.7333,
    lng: 76.7794,
    icon: <PlaneLanding className="size-9 stroke-1" />,
  },
  {
    label: "Ahmedabad",
    lat: 23.0225,
    lng: 72.5714,
    icon: <Castle className="size-9 stroke-1" />,
  },
  {
    label: "Pune",
    lat: 18.5204,
    lng: 73.8567,
    icon: <TrainFront className="size-9 stroke-1" />,
  },
  {
    label: "Chennai",
    lat: 13.0827,
    lng: 80.2707,
    icon: <Castle className="size-9 stroke-1" />,
  },
  {
    label: "Kolkata",
    lat: 22.5726,
    lng: 88.3639,
    icon: <PlaneTakeoff className="size-9 stroke-1" />,
  },
  {
    label: "Kochi",
    lat: 9.9312,
    lng: 76.2673,
    icon: <TreePalm className="size-9 stroke-1" />,
  },
]

export default function LocationModal({ onOpenChange, open }: Props) {
  const { getCurrentLocation, isLoading } = useGetCurrentLocation({
    onSuccess: () => onOpenChange(false),
  })

  const { mutateAsync: getLocationDetails, isPending } = useGetLocationDetails()
  const { setLocation, location } = useLocationContext()
  const navigate = useNavigate()

  async function handlePopularCities({
    lat,
    lon,
  }: {
    lat: number
    lon: number
  }) {
    const data = await getLocationDetails({ lat, lon })
    if (data) {
      setLocation(data)
      onOpenChange(false)
      navigate(
        appRoutes.homeWithPlace?.replace(
          ":place",
          data?.features[0]?.properties?.city?.toLowerCase()
        )
      )
    }
  }

  function handleRestrictModalClose(e: Event) {
    if (!location) {
      e.preventDefault()
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        onInteractOutside={(e) => handleRestrictModalClose(e)}
        onEscapeKeyDown={(e) => handleRestrictModalClose(e)}
        className="top-16! w-full max-w-[60%]! translate-y-0! p-0 [&>button]:hidden"
      >
        <DialogHeader>
          <div className="flex flex-col items-start px-4 pt-4">
            <SearchInput placeholder="Search for your city" />
            <Button
              variant={"link"}
              onClick={getCurrentLocation}
              className="cursor-pointer hover:no-underline"
            >
              <LocateFixed />
              Detect my location
              {isLoading && <Loader2 className="animate-spin" />}
            </Button>
          </div>
          <Separator />
        </DialogHeader>
        <div className="px-6 pb-4">
          <p className="text-center text-base">Popular Cities</p>
          <div className="mt-4 grid grid-cols-10 items-center justify-between">
            {popularCities?.map((item) => (
              <Button
                key={item?.label}
                variant={"outline"}
                onClick={() =>
                  handlePopularCities({ lat: item?.lat, lon: item?.lng })
                }
                className="relative flex h-full cursor-pointer flex-col items-center overflow-hidden rounded-xl border-none text-sm font-normal hover:bg-transparent hover:text-primary"
              >
                {item?.icon}
                {item?.label}
                {/* {isPending && (
                  <div className="absolute inset-0 z-50 grid place-items-center bg-primary/50">
                    <Loader2 className="size-8 animate-spin text-white" />
                  </div>
                )} */}
              </Button>
            ))}
          </div>
          {isPending && (
            <div className="flex items-center justify-center gap-2 pt-3 text-center font-bold text-primary">
              <Loader2 className="animate-spin" />
              <p>Fetching details...</p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
