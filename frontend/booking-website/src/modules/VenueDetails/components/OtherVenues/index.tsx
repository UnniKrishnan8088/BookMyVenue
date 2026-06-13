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
    <>
      <div className="mt-5 md:mt-10">
        <h2 className="text-xl font-medium xl:text-2xl">Other Venues</h2>
        <Carousel className="w-full">
          <CarouselContent className="px-1 py-3">
            {venues.map((data) => (
              <CarouselItem key={data?.id} className="basis-1/2 md:basis-1/3 lg:basis-1/5">
                <VenueCard data={data} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="-mt-12 ml-8 hidden size-10 cursor-pointer border-none bg-black/50 text-2xl text-white hover:bg-black/50 hover:text-white md:block" />
          <CarouselNext className="-mt-12 mr-8 hidden size-10 cursor-pointer border-none bg-black/50 text-2xl text-white hover:bg-black/50 hover:text-white md:block" />
        </Carousel>
      </div>
    </>
  )
}
