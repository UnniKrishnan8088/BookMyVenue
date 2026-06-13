import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { venues } from "@/modules/Home"
import { appRoutes } from "@/routes"
import { Star } from "lucide-react"
import { useNavigate, useParams } from "react-router"

type Props = {}

export default function Banner({}: Props) {
  const navigate = useNavigate()
  const { id } = useParams()

  const data = venues?.find((item) => item?.id === Number(id))

  function handlNavigateToBookings() {
    navigate(appRoutes.venueBooking?.replace(":id", id as string))
  }

  return (
    <>
      <div
        style={{
          backgroundImage: `linear-gradient(90deg, rgb(26, 26, 26) 24.97%, rgb(26, 26, 26) 38.3%, rgba(26, 26, 26, 0.04) 97.47%, rgb(26, 26, 26) 100%), url("${data?.image}")`,
        }}
        className="hidden h-120 bg-[#1a1a1a] bg-cover md:block"
      >
        <div className="mx-auto flex h-full items-center gap-8 md:max-w-6xl lg:max-w-7xl">
          <Card className="m-0 h-105 w-65.25 p-0">
            <img
              src={data?.image}
              alt=""
              className="h-full w-full object-cover"
            />
          </Card>
          <div className="flex-1 space-y-6 text-white">
            <h1 className="text-3xl font-bold capitalize">{data?.name}</h1>
            <div className="flex items-center gap-2">
              <Star className="size-5 fill-primary text-primary" />
              <p className="text-lg font-bold">{data?.rating}/10</p>
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <Badge className="rounded-md bg-[#616161e5] p-3 text-center text-sm">
                  Wedding Hall
                </Badge>
                <Badge className="rounded-md bg-[#616161e5] p-3 text-center text-sm">
                  100 - 1200 Guests
                </Badge>
                <Badge className="rounded-md bg-[#616161e5] p-3 text-center text-sm">
                  250 Parking Spaces
                </Badge>
              </div>
            </div>
            <Button
              onClick={handlNavigateToBookings}
              className="text-md cursor-pointer px-12 py-6"
            >
              Book Venue
            </Button>
          </div>
        </div>
      </div>
      <div className="app-container">
        <div className="h-40 w-full overflow-hidden rounded-xl sm:h-60 md:h-72">
          <img
            src={data?.image}
            alt={data?.name}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex flex-wrap items-center gap-2 py-2">
          <Badge className="rounded-md bg-[#a6a5a5e5] p-2 text-center text-xs">
            Wedding Hall
          </Badge>
          <Badge className="rounded-md bg-[#a6a5a5e5] p-2 text-center text-xs">
            100 - 1200 Guests
          </Badge>
          <Badge className="rounded-md bg-[#a6a5a5e5] p-2 text-center text-xs">
            250 Parking Spaces
          </Badge>
        </div>
      </div>
    </>
  )
}
