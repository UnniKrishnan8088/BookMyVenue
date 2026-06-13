import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import ReviewCard from "../ReviewCard"

type Props = {}

export default function ReviewList({}: Props) {
  return (
    <>
      <div className="mt-10">
        <h2 className="text-2xl font-medium">Top Reviews</h2>
        <Carousel className="w-full">
          <CarouselContent className="px-1 py-3">
            {Array.from({ length: 10 }).map((_, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <ReviewCard />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="ml-8 size-10 cursor-pointer border-none bg-black/50 text-2xl text-white hover:bg-black/50 hover:text-white" />
          <CarouselNext className="mr-8 size-10 cursor-pointer border-none bg-black/50 text-2xl text-white hover:bg-black/50 hover:text-white" />
        </Carousel>
      </div>
    </>
  )
}
