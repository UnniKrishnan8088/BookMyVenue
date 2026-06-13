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
            <p className="text-base">User</p>
            <p className="-mt-3 text-sm leading-0">
              Booked on{" "}
              <img src={appLogo} alt="app-logo" className="inline w-20" />
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Star className="size-5 fill-primary text-primary" />
          <p className="text-sm">10/10</p>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-600">
          "An excellent venue for weddings and receptions. The hall is spacious,
          well-maintained, and comfortably accommodated over 1,000 guests. The
          staff were professional and supportive throughout the event."
        </p>
      </CardContent>
      <CardFooter className="border-none bg-transparent flex items-center justify-between">
        <div>
          <Button
            variant="ghost"
            className="cursor-pointer hover:bg-transparent"
          >
            <ThumbsUp />
            <p>26</p>
          </Button>
          <Button
            variant="ghost"
            className="cursor-pointer hover:bg-transparent"
          >
            <ThumbsDown />
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <p className="text-sm text-gray-600">1 Day ago</p>
          <Share2 className="size-5" />
        </div>
      </CardFooter>
    </Card>
  )
}
