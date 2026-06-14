import { Link } from "react-router"
import appLogo from "@/assets/app-logo-v1.png"
import { Button } from "@/components/ui/button"
import { ChevronDown, Menu, Search } from "lucide-react"
import SearchInput from "../SearchInput"
import { useState } from "react"
import SignInModal from "@/auth/components/SignInModal"
import { useAuth } from "@/core/contexts/authContext"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useLocationContext } from "@/core/contexts/locationContext"

type Props = {
  onLocationOpen: (open: boolean) => void
  onDrawerOpen: (open: boolean) => void
}

export default function Navbar({ onLocationOpen, onDrawerOpen }: Props) {
  const [isSignIn, setIsSignIn] = useState<boolean>(false)
  const { user } = useAuth()
  const { location } = useLocationContext()
  return (
    <>
      <nav className="app-container flex items-center justify-between py-2">
        <div className="hidden lg:block">
          <div className="flex items-center gap-4">
            <Link to={"/"} className="h-14 w-28.5">
              <img
                className="h-full w-full"
                src={appLogo}
                alt="Book My Venue"
                loading="lazy"
              />
            </Link>
            <div className="w-md lg:w-xl">
              <SearchInput placeholder="Search venue..." />
            </div>
          </div>
        </div>
        <div className="hidden lg:block">
          <div className="flex items-center gap-2">
            {location?.features[0]?.properties?.city && (
              <Button
                className="flex cursor-pointer items-center gap-2 bg-transparent capitalize hover:bg-transparent"
                variant={"ghost"}
                size={"sm"}
                onClick={() => onLocationOpen(true)}
              >
                {location?.features[0]?.properties?.city}
                <ChevronDown />
              </Button>
            )}
            {user?.id ? (
              <>
                <Avatar className="size-7 cursor-pointer">
                  <AvatarImage
                    className="h-full w-full"
                    src="https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png"
                    alt="avatar"
                  />
                  <AvatarFallback>UK</AvatarFallback>
                </Avatar>
              </>
            ) : (
              <>
                <Button
                  onClick={() => setIsSignIn(true)}
                  className="cursor-pointer"
                  size={"sm"}
                >
                  Sign In
                </Button>
              </>
            )}

            <Button
              className="cursor-pointer bg-transparent hover:bg-transparent"
              variant={"ghost"}
              size={"icon-lg"}
              onClick={() => onDrawerOpen(true)}
            >
              <Menu className="size-5" />
            </Button>
          </div>
        </div>
        <div className="w-full bg-white lg:hidden">
          <div className="flex items-center justify-between">
            <div>
              <Link to={"/"}>
                <img
                  className="h-full w-22 object-cover sm:w-24 md:w-30"
                  src={appLogo}
                  alt="Book My Venue"
                  loading="lazy"
                />
              </Link>
            </div>
            <Button size={"icon-sm"} className="bg-white text-black/60">
              <Search className="size-5" />
            </Button>
          </div>
        </div>
      </nav>

      <SignInModal onOpenChange={setIsSignIn} open={isSignIn} />
    </>
  )
}
