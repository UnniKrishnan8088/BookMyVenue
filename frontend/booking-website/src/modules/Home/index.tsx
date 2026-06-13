import VenueCard from "@/core/components/VenueCard"
import Banner from "./components/Banner"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import { useMemo } from "react"
import { Link } from "react-router"
import { appRoutes } from "@/routes"
import { venueTypes } from "../VenueList/components/VenueFilters"

type Props = {}

export const venues = [
  {
    id: 1,
    name: "Grand Palace Convention Center",
    rating: 9.2,
    category: "Wedding Hall",
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=600&q=70&auto=format",
  },
  {
    id: 2,
    name: "Skyline Rooftop Arena",
    rating: 8.8,
    category: "Party Venue",
    image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=600&q=70&auto=format",
  },
  {
    id: 3,
    name: "Emerald Banquet Hall",
    rating: 9.0,
    category: "Banquet Hall",
    image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&q=70&auto=format",
  },
  {
    id: 4,
    name: "Ocean View Resort",
    rating: 9.5,
    category: "Beach Venue",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=70&auto=format",
  },
  {
    id: 5,
    name: "Royal Garden Events",
    rating: 8.7,
    category: "Outdoor Venue",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=70&auto=format",
  },
  {
    id: 6,
    name: "The Crystal Ballroom",
    rating: 9.3,
    category: "Wedding Hall",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&q=70&auto=format",
  },
  {
    id: 7,
    name: "Urban Conference Hub",
    rating: 8.4,
    category: "Conference Hall",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=600&q=70&auto=format",
  },
  {
    id: 8,
    name: "Moonlight Terrace",
    rating: 8.9,
    category: "Rooftop Venue",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&q=70&auto=format",
  },
  {
    id: 9,
    name: "Heritage Courtyard",
    rating: 9.1,
    category: "Cultural Venue",
    image: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=600&q=70&auto=format",
  },
  {
    id: 10,
    name: "Lakeside Retreat",
    rating: 8.6,
    category: "Resort Venue",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&q=70&auto=format",
  },
]

export default function Home({}: Props) {
  const data = useMemo(() => venues, [])
  return (
    <>
      <Banner />
      <div className="app-container mx-auto py-4 xl:py-12">
        <div className="flex scrollbar-none items-center gap-2 overflow-x-auto pt-3 pb-8 xl:flex-wrap">
          <Button
            variant={"outline"}
            className="w-15 cursor-pointer rounded-2xl border font-normal text-primary hover:bg-white hover:text-primary"
          >
            All
          </Button>
          {venueTypes?.map((item) => (
            <Button
              variant={"outline"}
              className="cursor-pointer rounded-2xl border font-normal text-primary hover:bg-white hover:text-primary"
              key={item?.value}
            >
              {item?.label}
            </Button>
          ))}
        </div>
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold md:text-xl xl:text-2xl">
            Recommended Venues
          </h2>
          <Link
            to={appRoutes.venueList}
            className="m-0 flex cursor-pointer items-center gap-1 p-0 text-xs text-primary no-underline hover:no-underline"
          >
            See All <ChevronRight className="size-3" />
          </Link>
        </div>

        <div className="mt-2 flex scrollbar-none grid-cols-2 gap-4 overflow-x-auto sm:grid-cols-3 md:grid md:gap-8 lg:grid-cols-4 xl:grid-cols-5">
          {data?.map((venu) => (
            <VenueCard data={venu} />
          ))}
        </div>
      </div>
    </>
  )
}
