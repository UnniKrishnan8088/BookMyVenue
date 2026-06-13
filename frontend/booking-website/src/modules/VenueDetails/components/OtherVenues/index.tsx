import VenueCard from "@/core/components/VenueCard"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { venues } from "@/modules/Home"

type Props = {}

export default function OtherVenues({}: Props) {
  return (
    <div>
      <div className="mt-10">
        <h2 className="text-2xl font-medium">Other Venues</h2>
        <Carousel className="w-full">
          <CarouselContent className="px-1 py-3">
            {venues.map((data) => (
              <CarouselItem
                key={data?.id}
                className="md:basis-1/2 lg:basis-1/5"
              >
                <VenueCard data={data} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="ml-8 -mt-12 size-10 cursor-pointer border-none bg-black/50 text-2xl text-white hover:bg-black/50 hover:text-white" />
          <CarouselNext className="mr-8 -mt-12 size-10 cursor-pointer border-none bg-black/50 text-2xl text-white hover:bg-black/50 hover:text-white" />
        </Carousel>
      </div>
    </div>
  )
}
