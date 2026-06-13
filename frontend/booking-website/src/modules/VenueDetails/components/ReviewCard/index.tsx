import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import appLogo from "@/assets/app-logo-v1.png"
import { Share2, Star, ThumbsDown, ThumbsUp } from "lucide-react"
import { Button } from "@/components/ui/button"

type Props = {}

export default function ReviewCard({}: Props) {
  return (
    <Card>
      <CardHeader className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Avatar size="lg">
            <AvatarImage
              className="h-full w-full"
              src="https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png"
              alt="avatar"
            />
            <AvatarFallback>G</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm md:text-base">User</p>
            <p className="-mt-3 text-xs leading-0 md:text-sm">
              Booked on{" "}
              <img
                src={appLogo}
                alt="app-logo"
                className="inline w-16 md:w-20"
              />
            </p>
          </div>
        </div>
        <div className="flex items-center gap-1 md:gap-2">
          <Star className="size-4 fill-primary text-primary md:size-5" />
          <p className="text-xs md:text-sm">10/10</p>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-xs text-gray-600 md:text-sm">
          "An excellent venue for weddings and receptions. The hall is spacious,
          well-maintained, and comfortably accommodated over 1,000 guests. The
          staff were professional and supportive throughout the event."
        </p>
      </CardContent>
      <CardFooter className="flex pt-0 items-center justify-between border-none bg-transparent">
        <div>
          <Button
            variant="ghost"
            className="cursor-pointer text-xs hover:bg-transparent sm:text-sm"
          >
            <ThumbsUp className="size-4 sm:size-5" />
            <p>26</p>
          </Button>
          <Button
            variant="ghost"
            className="cursor-pointer text-xs hover:bg-transparent sm:text-sm"
          >
            <ThumbsDown className="size-4 sm:size-5" />
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <p className="text-xs text-gray-600 md:text-sm">1 Day ago</p>
          <Share2 className="size-4 sm:size-5" />
        </div>
      </CardFooter>
    </Card>
  )
}
