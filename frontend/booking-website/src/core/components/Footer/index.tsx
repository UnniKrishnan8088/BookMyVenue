import { Button } from "@/components/ui/button"
import appLogo from "@/assets/app-logo-v2.png"
import { Link } from "react-router"
import { Separator } from "@/components/ui/separator"
import Instagram from "@/core/icons/Instagram"
import XTwitter from "@/core/icons/XTwitter"
import LinkedIn from "@/core/icons/LinkedIn"
import YouTube from "@/core/icons/YouTube"
import Facebook from "@/core/icons/Facebook"

type Props = {}

export default function Footer({}: Props) {
  return (
    <>
      <footer className="bg-[#333333] py-4">
        <div className="mx-auto flex items-center justify-between md:max-w-6xl lg:max-w-7xl">
          <p className="text-base font-bold text-white">List your venue </p>
          <Button className="p-6 text-sm" size={"lg"}>
            Conact today!
          </Button>
        </div>
        <div className="">
          <div className="mx-2 flex items-center gap-4">
            <Separator className="flex-1 bg-white/50" />
            <div className="h-14 w-28.5">
              <Link to={"/"} className="overflow-hidden">
                <img
                  className="h-full w-full"
                  src={appLogo}
                  alt="Book My Venue"
                  loading="lazy"
                />
              </Link>
            </div>
            <Separator className="flex-1 bg-white/50" />
          </div>
          <div className="mt-8 mb-6 flex items-center justify-center gap-4">
            <Instagram className="size-6 text-white/50" />
            <XTwitter className="size-6 text-white/50" />
            <LinkedIn className="size-6 text-white/50" />
            <YouTube className="size-6 text-white/50" />
            <Facebook className="size-6 text-white/50" />
          </div>
          <div className="pb-10 text-center text-xs text-white/50">
            <p>© 2025 VenueBook. All rights reserved.</p>
            <p>
              VenueBook Pvt. Ltd. All content, including but not limited to
              venue listings, images, text, graphics, and logos, is the
              exclusive property of VenueBook and is protected under applicable
              copyright and intellectual property laws. Any reproduction,
              distribution
            </p>
            <p>
              VenueBook Pvt. Ltd. All rights reserved. Unauthorized use or
              reproduction of any content on this platform is strictly
              prohibited.
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}
