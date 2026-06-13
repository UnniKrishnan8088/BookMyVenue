import { Badge } from "@/components/ui/badge"
import { Camera, ChefHat, Theater, Turntable } from "lucide-react"
import ReviewCard from "../ReviewCard"
import ReviewList from "../ReviewList"

type Props = {}

const amenities = [
  {
    label: "Catering",
    icon: <ChefHat className="size-3.5 xl:size-4" />,
  },
  {
    label: "DJ",
    icon: <Turntable className="size-3.5 xl:size-4" />,
  },
  {
    label: "Photography",
    icon: <Camera className="size-3.5 xl:size-4" />,
  },
  {
    label: "Stage Setup",
    icon: <Theater className="size-3.5 xl:size-4" />,
  },
]

export default function AboutTheVenue({}: Props) {
  return (
    <>
      <div>
        <h2 className="text-xl font-medium xl:text-2xl">About the venue</h2>
        <p className="mt-2 text-xs leading-6 text-gray-800 md:text-sm lg:text-base xl:mt-4">
          Nestled in the heart of Kakkanad, Kochi, Grand Harmony Convention
          Centre is a premium wedding venue designed to host unforgettable
          celebrations. With a spacious capacity of over 1,000 guests, the venue
          features a grand air-conditioned banquet hall, elegant interiors, a
          beautifully designed stage, ample dining facilities, and dedicated
          bridal suites. Conveniently located near Infopark and major
          transportation hubs, it offers easy accessibility for guests arriving
          from across Kerala. The venue also provides extensive parking, power
          backup, modern lighting and sound systems, and flexible event spaces
          suitable for weddings, receptions, engagements, and corporate
          gatherings. Combining contemporary amenities with warm hospitality,
          Grand Harmony Convention Centre creates the perfect setting for a
          memorable and seamless celebration.
        </p>
      </div>
      <div>
        <h2 className="text-xl font-medium xl:text-2xl">Amenities</h2>
        <div className="mt-2 flex flex-wrap items-center gap-2 xl:gap-3">
          {amenities?.map((item) => (
            <Badge
              className="flex items-center gap-1 p-3 text-xs xl:gap-2 xl:text-sm"
              key={item?.label}
            >
              <span>{item?.icon}</span>
              <span>{item?.label}</span>
            </Badge>
          ))}
        </div>
      </div>
    </>
  )
}
