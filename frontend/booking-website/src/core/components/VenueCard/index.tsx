import { Card, CardContent } from "@/components/ui/card"
import { appRoutes } from "@/routes"
import { Star } from "lucide-react"
import { Link } from "react-router"

type Props = {
  data: any
}

export default function VenueCard({ data }: Props) {
  return (
    <Link to={appRoutes.venueDetails?.replace(":id", data?.id)}>
      <div className="cursor-pointer">
        <Card className="m-0 p-0">
          <CardContent className="relative m-0 h-52 w-full min-w-32 p-0 sm:h-64 md:h-72 lg:h-89.75">
            {/* <div className="grid h-full w-full place-items-center justify-around">
              <img
                src={appLogoSkeleton}
                alt="logo-skeleton"
                className="w-8 object-cover sm:w-10 md:w-12"
              />
            </div> */}
            <img
              src={data?.image}
              alt={data?.name}
              className="h-full w-full object-cover"
            />
            <div className="absolute right-0 bottom-0 left-0 flex items-center gap-2 bg-black p-1.5 text-white sm:p-2">
              <Star className="size-3 fill-primary stroke-primary sm:size-5" />
              <p className="text-xs sm:text-base">{data?.rating}/10</p>
            </div>
          </CardContent>
        </Card>
        <div className="mt-1">
          <p className="text-sm font-semibold sm:text-lg">{data?.name}</p>
          <span className="text-xs text-gray-400 sm:text-sm">
            {data?.category}
          </span>
        </div>
      </div>
    </Link>
  )
}
