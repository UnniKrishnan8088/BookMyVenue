import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import { useEffect, useState } from "react"
import appLogoSkeleton from "@/assets/app-logo-skeleton.png"

type Props = {}
const images = [
  "https://lightoflove.com.ph/wp-content/uploads/2024/05/venue-for-birthday-quezon-city.jpg",
  "https://www.stallasuites.com/uploads/1/4/3/6/143623833/sqcdp11192023a-linsey-debut-celestia-hall-setup-03_orig.jpg",
  "https://media.weddingz.in/images/37e439e48981c94febb07257979b8446/5-cocktail-party-venues-in-goa-for-your-larger-than-life-bashes.jpg",
  "https://lightoflove.com.ph/wp-content/uploads/2024/05/venue-for-birthday-quezon-city.jpg",
  "https://www.stallasuites.com/uploads/1/4/3/6/143623833/sqcdp11192023a-linsey-debut-celestia-hall-setup-03_orig.jpg",
  "https://media.weddingz.in/images/37e439e48981c94febb07257979b8446/5-cocktail-party-venues-in-goa-for-your-larger-than-life-bashes.jpg",
  "https://lightoflove.com.ph/wp-content/uploads/2024/05/venue-for-birthday-quezon-city.jpg",
  "https://www.stallasuites.com/uploads/1/4/3/6/143623833/sqcdp11192023a-linsey-debut-celestia-hall-setup-03_orig.jpg",
  "https://media.weddingz.in/images/37e439e48981c94febb07257979b8446/5-cocktail-party-venues-in-goa-for-your-larger-than-life-bashes.jpg",
]
export default function Banner({}: Props) {
  const [api, setApi] = useState<CarouselApi>()

  useEffect(() => {
    if (!api) return
    const interval = setInterval(() => api.scrollNext(), 5000)
    return () => clearInterval(interval)
  }, [api])

  return (
    <>
      <div className="w-full">
        <Carousel
          setApi={setApi}
          opts={{
            loop: true,
            align: "center",
            skipSnaps: false,
          }}
          className="h-40 w-full overflow-hidden sm:h-60 md:h-72"
        >
          <CarouselContent className="-ml-4 h-full">
            {images.map((src, index) => (
              <CarouselItem
                key={index}
                className="h-40 w-full shrink-0 basis-[90%] rounded-sm transition-all duration-300 sm:h-60 sm:basis-[85%] md:h-72 md:basis-[80%]"
              >
                <img
                  src={src}
                  alt={`Slide ${index + 1}`}
                  className="h-full w-full overflow-hidden rounded-lg object-cover"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:block absolute top-[50%] left-0 size-10 rounded-l-none rounded-r-md border-none bg-black/50 text-2xl text-white hover:bg-black/50 hover:text-white" />
          <CarouselNext className="hidden md:block absolute top-[50%] right-0 size-10 rounded-l-md rounded-r-none border-none bg-black/50 text-2xl text-white hover:bg-black/50 hover:text-white" />
        </Carousel>
      </div>
    </>
  )
}
